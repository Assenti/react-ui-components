import React, { useState } from 'react';
import { Select } from '../select';
import { ChevronBack, ChevronNext } from '../../../icons/index';

const generateMockArr = (length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(i)
    }
    return arr
}

export const Pagination = (props) => {
    const paginationClass = () => {
        let result = '';
        let className = {
            btn: 'pagination',
            size: props.size ? props.size : '',
            rounded: props.rounded ? 'rounded' : '',
            color: props.color ? props.color : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    let perPage = props.perPage ? props.perPage : 10;

    const getLimit = () => {
        return Math.ceil(props.itemsCount/perPage) >= 5 ?
            5 : Math.ceil(props.itemsCount/perPage)
    }
    const [currentPage, setCurrentPage] = useState(props.current ? props.current : 1);
    const [perPageLocal, setPerPageLocal] = useState(perPage);
    const [allPages, setAllPages] = useState(generateMockArr(Math.ceil(props.itemsCount/perPage)));
    const [activePages, setActivePages] = useState(allPages.slice(0, getLimit()))

    const isPrevAvailable = () => {
        return currentPage === 1 ? false : true
    }

    const isNextAvailable = () => {
        if (currentPage === props.itemsCount || 
            props.itemsCount === 0 || 
            currentPage === Math.ceil(props.itemsCount/perPage)) return false 
        else return true
    }

    const handleOnNext = () => {
       if (isNextAvailable()) {
            if (currentPage % getLimit() === 0 && currentPage < allPages.length) {
                setActivePages(allPages.slice(currentPage, currentPage + getLimit()))
                setCurrentPage(currentPage + 1)
            } else if (currentPage < allPages.length) {
                setCurrentPage(currentPage + 1)
            }
       }
    }

    const handleOnPrev = () => {
        if (isPrevAvailable()) {
            if((currentPage - 1) % getLimit() === 0 && currentPage > 1){
                setActivePages(allPages.slice(currentPage - getLimit(), currentPage))
                setCurrentPage(currentPage - 1)
            } else if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        }
    }

    const handlePerPageSelect = (value) => {
        setPerPageLocal(value)
    }

    const getSize = () => {
        if (props.size === 'medium') return 100
        else if (props.size === 'large') return 100
        else return 100
    }

    return (
        <div className={paginationClass()}>

            <div className={isPrevAvailable() ? 'pagination-item' : 'pagination-item disabled'} onClick={handleOnPrev}>
                <ChevronBack />
            </div>

            {activePages.map((item, index) => {
                return (
                    <div key={index} className={(item + 1) === currentPage ? 'pagination-item active' : 'pagination-item'}
                        onClick={() => setCurrentPage(item + 1)}>
                        {item + 1}
                    </div>
                )
            })}

            <div className={isNextAvailable() ? 'pagination-item' : 'pagination-item disabled'} onClick={handleOnNext}>
                <ChevronNext />
            </div>

            <div className="pagination-per-page">
                <Select
                    minWidth={getSize()}
                    size={props.size}
                    rounded={props.rounded}
                    color={props.color}
                    items={props.perPageVariants ? props.perPageVariants : [10, 20, 50, 100]}
                    normalTitle={true}
                    selectedItem={`${perPageLocal} / ${props.pageText ? props.pageText : 'page'}`}
                    onSelect={handlePerPageSelect}/>
            </div>
        </div>
    )
}