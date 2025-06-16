import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Users, Briefcase, BookOpen, TrendingUp, Plus, Edit, 
  Trash2, Eye, BarChart3, Calendar, DollarSign, Star,
  Settings, Mail, Phone, MapPin, Clock, Award
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { blogPosts, jobPostings, mockUsers, coaches } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const AdminDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: 'Admin User'
  });
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
    experienceLevel: 'Mid-level',
    department: '',
    remote: false
  });

  const stats = [
    { 
      title: 'Total Users', 
      value: '1,247', 
      change: '+12.5%', 
      icon: Users,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Active Jobs', 
      value: '43', 
      change: '+3', 
      icon: Briefcase,
      color: 'from-green-500 to-green-600'
    },
    { 
      title: 'Blog Posts', 
      value: '127', 
      change: '+8', 
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      title: 'Revenue', 
      value: '$24,680', 
      change: '+18.2%', 
      icon: DollarSign,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  const recentUsers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', role: 'user', joinDate: '2025-01-15', status: 'active' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'user', joinDate: '2025-01-14', status: 'active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'coach', joinDate: '2025-01-13', status: 'pending' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'user', joinDate: '2025-01-12', status: 'active' },
  ];

  const handleCreatePost = (e) => {
    e.preventDefault();
    toast({
      title: "Blog post created!",
      description: "The new blog post has been published successfully.",
    });
    setNewPost({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      author: 'Admin User'
    });
    setIsCreating(false);
  };

  const handleCreateJob = (e) => {
    e.preventDefault();
    toast({
      title: "Job posting created!",
      description: "The new job posting has been published successfully.",
    });
    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      requirements: '',
      benefits: '',
      experienceLevel: 'Mid-level',
      department: '',
      remote: false
    });
    setIsCreating(false);
  };

  const handleDeletePost = (id) => {
    toast({
      title: "Post deleted",
      description: "The blog post has been removed successfully.",
    });
  };

  const handleDeleteJob = (id) => {
    toast({
      title: "Job deleted",
      description: "The job posting has been removed successfully.",
    });
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-700';
      case 'coach':
        return 'bg-blue-100 text-blue-700';
      case 'user':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'inactive':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your platform, users, and content from one central location
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
                    <p className="text-xs text-green-600 font-medium">{stat.change}</p>
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
          <TabsList className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-5 bg-white border shadow-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="coaches">Coaches</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">New user registered</p>
                          <p className="text-xs text-gray-500">John Smith joined as a user</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Briefcase className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Job application submitted</p>
                          <p className="text-xs text-gray-500">Senior Software Engineer position</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">4 hours ago</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">New blog post published</p>
                          <p className="text-xs text-gray-500">Interview Preparation guide</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setActiveTab('blog');
                      setIsCreating(true);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Blog Post
                  </Button>
                  <Button 
                    className="w-full justify-start bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => {
                      setActiveTab('jobs');
                      setIsCreating(true);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Job Posting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Platform Settings
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Users */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest user registrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        <span className="text-xs text-gray-500">{user.joinDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage platform users and their permissions</CardDescription>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                        <div className="flex items-center space-x-1">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blog" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Blog Post Management</CardTitle>
                    <CardDescription>Create and manage blog content</CardDescription>
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsCreating(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isCreating ? (
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <Input
                          placeholder="Post title"
                          value={newPost.title}
                          onChange={(e) => setNewPost(prev => ({...prev, title: e.target.value}))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <Select value={newPost.category} onValueChange={(value) => setNewPost(prev => ({...prev, category: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Career Development">Career Development</SelectItem>
                            <SelectItem value="Leadership">Leadership</SelectItem>
                            <SelectItem value="Interview Prep">Interview Prep</SelectItem>
                            <SelectItem value="Personal Branding">Personal Branding</SelectItem>
                            <SelectItem value="Compensation">Compensation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                      <Textarea
                        placeholder="Brief description of the post"
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost(prev => ({...prev, excerpt: e.target.value}))}
                        rows={2}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                      <Textarea
                        placeholder="Post content (HTML supported)"
                        value={newPost.content}
                        onChange={(e) => setNewPost(prev => ({...prev, content: e.target.value}))}
                        rows={8}
                        required
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Publish Post
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                        <div className="flex items-start space-x-4">
                          <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-lg" />
                          <div>
                            <h3 className="font-medium text-gray-900">{post.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span>By {post.author}</span>
                              <span>{post.publishedDate}</span>
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Job Posting Management</CardTitle>
                    <CardDescription>Create and manage job opportunities</CardDescription>
                  </div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setIsCreating(true)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Job
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isCreating ? (
                  <form onSubmit={handleCreateJob} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                        <Input
                          placeholder="e.g. Senior Software Engineer"
                          value={newJob.title}
                          onChange={(e) => setNewJob(prev => ({...prev, title: e.target.value}))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <Input
                          placeholder="Company name"
                          value={newJob.company}
                          onChange={(e) => setNewJob(prev => ({...prev, company: e.target.value}))}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <Input
                          placeholder="e.g. San Francisco, CA"
                          value={newJob.location}
                          onChange={(e) => setNewJob(prev => ({...prev, location: e.target.value}))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                        <Select value={newJob.type} onValueChange={(value) => setNewJob(prev => ({...prev, type: value}))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Freelance">Freelance</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                        <Input
                          placeholder="e.g. $80,000 - $120,000"
                          value={newJob.salary}
                          onChange={(e) => setNewJob(prev => ({...prev, salary: e.target.value}))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                      <Textarea
                        placeholder="Detailed job description"
                        value={newJob.description}
                        onChange={(e) => setNewJob(prev => ({...prev, description: e.target.value}))}
                        rows={4}
                        required
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                        Publish Job
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsCreating(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    {jobPostings.map((job) => (
                      <div key={job.id} className="p-4 border border-gray-100 rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="font-medium text-gray-900">{job.title}</h3>
                            <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{job.type}</Badge>
                              <Badge variant="outline">{job.experienceLevel}</Badge>
                              <span className="text-sm font-medium text-green-600">{job.salary}</span>
                            </div>
                            <p className="text-sm text-gray-500">Posted: {job.postedDate}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteJob(job.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="coaches" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Coach Management</CardTitle>
                    <CardDescription>Manage coaching staff and their profiles</CardDescription>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Coach
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coaches.map((coach) => (
                    <Card key={coach.id} className="border border-gray-100">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <Avatar className="w-16 h-16 mx-auto">
                            <AvatarImage src={coach.image} alt={coach.name} />
                            <AvatarFallback>{coach.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-gray-900">{coach.name}</h3>
                            <p className="text-sm text-blue-600">{coach.title}</p>
                            <p className="text-xs text-gray-500">{coach.specialization}</p>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-3 w-3 ${i < Math.floor(coach.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600">{coach.rating} ({coach.reviewCount})</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;