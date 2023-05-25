import { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import ReactPaginate from 'react-paginate'

function Table({ columns, listPrices, loading }) {
  const [currentPage, setCurrentPage] = useState(0)

  const itemsPerPage = 10

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const offset = currentPage * itemsPerPage
  const currentPageData = listPrices.slice(offset, offset + itemsPerPage)

  return (
    <div className="table-responsive">
      <table className="table table-hover ">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th scope="col" key={`col-${i}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading
            ? columns.map((column, i) => (
                <tr key={`skeleton-${i}`}>
                  {columns.map((column, i) => (
                    <td key={`skeleton-child-${i}`}>
                      <Skeleton count={2} />
                    </td>
                  ))}
                </tr>
              ))
            : currentPageData.map((item, i) => (
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
        <ReactPaginate
          pageCount={Math.ceil(listPrices.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />
      )}
    </div>
  )
}

export default Table
