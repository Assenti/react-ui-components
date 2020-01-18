import React, { useState } from 'react';
import { Pagination } from '../components/Pagination';

export const PaginationPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(20);

    return (
        <div className="page">
            <div className="page-title">Pagination</div>
            <Pagination
                perPageVariants={[10, 20, 50, 100]}
                pages={pages}
                onNext={() => {}}
                onPrev={() => {}} 
                currentPage={currentPage}
                perPage={10}/>
        </div>
    )
}
