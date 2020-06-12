import React from 'react';
import PropTypes from 'prop-types';
import { strinfigyClassObject } from '../utils';

const TableSimple = (props) => {
    let className = {
        name: 'rui-table',
        dark: props.dark ? 'dark' : '',
        noHover: props.noHover ? 'no-hover' : '',
        stripped: props.stripped ? 'stripped' : '',
        bordered: props.bordered ? 'bordered' : '',
        grid: props.grid ? 'grid' : '',
        className: props.className ? props.className : ''
    }

    return <table ref={props.tableRef} style={props.style} id={props.id} className={strinfigyClassObject(className)}>{props.children}</table>
}

const TableHead = (props) => {
    return <thead style={props.style} className={props.className}>{props.children}</thead>
}

const TableBody = (props) => {
    return <tbody style={props.style} className={props.className}>{props.children}</tbody>
}

const TableRow = (props) => {
    return <tr style={props.style} className={props.className}>{props.children}</tr>
}

const TableHeader = (props) => {
    let className = {
        align: props.align ? props.align : '',
        className: props.className ? props.className : ''
    }
    return <th style={props.style} className={strinfigyClassObject(className)} colSpan={props.colSpan} rowSpan={props.rowSpan}>{props.children}</th>
}

const TableCell = (props) => {
    let className = {
        align: props.align ? props.align : '',
        className: props.className ? props.className : ''
    }
    return <td style={props.style} className={strinfigyClassObject(className)} colSpan={props.colSpan} rowSpan={props.rowSpan}>{props.children}</td>
}

TableSimple.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node,
    stripped: PropTypes.bool,
    noHover: PropTypes.bool,
    dark: PropTypes.bool,
    grid: PropTypes.bool,
    bordered: PropTypes.bool,
    style: PropTypes.any,
    className: PropTypes.string,
    tableRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
}

TableHead.propTypes = {
    children: PropTypes.node,
    style: PropTypes.any,
    className: PropTypes.string
}

TableBody.propTypes = {
    children: PropTypes.node,
    style: PropTypes.any,
    className: PropTypes.string
}

TableRow.propTypes = {
    children: PropTypes.node,
    style: PropTypes.any,
    className: PropTypes.string
}

TableCell.propTypes = {
    children: PropTypes.node,
    colSpan: PropTypes.number,
    rowSpan: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.any,
    align: PropTypes.oneOf(['left','right','center'])
}

TableHeader.propTypes = {
    children: PropTypes.node,
    colSpan: PropTypes.number,
    rowSpan: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.any,
    align: PropTypes.oneOf(['left','right','center'])
}

TableSimple.Head = TableHead;
TableSimple.Body = TableBody;
TableSimple.Row = TableRow;
TableSimple.Cell = TableCell;
TableSimple.Header = TableHeader;

export default TableSimple;