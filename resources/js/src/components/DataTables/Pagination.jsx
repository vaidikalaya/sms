import React from 'react';

export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination isolate inline-flex  rounded-md shadow-sm space-x-2">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className={`cursor-pointer rounded page-item relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === number ? 'bg-[#CF212F] text-white' : ''}`}>
                            {number}
                    </li>
                ))}
            </ul>
        </nav>
    );
};