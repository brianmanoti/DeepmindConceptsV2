import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, MapPin, Clock, DollarSign, Building, Users, Filter, Briefcase, ArrowRight } from 'lucide-react';
import { jobPostings } from '../data/mockData';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const locations = ['all', ...new Set(jobPostings.map(job => job.location))];
  const jobTypes = ['all', ...new Set(jobPostings.map(job => job.type))];
  const experienceLevels = ['all', ...new Set(jobPostings.map(job => job.experienceLevel))];

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLevel = selectedLevel === 'all' || job.experienceLevel === selectedLevel;
    
    return matchesSearch && matchesLocation && matchesType && matchesLevel;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.postedDate) - new Date(a.postedDate);
      case 'salary':
        return b.salary.localeCompare(a.salary);
      case 'company':
        return a.company.localeCompare(b.company);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Find Your Dream Career
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover exciting opportunities with trusted companies. We partner with top employers 
              to bring you the best career opportunities in your field.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">{jobPostings.length}+</div>
                <div className="text-blue-100">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-blue-100">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search */}
                <div className="lg:col-span-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Location Filter */}
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Job Type Filter */}
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Experience Level Filter */}
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level === 'all' ? 'All Levels' : level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                    <Filter className="h-4 w-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Latest First</SelectItem>
                    <SelectItem value="salary">By Salary</SelectItem>
                    <SelectItem value="company">By Company</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-gray-600">
              Showing {sortedJobs.length} of {jobPostings.length} jobs
            </div>
            <Button variant="outline" className="hidden sm:flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Advanced Filters</span>
            </Button>
          </div>

          <div className="space-y-6">
            {sortedJobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {job.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <Badge variant={job.remote ? "default" : "secondary"} className={job.remote ? "bg-green-100 text-green-700" : ""}>
                                {job.remote ? 'Remote' : 'On-site'}
                              </Badge>
                              <Badge variant="outline" className="border-blue-200 text-blue-700">
                                {job.experienceLevel}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-6 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium text-green-600">{job.salary}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                          </div>
                          <div className="mt-1">
                            <Badge variant="outline" className="text-xs">
                              {job.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3">
                        <p className="text-gray-600 leading-relaxed line-clamp-2">
                          {job.description}
                        </p>
                        
                        {/* Requirements Preview */}
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              +{job.requirements.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-2 lg:ml-8">
                      <Button 
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        <Link to={`/jobs/${job.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Save Job
                      </Button>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <div>
                      Department: <span className="font-medium text-gray-700">{job.department}</span>
                    </div>
                    <div>
                      Apply by: <span className="font-medium text-red-600">{new Date(job.applicationDeadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find opportunities that match your criteria.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('all');
                  setSelectedType('all');
                  setSelectedLevel('all');
                  setSortBy('date');
                }}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {sortedJobs.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                  1
                </Button>
                <Button variant="outline">
                  2
                </Button>
                <Button variant="outline">
                  3
                </Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Job Alert CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Never Miss the Perfect Job
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Set up job alerts and get notified when new opportunities matching your criteria are posted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-white h-12"
              />
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 h-12"
              >
                Create Alert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;