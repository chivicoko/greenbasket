import React from 'react'
import BasicPagination from './Pagination'

interface FullPaginationProps {
    productsPerPage: number,
    handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    totalProducts: number,
    totalPages: number,
    paginate: (page: number) => void,
    currentPage: number,
}

const FullPagination = ({productsPerPage, handleRowsPerPageChange, totalProducts, totalPages, paginate, currentPage}: FullPaginationProps) => {
  return (
    <div className='pagination mt-6 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='pages flex items-center justify-between gap-3'>
            <span>Showing</span>

            <div className="select-container">
                <select
                    value={productsPerPage}
                    onChange={handleRowsPerPageChange}
                    // className="bg-[#cee1af90] rounded-[4px] py-1 px-6 pl-3 cursor-pointer flex flex-1 items-center justify-center box-border font-medium border-none appearance-none bg-no-repeat bg-right bg-[length:14px_14px]"
                    // style={{ backgroundImage: `url('/images/np_next_2236826_000000 2.svg')`, }}
                    className="span"
                >
                    <option value={5}>5</option>
                    <option value={totalProducts > 5 && totalProducts < 10 ? totalProducts : 5}>
                        {totalProducts > 5 && totalProducts < 10 ? totalProducts : 5}
                    </option>
                    <option value={totalProducts > 10 && totalProducts < 15 ? totalProducts: 10}>
                        {totalProducts > 10 && totalProducts < 15 ? totalProducts: 10}
                    </option>
                    <option value={totalProducts > 15 && totalProducts < 20 ? totalProducts : 15}>
                        {totalProducts > 15 && totalProducts < 20 ? totalProducts : 15}
                    </option>
                    <option value={totalProducts > 20 && totalProducts < 25 ? totalProducts : 20}>
                        {totalProducts > 20 && totalProducts < 25 ? totalProducts : 20}
                    </option>
                    <option value={totalProducts > 25 && totalProducts < 30 ? totalProducts : 25}>
                        {totalProducts > 25 && totalProducts < 30 ? totalProducts : 25}
                    </option>
                    <option value={totalProducts > 30 && totalProducts < 35 ? totalProducts : 30}>
                        {totalProducts > 30 && totalProducts < 35 ? totalProducts : 30}
                    </option>
                    <option value={totalProducts > 35 && totalProducts < 40 ? totalProducts : 35}>
                        {totalProducts > 35 && totalProducts < 40 ? totalProducts : 35}
                    </option>
                    <option value={totalProducts > 40 && totalProducts < 45 ? totalProducts : 40}>
                        {totalProducts > 40 && totalProducts < 45 ? totalProducts : 40}
                    </option>
                    <option value={totalProducts > 45 && totalProducts < 50 ? totalProducts : 45}>
                        {totalProducts > 45 && totalProducts < 50 ? totalProducts : 45}
                    </option>
                    <option value={totalProducts > 50 && totalProducts < 55 ? totalProducts : 50}>
                        {totalProducts > 50 && totalProducts < 55 ? totalProducts : 50}
                    </option>
                    <option value={100}>100</option>
                </select>
            </div>

            <span>out of {totalProducts}</span>
        </div>
        <BasicPagination count={totalPages} onPageChange={paginate} currentPage={currentPage} />
    </div>
  )
}

export default FullPagination