import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from '../index';
import { ChevronBack, ChevronNext } from '../icon/icons/index';
import { strinfigyClassObject } from '../utils';

const generateMockArr = (pages, perPage) => {
    let length = Math.ceil(pages/perPage);
    if (pages * 2 < perPage) length = 2;
    
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(i)
    }
    return arr;
}

const Pagination = (props) => {
    let className = {
        btn: 'rui-pagination',
        size: props.size ? props.size : '',
        borderType: props.borderType ? props.borderType : '',
        dark: props.dark ? 'dark' : '',
        dense: props.dense ? 'dense' : '',
        color: props.color ? props.color : 'primary',
        className: props.className ? props.className : ''
    }
    const { itemsCount, perPage, onChange, onPerPageSelect } = props;
    const getLimit = () => Math.ceil(itemsCount/perPage) >= 5 ? 5 : Math.ceil(itemsCount/perPage);
    const [page, setPage] = useState(props.current ? props.current : 1);
    const [activePages, setActivePages] = useState(generateMockArr(itemsCount, perPage).slice(0, getLimit()));

    const isPrevAvailable = () => {
        return page === 1 ? false : true
    }

    const isNextAvailable = () => {
        if (page === itemsCount || 
            props.itemsCount === 0 || 
            page === Math.ceil(itemsCount/perPage)) return false 
        else return true
    }

    const handleOnNext = () => {
        if (isNextAvailable()) {
            if (page % getLimit() === 0 && page < generateMockArr(itemsCount, perPage).length) {
                setActivePages(generateMockArr(itemsCount, perPage).slice(page, page + getLimit()))
                setPage(page + 1)
                if (onChange) onChange(page + 1)
            } else if (page < generateMockArr(itemsCount, perPage).length) {
                setPage(page + 1)
                if (onChange) onChange(page + 1)
            }
        }
    }

    const handleOnPrev = () => {
        if (isPrevAvailable()) {
            if (page > 1 && (page - 1) % getLimit() === 0) {
                setActivePages(generateMockArr(itemsCount, perPage).slice((page - 1) - getLimit(), (page - 1)))
                setPage(page - 1)
                if (onChange) onChange(page - 1)
            } else if (page > 1) {
                setPage(page - 1)
                if (onChange) onChange(page - 1)
            }
        }
    }

    const handleOnStart = () => {
        setActivePages(generateMockArr(itemsCount, perPage).slice(0, getLimit()))
        setPage(1)
        if (onChange) onChange(1)
    }

    const handleOnEnd = () => {
        setActivePages(generateMockArr(itemsCount, perPage).slice(generateMockArr(itemsCount, perPage).length - 5, generateMockArr(itemsCount, perPage).length))
        setPage(generateMockArr(itemsCount, perPage).length)
        if (onChange) onChange(generateMockArr(itemsCount, perPage).length)
    }

    const handlePerPageSelect = (value) => {
        if (onPerPageSelect) onPerPageSelect(value)
    }

    useEffect(() => {
        setActivePages(generateMockArr(itemsCount, perPage).slice(0, getLimit()))
    }, [perPage, itemsCount])

    return (
        <div className={strinfigyClassObject(className)}>
            <div className={isPrevAvailable() ? 'rui-pagination-item' : 'rui-pagination-item disabled'} 
                onClick={handleOnPrev}>
                <ChevronBack/>
            </div>
            {activePages[0] > 4 ?
                <>
                    <div className="rui-pagination-item"
                        onClick={handleOnStart}>
                        1
                    </div> 
                    <div className="rui-pagination-item disabled">...</div> 
                </>
            : null}
            {activePages.map((item, index) => {
                return (
                    <div key={index} 
                        className={(item + 1) === page ? 
                            'rui-pagination-item active' : 'rui-pagination-item'}
                        onClick={() => {
                            setPage(item + 1)
                            if (props.onChange) props.onChange(item + 1)
                        }}>
                        {item + 1}
                    </div>
                )
            })}
            {generateMockArr(itemsCount, perPage).length > 5
                && activePages[activePages.length - 1] !== generateMockArr(itemsCount, perPage)[generateMockArr(itemsCount, perPage).length-1] ?
                <>
                    <div className="rui-pagination-item disabled">...</div> 
                    <div className="rui-pagination-item"
                        onClick={handleOnEnd}>
                        {generateMockArr(itemsCount, perPage).length}
                    </div> 
                </>
            : null}
            <div className={isNextAvailable() ? 
                'rui-pagination-item' : 
                'rui-pagination-item disabled'} 
                onClick={handleOnNext}>
                <ChevronNext/>
            </div>
            <div className="rui-pagination-per-page">
                <Select
                    size={props.size}
                    dark={props.dark}
                    rounded={props.rounded}
                    color={props.color}
                    borderType={props.borderType}
                    value={`${perPage} / ${props.perPageText ? props.perPageText : 'page'}`}
                    items={props.perPageVariants ? props.perPageVariants : [10, 20, 50, 100]}
                    selectedItem={`${perPage} / ${props.perPageText ? props.perPageText : 'page'}`}
                    onChange={handlePerPageSelect}/>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    perPage: PropTypes.number.isRequired,
    current: PropTypes.number,
    perPageVariants: PropTypes.arrayOf(PropTypes.number),
    onPerPageSelect: PropTypes.func,
    onChange: PropTypes.func,
    perPageText: PropTypes.string,
    color: PropTypes.oneOf([undefined,'','primary','info','success','error']),
    borderType: PropTypes.oneOf(['default','tile','rounded']),
    dark: PropTypes.bool,
    dense: PropTypes.bool,
    size: PropTypes.oneOf([undefined,'','default','medium','large']),
    className: PropTypes.string
}
export default Pagination;