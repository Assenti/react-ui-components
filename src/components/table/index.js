import React, { useState } from 'react';
import { Empty, Loading } from '../icon/icons/index';
import { Checkbox } from '../checkbox';
import { Pagination } from '../pagination';
import { Icon } from '../icon';
import { compare } from '../utils';

const makeSortableHeaders = (headers) => {
    let sortableHeaders = []
    for (const item of headers) {
        sortableHeaders.push({name: item, sort: 'asc' })
    }
    return sortableHeaders;
}

export const Table = (props) => {
    let initialHeaders = () => {
        if (props.controls && !props.checkbox) {
            return [...props.headers, ''];
        } else if (props.index && !props.checkbox && !props.controls) {
            return [props.indexSign ? props.indexSign : '#', ...props.headers];
        } else if (props.sortable) {
            return makeSortableHeaders(props.headers)
        } else if (props.sortable && props.checkbox) {
            return makeSortableHeaders(props.headers)
        } else {
            return props.headers;
        }
    }

    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(props.currentPage ? props.currentPage : 1);
    const [perPage, setPerPage] = useState(props.perPage ? props.perPage : 10);
    const [sortType, setSortType] = useState(props.sortable ? 'asc' : '');
    const [colIndex, setColIndex] = useState(0);
    const [headers] = useState(initialHeaders());

    const tableContainerClass = () => {
        let result = '';
        let className = {
            name: 'table__container',
            bordered: props.bordered ? 'bordered' : '',
            grid: props.grid ? 'grid' : '',
            color: props.color ? props.color : '',
            paginationPosition: props.paginationPosition ? props.paginationPosition : '',
            className: props.className ? props.className : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const tableClass = () => {
        let result = '';
        let className = {
            name: 'table',
            headerColor: props.color ? props.color : '',
            empty: props.items.length === 0 ? 'empty' : '',
            alignment: props.alignment ? props.alignment : '',
            noHover: props.noHover ? 'no-hover' : '',
            stripped: props.stripped ? 'stripped' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const handleColumnSort = (colIndex, sortType) => {
        setColIndex(colIndex)
        setSortType(sortType)
    }

    const isSelected = (_item) => {
        let result = false
        for (const item of selected) {
            if (item[props.selectKey] === _item[props.selectKey]) return true
        }
        return result
    }

    const onSelect = (item) => {
        for (let i = 0; i < selected.length; i++) {
            if (selected[i][props.selectKey] === item[props.selectKey]) {
                if (i === 0) {
                    setSelected(selected.slice(1))
                    props.onSelect(selected.slice(1))
                } else if (i === selected.length - 1) {
                    setSelected(selected.slice(0, -1))
                    props.onSelect(selected.slice(0, -1))
                } else if (i > 0) {
                    setSelected([
                        ...selected.slice(0, i),
                        ...selected.slice(i + 1)])
                    props.onSelect([
                        ...selected.slice(0, i),
                        ...selected.slice(i + 1)])
                }
                return
            }
        }
        setSelected([...selected, item])
        props.onSelect([...selected, item])
    }

    const isAllChecked = () => {
        if (selected.length === getItems().length) return true
        return false
    }

    const onSelectAll = () => {
        if (selected.length > 0) {
            setSelected([])
            props.onSelect([])
        } else {
            setSelected(getItems())
            props.onSelect(getItems())
        }
    }

    const prepareHeaders = () => {
        if (props.sortable && !props.checkbox) {
            return (
                <tr>
                    {headers.map((item, index) => 
                        <th key={index}>
                            <div className="row align-center">
                                {item.name} 
                                <Icon 
                                    className="ml-8" 
                                    name={item.sort === 'desc' ? 'sort-descending' : 'sort-ascending'}
                                    onClick={() => {
                                        item.sort = item.sort === 'asc' ? 'desc' : 'asc'
                                        handleColumnSort(index, item.sort)
                                    }}
                                    size={16} 
                                    color={props.color ? 
                                        (colIndex === index ? '#fff' : '') : 
                                        (colIndex === index ? 'gray' : 'lightgray')    
                                    }/>
                            </div>
                        </th>
                    )}
                </tr>
            )
        } else if (props.sortable && props.checkbox) {
            return (
                <tr>
                    <th style={{ maxWidth: 40, width: 40 }}>
                        <Checkbox 
                            color={props.color ? props.color : ''}
                            onChange={() => onSelectAll()} 
                            checked={isAllChecked()}/>
                    </th>
                    {headers.map((item, index) => 
                        <th key={index}>
                            <div className="row align-center">
                                {item.name} 
                                <Icon 
                                    className="ml-8" 
                                    name={item.sort === 'desc' ? 'sort-descending' : 'sort-ascending'}
                                    onClick={() => {
                                        item.sort = item.sort === 'asc' ? 'desc' : 'asc'
                                        handleColumnSort(index, item.sort)
                                    }}
                                    size={16} 
                                    color={props.color ? 
                                        (colIndex === index ? '#fff' : '') : 
                                        (colIndex === index ? 'gray' : 'lightgray')    
                                    }/>
                            </div>
                        </th>
                    )}
                </tr>
            )
        } else if (props.checkbox) {
           return (
                <tr>
                    <th><Checkbox color={props.color ? props.color : ''}/></th>
                    {headers.map((item, index) => 
                        <th key={index}>{item}</th>
                    )}
                    <th></th>
                </tr>
           )
        } else {
            return (
                <tr>
                    {headers.map((item, index) => 
                        <th key={index}>{item}</th>
                    )}
                </tr>
            )
        }
    }

    const getItemKey = () => {
        return props.itemTitles[colIndex];
    }

    const getItems = () => {
        if (props.pagination) {
            return props.items
                .slice((perPage * currentPage) - perPage, perPage * currentPage)
                .sort((a, b) => compare(a, b, getItemKey(), sortType))
        } else {
            return props.items.sort((a, b) => compare(a, b, getItemKey(), sortType))
        }
    }

    return (
        <div className={tableContainerClass()}>
            <table className={tableClass()}>
                <thead>{prepareHeaders()}</thead>
                <tbody>
                    {getItems().map((item, index) => 
                        <tr key={index}>
                            {props.checkbox ? <td>
                                <Checkbox
                                    checked={isSelected(item)} 
                                    color={props.color ? props.color : ''} 
                                    onChange={() => onSelect(item)}/>
                            </td> : <React.Fragment/>}
                            {props.index ? <td>{index + 1}</td> : <React.Fragment/>}
                            {props.itemTitles.map((title, iter) => 
                                <td key={iter}>{item[title]}</td>
                            )}
                            {props.controls ? <td>
                                {props.controls}
                            </td> : <React.Fragment/>}
                        </tr>
                    )}
                </tbody>
            </table>
            {props.footer || props.checkbox ? 
                (
                    props.checkbox ? 
                    <div className="table__footer row space-between">
                        <span>{props.selectedText ? props.selectedText : 'Selected: '} <strong>{selected.length}</strong></span>
                        {props.footer}
                    </div> : 
                    <div className="table__footer">{props.footer}</div>
                ) : 
            ''}
            {props.items.length === 0 && !props.loading ?
                <div className="table__placeholder"><Empty/></div> : ''}
            {props.loading ? 
                <div className={props.loading ? 'table__placeholder loading' : 'table__placeholder'}>
                    <Loading/>
                </div> 
            : ''}
            {props.pagination ? 
                <Pagination
                    onChange={page => setCurrentPage(page)}
                    perPageVariants={props.perPageVariants}
                    perPage={perPage}
                    perPageText={props.perPageText}
                    onPerPageSelect={value => setPerPage(value)}
                    itemsCount={props.itemsTotal ? props.itemsTotal : 0}
                    color={props.color ? props.color : ''}
                    size={props.paginationSize ? props.paginationSize : ''}
                    current={props.currentPage ? props.currentPage : 1}
                    rounded={props.paginationRounded ? props.paginationRounded : false}/> : ''
            }
        </div>
    )
}
