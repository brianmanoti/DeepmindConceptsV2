import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Heart, MessageCircle, Share2, Calendar, User, Clock, ArrowLeft, ArrowRight, Bookmark, ThumbsUp } from 'lucide-react';
import { blogPosts, getFromLocalStorage, saveToLocalStorage } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const post = blogPosts.find(p => p.id === parseInt(id));
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comments, setComments] = useState(getFromLocalStorage(`comments_${id}`, []));
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(post?.likes || 0);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to like posts.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    toast({
      title: isLiked ? "Removed like" : "Post liked!",
      description: isLiked ? "You unliked this post." : "Thanks for liking this post!",
    });
  };

  const handleBookmark = () => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to bookmark posts.",
        variant: "destructive"
      });
      return;
    }
    
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed bookmark" : "Post bookmarked!",
      description: isBookmarked ? "Post removed from bookmarks." : "Post saved to your bookmarks.",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Post URL copied to clipboard.",
      });
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to comment.",
        variant: "destructive"
      });
      return;
    }
    
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: user.name,
      avatar: user.avatar,
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    saveToLocalStorage(`comments_${id}`, updatedComments);
    setNewComment('');
    
    toast({
      title: "Comment added!",
      description: "Your comment has been posted.",
    });
  };

  const handleCommentLike = (commentId) => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to like comments.",
        variant: "destructive"
      });
      return;
    }
    
    const updatedComments = comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    );
    setComments(updatedComments);
    saveToLocalStorage(`comments_${id}`, updatedComments);
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          
          {/* Back Button */}
          <div className="absolute top-6 left-6">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/blog')}
              className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </div>

          {/* Post Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-blue-600 text-white mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                  <span className="text-gray-300">•</span>
                  <span>{post.authorRole}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {/* Social Actions */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant={isLiked ? "default" : "outline"}
                        size="sm"
                        onClick={handleLike}
                        className={`${isLiked ? 'bg-red-500 hover:bg-red-600 text-white' : 'hover:bg-red-50 hover:text-red-600 hover:border-red-200'}`}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                        {likes}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShare}
                        className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button
                        variant={isBookmarked ? "default" : "outline"}
                        size="sm"
                        onClick={handleBookmark}
                        className={`${isBookmarked ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200'}`}
                      >
                        <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                        {isBookmarked ? 'Saved' : 'Save'}
                      </Button>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{comments.length} comments</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card className="mt-8 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Comments ({comments.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Comment Form */}
                  {user ? (
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Share your thoughts..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="min-h-[80px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          />
                          <div className="flex justify-end mt-2">
                            <Button 
                              type="submit" 
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              Post Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-6 bg-gray-50 rounded-lg">
                      <p className="text-gray-600 mb-4">Please log in to join the conversation</p>
                      <Button asChild>
                        <Link to="/login">Log In</Link>
                      </Button>
                    </div>
                  )}

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={comment.avatar} alt={comment.user} />
                          <AvatarFallback>{comment.user?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-gray-900">{comment.user}</span>
                            <span className="text-sm text-gray-500">
                              {new Date(comment.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">{comment.content}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCommentLike(comment.id)}
                            className="text-gray-500 hover:text-blue-600 p-0 h-auto"
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {comment.likes}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {comments.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No comments yet. Be the first to share your thoughts!</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Info */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{post.author}</h3>
                    <p className="text-sm text-blue-600 mb-4">{post.authorRole}</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Expert career coach with over 8 years of experience helping professionals 
                      achieve their career goals.
                    </p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id} 
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {relatedPost.readTime}
                            </p>
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
      </section>
    </div>
  );
};

export default BlogPost;