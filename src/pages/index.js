import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import Filter from '../features/home/components/Filter'
import Table from '../features/home/components/Table'
import { get } from '../helper/api'
import './styles.scss'
import { useQuery } from '@tanstack/react-query'

function Home() {
  //const [list, setList] = useState([])
  //const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const newComodity = useSelector((state) => state.form.data)

  const columns = [
    {
      label: 'UUID',
      type: 'string',
      key: 'uuid',
    },
    {
      label: 'Komoditas',
      type: 'string',
      key: 'komoditas',
    },
    {
      label: 'Provinsi',
      type: 'string',
      key: 'area_provinsi',
    },
    {
      label: 'Kota',
      type: 'string',
      key: 'area_kota',
    },
    {
      label: 'Ukuran',
      type: 'num',
      key: 'size',
    },
    {
      label: 'Harga',
      type: 'num',
      key: 'price',
    },
    {
      label: 'Tanggal Parsed',
      type: 'string',
      key: 'tgl_parsed',
    },
    {
      label: 'Timestramp',
      type: 'string',
      key: 'timestamp',
    },
  ]

  const fetchComodities = async () => {
    const response = await get('/list')

    return [...newComodity, ...response]
  }

  const { data: list, isLoading } = useQuery({ queryKey: ['comodities'], queryFn: fetchComodities })

  const handleSearch = debounce((term) => {
    setSearchTerm(term)

    const filteredSearch = list.filter(
      (item) =>
        item?.komoditas?.toLowerCase().includes(term.toLowerCase()) ||
        item?.area_provinsi?.toLowerCase().includes(term.toLowerCase()) ||
        item?.area_kota?.toLowerCase().includes(term.toLowerCase())
    )

    setFilteredData(filteredSearch)
  }, 100)

  const handleFilter = (e) => {
    const selectedValue = e.target.value

    const filtered = list.filter((item) => item?.size === selectedValue)

    setFilteredData(filtered)
  }

  return (
    <div className="container container-home">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 col-xs-12 mb-3">
          <div className="input-group ">
            <input
              type="text"
              className="form-control border-end-0 border "
              placeholder="Pencarian..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary bg-white border-start-0 border ms-n5"
                type="button"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <i className="bi bi-search"></i>
              </button>
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 col-sm-12 mb-3 ">
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="col-md-3 col-sm-12 wrapper-btn-add mb-3 ">
          <Link to="/tambah-komoditas">
            <button type="button" className="btn btn-add">
              Tambah Komoditas
            </button>
          </Link>
        </div>
        <div className="mt-4">
          <Table columns={columns} listPrices={filteredData.length === 0 ? list : filteredData} loading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default Home
