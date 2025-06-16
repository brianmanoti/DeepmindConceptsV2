import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { 
  Calendar, Clock, Users, Star, TrendingUp, DollarSign,
  MessageCircle, Video, Phone, Plus, Edit, Eye, CheckCircle,
  Mail, Award, BookOpen, Target, Settings
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const CoachDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { 
      title: 'Total Clients', 
      value: '47', 
      change: '+3 this month', 
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Sessions This Month', 
      value: '23', 
      change: '+5 from last month', 
      icon: Calendar,
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Average Rating', 
      value: '4.9', 
      change: '⭐ Excellent', 
      icon: Star,
      color: 'from-amber-500 to-amber-600'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$4,680', 
      change: '+12% from last month', 
      icon: DollarSign,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      client: 'Jennifer Martinez',
      service: 'Career Transition Coaching',
      date: '2025-01-20',
      time: '2:00 PM',
      duration: '60 minutes',
      type: 'video',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Robert Kim',
      service: 'Interview Preparation',
      date: '2025-01-20',
      time: '4:00 PM',
      duration: '90 minutes',
      type: 'video',
      status: 'confirmed'
    },
    {
      id: 3,
      client: 'Amanda Foster',
      service: 'Leadership Development',
      date: '2025-01-21',
      time: '10:00 AM',
      duration: '75 minutes',
      type: 'phone',
      status: 'pending'
    },
    {
      id: 4,
      client: 'Michael Chen',
      service: 'Resume Review',
      date: '2025-01-21',
      time: '3:00 PM',
      duration: '45 minutes',
      type: 'video',
      status: 'confirmed'
    }
  ];

  const recentClients = [
    {
      id: 1,
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      lastSession: '2025-01-18',
      sessionsCount: 8,
      progress: 85,
      goal: 'Career Transition to Tech'
    },
    {
      id: 2,
      name: 'David Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      lastSession: '2025-01-17',
      sessionsCount: 5,
      progress: 60,
      goal: 'Executive Leadership Skills'
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80',
      lastSession: '2025-01-16',
      sessionsCount: 12,
      progress: 90,
      goal: 'Interview Confidence'
    }
  ];

  const clientNotes = [
    {
      id: 1,
      client: 'Jennifer Martinez',
      note: 'Making excellent progress on interview skills. Recommend focusing on technical questions next session.',
      date: '2025-01-18',
      priority: 'high'
    },
    {
      id: 2,
      client: 'Robert Kim',
      note: 'Client is ready for mock interviews. Schedule follow-up for salary negotiation discussion.',
      date: '2025-01-17',
      priority: 'medium'
    },
    {
      id: 3,
      client: 'Amanda Foster',
      note: 'Leadership assessment completed. Strengths in communication, needs work on delegation.',
      date: '2025-01-16',
      priority: 'low'
    }
  ];

  const getSessionTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
      default:
        return <MessageCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleStartSession = (sessionId) => {
    toast({
      title: "Session started",
      description: "You have joined the coaching session.",
    });
  };

  const handleAddNote = () => {
    toast({
      title: "Note added",
      description: "Client note has been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Coach Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your coaching sessions, clients, and track your progress
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Today's Schedule */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Today's Schedule</span>
                    </CardTitle>
                    <CardDescription>Your coaching sessions for today</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingSessions.slice(0, 3).map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            {getSessionTypeIcon(session.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{session.service}</h3>
                            <p className="text-sm text-gray-600">with {session.client}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                              <span>{session.time}</span>
                              <span>{session.duration}</span>
                              <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => handleStartSession(session.id)}
                        >
                          {session.status === 'confirmed' ? 'Start Session' : 'View Details'}
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Block Time Slot
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message Client
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Create Resource
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Availability Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Monthly Goal</span>
                        <span>23/25 sessions</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Client Satisfaction</span>
                        <span>4.9/5.0</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Response Time</span>
                        <span>< 2 hours</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Clients */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Clients</CardTitle>
                <CardDescription>Your most recent client interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentClients.map((client) => (
                    <div key={client.id} className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={client.avatar} alt={client.name} />
                          <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-gray-900">{client.name}</h3>
                          <p className="text-sm text-gray-600">{client.sessionsCount} sessions</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700">{client.goal}</p>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Progress</span>
                            <span>{client.progress}%</span>
                          </div>
                          <Progress value={client.progress} className="h-1" />
                        </div>
                        <p className="text-xs text-gray-500">Last session: {client.lastSession}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Sessions</CardTitle>
                    <CardDescription>All your scheduled coaching sessions</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-6 border border-gray-100 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                            {getSessionTypeIcon(session.type)}
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-gray-900">{session.service}</h3>
                            <p className="text-gray-600">with {session.client}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(session.date).toLocaleDateString()}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{session.time}</span>
                              </span>
                              <span>{session.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(session.status)}>{session.status}</Badge>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                              onClick={() => handleStartSession(session.id)}
                            >
                              {session.status === 'confirmed' ? 'Start' : 'View'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Client Management</CardTitle>
                    <CardDescription>View and manage your coaching clients</CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Client
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentClients.map((client) => (
                    <div key={client.id} className="p-6 border border-gray-100 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={client.avatar} alt={client.name} />
                            <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-3">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                              <p className="text-gray-600">{client.goal}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Total Sessions:</span>
                                <span className="ml-2 font-medium">{client.sessionsCount}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Last Session:</span>
                                <span className="ml-2 font-medium">{client.lastSession}</span>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-500">Goal Progress</span>
                                <span className="font-medium">{client.progress}%</span>
                              </div>
                              <Progress value={client.progress} className="h-2 w-64" />
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            View Profile
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <Calendar className="h-4 w-4 mr-1" />
                            Schedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Client Notes</CardTitle>
                    <CardDescription>Keep track of client progress and important information</CardDescription>
                  </div>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={handleAddNote}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {clientNotes.map((note) => (
                  <div key={note.id} className={`p-4 border rounded-lg ${getPriorityColor(note.priority)}`}>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-gray-900">{note.client}</h3>
                          <Badge className={`text-xs ${getPriorityColor(note.priority)}`}>
                            {note.priority} priority
                          </Badge>
                        </div>
                        <p className="text-gray-700">{note.note}</p>
                        <p className="text-sm text-gray-500">{note.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoachDashboard;