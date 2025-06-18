import React, { useState } from 'react';
import { 
  User, 
  Brain, 
  Heart, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  MessageSquare,
  BookOpen,
  Users,
  Target,
  Clock,
  Award,
  Lightbulb,
  FileText,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

interface StudentProfile {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  photo: string;
  personality: {
    learningStyle: string;
    strengths: string[];
    challenges: string[];
    motivation: string;
    socialStyle: string;
  };
  academic: {
    overallGrade: number;
    subjects: {
      name: string;
      grade: number;
      trend: 'up' | 'down' | 'stable';
    }[];
    attendance: number;
    participation: number;
  };
  behavioral: {
    discipline: number;
    cooperation: number;
    leadership: number;
    creativity: number;
    responsibility: number;
  };
  recommendations: {
    teaching: string[];
    support: string[];
    development: string[];
  };
  notes: {
    date: string;
    content: string;
    type: 'academic' | 'behavioral' | 'personal';
  }[];
  progressData: {
    month: string;
    score: number;
  }[];
}

const StudentProfiles: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [activeTab, setActiveTab] = useState('overview');

  const students: StudentProfile[] = [
    {
      id: '1',
      name: 'นางสาวสมใจ ใจดี',
      studentId: '12345',
      grade: 'ม.1/1',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      personality: {
        learningStyle: 'Visual Learner - เรียนรู้ผ่านการมองเห็น',
        strengths: ['มีความคิดสร้างสรรค์', 'ชอบการทำงานกลุ่ม', 'มีความรับผิดชอบสูง'],
        challenges: ['ขาดความมั่นใจในการพูดหน้าชั้น', 'ต้องการเวลาในการทำความเข้าใจ'],
        motivation: 'ชอบได้รับการยกย่องและคำชม',
        socialStyle: 'เป็นมิตร แต่ค่อนข้างเงียบ'
      },
      academic: {
        overallGrade: 84,
        subjects: [
          { name: 'ภาษาไทย', grade: 88, trend: 'up' },
          { name: 'คณิตศาสตร์', grade: 76, trend: 'stable' },
          { name: 'วิทยาศาสตร์', grade: 82, trend: 'up' },
          { name: 'สังคมศึกษา', grade: 90, trend: 'up' },
          { name: 'ภาษาอังกฤษ', grade: 78, trend: 'down' }
        ],
        attendance: 95,
        participation: 75
      },
      behavioral: {
        discipline: 90,
        cooperation: 95,
        leadership: 70,
        creativity: 85,
        responsibility: 92
      },
      recommendations: {
        teaching: [
          'ใช้สื่อภาพและแผนภูมิในการสอน',
          'ให้โอกาสนำเสนองานในกลุ่มเล็ก',
          'สร้างความมั่นใจด้วยการให้คำชมเมื่อทำได้ดี'
        ],
        support: [
          'ให้เวลาเพิ่มเติมในการทำความเข้าใจ',
          'จัดกิจกรรมเสริมสร้างความมั่นใจ',
          'ส่งเสริมการมีส่วนร่วมในชั้นเรียน'
        ],
        development: [
          'พัฒนาทักษะการนำเสนอ',
          'เสริมสร้างความมั่นใจในตนเอง',
          'ฝึกทักษะการคิดเชิงตรรกะ'
        ]
      },
      notes: [
        {
          date: '2024-01-15',
          content: 'นักเรียนมีความก้าวหน้าในวิชาสังคมศึกษาอย่างชัดเจน แสดงความสนใจในเรื่องประวัติศาสตร์',
          type: 'academic'
        },
        {
          date: '2024-01-10',
          content: 'ควรส่งเสริมให้มีส่วนร่วมในการอภิปรายมากขึ้น เพื่อเสริมสร้างความมั่นใจ',
          type: 'behavioral'
        }
      ],
      progressData: [
        { month: 'ส.ค.', score: 78 },
        { month: 'ก.ย.', score: 80 },
        { month: 'ต.ค.', score: 82 },
        { month: 'พ.ย.', score: 81 },
        { month: 'ธ.ค.', score: 84 },
        { month: 'ม.ค.', score: 84 }
      ]
    },
    {
      id: '2',
      name: 'นายสมศักดิ์ เรียนดี',
      studentId: '12346',
      grade: 'ม.1/1',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      personality: {
        learningStyle: 'Kinesthetic Learner - เรียนรู้ผ่านการลงมือทำ',
        strengths: ['มีความสามารถทางคณิตศาสตร์', 'มีภาวะผู้นำ', 'กระตือรือร้นในการเรียน'],
        challenges: ['ไม่ชอบงานที่ต้องนั่งนิ่ง', 'บางครั้งรีบร้อนเกินไป'],
        motivation: 'ชอบความท้าทายและการแข่งขัน',
        socialStyle: 'เป็นผู้นำธรรมชาติ มีเพื่อนมาก'
      },
      academic: {
        overallGrade: 91,
        subjects: [
          { name: 'ภาษาไทย', grade: 85, trend: 'stable' },
          { name: 'คณิตศาสตร์', grade: 95, trend: 'up' },
          { name: 'วิทยาศาสตร์', grade: 92, trend: 'up' },
          { name: 'สังคมศึกษา', grade: 88, trend: 'stable' },
          { name: 'ภาษาอังกฤษ', grade: 89, trend: 'up' }
        ],
        attendance: 98,
        participation: 95
      },
      behavioral: {
        discipline: 85,
        cooperation: 88,
        leadership: 95,
        creativity: 90,
        responsibility: 87
      },
      recommendations: {
        teaching: [
          'ใช้กิจกรรมที่ต้องลงมือทำจริง',
          'ให้โอกาสเป็นผู้นำกลุ่ม',
          'สร้างบทเรียนที่มีความท้าทาย'
        ],
        support: [
          'ช่วยพัฒนาความอดทน',
          'สอนการวางแผนและการจัดการเวลา',
          'ส่งเสริมการทำงานร่วมกับผู้อื่น'
        ],
        development: [
          'พัฒนาทักษะการฟังผู้อื่น',
          'เสริมสร้างความอดทนและความละเอียด',
          'ฝึกการควบคุมอารมณ์'
        ]
      },
      notes: [
        {
          date: '2024-01-12',
          content: 'นักเรียนมีความสามารถโดดเด่นในวิชาคณิตศาสตร์ ควรส่งเสริมให้เข้าร่วมการแข่งขัน',
          type: 'academic'
        }
      ],
      progressData: [
        { month: 'ส.ค.', score: 88 },
        { month: 'ก.ย.', score: 89 },
        { month: 'ต.ค.', score: 90 },
        { month: 'พ.ย.', score: 91 },
        { month: 'ธ.ค.', score: 91 },
        { month: 'ม.ค.', score: 91 }
      ]
    }
  ];

  const selectedStudentData = students.find(s => s.id === selectedStudent);

  const radarData = selectedStudentData ? [
    { subject: 'วินัย', value: selectedStudentData.behavioral.discipline },
    { subject: 'ความร่วมมือ', value: selectedStudentData.behavioral.cooperation },
    { subject: 'ภาวะผู้นำ', value: selectedStudentData.behavioral.leadership },
    { subject: 'ความคิดสร้างสรรค์', value: selectedStudentData.behavioral.creativity },
    { subject: 'ความรับผิดชอบ', value: selectedStudentData.behavioral.responsibility }
  ] : [];

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600 bg-green-100';
    if (grade >= 80) return 'text-blue-600 bg-blue-100';
    if (grade >= 70) return 'text-yellow-600 bg-yellow-100';
    if (grade >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down': return <TrendingUp className="h-4 w-4 text-red-600 transform rotate-180" />;
      default: return <Activity className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <User className="h-8 w-8 mr-3 text-indigo-600" />
          โปรไฟล์นักเรียนรายบุคคล
        </h2>
        <p className="text-gray-600">ข้อมูลเชิงลึกและคำแนะนำสำหรับการสอนนักเรียนแต่ละคน</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Student List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">เลือกนักเรียน</h3>
            <div className="space-y-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedStudent === student.id
                      ? 'bg-indigo-50 border-2 border-indigo-200'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src={student.photo} 
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.studentId} • {student.grade}</p>
                      <div className="flex items-center mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(student.academic.overallGrade)}`}>
                          {student.academic.overallGrade}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="lg:col-span-3">
          {selectedStudentData ? (
            <div className="space-y-6">
              {/* Student Header */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-6">
                  <img 
                    src={selectedStudentData.photo} 
                    alt={selectedStudentData.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedStudentData.name}</h3>
                    <p className="text-gray-600">{selectedStudentData.studentId} • {selectedStudentData.grade}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(selectedStudentData.academic.overallGrade)}`}>
                        เกรดรวม: {selectedStudentData.academic.overallGrade}%
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        เข้าเรียน: {selectedStudentData.academic.attendance}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8 px-6">
                    {[
                      { id: 'overview', label: 'ภาพรวม', icon: BarChart3 },
                      { id: 'personality', label: 'บุคลิกภาพ', icon: Brain },
                      { id: 'academic', label: 'ผลการเรียน', icon: BookOpen },
                      { id: 'behavior', label: 'พฤติกรรม', icon: Heart },
                      { id: 'recommendations', label: 'คำแนะนำ', icon: Lightbulb },
                      { id: 'notes', label: 'บันทึก', icon: FileText }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                          activeTab === tab.id
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <tab.icon className="h-4 w-4 mr-2" />
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-6">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Progress Chart */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">แนวโน้มผลการเรียน</h4>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={selectedStudentData.progressData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis domain={[0, 100]} />
                              <Tooltip />
                              <Line type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={2} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      {/* Subject Performance */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">ผลการเรียนรายวิชา</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {selectedStudentData.academic.subjects.map((subject, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-gray-900">{subject.name}</h5>
                                {getTrendIcon(subject.trend)}
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gray-900">{subject.grade}%</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                                  {subject.grade >= 90 ? 'ดีเยี่ยม' : subject.grade >= 80 ? 'ดี' : subject.grade >= 70 ? 'ปานกลาง' : 'ต้องปรับปรุง'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Personality Tab */}
                  {activeTab === 'personality' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                            <Brain className="h-5 w-5 mr-2" />
                            รูปแบบการเรียนรู้
                          </h4>
                          <p className="text-blue-800">{selectedStudentData.personality.learningStyle}</p>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                            <Heart className="h-5 w-5 mr-2" />
                            แรงจูงใจ
                          </h4>
                          <p className="text-green-800">{selectedStudentData.personality.motivation}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                            จุดแข็ง
                          </h4>
                          <ul className="space-y-2">
                            {selectedStudentData.personality.strengths.map((strength, index) => (
                              <li key={index} className="flex items-center text-gray-700">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                            จุดที่ต้องพัฒนา
                          </h4>
                          <ul className="space-y-2">
                            {selectedStudentData.personality.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-center text-gray-700">
                                <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                          <Users className="h-5 w-5 mr-2" />
                          ลักษณะทางสังคม
                        </h4>
                        <p className="text-purple-800">{selectedStudentData.personality.socialStyle}</p>
                      </div>
                    </div>
                  )}

                  {/* Academic Tab */}
                  {activeTab === 'academic' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-indigo-50 rounded-lg p-6 text-center">
                          <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-indigo-900">{selectedStudentData.academic.overallGrade}%</div>
                          <div className="text-sm text-indigo-700">เกรดรวม</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-6 text-center">
                          <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-green-900">{selectedStudentData.academic.attendance}%</div>
                          <div className="text-sm text-green-700">การเข้าเรียน</div>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-6 text-center">
                          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-900">{selectedStudentData.academic.participation}%</div>
                          <div className="text-sm text-blue-700">การมีส่วนร่วม</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">รายละเอียดผลการเรียนรายวิชา</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วิชา</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คะแนน</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เกรด</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">แนวโน้ม</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {selectedStudentData.academic.subjects.map((subject, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{subject.grade}%</td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                                      {subject.grade >= 90 ? 'A' : subject.grade >= 80 ? 'B' : subject.grade >= 70 ? 'C' : subject.grade >= 60 ? 'D' : 'F'}
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {getTrendIcon(subject.trend)}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Behavior Tab */}
                  {activeTab === 'behavior' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">คะแนนพฤติกรรม</h4>
                          <div className="space-y-4">
                            {[
                              { label: 'วินัย', value: selectedStudentData.behavioral.discipline, color: 'blue' },
                              { label: 'ความร่วมมือ', value: selectedStudentData.behavioral.cooperation, color: 'green' },
                              { label: 'ภาวะผู้นำ', value: selectedStudentData.behavioral.leadership, color: 'purple' },
                              { label: 'ความคิดสร้างสรรค์', value: selectedStudentData.behavioral.creativity, color: 'yellow' },
                              { label: 'ความรับผิดชอบ', value: selectedStudentData.behavioral.responsibility, color: 'red' }
                            ].map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                <div className="flex items-center space-x-2">
                                  <div className="w-32 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className={`bg-${item.color}-600 h-2 rounded-full`}
                                      style={{ width: `${item.value}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm font-bold text-gray-900 w-8">{item.value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">แผนภูมิเรดาร์พฤติกรรม</h4>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <RadarChart data={radarData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                                <Radar name="คะแนน" dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
                              </RadarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Recommendations Tab */}
                  {activeTab === 'recommendations' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2" />
                            วิธีการสอน
                          </h4>
                          <ul className="space-y-2">
                            {selectedStudentData.recommendations.teaching.map((item, index) => (
                              <li key={index} className="flex items-start text-blue-800">
                                <Target className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-green-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                            <Heart className="h-5 w-5 mr-2" />
                            การสนับสนุน
                          </h4>
                          <ul className="space-y-2">
                            {selectedStudentData.recommendations.support.map((item, index) => (
                              <li key={index} className="flex items-start text-green-800">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-purple-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            การพัฒนา
                          </h4>
                          <ul className="space-y-2">
                            {selectedStudentData.recommendations.development.map((item, index) => (
                              <li key={index} className="flex items-start text-purple-800">
                                <Lightbulb className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Notes Tab */}
                  {activeTab === 'notes' && (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold text-gray-900">บันทึกการสังเกต</h4>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                          เพิ่มบันทึกใหม่
                        </button>
                      </div>

                      <div className="space-y-4">
                        {selectedStudentData.notes.map((note, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-500">
                            <div className="flex items-center justify-between mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                note.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                                note.type === 'behavioral' ? 'bg-green-100 text-green-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {note.type === 'academic' ? 'วิชาการ' : 
                                 note.type === 'behavioral' ? 'พฤติกรรม' : 'ส่วนตัว'}
                              </span>
                              <span className="text-xs text-gray-500">{note.date}</span>
                            </div>
                            <p className="text-gray-700">{note.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">เลือกนักเรียน</h3>
              <p className="text-gray-600">กรุณาเลือกนักเรียนจากรายชื่อด้านซ้ายเพื่อดูโปรไฟล์รายละเอียด</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfiles;