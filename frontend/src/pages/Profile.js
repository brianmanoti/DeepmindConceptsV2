import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { 
  User, Mail, Phone, MapPin, Building, Calendar, 
  Shield, Bell, Eye, Save, Upload, Award, Target,
  BookOpen, Briefcase, Star, Settings, Camera
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    company: '',
    position: '',
    industry: '',
    experience: '',
    bio: '',
    website: '',
    linkedin: '',
    github: '',
    skills: [],
    interests: []
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    jobAlerts: true,
    blogUpdates: true,
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile updated!",
      description: "Your profile information has been saved successfully.",
    });
    setIsEditing(false);
  };

  const handleSavePreferences = () => {
    toast({
      title: "Preferences updated!",
      description: "Your notification preferences have been saved.",
    });
  };

  const handleSaveSecurity = () => {
    toast({
      title: "Security settings updated!",
      description: "Your security preferences have been saved.",
    });
  };

  const handleAvatarUpload = () => {
    toast({
      title: "Avatar updated!",
      description: "Your profile picture has been uploaded successfully.",
    });
  };

  const achievements = [
    { 
      id: 1, 
      title: 'Profile Completed', 
      description: 'Complete your profile information',
      icon: User,
      completed: true,
      date: '2025-01-15'
    },
    { 
      id: 2, 
      title: 'First Job Application', 
      description: 'Apply to your first job posting',
      icon: Briefcase,
      completed: true,
      date: '2025-01-16'
    },
    { 
      id: 3, 
      title: 'Blog Engagement', 
      description: 'Like and comment on 5 blog posts',
      icon: BookOpen,
      completed: false,
      progress: 60
    },
    { 
      id: 4, 
      title: 'Coaching Session', 
      description: 'Complete your first coaching session',
      icon: Target,
      completed: false,
      progress: 0
    }
  ];

  const activityHistory = [
    {
      id: 1,
      action: 'Applied to job',
      item: 'Senior Software Engineer at TechFlow',
      date: '2025-01-18',
      type: 'job'
    },
    {
      id: 2,
      action: 'Liked blog post',
      item: '5 Essential Skills for Career Advancement',
      date: '2025-01-17',
      type: 'blog'
    },
    {
      id: 3,
      action: 'Updated profile',
      item: 'Added new skills and experience',
      date: '2025-01-16',
      type: 'profile'
    },
    {
      id: 4,
      action: 'Bookmarked job',
      item: 'Marketing Manager at Growth Dynamics',
      date: '2025-01-15',
      type: 'job'
    }
  ];

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Project Management',
    'Leadership', 'Communication', 'Problem Solving', 'Analytics'
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Marketing',
    'Sales', 'Consulting', 'Manufacturing', 'Retail', 'Non-profit'
  ];

  const experienceLevels = [
    'Student/Entry Level', '1-2 years', '3-5 years', 
    '6-10 years', '11-15 years', '16+ years'
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'job':
        return <Briefcase className="h-4 w-4" />;
      case 'blog':
        return <BookOpen className="h-4 w-4" />;
      case 'profile':
        return <User className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 mx-auto ring-4 ring-blue-100">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-800 text-white text-2xl">
                        {user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      className="absolute bottom-0 right-1/2 transform translate-x-8 translate-y-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 p-0"
                      onClick={handleAvatarUpload}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{user?.name}</h3>
                    <p className="text-blue-600 font-medium capitalize">{user?.role}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-gray-900">12</div>
                      <div className="text-xs text-gray-500">Jobs Applied</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">8</div>
                      <div className="text-xs text-gray-500">Posts Liked</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">3</div>
                      <div className="text-xs text-gray-500">Sessions</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Profile Completion</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.slice(0, 3).map((achievement) => (
                  <div key={achievement.id} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <achievement.icon className={`h-4 w-4 ${
                        achievement.completed ? 'text-green-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                      {achievement.completed ? (
                        <p className="text-xs text-green-600">Completed</p>
                      ) : (
                        <p className="text-xs text-gray-500">{achievement.progress}% complete</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and professional information</CardDescription>
                      </div>
                      <Button
                        variant={isEditing ? "outline" : "default"}
                        onClick={() => setIsEditing(!isEditing)}
                        className={isEditing ? "" : "bg-blue-600 hover:bg-blue-700 text-white"}
                      >
                        {isEditing ? "Cancel" : "Edit Profile"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData(prev => ({...prev, name: e.target.value}))}
                          disabled={!isEditing}
                          className="border-gray-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({...prev, email: e.target.value}))}
                          disabled={!isEditing}
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData(prev => ({...prev, phone: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="+1 (555) 123-4567"
                          className="border-gray-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData(prev => ({...prev, location: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="City, State"
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={profileData.company}
                          onChange={(e) => setProfileData(prev => ({...prev, company: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="Current company"
                          className="border-gray-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position</Label>
                        <Input
                          id="position"
                          value={profileData.position}
                          onChange={(e) => setProfileData(prev => ({...prev, position: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="Current role"
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <Select 
                          value={profileData.industry} 
                          onValueChange={(value) => setProfileData(prev => ({...prev, industry: value}))}
                          disabled={!isEditing}
                        >
                          <SelectTrigger className="border-gray-200">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map(industry => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select 
                          value={profileData.experience} 
                          onValueChange={(value) => setProfileData(prev => ({...prev, experience: value}))}
                          disabled={!isEditing}
                        >
                          <SelectTrigger className="border-gray-200">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map(level => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData(prev => ({...prev, bio: e.target.value}))}
                        disabled={!isEditing}
                        placeholder="Tell us about yourself and your career goals..."
                        rows={4}
                        className="border-gray-200"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          value={profileData.website}
                          onChange={(e) => setProfileData(prev => ({...prev, website: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="https://yourwebsite.com"
                          className="border-gray-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profileData.linkedin}
                          onChange={(e) => setProfileData(prev => ({...prev, linkedin: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="LinkedIn profile URL"
                          className="border-gray-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profileData.github}
                          onChange={(e) => setProfileData(prev => ({...prev, github: e.target.value}))}
                          disabled={!isEditing}
                          placeholder="GitHub profile URL"
                          className="border-gray-200"
                        />
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex space-x-4">
                        <Button 
                          onClick={handleSaveProfile}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Control how you receive notifications and updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-gray-600">Receive notifications via email</p>
                        </div>
                        <Switch
                          checked={preferences.emailNotifications}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, emailNotifications: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-gray-600">Receive important updates via SMS</p>
                        </div>
                        <Switch
                          checked={preferences.smsNotifications}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, smsNotifications: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Marketing Emails</Label>
                          <p className="text-sm text-gray-600">Receive promotional content and tips</p>
                        </div>
                        <Switch
                          checked={preferences.marketingEmails}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, marketingEmails: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Job Alerts</Label>
                          <p className="text-sm text-gray-600">Get notified about relevant job opportunities</p>
                        </div>
                        <Switch
                          checked={preferences.jobAlerts}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, jobAlerts: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Blog Updates</Label>
                          <p className="text-sm text-gray-600">Receive notifications about new blog posts</p>
                        </div>
                        <Switch
                          checked={preferences.blogUpdates}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, blogUpdates: checked}))}
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={handleSavePreferences}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Control your profile visibility and data sharing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Profile Visibility</Label>
                      <Select 
                        value={preferences.profileVisibility} 
                        onValueChange={(value) => setPreferences(prev => ({...prev, profileVisibility: value}))}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                          <SelectItem value="connections">Connections Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Show Email Address</Label>
                          <p className="text-sm text-gray-600">Display your email on public profile</p>
                        </div>
                        <Switch
                          checked={preferences.showEmail}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, showEmail: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Show Phone Number</Label>
                          <p className="text-sm text-gray-600">Display your phone number on public profile</p>
                        </div>
                        <Switch
                          checked={preferences.showPhone}
                          onCheckedChange={(checked) => setPreferences(prev => ({...prev, showPhone: checked}))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security and authentication</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <Switch
                          checked={securitySettings.twoFactorEnabled}
                          onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, twoFactorEnabled: checked}))}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Login Alerts</Label>
                          <p className="text-sm text-gray-600">Get notified when your account is accessed</p>
                        </div>
                        <Switch
                          checked={securitySettings.loginAlerts}
                          onCheckedChange={(checked) => setSecuritySettings(prev => ({...prev, loginAlerts: checked}))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Session Timeout</Label>
                      <Select 
                        value={securitySettings.sessionTimeout} 
                        onValueChange={(value) => setSecuritySettings(prev => ({...prev, sessionTimeout: value}))}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="120">2 hours</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <Button variant="outline" className="w-full">
                        <Shield className="h-4 w-4 mr-2" />
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Login History
                      </Button>
                    </div>

                    <Button 
                      onClick={handleSaveSecurity}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Security Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent actions and interactions on the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activityHistory.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">
                              <span className="font-medium">{activity.action}</span> {activity.item}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                    <CardDescription>Your progress and milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="p-4 border border-gray-100 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              achievement.completed ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              <achievement.icon className={`h-5 w-5 ${
                                achievement.completed ? 'text-green-600' : 'text-gray-400'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                              {achievement.completed ? (
                                <div className="flex items-center space-x-2 mt-2">
                                  <Badge className="bg-green-100 text-green-700">Completed</Badge>
                                  <span className="text-xs text-gray-500">{achievement.date}</span>
                                </div>
                              ) : (
                                <div className="mt-2">
                                  <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-500">Progress</span>
                                    <span>{achievement.progress}%</span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-1">
                                    <div 
                                      className="bg-blue-600 h-1 rounded-full transition-all duration-300" 
                                      style={{ width: `${achievement.progress}%` }}
                                    ></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;