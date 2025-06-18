import React, { useState } from 'react';
import { Users, Plus, Copy, Edit, Trash2, Clock, Target, Sparkles } from 'lucide-react';

const ActivityDesigner: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [activityData, setActivityData] = useState({
    name: '',
    description: '',
    objectives: '',
    duration: '30',
    materials: '',
    instructions: '',
    groupSize: '4'
  });

  const templates = [
    {
      id: 'group-discussion',
      name: 'การอธิบายแบบกลุ่ม',
      description: 'นักเรียนแบ่งกลุ่มเพื่อหารือและแลกเปลี่ยนความคิดเห็น',
      icon: '💬',
      duration: '20-30 นาที'
    },
    {
      id: 'role-play',
      name: 'การแสดงบทบาทสมมติ',
      description: 'นักเรียนแสดงบทบาทเพื่อฝึกทักษะและความเข้าใจ',
      icon: '🎭',
      duration: '30-45 นาที'
    },
    {
      id: 'problem-solving',
      name: 'การแก้ปัญหาเป็นทีม',
      description: 'นักเรียนร่วมกันแก้ปัญหาที่กำหนดให้',
      icon: '🧩',
      duration: '25-40 นาที'
    },
    {
      id: 'presentation',
      name: 'การนำเสนอผลงาน',
      description: 'นักเรียนเตรียมและนำเสนอผลงานหน้าชั้น',
      icon: '📊',
      duration: '30-50 นาที'
    },
    {
      id: 'experiment',
      name: 'การทดลองและสำรวจ',
      description: 'นักเรียนทำการทดลองเพื่อค้นหาความรู้ด้วยตนเอง',
      icon: '🔬',
      duration: '40-60 นาที'
    },
    {
      id: 'creative-workshop',
      name: 'เวิร์กช็อปสร้างสรรค์',
      description: 'นักเรียนสร้างผลงานศิลปะหรือโครงงาน',
      icon: '🎨',
      duration: '45-90 นาที'
    }
  ];

  const savedActivities = [
    { name: 'การอภิปรายเรื่องสิ่งแวดล้อม', subject: 'สังคมศึกษา', duration: '30 นาที' },
    { name: 'การแสดงบทบาทตลาดสด', subject: 'ภาษาไทย', duration: '40 นาที' },
    { name: 'การทดลองแรงโน้มถ่วง', subject: 'วิทยาศาสตร์', duration: '50 นาที' }
  ];

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setActivityData(prev => ({
        ...prev,
        name: template.name,
        description: template.description,
        duration: template.duration.split('-')[0].replace(' นาที', '')
      }));
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setActivityData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Users className="h-8 w-8 mr-3 text-green-600" />
          ออกแบบกิจกรรม
        </h2>
        <p className="text-gray-600">สร้างกิจกรรมการเรียนรู้ที่น่าสนใจและมีประสิทธิภาพ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Template Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">เลือกรูปแบบกิจกรรม</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedTemplate === template.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">{template.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{template.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{template.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Details Form */}
          {selectedTemplate && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">รายละเอียดกิจกรรม</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อกิจกรรม</label>
                    <input
                      type="text"
                      value={activityData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลา (นาที)</label>
                    <input
                      type="number"
                      value={activityData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">คำอธิบายกิจกรรม</label>
                  <textarea
                    value={activityData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">จุดประสงค์การเรียนรู้</label>
                    <button className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-xs">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI ช่วยเหลือ
                    </button>
                  </div>
                  <textarea
                    value={activityData.objectives}
                    onChange={(e) => handleInputChange('objectives', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุจุดประสงค์การเรียนรู้ของกิจกรรม..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วัสดุอุปกรณ์</label>
                  <textarea
                    value={activityData.materials}
                    onChange={(e) => handleInputChange('materials', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุวัสดุอุปกรณ์ที่จำเป็น..."
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">ขั้นตอนการดำเนินกิจกรรม</label>
                    <button className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-xs">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI ช่วยเหลือ
                    </button>
                  </div>
                  <textarea
                    value={activityData.instructions}
                    onChange={(e) => handleInputChange('instructions', e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ระบุขั้นตอนการดำเนินกิจกรรมอย่างละเอียด..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ขนาดกลุ่ม (คน)</label>
                  <select
                    value={activityData.groupSize}
                    onChange={(e) => handleInputChange('groupSize', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="individual">รายบุคคล</option>
                    <option value="2">2 คน</option>
                    <option value="3">3 คน</option>
                    <option value="4">4 คน</option>
                    <option value="5">5 คน</option>
                    <option value="6">6 คน</option>
                    <option value="whole-class">ทั้งชั้น</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  <Plus className="h-5 w-5 mr-2" />
                  บันทึกกิจกรรม
                </button>
                <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  <Copy className="h-5 w-5 mr-2" />
                  ทำสำเนา
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">กิจกรรมที่บันทึกไว้</h3>
            <div className="space-y-3">
              {savedActivities.map((activity, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                      <p className="text-xs text-gray-500">{activity.subject}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">{activity.duration}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">🎯 เคล็ดลับกิจกรรม</h3>
            <ul className="text-sm text-green-800 space-y-2">
              <li>• กำหนดจุดประสงค์ให้ชัดเจน</li>
              <li>• เตรียมวัสดุอุปกรณ์ให้พร้อม</li>
              <li>• ให้คำแนะนำที่เข้าใจง่าย</li>
              <li>• เปิดโอกาสให้นักเรียนแสดงความคิดเห็น</li>
              <li>• สรุปผลการเรียนรู้ร่วมกัน</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDesigner;