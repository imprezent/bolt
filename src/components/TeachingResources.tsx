import React, { useState } from 'react';
import { 
  BookOpen, 
  Video, 
  Image, 
  FileText, 
  ExternalLink, 
  Search, 
  Filter,
  Star,
  Download,
  Heart,
  Eye,
  Play,
  Bookmark,
  Share2,
  Globe,
  Youtube,
  Camera,
  Headphones
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image' | 'document' | 'interactive' | 'audio';
  source: string;
  subject: string;
  grade: string[];
  rating: number;
  views: number;
  likes: number;
  thumbnail: string;
  url: string;
  duration?: string;
  tags: string[];
}

const TeachingResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('ทั้งหมด');
  const [selectedSubject, setSelectedSubject] = useState('ทั้งหมด');
  const [selectedSource, setSelectedSource] = useState('ทั้งหมด');
  const [favorites, setFavorites] = useState<string[]>([]);

  const resourceTypes = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด', icon: BookOpen },
    { value: 'video', label: 'วิดีโอ', icon: Video },
    { value: 'image', label: 'รูปภาพ', icon: Image },
    { value: 'document', label: 'เอกสาร', icon: FileText },
    { value: 'interactive', label: 'สื่อโต้ตอบ', icon: Play },
    { value: 'audio', label: 'เสียง', icon: Headphones }
  ];

  const subjects = ['ทั้งหมด', 'ภาษาไทย', 'คณิตศาสตร์', 'วิทยาศาสตร์', 'สังคมศึกษา', 'ภาษาอังกฤษ', 'ศิลปะ'];
  
  const sources = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด', url: '' },
    { value: 'YouTube', label: 'YouTube', url: 'https://www.youtube.com/results?search_query=education+' },
    { value: 'Khan Academy', label: 'Khan Academy', url: 'https://www.khanacademy.org/' },
    { value: 'TED-Ed', label: 'TED-Ed', url: 'https://ed.ted.com/' },
    { value: 'National Geographic', label: 'National Geographic', url: 'https://www.nationalgeographic.org/education/' },
    { value: 'BBC Learning', label: 'BBC Learning', url: 'https://www.bbc.co.uk/bitesize' },
    { value: 'Coursera', label: 'Coursera', url: 'https://www.coursera.org/' },
    { value: 'edX', label: 'edX', url: 'https://www.edx.org/' }
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: 'การอ่านจับใจความสำคัญ - เทคนิคการอ่านอย่างมีประสิทธิภาพ',
      description: 'วิดีโอสอนเทคนิคการอ่านจับใจความสำคัญ พร้อมตัวอย่างและแบบฝึกหัด',
      type: 'video',
      source: 'YouTube',
      subject: 'ภาษาไทย',
      grade: ['ม.1', 'ม.2', 'ม.3'],
      rating: 4.8,
      views: 15420,
      likes: 892,
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      url: 'https://www.youtube.com/results?search_query=การอ่านจับใจความ',
      duration: '12:34',
      tags: ['การอ่าน', 'จับใจความ', 'ทักษะการเรียน']
    },
    {
      id: '2',
      title: 'สมการเชิงเส้นตัวแปรเดียว - แนวคิดพื้นฐานและการแก้ปัญหา',
      description: 'บทเรียนออนไลน์เรื่องสมการเชิงเส้น พร้อมตัวอย่างและแบบฝึกหัดแบบโต้ตอบ',
      type: 'interactive',
      source: 'Khan Academy',
      subject: 'คณิตศาสตร์',
      grade: ['ม.1', 'ม.2'],
      rating: 4.9,
      views: 23150,
      likes: 1205,
      thumbnail: 'https://images.pexels.com/photos/6256/mathematics-computation-math-blackboard.jpg',
      url: 'https://www.khanacademy.org/math/algebra',
      duration: '25:00',
      tags: ['สมการ', 'พีชคณิต', 'คณิตศาสตร์']
    },
    {
      id: '3',
      title: 'ระบบสุริยะและดาวเคราะห์ - การสำรวจอวกาศ',
      description: 'วิดีโอสารคดีเกี่ยวกับระบบสุริยะ ดาวเคราะห์ และการสำรวจอวกาศ',
      type: 'video',
      source: 'National Geographic',
      subject: 'วิทยาศาสตร์',
      grade: ['ป.5', 'ป.6', 'ม.1'],
      rating: 4.7,
      views: 45230,
      likes: 2156,
      thumbnail: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      url: 'https://www.nationalgeographic.org/education/resource-library/solar-system/',
      duration: '18:45',
      tags: ['ดาราศาสตร์', 'ระบบสุริยะ', 'อวกาศ']
    },
    {
      id: '4',
      title: 'ประวัติศาสตร์ไทย - สมัยสุโขทัย',
      description: 'เอกสารประกอบการสอนเรื่องประวัติศาสตร์ไทยสมัยสุโขทัย พร้อมแผนที่และภาพประกอบ',
      type: 'document',
      source: 'TED-Ed',
      subject: 'สังคมศึกษา',
      grade: ['ป.4', 'ป.5', 'ป.6'],
      rating: 4.6,
      views: 12890,
      likes: 567,
      thumbnail: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
      url: 'https://ed.ted.com/lessons?category=history',
      tags: ['ประวัติศาสตร์', 'สุโขทัย', 'ไทย']
    },
    {
      id: '5',
      title: 'English Grammar: Present Perfect Tense',
      description: 'บทเรียนไวยากรณ์ภาษาอังกฤษเรื่อง Present Perfect Tense พร้อมตัวอย่างและแบบฝึกหัด',
      type: 'video',
      source: 'BBC Learning',
      subject: 'ภาษาอังกฤษ',
      grade: ['ม.1', 'ม.2', 'ม.3'],
      rating: 4.5,
      views: 18750,
      likes: 934,
      thumbnail: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
      url: 'https://www.bbc.co.uk/bitesize/topics/zrqqtfr',
      duration: '15:20',
      tags: ['ไวยากรณ์', 'Present Perfect', 'ภาษาอังกฤษ']
    },
    {
      id: '6',
      title: 'ศิลปะการวาดภาพ - เทคนิคการใช้สี',
      description: 'วิดีโอสอนเทคนิคการใช้สีในการวาดภาพ พร้อมการสาธิตขั้นตอนการวาด',
      type: 'video',
      source: 'YouTube',
      subject: 'ศิลปะ',
      grade: ['ป.1', 'ป.2', 'ป.3', 'ป.4'],
      rating: 4.4,
      views: 9876,
      likes: 445,
      thumbnail: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg',
      url: 'https://www.youtube.com/results?search_query=art+painting+techniques',
      duration: '22:15',
      tags: ['ศิลปะ', 'การวาด', 'สี']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'ทั้งหมด' || resource.type === selectedType;
    const matchesSubject = selectedSubject === 'ทั้งหมด' || resource.subject === selectedSubject;
    const matchesSource = selectedSource === 'ทั้งหมด' || resource.source === selectedSource;
    
    return matchesSearch && matchesType && matchesSubject && matchesSource;
  });

  const toggleFavorite = (resourceId: string) => {
    setFavorites(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'image': return Image;
      case 'document': return FileText;
      case 'interactive': return Play;
      case 'audio': return Headphones;
      default: return BookOpen;
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'YouTube': return Youtube;
      case 'National Geographic': return Globe;
      case 'BBC Learning': return Globe;
      default: return ExternalLink;
    }
  };

  const handleSourceClick = (sourceValue: string) => {
    const source = sources.find(s => s.value === sourceValue);
    if (source && source.url) {
      let url = source.url;
      
      // Add subject-specific search terms for YouTube
      if (sourceValue === 'YouTube' && selectedSubject !== 'ทั้งหมด') {
        url += selectedSubject;
      }
      
      window.open(url, '_blank');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
          <BookOpen className="h-8 w-8 mr-3 text-indigo-600" />
          แหล่งสื่อการสอน
        </h2>
        <p className="text-gray-600 dark:text-gray-400">ค้นหาและใช้งานสื่อการสอนคุณภาพสูงจากแหล่งต่างๆ ทั่วโลก</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาสื่อการสอน..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            {resourceTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
          
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            {sources.map(source => (
              <option key={source.value} value={source.value}>{source.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredResources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          const SourceIcon = getSourceIcon(resource.source);
          
          return (
            <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              {/* Thumbnail */}
              <div className="relative">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 flex space-x-2">
                  <span className="px-2 py-1 bg-black bg-opacity-70 text-white rounded text-xs flex items-center">
                    <TypeIcon className="h-3 w-3 mr-1" />
                    {resourceTypes.find(t => t.value === resource.type)?.label}
                  </span>
                  {resource.duration && (
                    <span className="px-2 py-1 bg-black bg-opacity-70 text-white rounded text-xs">
                      {resource.duration}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleFavorite(resource.id)}
                  className="absolute top-2 right-2 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all"
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(resource.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs">
                    {resource.subject}
                  </span>
                  <div className="flex items-center">
                    <SourceIcon className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">{resource.source}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{resource.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{resource.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{resource.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{resource.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Grade levels */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {resource.grade.map((grade, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-sm text-center"
                  >
                    <ExternalLink className="h-4 w-4 inline mr-1" />
                    เปิดดู
                  </a>
                  <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Download className="h-4 w-4" />
                  </button>
                  <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popular Sources */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">แหล่งสื่อยนิยม</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sources.slice(1).map((source, index) => (
            <button
              key={index}
              onClick={() => handleSourceClick(source.value)}
              className="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-2">
                <Globe className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{source.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingResources;