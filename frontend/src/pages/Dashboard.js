import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { 
  Calendar, Clock, BookOpen, Target, TrendingUp, 
  Star, Heart, Bookmark, User, Mail, Phone, 
  MapPin, Briefcase, Award, CheckCircle, ArrowRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { blogPosts, jobPostings, coachingServices, getFromLocalStorage } from '../data/mockData';

const Dashboard = () => {
  const { user } = useAuth();
  const [userStats, setUserStats] = useState({
    savedJobs: 0,
    likedPosts: 0,
    bookmarkedPosts: 0,
    sessionsBooked: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Load user data from localStorage
    const savedJobs = getFromLocalStorage('savedJobs', []);
    const likedPosts = getFromLocalStorage('likedPosts', []);
    const bookmarkedPosts = getFromLocalStorage('bookmarkedPosts', []);
    const bookedSessions = getFromLocalStorage('bookedSessions', []);

    setUserStats({
      savedJobs: savedJobs.length,
      likedPosts: likedPosts.length,
      bookmarkedPosts: bookmarkedPosts.length,
      sessionsBooked: bookedSessions.length
    });

    // Mock recent activity
    setRecentActivity([
      {
        id: 1,
        type: 'job',
        action: 'Applied to',
        item: 'Senior Software Engineer at TechFlow Solutions',
        time: '2 hours ago',
        status: 'pending'
      },
      {
        id: 2,
        type: 'blog',
        action: 'Liked',
        item: '5 Essential Skills for Career Advancement in 2025',
        time: '1 day ago',
        status: 'completed'
      },
      {
        id: 3,
        type: 'coaching',
        action: 'Booked session',
        item: 'Interview Preparation with Rachel Williams',
        time: '2 days ago',
        status: 'upcoming'
      }
    ]);
  }, []);

  const upcomingSessions = [
    {
      id: 1,
      title: 'Career Transition Coaching',
      coach: 'Sarah Johnson',
      date: '2025-01-20',
      time: '2:00 PM',
      duration: '60 minutes',
      type: 'video'
    },
    {
      id: 2,
      title: 'Interview Preparation',
      coach: 'Rachel Williams',
      date: '2025-01-25',
      time: '10:00 AM',
      duration: '90 minutes',
      type: 'video'
    }
  ];

  const recommendedJobs = jobPostings.slice(0, 3);
  const recommendedPosts = blogPosts.slice(0, 3);

  const getActivityIcon = (type) => {
    switch (type) {
      case 'job':
        return <Briefcase className="h-4 w-4" />;
      case 'blog':
        return <BookOpen className="h-4 w-4" />;
      case 'coaching':
        return <User className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what's happening with your career journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.savedJobs}</div>
                  <div className="text-sm text-gray-600">Saved Jobs</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.likedPosts}</div>
                  <div className="text-sm text-gray-600">Liked Posts</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Bookmark className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.bookmarkedPosts}</div>
                  <div className="text-sm text-gray-600">Bookmarks</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{userStats.sessionsBooked}</div>
                  <div className="text-sm text-gray-600">Sessions</div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Sessions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Coaching Sessions</span>
                </CardTitle>
                <CardDescription>
                  Your scheduled coaching appointments
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.length > 0 ? (
                  upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{session.title}</h3>
                          <p className="text-sm text-gray-600">with {session.coach}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span>{session.time}</span>
                            <span>{session.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Join Session
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No upcoming sessions scheduled</p>
                    <Button asChild>
                      <Link to="/coaching">Book a Session</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>
                  Your latest interactions and updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-xs text-gray-500">{activity.time}</p>
                          <Badge className={`text-xs ${getStatusColor(activity.status)}`}>
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5" />
                      <span>Recommended Jobs</span>
                    </CardTitle>
                    <CardDescription>
                      Opportunities that match your profile
                    </CardDescription>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/jobs">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experienceLevel}
                          </Badge>
                          <span className="text-sm font-medium text-green-600">{job.salary}</span>
                        </div>
                      </div>
                      <Button size="sm" asChild>
                        <Link to={`/jobs/${job.id}`}>View</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-20 h-20 mx-auto ring-4 ring-blue-100">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xl">
                      {user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                    <p className="text-blue-600 font-medium capitalize">{user?.role}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Profile Completion</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/profile">Edit Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Articles */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Recommended Reading</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`}
                    className="block group"
                  >
                    <div className="flex space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 flex items-center space-x-2">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/blog">View All Articles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/coaching">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Coaching Session
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/jobs">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Browse Jobs
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/blog">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Articles
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;