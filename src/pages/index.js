import { useEffect, useState } from 'react'
import Table from '../features/home/components/Table'
import { get } from '../helper/api'

import './styles.scss'

function Home() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const columns = ['UUID', 'Komoditas', 'Provinsi', 'Kota', 'Size', 'Price', 'Tanggal Parsed', 'Timestamp']

  useEffect(() => {
    fetchPrice()
  }, [])

  const fetchPrice = async () => {
    try {
      setLoading(true)
      const response = await get('/list')
      setList(response)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className="container">
      <Table columns={columns} listPrices={list} loading={loading} />
    </div>
  )
}

export default Home
