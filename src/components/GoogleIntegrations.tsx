import React, { useState } from 'react';
import { 
  ExternalLink, 
  Calendar, 
  FileText, 
  Users, 
  Settings, 
  CheckCircle, 
  Clock, 
  Upload,
  Download,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const GoogleIntegrations: React.FC = () => {
  const [isConnected, setIsConnected] = useState({
    forms: true,
    classroom: true,
    drive: true,
    calendar: true
  });

  const [formData, setFormData] = useState([
    {
      id: '1',
      title: 'แบบประเมินความเข้าใจ - บทที่ 1',
      responses: 28,
      avgScore: 85,
      lastResponse: '2 ชั่วโมงที่แล้ว',
      status: 'active'
    },
    {
      id: '2', 
      title: 'แบบสอบถามความพึงพอใจการเรียน',
      responses: 32,
      avgScore: 92,
      lastResponse: '1 วันที่แล้ว',
      status: 'active'
    }
  ]);

  const [classroomData, setClassroomData] = useState([
    {
      id: '1',
      className: 'ภาษาไทย ม.1/1',
      students: 35,
      assignments: 12,
      pendingGrades: 8,
      nextClass: 'วันจันทร์ 08:00'
    },
    {
      id: '2',
      className: 'ภาษาไทย ม.1/2', 
      students: 33,
      assignments: 10,
      pendingGrades: 5,
      nextClass: 'วันจันทร์ 10:00'
    }
  ]);

  const connectService = (service: string) => {
    setIsConnected(prev => ({ ...prev, [service]: true }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <ExternalLink className="h-8 w-8 mr-3 text-blue-600" />
          Google Integrations
        </h2>
        <p className="text-gray-600">เชื่อมต่อและจัดการบริการ Google เพื่อการสอนที่มีประสิทธิภาพ</p>
      </div>

      {/* Connection Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { key: 'forms', name: 'Google Forms', icon: FileText, color: 'green' },
          { key: 'classroom', name: 'Google Classroom', icon: Users, color: 'blue' },
          { key: 'drive', name: 'Google Drive', icon: Upload, color: 'yellow' },
          { key: 'calendar', name: 'Google Calendar', icon: Calendar, color: 'red' }
        ].map((service) => (
          <div key={service.key} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <service.icon className={`h-8 w-8 text-${service.color}-600`} />
              {isConnected[service.key as keyof typeof isConnected] ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className={`text-sm ${isConnected[service.key as keyof typeof isConnected] ? 'text-green-600' : 'text-red-600'}`}>
              {isConnected[service.key as keyof typeof isConnected] ? 'เชื่อมต่อแล้ว' : 'ยังไม่ได้เชื่อมต่อ'}
            </p>
            {!isConnected[service.key as keyof typeof isConnected] && (
              <button 
                onClick={() => connectService(service.key)}
                className="mt-3 w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                เชื่อมต่อ
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Google Forms Dashboard */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-green-600" />
              Google Forms Dashboard
            </h3>
            <button className="px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-sm">
              สร้าง Form ใหม่
            </button>
          </div>

          <div className="space-y-4">
            {formData.map((form) => (
              <div key={form.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{form.title}</h4>
                    <p className="text-sm text-gray-500">อัปเดตล่าสุด: {form.lastResponse}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {form.status === 'active' ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{form.responses}</div>
                    <div className="text-xs text-gray-500">คำตอบ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{form.avgScore}%</div>
                    <div className="text-xs text-gray-500">คะแนนเฉลี่ย</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">A</div>
                    <div className="text-xs text-gray-500">เกรดเฉลี่ย</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm">
                    <BarChart3 className="h-4 w-4 inline mr-1" />
                    ดูสถิติ
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm">
                    <Download className="h-4 w-4 inline mr-1" />
                    ส่งออกข้อมูล
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Classroom Dashboard */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Google Classroom Dashboard
            </h3>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm">
              จัดการชั้นเรียน
            </button>
          </div>

          <div className="space-y-4">
            {classroomData.map((classroom) => (
              <div key={classroom.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{classroom.className}</h4>
                    <p className="text-sm text-gray-500">ชั้นเรียนถัดไป: {classroom.nextClass}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-orange-500 mr-1" />
                    <span className="text-sm text-orange-600">{classroom.pendingGrades} รอตรวจ</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-600">{classroom.students}</div>
                    <div className="text-xs text-gray-500">นักเรียน</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{classroom.assignments}</div>
                    <div className="text-xs text-gray-500">งานที่มอบหมาย</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-orange-600">{classroom.pendingGrades}</div>
                    <div className="text-xs text-gray-500">รอตรวจ</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm">
                    มอบหมายงาน
                  </button>
                  <button className="flex-1 px-3 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-sm">
                    ตรวจงาน
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Settings className="h-5 w-5 mr-2 text-gray-600" />
          การตั้งค่าอัตโนมัติ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">การส่งงานอัตโนมัติ</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">ส่งงานทุกวันจันทร์ 08:00</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm">แจ้งเตือนก่อนครบกำหนด 1 วัน</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">ส่งสรุปผลงานรายสัปดาห์</span>
              </label>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">การแจกเอกสาร</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">แจกใบงานก่อนเรียน 30 นาที</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm">ส่งสื่อประกอบหลังเรียน</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">อัปโหลดบันทึกการเรียนอัตโนมัติ</span>
              </label>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">การประเมินผล</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">สร้างรายงานความก้าวหน้า</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="ml-2 text-sm">ส่งผลการประเมินให้ผู้ปกครอง</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                <span className="ml-2 text-sm">วิเคราะห์แนวโน้มการเรียนรู้</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleIntegrations;