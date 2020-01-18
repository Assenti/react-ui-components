import React, { useState } from 'react';

import { ChevronBack, ChevronNext } from '../icons/index';

const generateMockArr = (length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(i)
    }
    return arr
}

export const Pagination = (props) => {
    const { 
        pages, 
        currentPage, 
        onNext, 
        onPage, 
        onPrev, 
        onPerPageSelect, 
        perPageVariants, 
        perPage 
    } = props
    
    const getLimit = () => Math.ceil(pages/perPage) >= 5 ? 5 : Math.ceil(pages/perPage)
    const [perPageLocal, setPerPageLocal] = useState(perPage)
    const [allPages, setAllPages] = useState(generateMockArr(Math.ceil(pages/perPage)))
    const [activePages, setActivePages] = useState(allPages.slice(0, getLimit()))

    const isPrevAvailable = () => {
        return currentPage === 1 ? false : true
    }

    const isNextAvailable = () => {
        if (currentPage === pages || pages === 0 || currentPage === Math.ceil(pages/perPage)) return false 
        else return true
    }

    const handleOnNext = () => {
       if (isNextAvailable()) {
            if (currentPage % getLimit() === 0 && currentPage < allPages.length) {
                setActivePages(allPages.slice(currentPage, currentPage + getLimit()))
                currentPage++
                onNext()
            } else if (currentPage < allPages.length) {
                currentPage++
                onNext()
            }
       }
    }

    const handleOnPrev = () => {
        if (isPrevAvailable()) {
            if((currentPage - 1) % getLimit() === 0 && currentPage > 1){
                currentPage--
                setActivePages(allPages.slice(currentPage - getLimit(), currentPage))
                onPrev()
            } else if (currentPage > 1) {
                currentPage--
                onPrev()
            }
        }
    }

    const handlePerPageSelect = e => {
        setPerPageLocal(e.target.value)
        if (e.target.value === 'Все') {
            onPerPageSelect(-1)
        } else {
            onPerPageSelect(parseInt(e.target.value))
        }
    }

    return (
        <div className="pagination">
            <div className="d-flex align-center">
                <div className="mr-10" style={{ fontSize: '.9rem' }}>Кол-во заявок на стр.</div>
                <select className="select"
                    style={{ height: '40px', marginRight: '40px' }}
                    onChange={handlePerPageSelect} 
                    value={perPageLocal}
                    disabled={pages === 0}>
                    {perPageVariants.map((item, index) => <option key={index}>{item}</option>)}
                </select>
            </div>

            <div className={isPrevAvailable() ? 'pagination-item' : 'pagination-item disabled'} onClick={handleOnPrev}>
                <ChevronBack />
            </div>

            {activePages.map((item, index) => {
                return (
                    <div key={index} className={(item + 1) === currentPage ? 'pagination-item active' : 'pagination-item'}
                        onClick={() => onPage(item + 1)}>
                        {item + 1}
                    </div>
                )
            })}

            <div className={isNextAvailable() ? 'pagination-item' : 'pagination-item disabled'} onClick={handleOnNext}>
                <ChevronNext />
            </div>
        </div>
    )
}