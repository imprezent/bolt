import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  AlertCircle,
  CheckCircle,
  Clock,
  BookOpen,
  PieChart,
  Activity,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Area,
  AreaChart
} from 'recharts';

const PerformanceAnalytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('semester');
  const [selectedClass, setSelectedClass] = useState('all');

  // Sample data for analytics
  const classPerformanceData = [
    { class: 'ม.1/1', students: 35, avgScore: 84, improvement: 5 },
    { class: 'ม.1/2', students: 33, avgScore: 78, improvement: 3 },
    { class: 'ม.1/3', students: 34, avgScore: 81, improvement: 7 },
    { class: 'ม.2/1', students: 32, avgScore: 86, improvement: 4 },
    { class: 'ม.2/2', students: 31, avgScore: 79, improvement: 6 }
  ];

  const subjectPerformanceData = [
    { subject: 'ภาษาไทย', score: 85, target: 80, students: 165 },
    { subject: 'คณิตศาสตร์', score: 78, target: 75, students: 165 },
    { subject: 'วิทยาศาสตร์', score: 82, target: 80, students: 165 },
    { subject: 'สังคมศึกษา', score: 88, target: 85, students: 165 },
    { subject: 'ภาษาอังกฤษ', score: 76, target: 75, students: 165 }
  ];

  const monthlyTrendData = [
    { month: 'ส.ค.', score: 75, participation: 85, attendance: 92 },
    { month: 'ก.ย.', score: 78, participation: 87, attendance: 94 },
    { month: 'ต.ค.', score: 80, participation: 89, attendance: 93 },
    { month: 'พ.ย.', score: 82, participation: 91, attendance: 95 },
    { month: 'ธ.ค.', score: 84, participation: 88, attendance: 91 },
    { month: 'ม.ค.', score: 86, participation: 92, attendance: 96 }
  ];

  const gradeDistributionData = [
    { grade: 'A (90-100)', count: 45, percentage: 27 },
    { grade: 'B (80-89)', count: 62, percentage: 38 },
    { grade: 'C (70-79)', count: 38, percentage: 23 },
    { grade: 'D (60-69)', count: 15, percentage: 9 },
    { grade: 'F (0-59)', count: 5, percentage: 3 }
  ];

  const teachingEffectivenessData = [
    { method: 'การสอนแบบอภิปราย', effectiveness: 85, usage: 70 },
    { method: 'การเรียนรู้แบบร่วมมือ', effectiveness: 92, usage: 85 },
    { method: 'การสอนแบบสืบเสาะ', effectiveness: 78, usage: 45 },
    { method: 'การสอนผ่านเกม', effectiveness: 88, usage: 60 },
    { method: 'การสอนแบบโครงงาน', effectiveness: 90, usage: 40 }
  ];

  const COLORS = ['#4F46E5', '#059669', '#DC2626', '#D97706', '#7C3AED'];

  const periods = [
    { value: 'week', label: 'สัปดาห์นี้' },
    { value: 'month', label: 'เดือนนี้' },
    { value: 'semester', label: 'ภาคเรียนนี้' },
    { value: 'year', label: 'ปีการศึกษานี้' }
  ];

  const classes = [
    { value: 'all', label: 'ทุกชั้นเรียน' },
    { value: 'm1-1', label: 'ม.1/1' },
    { value: 'm1-2', label: 'ม.1/2' },
    { value: 'm1-3', label: 'ม.1/3' },
    { value: 'm2-1', label: 'ม.2/1' },
    { value: 'm2-2', label: 'ม.2/2' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <BarChart3 className="h-8 w-8 mr-3 text-purple-600" />
          การวิเคราะห์ประสิทธิภาพการสอน
        </h2>
        <p className="text-gray-600">ติดตามและวิเคราะห์ประสิทธิภาพการสอนและผลการเรียนรู้ของนักเรียน</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ช่วงเวลา</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>{period.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชั้นเรียน</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {classes.map(cls => (
                  <option key={cls.value} value={cls.value}>{cls.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors">
              <RefreshCw className="h-4 w-4 inline mr-2" />
              รีเฟรช
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              <Download className="h-4 w-4 inline mr-2" />
              ส่งออกรายงาน
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">165</p>
              <p className="text-sm text-gray-600">นักเรียนทั้งหมด</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+5% จากเดือนที่แล้ว</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">82%</p>
              <p className="text-sm text-gray-600">คะแนนเฉลี่ย</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+3% จากเดือนที่แล้ว</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-purple-500 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-gray-600">การเข้าเรียน</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+2% จากเดือนที่แล้ว</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="bg-orange-500 p-3 rounded-lg">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-gray-900">89%</p>
              <p className="text-sm text-gray-600">บรรลุเป้าหมาย</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">+7% จากเดือนที่แล้ว</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Class Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ผลการเรียนรายชั้น</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="class" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgScore" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ผลการเรียนรายวิชา</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformanceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="subject" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="score" fill="#059669" />
                <Bar dataKey="target" fill="#DC2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Monthly Trends */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">แนวโน้มรายเดือน</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="score" stackId="1" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.6} />
                <Area type="monotone" dataKey="participation" stackId="2" stroke="#059669" fill="#059669" fillOpacity={0.6} />
                <Area type="monotone" dataKey="attendance" stackId="3" stroke="#DC2626" fill="#DC2626" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Grade Distribution */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">การกระจายเกรด</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={gradeDistributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ percentage }) => `${percentage}%`}
                >
                  {gradeDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {gradeDistributionData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span>{item.grade}</span>
                </div>
                <span className="font-medium">{item.count} คน</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Effectiveness */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">ประสิทธิภาพวิธีการสอน</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">วิธีการสอน</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ประสิทธิภาพ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การใช้งาน</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">คำแนะนำ</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachingEffectivenessData.map((method, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{method.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${method.effectiveness}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{method.effectiveness}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${method.usage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{method.usage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {method.effectiveness > 85 && method.usage < 70 ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">ควรใช้มากขึ้น</span>
                    ) : method.effectiveness < 80 ? (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">ต้องปรับปรุง</span>
                    ) : (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">ใช้งานดี</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            จุดแข็ง
          </h3>
          <ul className="space-y-2 text-green-800">
            <li>• การเข้าเรียนของนักเรียนอยู่ในระดับดี (94%)</li>
            <li>• วิชาสังคมศึกษามีผลการเรียนสูงสุด (88%)</li>
            <li>• การเรียนรู้แบบร่วมมือมีประสิทธิภาพสูง (92%)</li>
            <li>• นักเรียนส่วนใหญ่ได้เกรด B ขึ้นไป (65%)</li>
          </ul>
        </div>

        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-orange-900 mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            จุดที่ต้องพัฒนา
          </h3>
          <ul className="space-y-2 text-orange-800">
            <li>• วิชาคณิตศาสตร์ต้องการการสนับสนุนเพิ่มเติม</li>
            <li>• การสอนแบบสืบเสาะยังใช้น้อย แต่มีประสิทธิภาพ</li>
            <li>• นักเรียนบางคนยังได้เกรด D และ F (12%)</li>
            <li>• ชั้น ม.1/2 มีผลการเรียนต่ำกว่าเป้าหมาย</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;