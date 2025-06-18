import React, { useState } from 'react';
import { Users, TrendingUp, Award, BarChart3, User, Search, Filter, Download } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  scores: {
    subject: string;
    tests: number[];
    assignments: number[];
    participation: number;
    overall: number;
  }[];
}

const StudentAssessment: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ทั้งหมด');

  const students: Student[] = [
    {
      id: '1',
      name: 'นางสาวสมใจ ใจดี',
      studentId: '12345',
      grade: 'ม.1/1',
      scores: [
        {
          subject: 'ภาษาไทย',
          tests: [85, 78, 82],
          assignments: [88, 85, 90],
          participation: 85,
          overall: 84
        },
        {
          subject: 'คณิตศาสตร์',
          tests: [75, 70, 78],
          assignments: [80, 75, 82],
          participation: 78,
          overall: 76
        }
      ]
    },
    {
      id: '2',
      name: 'นายสมศักดิ์ เรียนดี',
      studentId: '12346',
      grade: 'ม.1/1',
      scores: [
        {
          subject: 'ภาษาไทย',
          tests: [92, 88, 90],
          assignments: [95, 90, 88],
          participation: 92,
          overall: 91
        },
        {
          subject: 'คณิตศาสตร์',
          tests: [88, 85, 90],
          assignments: [90, 88, 92],
          participation: 90,
          overall: 89
        }
      ]
    },
    {
      id: '3',
      name: 'นางสาวปรียา ขยันเรียน',
      studentId: '12347',
      grade: 'ม.1/1',
      scores: [
        {
          subject: 'ภาษาไทย',
          tests: [70, 68, 72],
          assignments: [75, 70, 78],
          participation: 72,
          overall: 72
        },
        {
          subject: 'คณิตศาสตร์',
          tests: [65, 62, 68],
          assignments: [70, 68, 72],
          participation: 68,
          overall: 67
        }
      ]
    }
  ];

  const subjects = ['ทั้งหมด', 'ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'สังคมศึกษา'];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.includes(searchTerm)
  );

  const getGradeColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    if (score >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getGradeLabel = (score: number) => {
    if (score >= 90) return 'ดีเยี่ยม';
    if (score >= 80) return 'ดี';
    if (score >= 70) return 'ปานกลาง';
    if (score >= 60) return 'พอใช้';
    return 'ต้องปรับปรุง';
  };

  const selectedStudentData = students.find(s => s.id === selectedStudent);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <BarChart3 className="h-8 w-8 mr-3 text-purple-600" />
          ประเมินนักเรียนรายบุคคล
        </h2>
        <p className="text-gray-600">ติดตามและประเมินผลการเรียนรู้ของนักเรียนอย่างละเอียด</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Student List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">รายชื่อนักเรียน</h3>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Download className="h-4 w-4" />
              </button>
            </div>

            {/* Search and Filter */}
            <div className="mb-4">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหานักเรียน..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Student List */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredStudents.map((student) => {
                const avgScore = student.scores.reduce((sum, score) => sum + score.overall, 0) / student.scores.length;
                return (
                  <div
                    key={student.id}
                    onClick={() => setSelectedStudent(student.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedStudent === student.id
                        ? 'bg-purple-50 border-2 border-purple-200'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.studentId} • {student.grade}</p>
                        <div className="flex items-center mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(avgScore)}`}>
                            {Math.round(avgScore)}% • {getGradeLabel(avgScore)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Student Details */}
        <div className="lg:col-span-2">
          {selectedStudentData ? (
            <div className="space-y-6">
              {/* Student Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedStudentData.name}</h3>
                    <p className="text-gray-600">{selectedStudentData.studentId} • {selectedStudentData.grade}</p>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedStudentData.scores.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{subject.subject}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">{subject.overall}%</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.overall)}`}>
                          {getGradeLabel(subject.overall)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Scores */}
              {selectedStudentData.scores.map((subject, subjectIndex) => (
                <div key={subjectIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600" />
                    {subject.subject}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Tests */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">การทดสอบ</h4>
                      <div className="space-y-2">
                        {subject.tests.map((score, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm text-gray-600">ครั้งที่ {index + 1}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(score)}`}>
                              {score}%
                            </span>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">เฉลี่ย</span>
                            <span className="font-bold">
                              {Math.round(subject.tests.reduce((a, b) => a + b, 0) / subject.tests.length)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Assignments */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">งานที่มอบหมาย</h4>
                      <div className="space-y-2">
                        {subject.assignments.map((score, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <span className="text-sm text-gray-600">งานที่ {index + 1}</span>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getGradeColor(score)}`}>
                              {score}%
                            </span>
                          </div>
                        ))}
                        <div className="pt-2 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">เฉลี่ย</span>
                            <span className="font-bold">
                              {Math.round(subject.assignments.reduce((a, b) => a + b, 0) / subject.assignments.length)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Participation */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">การมีส่วนร่วม</h4>
                      <div className="p-4 bg-gray-50 rounded-lg text-center">
                        <div className={`text-2xl font-bold mb-1 ${getGradeColor(subject.participation).split(' ')[0]}`}>
                          {subject.participation}%
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.participation)}`}>
                          {getGradeLabel(subject.participation)}
                        </span>
                      </div>
                    </div>

                    {/* Overall */}
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">คะแนนรวม</h4>
                      <div className="p-4 bg-purple-50 rounded-lg text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">
                          {subject.overall}%
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(subject.overall)}`}>
                          {getGradeLabel(subject.overall)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">💡 คำแนะนำ</h4>
                    <div className="text-sm text-blue-800">
                      {subject.overall >= 90 ? (
                        <p>นักเรียนมีผลการเรียนดีเยี่ยม ควรส่งเสริมให้เป็นผู้ช่วยสอนเพื่อนร่วมชั้น</p>
                      ) : subject.overall >= 80 ? (
                        <p>นักเรียนมีผลการเรียนดี ควรมอบหมายงานที่ท้าทายมากขึ้น</p>
                      ) : subject.overall >= 70 ? (
                        <p>นักเรียนมีผลการเรียนปานกลาง ควรให้การสนับสนุนเพิ่มเติม</p>
                      ) : subject.overall >= 60 ? (
                        <p>นักเรียนต้องการการช่วยเหลืออย่างใกล้ชิด และอาจต้องมีการสอนเสริม</p>
                      ) : (
                        <p>นักเรียนต้องการการช่วยเหลือเร่งด่วน ควรปรึกษาผู้ปกครองและจัดทำแผนการสอนเสริม</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">เลือกนักเรียน</h3>
              <p className="text-gray-600">กรุณาเลือกนักเรียนจากรายชื่อด้านซ้ายเพื่อดูรายละเอียดการประเมิน</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAssessment;