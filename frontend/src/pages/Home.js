import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Star, Users, Target, Zap, Clock, Heart, TrendingUp } from 'lucide-react';
import { blogPosts, testimonials } from '../data/mockData';

const Home = () => {
  const featuredPosts = blogPosts.slice(0, 3);
  const stats = [
    { label: 'Clients Coached', value: '1,500+', icon: Users },
    { label: 'Success Rate', value: '94%', icon: Target },
    { label: 'Years Experience', value: '10+', icon: TrendingUp },
    { label: 'Happy Clients', value: '98%', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f1f5f9" fill-opacity="0.3"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                  🚀 Transforming Careers Since 2015
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock Your
                  <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                    {' '}Career Potential
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Expert career coaching, leadership development, and personalized guidance 
                  to help you achieve professional excellence and career satisfaction.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
                >
                  <Link to="/coaching">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                >
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <stat.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl transform rotate-6 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=980&q=80" 
                  alt="Professional coaching session" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Career Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From career transitions to leadership development, we offer personalized 
              coaching services designed to accelerate your professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Career Coaching",
                description: "Personalized guidance to help you navigate career transitions and achieve your goals.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "Leadership Development",
                description: "Develop essential leadership skills and executive presence for career advancement.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Zap,
                title: "Interview Preparation",
                description: "Master the interview process with proven strategies and confidence-building techniques.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: TrendingUp,
                title: "Resume Optimization",
                description: "Professional resume review and optimization to make you stand out to employers.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Link to="/coaching">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Career Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with expert advice, industry trends, and actionable strategies 
              to accelerate your career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-600">
                    {post.readTime}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{post.author}</span>
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm" 
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto"
                    >
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers with our coaching services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have achieved career success with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
            >
              <Link to="/coaching">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;