import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, CalendarDaysIcon } from '../components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Target, Users, Zap, TrendingUp, Clock, DollarSign, 
  Star, Calendar as CalendarIcon, CheckCircle, ArrowRight,
  MessageCircle, Video, Phone, BookOpen
} from 'lucide-react';
import { coachingServices, coaches, testimonials } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const Coaching = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    goals: '',
    experience: '',
    challenges: '',
    contactMethod: 'video'
  });
  
  const { user } = useAuth();
  const { toast } = useToast();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to book coaching sessions.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedService || !selectedCoach || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a service, coach, date, and time.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking
    toast({
      title: "Session booked successfully!",
      description: `Your ${selectedService.title} session with ${selectedCoach.name} has been scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedService(null);
    setSelectedCoach(null);
    setSelectedTime('');
    setIsBooking(false);
    setBookingData({
      goals: '',
      experience: '',
      challenges: '',
      contactMethod: 'video'
    });
  };

  const serviceFeatures = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Tailored coaching strategies based on your unique career goals and challenges."
    },
    {
      icon: Users,
      title: "Expert Coaches",
      description: "Work with industry experts who have helped hundreds of professionals succeed."
    },
    {
      icon: Zap,
      title: "Proven Methods",
      description: "Evidence-based coaching techniques that deliver measurable results."
    },
    {
      icon: TrendingUp,
      title: "Ongoing Support",
      description: "Continuous guidance and support throughout your career journey."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Professional Career Coaching
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Accelerate your career growth with personalized coaching from industry experts. 
              Get the guidance, tools, and confidence you need to achieve your professional goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">1,500+</div>
                <div className="text-blue-100">Clients Coached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">94%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">4.9/5</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaching */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Coaching?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our coaching approach is designed to deliver real, measurable results for your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Coaching Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of coaching services designed to address your specific career needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coachingServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    onClick={() => {
                      setSelectedService(service);
                      setIsBooking(true);
                    }}
                  >
                    Book This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Coaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with industry professionals who bring years of experience and proven track records.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <Card key={coach.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {coach.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {coach.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{coach.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{coach.specialization}</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(coach.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{coach.rating}</span>
                    <span className="text-sm text-gray-500">({coach.reviewCount} reviews)</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {coach.bio}
                  </p>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Available:</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {coach.availability.map((day, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => {
                      setSelectedCoach(coach);
                      setIsBooking(true);
                    }}
                  >
                    Book with {coach.name.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBooking && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="sticky top-0 z-10 bg-white border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Book Your Coaching Session</CardTitle>
                <Button variant="ghost" onClick={() => setIsBooking(false)}>
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleBooking} className="space-y-8">
                {/* Service Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Select Service</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {coachingServices.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedService?.id === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedService(service)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{service.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{service.duration}</p>
                          </div>
                          <div className="text-lg font-bold text-blue-600">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coach Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Select Coach</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {coaches.map((coach) => (
                      <div
                        key={coach.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedCoach?.id === coach.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedCoach(coach)}
                      >
                        <div className="text-center">
                          <Avatar className="w-16 h-16 mx-auto mb-2">
                            <AvatarImage src={coach.image} alt={coach.name} />
                            <AvatarFallback>{coach.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <h4 className="font-medium text-gray-900">{coach.name}</h4>
                          <p className="text-sm text-gray-600">{coach.specialization}</p>
                          <div className="flex items-center justify-center mt-1">
                            <Star className="h-4 w-4 text-amber-400 fill-current" />
                            <span className="text-sm ml-1">{coach.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date & Time Selection */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Select Date</h3>
                    <div className="border rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Select Time</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${
                            selectedTime === time
                              ? 'bg-blue-600 hover:bg-blue-700'
                              : 'hover:bg-blue-50 hover:border-blue-300'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Tell Us About Your Goals</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are your primary career goals?
                      </label>
                      <Textarea
                        placeholder="e.g., Career transition, promotion, skill development..."
                        value={bookingData.goals}
                        onChange={(e) => setBookingData(prev => ({...prev, goals: e.target.value}))}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What challenges are you facing?
                      </label>
                      <Textarea
                        placeholder="e.g., Interview anxiety, lack of direction, workplace conflicts..."
                        value={bookingData.challenges}
                        onChange={(e) => setBookingData(prev => ({...prev, challenges: e.target.value}))}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Session Method
                      </label>
                      <Select value={bookingData.contactMethod} onValueChange={(value) => setBookingData(prev => ({...prev, contactMethod: value}))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">
                            <div className="flex items-center space-x-2">
                              <Video className="h-4 w-4" />
                              <span>Video Call</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="phone">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4" />
                              <span>Phone Call</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="inPerson">
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>In Person</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                {selectedService && selectedCoach && selectedTime && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-medium">{selectedService.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coach:</span>
                        <span className="font-medium">{selectedCoach.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{selectedService.duration}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-blue-600">{selectedService.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  <Button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Confirm Booking
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setIsBooking(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers through our coaching.
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
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
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
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards achieving your professional goals with expert coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 py-6 text-lg"
              onClick={() => setIsBooking(true)}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaching;