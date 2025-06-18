import React from 'react';
import { BookOpen, Users, ClipboardList, TrendingUp, Calendar, Award, Clock, Target } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface DashboardProps {
  onTabChange: (tab: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTabChange }) => {
  const { t, user } = useApp();

  const stats = [
    { label: t('dashboard.lessonPlans'), value: '24', icon: BookOpen, color: 'bg-blue-500' },
    { label: t('dashboard.activities'), value: '36', icon: Users, color: 'bg-green-500' },
    { label: t('dashboard.tests'), value: '18', icon: ClipboardList, color: 'bg-orange-500' },
    { label: t('dashboard.students'), value: '120', icon: TrendingUp, color: 'bg-purple-500' },
  ];

  const recentActivities = [
    { title: 'สร้างแผนการสอน "ภาษาไทย ม.1"', time: '2 ชั่วโมงที่แล้ว', icon: BookOpen },
    { title: 'ประเมินผลงานนักเรียน ชั้น ม.2/1', time: '4 ชั่วโมงที่แล้ว', icon: Award },
    { title: 'ออกแบบกิจกรรมกลุ่ม "วิทยาศาสตร์สนุก"', time: '1 วันที่แล้ว', icon: Users },
    { title: 'สร้างแบบทดสอบ "คณิตศาสตร์ บทที่ 3"', time: '2 วันที่แล้ว', icon: ClipboardList },
  ];

  const upcomingTasks = [
    { title: 'จัดเตรียมแบบทดสอบปลายภาค', deadline: 'วันศุกร์นี้', priority: 'สูง' },
    { title: 'ประเมินโครงงานวิทยาศาสตร์', deadline: 'สัปดาห์หน้า', priority: 'ปานกลาง' },
    { title: 'สร้างกิจกรรมสำหรับงานวันแม่', deadline: '2 สัปดาหิ์', priority: 'ต่ำ' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {t('dashboard.welcome')}, {user?.name || 'ครู'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {t('dashboard.todayTasks')} 3 {t('dashboard.studentsWaiting')} 15 {t('dashboard.waitingAssessment')}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              {t('dashboard.recentActivities')}
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <activity.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              {t('dashboard.upcomingTasks')}
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      {task.deadline}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'สูง' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    task.priority === 'ปานกลาง' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('dashboard.quickActions')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => onTabChange('lesson-planner')}
            className="bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-6 text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-900 dark:text-blue-200">{t('dashboard.createNewLesson')}</p>
          </button>
          <button 
            onClick={() => onTabChange('test-builder')}
            className="bg-green-50 dark:bg-green-900/20 border-2 border-dashed border-green-300 dark:border-green-700 rounded-lg p-6 text-center hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          >
            <ClipboardList className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-900 dark:text-green-200">{t('dashboard.createNewTest')}</p>
          </button>
          <button 
            onClick={() => onTabChange('activity-designer')}
            className="bg-orange-50 dark:bg-orange-900/20 border-2 border-dashed border-orange-300 dark:border-orange-700 rounded-lg p-6 text-center hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
          >
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-orange-900 dark:text-orange-200">{t('dashboard.createNewActivity')}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;