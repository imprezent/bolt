/*
  # Create users and authentication system

  1. New Tables
    - `profiles` - Extended user profile information
    - `students` - Student records
    - `tests` - Test/quiz records
    - `test_results` - Student test results
    - `lesson_plans` - Lesson plan storage
    - `activities` - Activity records

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table for extended user information
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  school text,
  subjects text[],
  experience integer DEFAULT 0,
  bio text,
  avatar_url text,
  phone text,
  address text,
  education text[],
  certifications text[],
  social_links jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  student_id text NOT NULL,
  name text NOT NULL,
  grade text NOT NULL,
  class text,
  photo_url text,
  personality jsonb DEFAULT '{}',
  academic_data jsonb DEFAULT '{}',
  behavioral_data jsonb DEFAULT '{}',
  notes jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create tests table
CREATE TABLE IF NOT EXISTS tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  subject text NOT NULL,
  grade text NOT NULL,
  duration integer DEFAULT 60,
  instructions text,
  questions jsonb DEFAULT '[]',
  total_points integer DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create test results table
CREATE TABLE IF NOT EXISTS test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id uuid REFERENCES tests(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  answers jsonb DEFAULT '{}',
  score integer DEFAULT 0,
  total_points integer DEFAULT 0,
  completed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create lesson plans table
CREATE TABLE IF NOT EXISTS lesson_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  subject text NOT NULL,
  grade text NOT NULL,
  duration integer DEFAULT 50,
  objectives text,
  activities text,
  materials text,
  assessment text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create activities table
CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  category text,
  duration integer DEFAULT 30,
  group_size text,
  objectives text,
  instructions text,
  materials text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create policies for students
CREATE POLICY "Teachers can manage their students"
  ON students
  FOR ALL
  TO authenticated
  USING (auth.uid() = teacher_id);

-- Create policies for tests
CREATE POLICY "Teachers can manage their tests"
  ON tests
  FOR ALL
  TO authenticated
  USING (auth.uid() = teacher_id);

-- Create policies for test results
CREATE POLICY "Teachers can view results of their tests"
  ON test_results
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tests 
      WHERE tests.id = test_results.test_id 
      AND tests.teacher_id = auth.uid()
    )
  );

CREATE POLICY "Teachers can insert test results"
  ON test_results
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tests 
      WHERE tests.id = test_results.test_id 
      AND tests.teacher_id = auth.uid()
    )
  );

-- Create policies for lesson plans
CREATE POLICY "Teachers can manage their lesson plans"
  ON lesson_plans
  FOR ALL
  TO authenticated
  USING (auth.uid() = teacher_id);

-- Create policies for activities
CREATE POLICY "Teachers can manage their activities"
  ON activities
  FOR ALL
  TO authenticated
  USING (auth.uid() = teacher_id);

-- Create function to handle user profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (user_id, name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'name', 'New User'));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();