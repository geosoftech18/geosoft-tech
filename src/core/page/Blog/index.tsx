'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/core/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/card'
import { Badge } from '@/core/components/badge'

import { 
  FileText, 
  Calendar, 
  Tag,
  ArrowRight
} from 'lucide-react'
import { Breadcrumb } from '@/core/components/Breadcrumb'

interface BlogPost {
  _id: string
  title: string
  excerpt: string
  tags: string[]
  status: 'published' | 'draft'
  featuredImage: string | null
  slug: string
  createdAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch('/api/blog?status=published')
        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(result.error || 'Failed to load blogs')
        }

        if (result.success) {
          setPosts(result.data)
        }
      } catch (error) {
        console.error('Error loading blogs:', error)
        setError('Unable to load blog posts right now. Please try again shortly.')
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  return (
    <>

    <div className="min-h-screen bg-gradient-to-br from-s-100 via-white to-s-100 py-36 md:py-32 font-avant-garde">

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumb
          className="mb-6"
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blogs', href: '/blog' },
          ]}
        />
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-t mb-4">
             Blog Posts
          </h1>
          <p className="text-gray-600 text-lg">
            Stay updated with expert insights on web development, digital marketing, and technology trends
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 border-4 border-blue/30 border-t-blue rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer h-full">
                {/* Featured Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  {post.featuredImage ? (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-s-100 to-s flex items-center justify-center">
                      <FileText className="w-16 h-16 text-blue" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={post.status === 'published' ? 'default' : 'secondary'}
                      className={post.status === 'published' 
                        ? 'bg-green-100 text-green-700 border-green-300' 
                        : 'bg-blue/20 text-blue border-blue/30'
                      }
                    >
                      {post.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-gray-800 text-lg line-clamp-2 group-hover:text-blue transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {/* <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="bg-s-100 text-t border-blue/30 text-xs"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div> */}

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue hover:text-t hover:bg-s-100 p-1 h-auto"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
                </Card>
              </Link>
            </motion.div>
            ))}
          </div>
        )}

        {/* Empty State (if no posts) */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">Could not fetch blog posts</h3>
            <p className="text-gray-500">{error}</p>
          </motion.div>
        )}

        {!loading && !error && posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">No blog posts yet</h3>
            <p className="text-gray-500">Check back soon for new content about E-Waste Recycling!</p>
          </motion.div>
        )}
      </div>
    </div>
    </>
  )
}

