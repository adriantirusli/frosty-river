import { useEffect, useState } from 'react'
import { get } from '../../../../helper/api'
import './styles.scss'

function Filter({ handleFilter }) {
  const [sizes, setSize] = useState([])

  useEffect(() => {
    fetchSize()
  }, [])

  const fetchSize = async () => {
    try {
      const response = await get('/option_size')
      const sortedSize = response.sort((a, b) => {
        return a.size - b.size
      })
      setSize(sortedSize)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div>
      <select className="form-select btn-filter" onChange={handleFilter} defaultValue={'default'}>
        <option disabled value="default">
          Filter by Size
        </option>
        {sizes.map((item, i) => (
          <option key={i} value={item.size}>
            {item.size}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
