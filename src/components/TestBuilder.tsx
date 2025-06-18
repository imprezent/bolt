import React, { useState } from 'react';
import { ClipboardList, Plus, Save, Eye, Trash2, Edit, CheckCircle, Circle, Square } from 'lucide-react';

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
  points: number;
}

const TestBuilder: React.FC = () => {
  const [testData, setTestData] = useState({
    title: '',
    subject: 'ภาษาไทย',
    grade: 'ม.1',
    duration: '60',
    instructions: ''
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    points: 1
  });

  const subjects = ['ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'สังคมศึกษา', 'ภาษาอังกฤษ'];
  const grades = ['ป.1', 'ป.2', 'ป.3', 'ป.4', 'ป.5', 'ป.6', 'ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6'];

  const questionTypes = [
    { value: 'multiple-choice', label: 'ปรนัย (4 ตัวเลือก)', icon: Circle },
    { value: 'true-false', label: 'ถูก/ผิด', icon: CheckCircle },
    { value: 'short-answer', label: 'คำตอบสั้น', icon: Square },
    { value: 'essay', label: 'อัตนัย', icon: Edit }
  ];

  const addQuestion = () => {
    if (currentQuestion.question && currentQuestion.type) {
      const newQuestion: Question = {
        id: Date.now().toString(),
        type: currentQuestion.type,
        question: currentQuestion.question,
        options: currentQuestion.type === 'multiple-choice' ? currentQuestion.options : undefined,
        correctAnswer: currentQuestion.correctAnswer,
        points: currentQuestion.points || 1
      };
      
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion({
        type: 'multiple-choice',
        question: '',
        options: ['', '', '', ''],
        points: 1
      });
    }
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateCurrentQuestion = (field: string, value: any) => {
    setCurrentQuestion(prev => ({ ...prev, [field]: value }));
  };

  const updateQuestionOption = (index: number, value: string) => {
    const newOptions = [...(currentQuestion.options || ['', '', '', ''])];
    newOptions[index] = value;
    updateCurrentQuestion('options', newOptions);
  };

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <ClipboardList className="h-8 w-8 mr-3 text-orange-600" />
          สร้างแบบทดสอบ
        </h2>
        <p className="text-gray-600">สร้างแบบทดสอบที่มีคุณภาพและวัดผลได้อย่างแม่นยำ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Test Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ข้อมูลแบบทดสอบ</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ชื่อแบบทดสอบ</label>
                <input
                  type="text"
                  value={testData.title}
                  onChange={(e) => setTestData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="เช่น แบบทดสอบภาษาไทย บทที่ 1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">เวลาทำข้อสอบ (นาที)</label>
                <input
                  type="number"
                  value={testData.duration}
                  onChange={(e) => setTestData(prev => ({ ...prev, duration: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">วิชา</label>
                <select
                  value={testData.subject}
                  onChange={(e) => setTestData(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ระดับชั้น</label>
                <select
                  value={testData.grade}
                  onChange={(e) => setTestData(prev => ({ ...prev, grade: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">คำแนะนำการทำข้อสอบ</label>
              <textarea
                value={testData.instructions}
                onChange={(e) => setTestData(prev => ({ ...prev, instructions: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="ระบุคำแนะนำสำหรับนักเรียน..."
              />
            </div>
          </div>

          {/* Question Builder */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">เพิ่มคำถาม</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ประเภทคำถาม</label>
                <select
                  value={currentQuestion.type}
                  onChange={(e) => updateCurrentQuestion('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {questionTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">คะแนน</label>
                <input
                  type="number"
                  value={currentQuestion.points}
                  onChange={(e) => updateCurrentQuestion('points', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  min="1"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">คำถาม</label>
              <textarea
                value={currentQuestion.question}
                onChange={(e) => updateCurrentQuestion('question', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="พิมพ์คำถาม..."
              />
            </div>

            {/* Multiple Choice Options */}
            {currentQuestion.type === 'multiple-choice' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">ตัวเลือก</label>
                <div className="space-y-2">
                  {currentQuestion.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="correct-answer"
                        checked={currentQuestion.correctAnswer === index}
                        onChange={() => updateCurrentQuestion('correctAnswer', index)}
                        className="text-orange-600"
                      />
                      <span className="text-sm font-medium">{String.fromCharCode(65 + index)}.</span>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updateQuestionOption(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder={`ตัวเลือก ${String.fromCharCode(65 + index)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* True/False */}
            {currentQuestion.type === 'true-false' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">คำตอบที่ถูกต้อง</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="true-false"
                      checked={currentQuestion.correctAnswer === 'true'}
                      onChange={() => updateCurrentQuestion('correctAnswer', 'true')}
                      className="text-orange-600"
                    />
                    <span className="ml-2">ถูก</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="true-false"
                      checked={currentQuestion.correctAnswer === 'false'}
                      onChange={() => updateCurrentQuestion('correctAnswer', 'false')}
                      className="text-orange-600"
                    />
                    <span className="ml-2">ผิด</span>
                  </label>
                </div>
              </div>
            )}

            {/* Short Answer */}
            {currentQuestion.type === 'short-answer' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">คำตอบที่ถูกต้อง</label>
                <input
                  type="text"
                  value={currentQuestion.correctAnswer as string || ''}
                  onChange={(e) => updateCurrentQuestion('correctAnswer', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="พิมพ์คำตอบที่ถูกต้อง..."
                />
              </div>
            )}

            <button
              onClick={addQuestion}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มคำถาม
            </button>
          </div>

          {/* Questions List */}
          {questions.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">คำถามทั้งหมด ({questions.length} ข้อ)</h3>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                            ข้อ {index + 1}
                          </span>
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                            {questionTypes.find(t => t.value === question.type)?.label}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {question.points} คะแนน
                          </span>
                        </div>
                        <p className="text-gray-900 font-medium">{question.question}</p>
                        
                        {question.type === 'multiple-choice' && question.options && (
                          <div className="mt-2 space-y-1">
                            {question.options.map((option, optIndex) => (
                              <div key={optIndex} className="flex items-center space-x-2">
                                <span className={`text-sm ${question.correctAnswer === optIndex ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                                  {String.fromCharCode(65 + optIndex)}. {option}
                                </span>
                                {question.correctAnswer === optIndex && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {question.type === 'true-false' && (
                          <p className="text-sm text-green-600 mt-2">คำตอบ: {question.correctAnswer === 'true' ? 'ถูก' : 'ผิด'}</p>
                        )}
                        
                        {question.type === 'short-answer' && (
                          <p className="text-sm text-green-600 mt-2">คำตอบ: {question.correctAnswer}</p>
                        )}
                      </div>
                      
                      <button
                        onClick={() => removeQuestion(question.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  คะแนนรวม: {totalPoints} คะแนน
                </div>
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                    <Eye className="h-4 w-4 mr-2" />
                    ดูตัวอย่าง
                  </button>
                  <button className="flex items-center px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                    <Save className="h-4 w-4 mr-2" />
                    บันทึกแบบทดสอบ
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">แบบทดสอบล่าสุด</h3>
            <div className="space-y-3">
              {[
                { title: 'แบบทดสอบภาษาไทย บทที่ 1', questions: 15, points: 20 },
                { title: 'แบบทดสอบคณิตศาสตร์ เรื่องเศษส่วน', questions: 10, points: 15 },
                { title: 'แบบทดสอบวิทยาศาสตร์ ระบบสุริยะ', questions: 12, points: 18 }
              ].map((test, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-gray-900">{test.title}</p>
                  <p className="text-xs text-gray-500">{test.questions} ข้อ • {test.points} คะแนน</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">📝 เคล็ดลับการสร้างข้อสอบ</h3>
            <ul className="text-sm text-orange-800 space-y-2">
              <li>• ใช้ภาษาที่เข้าใจง่าย ชัดเจน</li>
              <li>• กระจายระดับความยากง่าย</li>
              <li>• ตรวจสอบความถูกต้องของคำตอบ</li>
              <li>• กำหนดเวลาให้เหมาะสม</li>
              <li>• ครอบคลุมเนื้อหาที่สอน</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBuilder;