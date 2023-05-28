import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'
import './styles.scss'

function Table({ columns, listPrices, loading }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [sortColumn, setSortColumn] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const [columnActive, setColumnActive] = useState('')

  const itemsPerPage = 15
  const offset = currentPage * itemsPerPage
  const paginatedList = listPrices.slice(offset, offset + itemsPerPage)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const handleSort = (columnName, columnType) => {
    if (columnName === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(columnName)
      setSortOrder('asc')
      setColumnActive(columnType)
    }
  }

  const sortedData = [...paginatedList].sort((a, b) => {
    if (columnActive === 'string') {
      return sortOrder === 'asc'
        ? a[sortColumn]?.localeCompare(b[sortColumn])
        : b[sortColumn]?.localeCompare(a[sortColumn])
    } else if (columnActive === 'num') {
      return sortOrder === 'asc' ? a[[sortColumn]] - b[[sortColumn]] : b[[sortColumn]] - a[[sortColumn]]
    }

    return 0
  })

  const getSortIcon = (column) => {
    if (column === sortColumn) {
      return `bi bi-sort-${sortOrder === 'asc' ? 'up' : 'down'}`
    }
    return 'bi bi-sort-down'
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover ">
        <thead className="thead-primary">
          <tr>
            {columns.map((column, i) => (
              <th scope="col" key={`col-${i}`} onClick={() => handleSort(column.key, column.type)}>
                {column.label} <i className={getSortIcon(column.key)} style={{ fontSize: '1rem' }} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 15 }).map((_, i) => (
                <tr key={`wrapper-skeleton-${i}`}>
                  {Array.from({ length: 15 }).map((_, i) => (
                    <td key={`skeleton-${i}`}>
                      <Skeleton count={2} />
                    </td>
                  ))}
                </tr>
              ))
            : sortedData.map((item, i) => (
                <tr key={i}>
                  <td>{item.uuid}</td>
                  <td>{item.komoditas}</td>
                  <td>{item.area_provinsi}</td>
                  <td>{item.area_kota}</td>
                  <td>{item.size}</td>
                  <td>{item.price}</td>
                  <td>{item.tgl_parsed}</td>
                  <td>{item.timestamp}</td>
                </tr>
              ))}
        </tbody>
      </table>

      {!loading && (
        <div className="react-paginate mt-5 mb-5">
          <ReactPaginate
            pageCount={Math.ceil(listPrices.length / itemsPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      )}
    </div>
  )
}

export default Table
