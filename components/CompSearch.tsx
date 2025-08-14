'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Filter, Download, Share2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface CompSearchProps {
  onResults?: (results: any) => void
}

export default function CompSearch({ onResults }: CompSearchProps) {
  const [address, setAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    radius: '0.5',
    yearBuilt: '',
    minSqft: '',
    maxSqft: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: 'all'
  })

  const handleSearch = async () => {
    if (!address.trim()) {
      toast.error('Please enter a property address')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        targetProperty: {
          address: address,
          price: '$750,000',
          sqft: '2,200',
          bedrooms: 3,
          bathrooms: 2,
          yearBuilt: 2015,
          estimatedValue: '$745,000'
        },
        comps: [
          {
            id: 1,
            address: '123 Oak Street',
            price: '$725,000',
            sqft: '2,150',
            bedrooms: 3,
            bathrooms: 2,
            yearBuilt: 2014,
            distance: '0.2 miles',
            soldDate: '2024-01-15',
            pricePerSqft: '$337'
          },
          {
            id: 2,
            address: '456 Pine Avenue',
            price: '$780,000',
            sqft: '2,300',
            bedrooms: 3,
            bathrooms: 2.5,
            yearBuilt: 2016,
            distance: '0.3 miles',
            soldDate: '2024-01-10',
            pricePerSqft: '$339'
          },
          {
            id: 3,
            address: '789 Elm Drive',
            price: '$710,000',
            sqft: '2,100',
            bedrooms: 3,
            bathrooms: 2,
            yearBuilt: 2013,
            distance: '0.4 miles',
            soldDate: '2024-01-05',
            pricePerSqft: '$338'
          }
        ]
      }
      
      setIsLoading(false)
      onResults?.(mockResults)
      toast.success('Found 3 comparable properties!')
    }, 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter property address (e.g., 123 Main St, San Francisco, CA)"
          className="input-field pl-10 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-white/20 text-gray-900 placeholder-gray-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-4 bg-white/95 backdrop-blur-sm rounded-lg border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search Radius
              </label>
              <select
                value={filters.radius}
                onChange={(e) => setFilters({ ...filters, radius: e.target.value })}
                className="input-field"
              >
                <option value="0.25">0.25 miles</option>
                <option value="0.5">0.5 miles</option>
                <option value="1">1 mile</option>
                <option value="2">2 miles</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="input-field"
              >
                <option value="all">All Types</option>
                <option value="single-family">Single Family</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="input-field"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}

      {/* Search Button */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="btn-primary flex-1 py-4 text-lg font-semibold bg-white text-primary-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600 mr-2"></div>
              Finding Comps...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Find Comps
            </div>
          )}
        </button>
        
        <div className="flex gap-2">
          <button className="btn-secondary py-4 px-6 text-white border-white hover:bg-white hover:text-primary-600">
            <Download className="w-5 h-5" />
          </button>
          <button className="btn-secondary py-4 px-6 text-white border-white hover:bg-white hover:text-primary-600">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-2xl font-bold text-yellow-300">10x</div>
          <div className="text-sm text-primary-100">Faster than manual search</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-2xl font-bold text-yellow-300">95%</div>
          <div className="text-sm text-primary-100">Accuracy rate</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
          <div className="text-2xl font-bold text-yellow-300">5</div>
          <div className="text-sm text-primary-100">Free searches per month</div>
        </div>
      </div>
    </div>
  )
}
