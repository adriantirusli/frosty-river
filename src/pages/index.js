import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'
import Table from '../features/home/components/Table'
import { get } from '../helper/api'

import './styles.scss'

function Home() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])

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

  const handleSearch = debounce((value) => {
    setSearchTerm(value)

    const filtered = list.filter(
      (item) =>
        item?.komoditas?.toLowerCase().includes(value.toLowerCase()) ||
        item?.area_provinsi?.toLowerCase().includes(value.toLowerCase()) ||
        item?.area_kota?.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredData(filtered || list)
  }, 100)

  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Pencarian..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <Table columns={columns} listPrices={filteredData} loading={loading} />
    </div>
  )
}

export default Home
