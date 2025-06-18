import React, { useState } from 'react';
import { AppProvider, useApp } from './contexts/AppContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LessonPlanner from './components/LessonPlanner';
import ActivityDesigner from './components/ActivityDesigner';
import TestBuilder from './components/TestBuilder';
import StudentAssessment from './components/StudentAssessment';
import StudentProfiles from './components/StudentProfiles';
import TeachingMethods from './components/TeachingMethods';
import TeachingResources from './components/TeachingResources';
import GoogleIntegrations from './components/GoogleIntegrations';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import LoginPage from './components/Auth/LoginPage';
import RegisterPage from './components/Auth/RegisterPage';
import ProfilePage from './components/Profile/ProfilePage';
import SettingsPage from './components/Settings/SettingsPage';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading, settings } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onTabChange={setActiveTab} />;
      case 'lesson-planner':
        return <LessonPlanner />;
      case 'activity-designer':
        return <ActivityDesigner />;
      case 'test-builder':
        return <TestBuilder />;
      case 'student-assessment':
        return <StudentAssessment />;
      case 'student-profiles':
        return <StudentProfiles />;
      case 'teaching-methods':
        return <TeachingMethods />;
      case 'teaching-resources':
        return <TeachingResources />;
      case 'google-integrations':
        return <GoogleIntegrations />;
      case 'performance-analytics':
        return <PerformanceAnalytics />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard onTabChange={setActiveTab} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return authMode === 'login' ? (
      <LoginPage onSwitchToRegister={() => setAuthMode('register')} />
    ) : (
      <RegisterPage onSwitchToLogin={() => setAuthMode('login')} />
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      settings.theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="transition-colors duration-200">
        {renderContent()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;