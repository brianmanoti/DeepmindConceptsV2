import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Clock, MessageCircle, Search, Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.publishedDate) - new Date(a.publishedDate);
      case 'popularity':
        return b.likes - a.likes;
      case 'title':
        return a.title.localeCompare(b.title);
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
              Career Insights & Expert Advice
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay ahead of the curve with actionable career strategies, industry trends, 
              and professional development insights from our expert coaches.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Latest First</SelectItem>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="title">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white shadow-lg">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-600 font-medium">
                    {post.readTime}
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-blue-500 transition-colors cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <Link to={`/blog/${post.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSortBy('date');
                }}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest career insights, tips, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/70 focus:bg-white/20 focus:border-white h-12"
              />
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 px-8 h-12"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;