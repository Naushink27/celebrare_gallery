
import { useState, useEffect } from 'react'

function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          'https://picsum.photos/v2/list?limit=30'
        )

        console.log('Response status:', res.status)

        if (!res.ok) {
          throw new Error('Failed to fetch photos')
        }

        const data = await res.json()

        
        if (!Array.isArray(data)) {
          throw new Error('API response is not an array')
        }

        setPhotos(data)
      } catch (err) {
        console.error('Fetching error:', err)
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [])

  return {
    photos,
    loading,
    error,
  }
}

export default useFetchPhotos
