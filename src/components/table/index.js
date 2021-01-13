import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Empty } from '../icon/icons/index';
import { Checkbox, Pagination, Icon, InputField } from '../index';
import { compare, strinfigyClassObject } from '../utils';

const makeSortableHeaders = (headers) => {
    let sortableHeaders = []
    for (const item of headers) {
        sortableHeaders.push({name: item, sort: 'asc' })
    }
    return sortableHeaders;
}

const Table = (props) => {
    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(props.currentPage ? props.currentPage : 1);
    const [perPage, setPerPage] = useState(props.perPage ? props.perPage : 10);
    const [sortType, setSortType] = useState(props.sortable ? 'asc' : '');
    const [colIndex, setColIndex] = useState(0);
    const [search, setSearch] = useState('');
    let classNameContainer = {
        name: 'rui-table-container',
        dark: props.dark ? 'dark' : '',
        color: props.color && props.color !== 'default' ? props.color : '',
        paginationPosition: props.paginationPosition ? props.paginationPosition : '',
        className: props.className ? props.className : ''
    }

    let className = {
        name: 'rui-table',
        stickyHead: props.stickyHead ? 'sticky' : '',
        alignment: props.alignment && props.alignment !== 'left' ? props.alignment : '',
        headerColor: props.color ? props.color : '',
        dark: props.dark ? 'dark' : '',
        bordered: props.bordered ? 'bordered' : '',
        grid: props.grid ? 'grid' : '',
        empty: props.items.length === 0 ? 'empty' : '',
        noHover: props.noHover ? 'no-hover' : '',
        stripped: props.stripped ? 'stripped' : ''
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

    const isIndexedTable = () => {
        if (props.index) return <th className={props.searchable ? 'indexed bordered' : 'indexed'}>{props.indexSign ? props.indexSign : '#'}</th>
    }

    const isCheckbox = () => {
        if (props.checkbox) {
            return (
                <th style={{ maxWidth: 40, width: 40 }}>
                    <Checkbox 
                        color={props.color ? props.color : ''}
                        onChange={() => props.checkbox ? onSelectAll() : {}} 
                        checked={isAllChecked()}/>
                </th>
            )
        }
    }

    const isControls = () => {
        if (props.controls) return <th></th>
    };

    const isSortable = (item, index) => {
        if (props.sortable) {
            return <Icon 
                className="ml-8 cursor-pointer" 
                name={sortType === 'desc' ? 'sort-descending' : 'sort-ascending'}
                onClick={() => {
                    item.sort = item.sort === 'asc' ? 'desc' : 'asc'
                    handleColumnSort(index, item.sort)
                }}
                color={props.color && props.color !== 'default' ? '#fff' : ''}
                size={16}/>
        }
    }
 
    const prepareHeaders = () => {
        return (
            <tr>
                {isIndexedTable()}
                {isCheckbox()}
                {makeSortableHeaders(props.headers).map((item, index) => 
                    <th key={index} className={props.searchable ? 'bordered' : ''}>
                        <div className="row align-center">
                            {item.name} 
                            {isSortable(item, index)}
                        </div>
                    </th>
                )}
                {isControls()}
            </tr>
        )
    }

    const getItemKey = () => props.itemTitles[colIndex];

    const getItems = () => {
        if (search) {
            if (props.pagination && props.sortable) {
                return props.items
                    .slice((perPage * currentPage) - perPage, perPage * currentPage)
                    .sort((a, b) => compare(a, b, getItemKey(), sortType))
                    .filter(item => item[props.searchKey].toLowerCase().includes(search.toLowerCase()))
            } else if (!props.pagination && props.sortable) {
                return props.items
                        .sort((a, b) => compare(a, b, getItemKey(), sortType))
                        .filter(item => item[props.searchKey].toLowerCase().includes(search.toLowerCase()))
            } else if (props.pagination && !props.sortable) {
                return props.items
                        .slice((perPage * currentPage) - perPage, perPage * currentPage)
                        .sort((a, b) => compare(a, b, getItemKey(), sortType))
                        .filter(item => item[props.searchKey].toLowerCase().includes(search.toLowerCase()))
            } else {
                return props.items.filter(item => item[props.searchKey].toLowerCase().includes(search.toLowerCase()))
            }
        } else {
            if (props.pagination && props.sortable) {
                return props.items
                    .slice((perPage * currentPage) - perPage, perPage * currentPage)
                    .sort((a, b) => compare(a, b, getItemKey(), sortType))
            } else if (!props.pagination && props.sortable) {
                return props.items.sort((a, b) => compare(a, b, getItemKey(), sortType))
            } else if (props.pagination && !props.sortable) {
                return props.items
                        .slice((perPage * currentPage) - perPage, perPage * currentPage)
                        .sort((a, b) => compare(a, b, getItemKey(), sortType))
            } else {
                return props.items
            }
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Escape') setSearch('')
    }

    return (
        <div className={strinfigyClassObject(classNameContainer)} 
            ref={props.tableRef}
            style={props.style}
            id={props.id ? props.id : ''}>
            <div className="rui-table-header">
                {props.tableTitle ? 
                    <div className="rui-table-title">{props.tableTitle}</div> : null}
                {props.searchable ? 
                    <InputField
                        color={props.color ? props.color : 'primary'}
                        prefix={<Icon name="search"/>}
                        value={search}
                        className="my-5"
                        dark={props.dark}
                        onKeyUp={handleKeyUp}
                        placeholder={props.searchPlaceholder ? props.searchPlaceholder : 'Search'}
                        onChange={e => setSearch(e.target.value)}/> : ''}
            </div>
            <table className={strinfigyClassObject(className)}>
                <thead>{prepareHeaders()}</thead>
                <tbody>
                    {getItems().map((item, index) => 
                        <tr key={index}>
                            {props.index ? <td className="indexed">{index + 1}</td> : null}
                            {props.checkbox ? <td>
                                <Checkbox
                                    checked={isSelected(item)} 
                                    color={props.color ? props.color : ''} 
                                    onChange={() => onSelect(item)}/>
                            </td> : null}
                            {props.itemTitles.map((title, iter) => 
                                <td key={iter}>{item[title]}</td>
                            )}
                            {props.controls ? <td>
                                {props.controls(item)}
                            </td> : null}
                        </tr>
                    )}
                </tbody>
            </table>
            {props.items.length === 0 && !props.loading &&
                <div className="rui-table-placeholder"><Empty/></div>}
            {props.pagination ? 
                <Pagination
                    onChange={page => setCurrentPage(page)}
                    perPageVariants={props.perPageVariants}
                    perPage={perPage}
                    dense={props.paginationDense}
                    dark={props.dark}
                    perPageText={props.perPageText}
                    onPerPageSelect={value => setPerPage(value)}
                    itemsCount={props.itemsTotal ? props.itemsTotal : 0}
                    color={props.color && props.color !== 'default' ? props.color : ''}
                    size={props.paginationSize ? props.paginationSize : ''}
                    current={props.currentPage ? props.currentPage : 1}
                    borderType={props.paginationBorderType}/> : null}
        </div>
    )
}
Table.propTypes = {
    id: PropTypes.string,
    tableRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    items: PropTypes.array.isRequired,
    itemsTotal: PropTypes.number,
    itemTitles: PropTypes.arrayOf(PropTypes.string),
    headers: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.oneOf(['primary','info','success','error']),
    perPageVariants: PropTypes.arrayOf(PropTypes.number),
    perPageText: PropTypes.string,
    alignment: PropTypes.oneOf(['left','center','right']),
    tableTitle: PropTypes.node,
    searchable: PropTypes.bool,
    searchKey: PropTypes.string,
    pagination: PropTypes.bool,
    searchPlaceholder: PropTypes.string,
    paginationPosition: PropTypes.oneOf(['left','right']),
    paginationColor: PropTypes.oneOf(['primary', 'info', 'success', 'error']),
    checkbox: PropTypes.bool,
    controls: PropTypes.any,
    paginationDense: PropTypes.bool,
    selectKey: PropTypes.string,
    onSelect: PropTypes.func,
    sortable: PropTypes.bool,
    index: PropTypes.bool,
    indexSign: PropTypes.string,
    stripped: PropTypes.bool,
    bordered: PropTypes.bool,
    grid: PropTypes.bool,
    dark: PropTypes.bool,
    noHover: PropTypes.bool,
    stickyHead: PropTypes.bool,
    paginationBorderType: PropTypes.oneOf(['default','tile','rounded']),
    footer: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.any
}
export default Table;