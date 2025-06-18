import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  user_id: string;
  name: string;
  school?: string;
  subjects?: string[];
  experience?: number;
  bio?: string;
  avatar_url?: string;
  phone?: string;
  address?: string;
  education?: string[];
  certifications?: string[];
  social_links?: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  teacher_id: string;
  student_id: string;
  name: string;
  grade: string;
  class?: string;
  photo_url?: string;
  personality?: Record<string, any>;
  academic_data?: Record<string, any>;
  behavioral_data?: Record<string, any>;
  notes?: any[];
  created_at: string;
  updated_at: string;
}

export interface Test {
  id: string;
  teacher_id: string;
  title: string;
  subject: string;
  grade: string;
  duration: number;
  instructions?: string;
  questions: any[];
  total_points: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface TestResult {
  id: string;
  test_id: string;
  student_id: string;
  answers: Record<string, any>;
  score: number;
  total_points: number;
  completed_at: string;
  created_at: string;
}

export interface LessonPlan {
  id: string;
  teacher_id: string;
  title: string;
  subject: string;
  grade: string;
  duration: number;
  objectives?: string;
  activities?: string;
  materials?: string;
  assessment?: string;
  created_at: string;
  updated_at: string;
}

export interface Activity {
  id: string;
  teacher_id: string;
  name: string;
  description?: string;
  category?: string;
  duration: number;
  group_size?: string;
  objectives?: string;
  instructions?: string;
  materials?: string;
  created_at: string;
  updated_at: string;
}