import React, { useState } from 'react';
import { Empty } from '../icon/icons/index';
import { Checkbox } from '../checkbox';
import { Pagination } from '../pagination';

export const Table = (props) => {
    const [currentPage, setCurrentPage] = useState(props.currentPage ? props.currentPage : 1);
    const [perPage, setPerPage] = useState(props.perPage ? props.perPage : 10);

    const tableContainerClass = () => {
        let result = '';
        let className = {
            name: 'table__container',
            bordered: props.bordered ? 'bordered' : '',
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
            headerColor: props.headerColor ? props.headerColor : '',
            alignment: props.alignment ? props.alignment : '',
            controls: props.controls ? 'controls' : '',
            stripped: props.stripped ? 'stripped' : ''
        }
        
        for (const key in className) {
            if (className[key]) result += className[key] + ' '
        }
        return result.trim();
    }

    const headers = () => {
        if (props.controls && !props.checkbox) {
            return [...props.headers, '']
        } else if (props.checkbox && !props.controls) {
            return [<Checkbox/>, ...props.headers]
        } else if (props.checkbox && props.controls) {
            return [<Checkbox/>, ...props.headers, '']
        } else if (props.index && !props.checkbox && !props.controls) {
            return ['#', ...props.headers]
        } else {
            return props.headers
        }
    }

    const getItems = () => {
        if (props.pagination) {
            return props.items.slice((perPage * currentPage) - perPage, perPage * currentPage)
        } else {
            return props.items
        }
    }

    return (
        <div className={tableContainerClass()}>
            <table className={tableClass()}>
                <thead>
                    <tr>
                        {headers().map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {getItems().map((item, index) => 
                        <tr key={index} className={props.noHover ? 'no-hover' : ''}>
                            {props.checkbox ? <td>
                                <Checkbox onChange={() => {}}/>
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
            {props.footer ? 
                <div className={props.footerColor ? `table__footer ${props.footerColor}` : 'table__footer'}>
                    {props.footer}</div> : ''}
            {props.items.length === 0 ? <div className="table__empty"><Empty/></div> : ''}
            {props.pagination && !props.hideOnSinglePage ? 
                <Pagination
                    className="table__pagination"
                    onChange={page => setCurrentPage(page)}
                    perPageVariants={props.perPageVariants}
                    itemsCount={props.itemsTotal ? props.itemsTotal : 0}
                    color={props.paginationColor ? props.paginationColor : ''}
                    size={props.paginationSize ? props.paginationSize : ''}
                    current={props.currentPage ? props.currentPage : 1}
                    rounded={props.paginationRounded ? props.paginationRounded : false}/> : ''
            }
        </div>
    )
}
