'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Home, 
  Bed, 
  Bath, 
  Calendar, 
  Ruler, 
  TrendingUp, 
  Download, 
  Share2, 
  Filter,
  ArrowLeft
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ResultsPage() {
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading results
    setTimeout(() => {
      setResults({
        targetProperty: {
          address: '123 Main Street, San Francisco, CA',
          price: '$750,000',
          sqft: '2,200',
          bedrooms: 3,
          bathrooms: 2,
          yearBuilt: 2015,
          estimatedValue: '$745,000',
          pricePerSqft: '$339',
          lotSize: '5,000 sqft',
          propertyType: 'Single Family',
          lastSold: '2018-06-15',
          lastSoldPrice: '$650,000'
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
            pricePerSqft: '$337',
            lotSize: '4,800 sqft',
            propertyType: 'Single Family',
            daysOnMarket: 12,
            priceChange: '+2.1%'
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
            pricePerSqft: '$339',
            lotSize: '5,200 sqft',
            propertyType: 'Single Family',
            daysOnMarket: 8,
            priceChange: '+1.8%'
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
            pricePerSqft: '$338',
            lotSize: '4,900 sqft',
            propertyType: 'Single Family',
            daysOnMarket: 15,
            priceChange: '+1.5%'
          }
        ],
        marketInsights: {
          averagePrice: '$740,000',
          averagePricePerSqft: '$338',
          averageDaysOnMarket: 12.6,
          priceTrend: '+1.8%',
          inventoryLevel: 'Low',
          marketType: 'Seller\'s Market'
        },
        neighborhoodData: {
          schoolRating: 8.5,
          crimeRate: 'Low',
          walkScore: 78,
          transitScore: 65,
          bikeScore: 72
        }
      })
      setLoading(false)
    }, 2000)
  }, [])

  const chartData = results?.comps.map((comp: any) => ({
    name: comp.address.split(' ')[0],
    price: parseInt(comp.price.replace(/[$,]/g, '')),
    pricePerSqft: parseInt(comp.pricePerSqft.replace(/[$,]/g, ''))
  })) || []

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Analyzing property data...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Target Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Target Property</h1>
              <div className="flex space-x-2">
                <button className="btn-secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
                <button className="btn-secondary">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {results.targetProperty.address}
                </h3>
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  {results.targetProperty.price}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 text-gray-400 mr-2" />
                    <span>{results.targetProperty.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 text-gray-400 mr-2" />
                    <span>{results.targetProperty.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-4 h-4 text-gray-400 mr-2" />
                    <span>{results.targetProperty.sqft} sqft</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span>{results.targetProperty.yearBuilt}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">AI Estimated Value</h4>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {results.targetProperty.estimatedValue}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {results.comps.length} comparable properties
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average Price:</span>
                  <span className="font-semibold">{results.marketInsights.averagePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Trend:</span>
                  <span className="font-semibold text-green-600">{results.marketInsights.priceTrend}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Market Type:</span>
                  <span className="font-semibold">{results.marketInsights.marketType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days on Market:</span>
                  <span className="font-semibold">{results.marketInsights.averageDaysOnMarket}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Neighborhood</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">School Rating:</span>
                  <span className="font-semibold">{results.neighborhoodData.schoolRating}/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Walk Score:</span>
                  <span className="font-semibold">{results.neighborhoodData.walkScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transit Score:</span>
                  <span className="font-semibold">{results.neighborhoodData.transitScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Crime Rate:</span>
                  <span className="font-semibold text-green-600">{results.neighborhoodData.crimeRate}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Analysis</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="price" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Comparable Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Comparable Properties</h2>
              <button className="btn-secondary">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.comps.map((comp: any, index: number) => (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-gray-900">{comp.address}</h3>
                    <span className="text-sm text-gray-500">{comp.distance}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-primary-600 mb-4">
                    {comp.price}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Bed className="w-3 h-3 text-gray-400 mr-1" />
                      <span>{comp.bedrooms} beds</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Bath className="w-3 h-3 text-gray-400 mr-1" />
                      <span>{comp.bathrooms} baths</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Ruler className="w-3 h-3 text-gray-400 mr-1" />
                      <span>{comp.sqft} sqft</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-3 h-3 text-gray-400 mr-1" />
                      <span>{comp.yearBuilt}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Sold:</span>
                      <span>{comp.soldDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price/sqft:</span>
                      <span>{comp.pricePerSqft}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Days on Market:</span>
                      <span>{comp.daysOnMarket}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
