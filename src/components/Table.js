import React from 'react';
import { Empty } from '../icons/index';
import { Checkbox } from './Checkbox';


export const Table = (props) => {
    return (
        <div className={props.bordered ? 'table-container bordered' : 'table-container'}>
            <table className="table">
                <thead>
                    <tr>
                        {props.checkbox ? <th>
                            <Checkbox/>
                        </th> : ''}
                        {props.headers.map((item, index) => <th key={index}>{item}</th>)}
                        {props.controls ? <th></th> : ''}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => 
                        <tr key={index} className={props.noHover ? 'no-hover' : ''}>
                            {props.checkbox ? <td>
                                <Checkbox/>
                            </td> : ''}
                            {props.index ? <td>{index + 1}</td> : ''}
                            {props.itemTitles.map((title, iter) => 
                                <td key={iter}>{item[title]}</td>
                            )}
                            {props.controls ? <td>
                                {props.controls}
                            </td> : ''}
                        </tr>
                    )}
                </tbody>
            </table>
            {props.footer ? <div className="table-footer">{props.footer}</div> : ''}
            {props.items.length === 0 ? <div className="table-empty"><Empty/></div> : ''}
        </div>
    )
}
