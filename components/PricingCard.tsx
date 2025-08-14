import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

export default function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  popular = false 
}: PricingCardProps) {
  return (
    <div className={`card relative ${popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {period && <span className="text-gray-600">{period}</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
        popular 
          ? 'bg-primary-600 text-white hover:bg-primary-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        {cta}
      </button>
    </div>
  )
}
