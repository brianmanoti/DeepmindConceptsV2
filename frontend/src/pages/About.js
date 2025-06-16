import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Target, Award, TrendingUp, Heart, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We are committed to delivering exceptional results and exceeding expectations in every interaction."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand that every career journey is unique and approach each client with genuine care and understanding."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards and build relationships based on trust and transparency."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our methods and embrace new technologies to provide cutting-edge career solutions."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & CEO",
      specialty: "Executive Leadership",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      bio: "Former Fortune 500 executive turned career coach, specializing in C-suite transitions and leadership development."
    },
    {
      name: "Michael Chen",
      role: "Senior Career Coach",
      specialty: "Career Transitions",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      bio: "Expert in helping professionals navigate career pivots, with a focus on tech and finance industries."
    },
    {
      name: "Rachel Williams",
      role: "Interview Specialist",
      specialty: "Interview Coaching",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      bio: "Former corporate recruiter with deep insights into what employers really want to see in candidates."
    },
    {
      name: "David Rodriguez",
      role: "Personal Brand Expert",
      specialty: "Brand Development",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&h=387&q=80",
      bio: "Digital marketing expert helping professionals build powerful personal brands that open doors."
    }
  ];

  const achievements = [
    { number: "1,500+", label: "Clients Coached", icon: Users },
    { number: "94%", label: "Success Rate", icon: Target },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Industry Awards", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                  🎯 About DeepMind Concepts
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering Careers,
                  <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
                    {' '}Transforming Lives
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2015, DeepMind Concepts has been at the forefront of career development, 
                  helping professionals unlock their potential and achieve extraordinary success.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&h=980&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed text-lg">
                  To empower professionals at every stage of their career journey with personalized coaching, 
                  strategic guidance, and innovative solutions that unlock their full potential and create 
                  lasting professional success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed text-lg">
                  To become the global leader in career development, creating a world where every professional 
                  has the tools, confidence, and opportunities to achieve their career aspirations and make a 
                  meaningful impact in their chosen field.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach to career coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experienced coaches brings together decades of industry expertise 
              and proven track records in career development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {member.name}
                  </CardTitle>
                  <div className="text-blue-600 font-medium">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.specialty}</div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and the success of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              DeepMind Concepts was born from a simple yet powerful observation: traditional career guidance 
              often falls short of addressing the complex, rapidly evolving challenges that modern professionals face. 
              Our founder, Dr. Sarah Mitchell, experienced this firsthand during her own career transition from 
              corporate executive to entrepreneur.
            </p>
            
            <p>
              After spending over a decade in Fortune 500 companies, Sarah recognized that despite having access 
              to traditional career resources, many talented professionals were struggling to navigate career changes, 
              build authentic personal brands, and achieve the level of success they deserved. This realization sparked 
              the vision for a different kind of career development company.
            </p>
            
            <p>
              Since our founding in 2015, we've helped over 1,500 professionals across various industries transform 
              their careers. Our approach combines proven coaching methodologies with cutting-edge insights from 
              psychology, neuroscience, and behavioral economics to create personalized development programs that 
              deliver measurable results.
            </p>
            
            <p>
              Today, DeepMind Concepts stands as a trusted partner for professionals at every stage of their career 
              journey, from recent graduates to C-suite executives. We continue to evolve our services and methodologies 
              to stay ahead of industry trends and provide our clients with the competitive edge they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the hundreds of professionals who have transformed their careers with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
            >
              <Link to="/coaching">
                Schedule a Consultation
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
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

export default About;