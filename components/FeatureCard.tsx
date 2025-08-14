import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="card hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start space-x-4">
        <div className={`${color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
