import React, { useState } from 'react';
import { BookOpen, Plus, Save, Sparkles, Clock, Users, Target, FileText } from 'lucide-react';

const LessonPlanner: React.FC = () => {
  const [lessonData, setLessonData] = useState({
    title: '',
    subject: 'ภาษาไทย',
    grade: 'ม.1',
    duration: '50',
    objectives: '',
    activities: '',
    materials: '',
    assessment: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const subjects = ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'สังคมศึกษา', 'ภาษาอังกฤษ', 'ศิลปะ', 'พลศึกษา'];
  const grades = ['ป.1', 'ป.2', 'ป.3', 'ป.4', 'ป.5', 'ป.6', 'ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6'];

  const handleInputChange = (field: string, value: string) => {
    setLessonData(prev => ({ ...prev, [field]: value }));
  };

  const generateAIContent = async (field: string) => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const suggestions = {
        objectives: `1. นักเรียนสามารถอ่านและเข้าใจเนื้อหาได้อย่างถูกต้อง\n2. นักเรียนสามารถวิเคราะห์และสรุปใจความสำคัญได้\n3. นักเรียนสามารถนำความรู้ไปประยุกต์ใช้ในชีวิตประจำวันได้`,
        activities: `ขั้นนำ (10 นาที):\n- ทบทวนความรู้เดิม\n- กระตุ้นความสนใจด้วยคำถาม\n\nขั้นสอน (30 นาที):\n- อธิบายเนื้อหาหลัก\n- ให้นักเรียนฝึกปฏิบัติ\n- แบ่งกลุ่มทำกิจกรรม\n\nขั้นสรุป (10 นาที):\n- สรุปบทเรียน\n- ตอบข้อสงสัย`,
        materials: `- หนังสือเรียน\n- กระดานและปากกา\n- ใบงาน/แบบฝึกหัด\n- อุปกรณ์การสอน\n- สื่อมัลติมีเดีย (ถ้ามี)`,
        assessment: `การประเมินระหว่างเรียน:\n- สังเกตการมีส่วนร่วมในชั้นเรียน\n- ตรวจใบงาน\n\nการประเมินหลังเรียน:\n- แบบทดสอบย่อย\n- การนำเสนอหน้าชั้นเรียน`
      };
      
      if (suggestions[field as keyof typeof suggestions]) {
        handleInputChange(field, suggestions[field as keyof typeof suggestions]);
      }
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <BookOpen className="h-8 w-8 mr-3 text-blue-600" />
          ออกแบบการสอน
        </h2>
        <p className="text-gray-600">สร้างแผนการสอนที่มีประสิทธิภาพด้วยความช่วยเหลือจาก AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ข้อมูลพื้นฐาน</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">หัวข้อบทเรียน</label>
                <input
                  type="text"
                  value={lessonData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="เช่น การอ่านจับใจความ"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ระยะเวลา (นาที)</label>
                <input
                  type="number"
                  value={lessonData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">วิชา</label>
                <select
                  value={lessonData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ระดับชั้น</label>
                <select
                  value={lessonData.grade}
                  onChange={(e) => handleInputChange('grade', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          {[
            { field: 'objectives', label: 'จุดประสงค์การเรียนรู้', icon: Target },
            { field: 'activities', label: 'กิจกรรมการเรียนการสอน', icon: Users },
            { field: 'materials', label: 'สื่อและอุปกรณ์', icon: FileText },
            { field: 'assessment', label: 'การวัดและประเมินผล', icon: Clock }
          ].map(section => (
            <div key={section.field} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <section.icon className="h-5 w-5 mr-2 text-blue-600" />
                  {section.label}
                </h3>
                <button
                  onClick={() => generateAIContent(section.field)}
                  disabled={isGenerating}
                  className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors disabled:opacity-50"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  {isGenerating ? 'กำลังสร้าง...' : 'AI ช่วยเหลือ'}
                </button>
              </div>
              <textarea
                value={lessonData[section.field as keyof typeof lessonData]}
                onChange={(e) => handleInputChange(section.field, e.target.value)}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`กรอก${section.label.toLowerCase()}...`}
              />
            </div>
          ))}

          <div className="flex space-x-4">
            <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Save className="h-5 w-5 mr-2" />
              บันทึกแผนการสอน
            </button>
            <button className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              <Plus className="h-5 w-5 mr-2" />
              สร้างใหม่
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">แผนการสอนล่าสุด</h3>
            <div className="space-y-3">
              {[
                { title: 'การอ่านจับใจความ', subject: 'ภาษาไทย', grade: 'ม.1' },
                { title: 'สมการเชิงเส้น', subject: 'คณิตศาสตร์', grade: 'ม.2' },
                { title: 'ระบบสุริยะ', subject: 'วิทยาศาสตร์', grade: 'ป.6' }
              ].map((plan, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">{plan.title}</p>
                  <p className="text-xs text-gray-500">{plan.subject} • {plan.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 เคล็ดลับการสอน</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>• เริ่มต้นด้วยการเชื่อมโยงความรู้เดิม</li>
              <li>• ใช้กิจกรรมที่หลากหลายเพื่อความน่าสนใจ</li>
              <li>• ให้นักเรียนมีส่วนร่วมในการเรียนรู้</li>
              <li>• ประเมินผลอย่างต่อเนื่อง</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlanner;