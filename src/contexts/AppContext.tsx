import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AppSettings } from '../types';
import { supabase, Profile } from '../lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AppContextType {
  user: User | null;
  settings: AppSettings;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const translations = {
  th: {
    // Navigation
    'nav.dashboard': 'แดชบอร์ด',
    'nav.lessonPlanner': 'ออกแบบการสอน',
    'nav.activityDesigner': 'ออกแบบกิจกรรม',
    'nav.testBuilder': 'สร้างแบบทดสอบ',
    'nav.studentAssessment': 'ประเมินนักเรียน',
    'nav.studentProfiles': 'โปรไฟล์นักเรียน',
    'nav.teachingMethods': 'วิธีการสอน',
    'nav.teachingResources': 'แหล่งสื่อการสอน',
    'nav.googleIntegrations': 'Google Integration',
    'nav.performanceAnalytics': 'วิเคราะห์ประสิทธิภาพ',
    
    // Auth
    'auth.login': 'เข้าสู่ระบบ',
    'auth.register': 'ลงทะเบียน',
    'auth.logout': 'ออกจากระบบ',
    'auth.email': 'อีเมล',
    'auth.password': 'รหัสผ่าน',
    'auth.confirmPassword': 'ยืนยันรหัสผ่าน',
    'auth.name': 'ชื่อ-นามสกุล',
    'auth.school': 'โรงเรียน',
    
    // Settings
    'settings.title': 'การตั้งค่า',
    'settings.language': 'ภาษา',
    'settings.theme': 'ธีม',
    'settings.fontSize': 'ขนาดตัวอักษร',
    'settings.profile': 'โปรไฟล์',
    
    // Profile
    'profile.title': 'โปรไฟล์ของฉัน',
    'profile.edit': 'แก้ไขโปรไฟล์',
    'profile.bio': 'เกี่ยวกับฉัน',
    'profile.experience': 'ประสบการณ์ (ปี)',
    'profile.subjects': 'วิชาที่สอน',
    'profile.education': 'การศึกษา',
    'profile.certifications': 'ใบรับรอง',
    
    // Dashboard
    'dashboard.welcome': 'ยินดีต้อนรับ',
    'dashboard.todayTasks': 'วันนี้คุณมีงานที่ต้องดำเนินการ',
    'dashboard.studentsWaiting': 'รายการ และมีนักเรียน',
    'dashboard.waitingAssessment': 'คนรอการประเมิน',
    'dashboard.lessonPlans': 'แผนการสอน',
    'dashboard.activities': 'กิจกรรม',
    'dashboard.tests': 'แบบทดสอบ',
    'dashboard.students': 'นักเรียน',
    'dashboard.recentActivities': 'กิจกรรมล่าสุด',
    'dashboard.upcomingTasks': 'งานที่ใกล้ครบกำหนด',
    'dashboard.quickActions': 'การดำเนินการด่วน',
    'dashboard.createNewLesson': 'สร้างแผนการสอนใหม่',
    'dashboard.createNewTest': 'สร้างแบบทดสอบใหม่',
    'dashboard.createNewActivity': 'ออกแบบกิจกรรมใหม่',
    
    // Common
    'common.save': 'บันทึก',
    'common.cancel': 'ยกเลิก',
    'common.edit': 'แก้ไข',
    'common.delete': 'ลบ',
    'common.add': 'เพิ่ม',
    'common.search': 'ค้นหา',
    'common.loading': 'กำลังโหลด...',
    'common.error': 'เกิดข้อผิดพลาด',
    'common.success': 'สำเร็จ',
  },
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.lessonPlanner': 'Lesson Planner',
    'nav.activityDesigner': 'Activity Designer',
    'nav.testBuilder': 'Test Builder',
    'nav.studentAssessment': 'Student Assessment',
    'nav.studentProfiles': 'Student Profiles',
    'nav.teachingMethods': 'Teaching Methods',
    'nav.teachingResources': 'Teaching Resources',
    'nav.googleIntegrations': 'Google Integrations',
    'nav.performanceAnalytics': 'Performance Analytics',
    
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.logout': 'Logout',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.name': 'Full Name',
    'auth.school': 'School',
    
    // Settings
    'settings.title': 'Settings',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.fontSize': 'Font Size',
    'settings.profile': 'Profile',
    
    // Profile
    'profile.title': 'My Profile',
    'profile.edit': 'Edit Profile',
    'profile.bio': 'About Me',
    'profile.experience': 'Experience (Years)',
    'profile.subjects': 'Subjects',
    'profile.education': 'Education',
    'profile.certifications': 'Certifications',
    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.todayTasks': 'Today you have',
    'dashboard.studentsWaiting': 'tasks to complete and',
    'dashboard.waitingAssessment': 'students waiting for assessment',
    'dashboard.lessonPlans': 'Lesson Plans',
    'dashboard.activities': 'Activities',
    'dashboard.tests': 'Tests',
    'dashboard.students': 'Students',
    'dashboard.recentActivities': 'Recent Activities',
    'dashboard.upcomingTasks': 'Upcoming Tasks',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.createNewLesson': 'Create New Lesson Plan',
    'dashboard.createNewTest': 'Create New Test',
    'dashboard.createNewActivity': 'Design New Activity',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.add': 'Add',
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  zh: {
    // Navigation
    'nav.dashboard': '仪表板',
    'nav.lessonPlanner': '课程规划',
    'nav.activityDesigner': '活动设计',
    'nav.testBuilder': '测试构建',
    'nav.studentAssessment': '学生评估',
    'nav.studentProfiles': '学生档案',
    'nav.teachingMethods': '教学方法',
    'nav.teachingResources': '教学资源',
    'nav.googleIntegrations': 'Google集成',
    'nav.performanceAnalytics': '性能分析',
    
    // Auth
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.logout': '登出',
    'auth.email': '邮箱',
    'auth.password': '密码',
    'auth.confirmPassword': '确认密码',
    'auth.name': '姓名',
    'auth.school': '学校',
    
    // Settings
    'settings.title': '设置',
    'settings.language': '语言',
    'settings.theme': '主题',
    'settings.fontSize': '字体大小',
    'settings.profile': '个人资料',
    
    // Profile
    'profile.title': '我的资料',
    'profile.edit': '编辑资料',
    'profile.bio': '关于我',
    'profile.experience': '经验（年）',
    'profile.subjects': '教授科目',
    'profile.education': '教育背景',
    'profile.certifications': '认证',
    
    // Dashboard
    'dashboard.welcome': '欢迎',
    'dashboard.todayTasks': '今天您有',
    'dashboard.studentsWaiting': '项任务要完成，还有',
    'dashboard.waitingAssessment': '名学生等待评估',
    'dashboard.lessonPlans': '课程计划',
    'dashboard.activities': '活动',
    'dashboard.tests': '测试',
    'dashboard.students': '学生',
    'dashboard.recentActivities': '最近活动',
    'dashboard.upcomingTasks': '即将到期的任务',
    'dashboard.quickActions': '快速操作',
    'dashboard.createNewLesson': '创建新课程计划',
    'dashboard.createNewTest': '创建新测试',
    'dashboard.createNewActivity': '设计新活动',
    
    // Common
    'common.save': '保存',
    'common.cancel': '取消',
    'common.edit': '编辑',
    'common.delete': '删除',
    'common.add': '添加',
    'common.search': '搜索',
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.success': '成功',
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [settings, setSettings] = useState<AppSettings>({
    language: 'th',
    theme: 'light',
    fontSize: 'medium'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Check authentication status
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        await loadUserProfile(session.user);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        await loadUserProfile(session.user);
      }
    } catch (error) {
      console.error('Error checking auth:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', supabaseUser.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      const userData: User = {
        id: supabaseUser.id,
        name: profile?.name || supabaseUser.email?.split('@')[0] || 'User',
        email: supabaseUser.email || '',
        role: 'teacher',
        school: profile?.school,
        subjects: profile?.subjects || [],
        experience: profile?.experience || 0,
        bio: profile?.bio,
        avatar: profile?.avatar_url,
        phone: profile?.phone,
        address: profile?.address,
        education: profile?.education || [],
        certifications: profile?.certifications || [],
        socialLinks: profile?.social_links || {}
      };

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      if (data.user) {
        await loadUserProfile(data.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email || '',
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            school: userData.school
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Profile will be created automatically by the trigger
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: userData.name,
          school: userData.school,
          subjects: userData.subjects,
          experience: userData.experience,
          bio: userData.bio,
          phone: userData.phone,
          address: userData.address,
          education: userData.education,
          certifications: userData.certifications,
          social_links: userData.socialLinks,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setUser({ ...user, ...userData });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    localStorage.setItem('appSettings', JSON.stringify(updatedSettings));
  };

  const t = (key: string): string => {
    return translations[settings.language][key] || key;
  };

  return (
    <AppContext.Provider value={{
      user,
      settings,
      isAuthenticated,
      isLoading,
      login,
      logout,
      register,
      updateUser,
      updateSettings,
      t
    }}>
      <div className={`${settings.theme} ${settings.fontSize === 'small' ? 'text-sm' : settings.fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};