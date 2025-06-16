import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { 
  Mail, Phone, MapPin, Clock, MessageCircle, 
  Send, CheckCircle, Users, Target, Zap, HeadphonesIcon 
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    company: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: '',
      company: '',
      preferredContact: 'email'
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@deepmindconcepts.com",
      description: "Send us an email anytime",
      action: "mailto:info@deepmindconcepts.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive",
      description: "San Francisco, CA 94105",
      action: "#"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Get instant support",
      action: "#"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
  ];

  const faqs = [
    {
      question: "How do I schedule a coaching session?",
      answer: "You can schedule a coaching session by visiting our Coaching page and selecting your preferred service, coach, and available time slot. You can also contact us directly for assistance."
    },
    {
      question: "What are your coaching rates?",
      answer: "Our coaching rates vary depending on the service and coach. Individual sessions range from $100-$200, with package deals available for multiple sessions. Contact us for detailed pricing."
    },
    {
      question: "Do you offer group coaching sessions?",
      answer: "Yes, we offer both group workshops and individual coaching sessions. Group sessions are a cost-effective way to receive professional coaching while networking with peers."
    },
    {
      question: "Can coaching sessions be conducted remotely?",
      answer: "Absolutely! We offer video calls, phone sessions, and in-person meetings. Many of our clients prefer remote sessions for convenience and flexibility."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require 24-hour notice for cancellations or rescheduling. Cancellations with less than 24-hour notice may be subject to a fee."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions about our services? Ready to start your career transformation? 
              We're here to help you take the next step towards professional success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-amber-400 text-amber-900 px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                24-hour response time
              </Badge>
              <Badge className="bg-green-400 text-green-900 px-4 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free consultation available
              </Badge>
              <Badge className="bg-purple-400 text-purple-900 px-4 py-2">
                <HeadphonesIcon className="h-4 w-4 mr-2" />
                Expert support team
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Send className="h-6 w-6 text-blue-600" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <Input
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Subject and Category */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        required
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coaching">Career Coaching</SelectItem>
                          <SelectItem value="interview">Interview Preparation</SelectItem>
                          <SelectItem value="resume">Resume Review</SelectItem>
                          <SelectItem value="leadership">Leadership Development</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                      <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="both">Either Email or Phone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us more about how we can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-700">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Users className="h-4 w-4 mr-2" />
                  View Our Services
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
                  <Target className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
              <p className="text-gray-600 text-center">
                Quick answers to common questions about our services
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Full FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Map */}
        <div className="mt-20">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Visit Our Office</CardTitle>
              <p className="text-gray-600 text-center">
                Located in the heart of San Francisco's innovation district
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 h-64 flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">123 Innovation Drive, San Francisco, CA 94105</p>
                  <Button variant="outline" className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;