import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export default function TestimonialCard({ name, role, company, content, avatar }: TestimonialCardProps) {
  return (
    <div className="card hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="flex -space-x-2">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic">
        "{content}"
      </blockquote>
    </div>
  )
}
