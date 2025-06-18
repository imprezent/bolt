import React, { useState } from 'react';
import { Lightbulb, BookOpen, Users, Target, Clock, Star, Search, Filter } from 'lucide-react';

interface TeachingMethod {
  id: string;
  title: string;
  description: string;
  category: string;
  subjects: string[];
  grades: string[];
  duration: string;
  difficulty: 'ง่าย' | 'ปานกลาง' | 'ยาก';
  rating: number;
  pros: string[];
  cons: string[];
  steps: string[];
  tips: string[];
}

const TeachingMethods: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [selectedSubject, setSelectedSubject] = useState('ทั้งหมด');
  const [selectedMethod, setSelectedMethod] = useState<TeachingMethod | null>(null);

  const categories = ['ทั้งหมด', 'การสอนเชิงปฏิสัมพันธ์', 'การเรียนรู้แบบร่วมมือ', 'การสอนแบบสืบเสาะ', 'การสอนแบบโครงงาน', 'เทคโนโลยีการศึกษา'];
  const subjects = ['ทั้งหมด', 'ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'สังคมศึกษา', 'ภาษาอังกฤษ'];

  const teachingMethods: TeachingMethod[] = [
    {
      id: '1',
      title: 'การสอนแบบอภิปราย (Discussion Method)',
      description: 'วิธีการสอนที่ส่งเสริมให้นักเรียนแสดงความคิดเห็นและแลกเปลี่ยนมุมมองร่วมกัน',
      category: 'การสอนเชิงปฏิสัมพันธ์',
      subjects: ['ภาษาไทย', 'สังคมศึกษา'],
      grades: ['ม.1', 'ม.2', 'ม.3'],
      duration: '30-45 นาที',
      difficulty: 'ปานกลาง',
      rating: 4.5,
      pros: [
        'ส่งเสริมการคิดวิเคราะห์',
        'เพิ่มความมั่นใจในการแสดงความคิดเห็น',
        'พัฒนาทักษะการสื่อสาร',
        'เรียนรู้จากมุมมองที่หลากหลาย'
      ],
      cons: [
        'ใช้เวลามาก',
        'นักเรียนเงียบอาจไม่ได้รับโอกาส',
        'ต้องการการควบคุมที่ดี',
        'อาจเบี่ยงเบนจากหัวข้อหลัก'
      ],
      steps: [
        'กำหนดหัวข้อและวัตถุประสงค์ที่ชัดเจน',
        'เตรียมคำถามกระตุ้นและคำถามเสริม',
        'แบ่งกลุ่มนักเรียนหรือทำเป็นวงกลม',
        'เริ่มต้นด้วยคำถามเปิด',
        'ให้นักเรียนแสดงความคิดเห็นอย่างเสรี',
        'ครูเป็นผู้อำนวยการสนทนา',
        'สรุปประเด็นสำคัญร่วมกัน'
      ],
      tips: [
        'สร้างบรรยากาศที่ปลอดภัยและเปิดกว้าง',
        'ใช้คำถามเปิดมากกว่าคำถามปิด',
        'ให้เวลาคิดก่อนตอบ (Wait Time)',
        'ชื่นชมความคิดเห็นที่หลากหลาย',
        'จดบันทึกประเด็นสำคัญบนกระดาน'
      ]
    },
    {
      id: '2',
      title: 'การเรียนรู้แบบร่วมมือ (Cooperative Learning)',
      description: 'วิธีการสอนที่เน้นให้นักเรียนทำงานร่วมกันเป็นทีมเพื่อบรรลุเป้าหมายการเรียนรู้',
      category: 'การเรียนรู้แบบร่วมมือ',
      subjects: ['คณิตศาสตร์', 'วิทยาศาสตร์', 'ภาษาอังกฤษ'],
      grades: ['ป.4', 'ป.5', 'ป.6', 'ม.1', 'ม.2'],
      duration: '40-60 นาที',
      difficulty: 'ปานกลาง',
      rating: 4.7,
      pros: [
        'พัฒนาทักษะการทำงานร่วมกัน',
        'เรียนรู้จากเพื่อน',
        'เพิ่มแรงจูงใจในการเรียน',
        'ลดความเครียดในการเรียน'
      ],
      cons: [
        'นักเรียนบางคนอาจไม่ร่วมมือ',
        'ความขัดแย้งในกลุ่ม',
        'ใช้เวลาในการจัดกลุ่ม',
        'ต้องควบคุมเสียงดัง'
      ],
      steps: [
        'อธิบายวัตถุประสงค์และกฎกติกา',
        'แบ่งกลุ่มอย่างเหมาะสม (3-5 คน)',
        'มอบหมายบทบาทให้สมาชิกแต่ละคน',
        'แจกใบงานและอุปกรณ์',
        'ให้เวลาทำงานกลุ่ม',
        'ครูเดินดูและให้คำแนะนำ',
        'นำเสนอผลงานหน้าชั้น',
        'สรุปและประเมินผล'
      ],
      tips: [
        'จัดกลุ่มให้หลากหลายทั้งความสามารถ',
        'กำหนดบทบาทให้ชัดเจน',
        'ให้รางวัลกลุ่มมากกว่าให้รางวัลบุคคล',
        'สอนทักษะการทำงานร่วมกันก่อน',
        'ใช้เทคนิค "คิด-จับคู่-แบ่งปัน"'
      ]
    },
    {
      id: '3',
      title: 'การสอนแบบสืบเสาะหาความรู้ (Inquiry-Based Learning)',
      description: 'วิธีการสอนที่ส่งเสริมให้นักเรียนค้นหาความรู้ด้วยตนเองผ่านการตั้งคำถามและการสำรวจ',
      category: 'การสอนแบบสืบเสาะ',
      subjects: ['วิทยาศาสตร์', 'สังคมศึกษา'],
      grades: ['ป.5', 'ป.6', 'ม.1', 'ม.2', 'ม.3'],
      duration: '50-90 นาที',
      difficulty: 'ยาก',
      rating: 4.3,
      pros: [
        'พัฒนาทักษะการคิดวิเคราะห์',
        'เรียนรู้อย่างลึกซึ้ง',
        'จดจำได้นาน',
        'สร้างความอยากรู้อยากเห็น'
      ],
      cons: [
        'ใช้เวลามาก',
        'ต้องการทรัพยากรมาก',
        'นักเรียนอาจหลงทาง',
        'ยากต่อการประเมินผล'
      ],
      steps: [
        'นำเสนอปรากฏการณ์หรือปัญหาที่น่าสนใจ',
        'ให้นักเรียนตั้งคำถาม',
        'วางแผนการสืบเสาะหาคำตอบ',
        'รวบรวมข้อมูลและหลักฐาน',
        'วิเคราะห์และตีความข้อมูล',
        'สรุปและนำเสนอผลการสืบเสาะ',
        'สะท้อนการเรียนรู้'
      ],
      tips: [
        'เริ่มจากสิ่งที่นักเรียนสนใจ',
        'ให้คำแนะนำแต่อย่าให้คำตอบ',
        'ส่งเสริมการตั้งคำถาม',
        'เตรียมแหล่งข้อมูลที่หลากหลาย',
        'สอนวิธีการค้นคว้าที่ถูกต้อง'
      ]
    },
    {
      id: '4',
      title: 'การสอนแบบโครงงาน (Project-Based Learning)',
      description: 'วิธีการสอนที่ให้นักเรียนทำโครงงานจริงเพื่อแก้ปัญหาหรือตอบคำถามที่มีความหมาย',
      category: 'การสอนแบบโครงงาน',
      subjects: ['ทุกวิชา'],
      grades: ['ป.4', 'ป.5', 'ป.6', 'ม.1', 'ม.2', 'ม.3'],
      duration: '2-4 สัปดาห์',
      difficulty: 'ยาก',
      rating: 4.6,
      pros: [
        'เชื่อมโยงการเรียนกับชีวิตจริง',
        'พัฒนาทักษะศตวรรษที่ 21',
        'เรียนรู้แบบบูรณาการ',
        'เพิ่มแรงจูงใจอย่างมาก'
      ],
      cons: [
        'ใช้เวลาและทรัพยากรมาก',
        'ยากต่อการจัดการ',
        'การประเมินผลซับซ้อน',
        'ต้องการการวางแผนที่ดี'
      ],
      steps: [
        'กำหนดคำถามหลักหรือปัญหาที่ต้องแก้',
        'วางแผนโครงงานร่วมกัน',
        'แบ่งหน้าที่ความรับผิดชอบ',
        'ค้นคว้าและรวบรวมข้อมูล',
        'ดำเนินการตามแผน',
        'ปรับปรุงและพัฒนาผลงาน',
        'นำเสนอผลงานต่อผู้ฟัง',
        'ประเมินผลและสะท้อนการเรียนรู้'
      ],
      tips: [
        'เลือกหัวข้อที่เชื่อมโยงกับชีวิตจริง',
        'กำหนดเป้าหมายที่ชัดเจนและวัดได้',
        'ให้คำแนะนำอย่างต่อเนื่อง',
        'ใช้ Rubric ในการประเมิน',
        'เชิญผู้เชี่ยวชาญมาให้คำปรึกษา'
      ]
    },
    {
      id: '5',
      title: 'การสอนผ่านเกม (Game-Based Learning)',
      description: 'วิธีการสอนที่ใช้เกมเป็นเครื่องมือในการถ่ายทอดความรู้และทักษะ',
      category: 'เทคโนโลยีการศึกษา',
      subjects: ['คณิตศาสตร์', 'ภาษาอังกฤษ', 'วิทยาศาสตร์'],
      grades: ['ป.1', 'ป.2', 'ป.3', 'ป.4', 'ป.5', 'ป.6'],
      duration: '20-40 นาที',
      difficulty: 'ง่าย',
      rating: 4.8,
      pros: [
        'สร้างความสนุกสนาน',
        'เพิ่มแรงจูงใจสูง',
        'จดจำได้ดี',
        'ลดความเครียด'
      ],
      cons: [
        'อาจเน้นความสนุกมากกว่าการเรียน',
        'ใช้เวลาเตรียม',
        'ต้องควบคุมวินัย',
        'ต้องมีอุปกรณ์'
      ],
      steps: [
        'เลือกเกมที่เหมาะกับเนื้อหา',
        'อธิบายกฎกติกาให้ชัดเจน',
        'แบ่งทีมหรือให้เล่นเดี่ยว',
        'เริ่มเล่นเกม',
        'ครูคอยดูและให้คำแนะนำ',
        'สรุปบทเรียนจากเกม',
        'ประเมินการเรียนรู้'
      ],
      tips: [
        'เลือกเกมที่เหมาะกับอายุ',
        'ผสมผสานการแข่งขันและความร่วมมือ',
        'ให้รางวัลที่เหมาะสม',
        'เชื่อมโยงเกมกับเนื้อหา',
        'เตรียมเกมสำรองไว้'
      ]
    }
  ];

  const filteredMethods = teachingMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || method.category === selectedCategory;
    const matchesSubject = selectedSubject === 'ทั้งหมด' || method.subjects.includes(selectedSubject);
    
    return matchesSearch && matchesCategory && matchesSubject;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'ง่าย': return 'text-green-600 bg-green-100';
      case 'ปานกลาง': return 'text-yellow-600 bg-yellow-100';
      case 'ยาก': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Lightbulb className="h-8 w-8 mr-3 text-yellow-600" />
          วิธีการสอน
        </h2>
        <p className="text-gray-600">เรียนรู้วิธีการสอนที่หลากหลายและมีประสิทธิภาพ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Filters and Methods List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาวิธีการสอน..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{method.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {method.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(method.difficulty)}`}>
                    {method.difficulty}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                    <span className="text-xs text-gray-600">{method.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {method.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {method.subjects.length > 1 ? 'หลายวิชา' : method.subjects[0]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Method Details */}
        <div className="lg:col-span-1">
          {selectedMethod ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedMethod.title}</h3>
              <p className="text-gray-600 mb-4">{selectedMethod.description}</p>

              <div className="space-y-4">
                {/* Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">ระยะเวลา:</span>
                    <p>{selectedMethod.duration}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">ความยาก:</span>
                    <span className={`ml-1 px-2 py-1 rounded text-xs ${getDifficultyColor(selectedMethod.difficulty)}`}>
                      {selectedMethod.difficulty}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">วิชา:</span>
                    <p>{selectedMethod.subjects.join(', ')}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">ระดับชั้น:</span>
                    <p>{selectedMethod.grades.join(', ')}</p>
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">✅ ข้อดี</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {selectedMethod.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">⚠️ ข้อควรระวัง</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {selectedMethod.cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">📋 ขั้นตอนการดำเนินการ</h4>
                  <ol className="text-sm text-gray-600 space-y-1">
                    {selectedMethod.steps.map((step, index) => (
                      <li key={index}>{index + 1}. {step}</li>
                    ))}
                  </ol>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">💡 เคล็ดลับ</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {selectedMethod.tips.map((tip, index) => (
                      <li key={index}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">เลือกวิธีการสอน</h3>
              <p className="text-gray-600">กรุณาเลือกวิธีการสอนเพื่อดูรายละเอียด</p>
            </div>
          )}
        </div>
      </div>

      {/* Featured Methods */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 mb-6">วิธีการสอนแนะนำ</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachingMethods.filter(m => m.rating >= 4.5).slice(0, 3).map((method) => (
            <div key={method.id} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
              <div className="flex items-center mb-3">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-bold text-yellow-700">{method.rating}</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{method.description.substring(0, 100)}...</p>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(method.difficulty)}`}>
                  {method.difficulty}
                </span>
                <button
                  onClick={() => setSelectedMethod(method)}
                  className="text-xs text-yellow-700 hover:text-yellow-800 font-medium"
                >
                  ดูรายละเอียด →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingMethods;