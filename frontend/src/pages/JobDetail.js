import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Separator } from '../components/ui/separator';
import { 
  MapPin, DollarSign, Clock, Building, Users, ArrowLeft, 
  CheckCircle, AlertCircle, Calendar, FileText, Send, 
  Bookmark, Share2, Heart 
} from 'lucide-react';
import { jobPostings } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const job = jobPostings.find(j => j.id === parseInt(id));
  const [isApplying, setIsApplying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    resume: null,
    phone: '',
    linkedIn: ''
  });

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
          <Button asChild>
            <Link to="/jobs">Back to Jobs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleApply = (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to apply for jobs.",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }

    // Simulate application submission
    toast({
      title: "Application submitted!",
      description: "Your application has been sent to the employer. We'll keep you updated on the status.",
    });
    
    setIsApplying(false);
    setApplicationData({
      coverLetter: '',
      resume: null,
      phone: '',
      linkedIn: ''
    });
  };

  const handleSave = () => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to save jobs.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job removed from saved" : "Job saved!",
      description: isSaved ? "Job removed from your saved list." : "Job saved to your profile for later.",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${job.title} at ${job.company}`,
          text: job.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Job URL copied to clipboard.",
      });
    }
  };

  const relatedJobs = jobPostings
    .filter(j => j.id !== job.id && (j.department === job.department || j.experienceLevel === job.experienceLevel))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/jobs')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Jobs
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className={isSaved ? "bg-amber-50 border-amber-200 text-amber-700" : ""}
              >
                <Bookmark className={`h-4 w-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                        <div className="flex items-center space-x-6 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Building className="h-5 w-5" />
                            <span className="text-lg font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge variant={job.remote ? "default" : "secondary"} className={job.remote ? "bg-green-100 text-green-700" : ""}>
                          {job.remote ? 'Remote' : 'On-site'}
                        </Badge>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {job.experienceLevel}
                        </Badge>
                        <Badge variant="outline">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 mb-1">{job.salary}</div>
                      <div className="text-sm text-gray-500">per year</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Posted</div>
                        <div className="text-sm text-gray-600">{new Date(job.postedDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Deadline</div>
                        <div className="text-sm text-red-600">{new Date(job.applicationDeadline).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Department</div>
                        <div className="text-sm text-gray-600">{job.department}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Job Description</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">{job.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Heart className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            {isApplying && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Apply for this Position</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleApply} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={applicationData.phone}
                          onChange={(e) => setApplicationData(prev => ({...prev, phone: e.target.value}))}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <Input
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          value={applicationData.linkedIn}
                          onChange={(e) => setApplicationData(prev => ({...prev, linkedIn: e.target.value}))}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                      </label>
                      <Textarea
                        placeholder="Tell us why you're the perfect fit for this role..."
                        rows={6}
                        value={applicationData.coverLetter}
                        onChange={(e) => setApplicationData(prev => ({...prev, coverLetter: e.target.value}))}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV
                      </label>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Supported formats: PDF, DOC, DOCX (max 5MB)
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Application
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setIsApplying(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Apply CTA */}
            <Card className="border-0 shadow-lg sticky top-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {!isApplying ? (
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 h-12 text-lg"
                      onClick={() => setIsApplying(true)}
                    >
                      Apply Now
                    </Button>
                  ) : (
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <AlertCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-blue-700 font-medium">Fill out the application form below</p>
                    </div>
                  )}
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>Application deadline:</p>
                    <p className="font-medium text-red-600">{new Date(job.applicationDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {job.company.charAt(0)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {job.company} is a leading company in the {job.department.toLowerCase()} space, 
                  known for innovation and creating exceptional products that impact millions of users worldwide.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Industry:</span>
                    <span className="font-medium">{job.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company Size:</span>
                    <span className="font-medium">500-1000 employees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Founded:</span>
                    <span className="font-medium">2010</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Related Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <Link 
                      key={relatedJob.id} 
                      to={`/jobs/${relatedJob.id}`}
                      className="block group"
                    >
                      <div className="p-4 border border-gray-100 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-200">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                          {relatedJob.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">{relatedJob.company}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-green-600 font-medium">{relatedJob.salary}</span>
                          <Badge variant="outline" className="text-xs">
                            {relatedJob.type}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;