import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../index';
import { ChevronBack, ChevronNext } from '../icon/icons/index';

const generateMockArr = (length) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(i)
    }
    return arr
}

const Pagination = (props) => {
    const paginationClass = () => {
        let result = '';
        let className = {
            btn: 'rui-pagination',
            size: props.size ? props.size : '',
            rounded: props.rounded ? 'rounded' : '',
            color: props.color ? props.color : 'primary',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const getLimit = () => Math.ceil(props.itemsCount/props.perPage) >= 5 ? 5 : Math.ceil(props.itemsCount/props.perPage);
    const [currentPage, setCurrentPage] = useState(props.current ? props.current : 1);
    const [allPages, setAllPages] = useState(generateMockArr(Math.ceil(props.itemsCount/props.perPage)));
    const [activePages, setActivePages] = useState(allPages.slice(0, getLimit()))

    const isPrevAvailable = () => {
        return currentPage === 1 ? false : true
    }

    const isNextAvailable = () => {
        if (currentPage === props.itemsCount || 
            props.itemsCount === 0 || 
            currentPage === Math.ceil(props.itemsCount/props.perPage)) return false 
        else return true
    }

    const handleOnNext = () => {
        if (isNextAvailable()) {
            if (currentPage % getLimit() === 0 && currentPage < allPages.length) {
                setActivePages(allPages.slice(currentPage, currentPage + getLimit()))
                setCurrentPage(currentPage + 1)
                if (props.onChange) props.onChange(currentPage + 1)
            } else if (currentPage < allPages.length) {
                setCurrentPage(currentPage + 1)
                if (props.onChange) props.onChange(currentPage + 1)
            }
        }
    }

    const handleOnPrev = () => {
        if (isPrevAvailable()) {
            if(currentPage > 1 && (currentPage - 1) % getLimit() === 0){
                setActivePages(allPages.slice((currentPage-1) - getLimit(), currentPage-1))
                setCurrentPage(currentPage - 1)
                if (props.onChange) props.onChange(currentPage - 1)
            } else if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
                if (props.onChange) props.onChange(currentPage - 1)
            }
        }
    }

    const handlePerPageSelect = (value) => {
        if (props.onPerPageSelect) props.onPerPageSelect(value)
        setAllPages(generateMockArr(Math.ceil(props.itemsCount/value)))
    }

    const getSize = () => {
        if (props.size === 'medium') return 100
        else if (props.size === 'large') return 100
        else return 100
    }

    useEffect(() => {
        setActivePages(allPages.slice(0, getLimit()))
    }, [props.perPage, props.itemsCount])

    return (
        <div className={paginationClass()}>
            <div className={isPrevAvailable() ? 'rui-pagination-item' : 'rui-pagination-item disabled'} 
                onClick={handleOnPrev}>
                <ChevronBack />
            </div>

            {activePages.map((item, index) => {
                return (
                    <div key={index} 
                        className={(item + 1) === currentPage ? 
                            'rui-pagination-item active' : 'rui-pagination-item'}
                        onClick={() => {
                            setCurrentPage(item + 1)
                            if (props.onChange) props.onChange(item + 1)
                        }}>
                        {item + 1}
                    </div>
                )
            })}

            <div className={isNextAvailable() ? 'rui-pagination-item' : 'rui-pagination-item disabled'} 
                onClick={handleOnNext}>
                <ChevronNext />
            </div>

            <div className="rui-pagination-per-page">
                <Select
                    minWidth={getSize()}
                    size={props.size}
                    width={props.size === 'large' ? 110 : 100}
                    rounded={props.rounded}
                    color={props.color}
                    value={`${props.perPage} / ${props.perPageText ? props.perPageText : 'page'}`}
                    items={props.perPageVariants ? props.perPageVariants : [10, 20, 50, 100]}
                    normalTitle={true}
                    selectedItem={`${props.perPage} / ${props.perPageText ? props.perPageText : 'page'}`}
                    onChange={handlePerPageSelect}/>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    perPage: PropTypes.number,
    current: PropTypes.number,
    perPageVariants: PropTypes.arrayOf(PropTypes.number),
    onPerPageSelect: PropTypes.func,
    onChange: PropTypes.func,
    perPageText: PropTypes.string,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    rounded: PropTypes.bool,
    size: PropTypes.oneOf([undefined,'','medium','large']),
    className: PropTypes.string
}
Pagination.defaulfProps = {
    perPage: 10,
    current: 1,
    perPageVariants: [10, 20, 50, 100],
    perPageText: 'page',
    color: 'primary'
}
export default Pagination;