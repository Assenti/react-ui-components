import React from 'react';
import { Empty } from '../icon/icons/index';
import { Checkbox } from '../checkbox';


export const Table = (props) => {

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

    return (
        <div className={props.bordered ? 'table-container bordered' : 'table-container'}>
            <table className="table">
                <thead>
                    <tr>
                        {headers().map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => 
                        <tr key={index} className={props.noHover ? 'no-hover' : ''}>
                            {props.checkbox ? <td>
                                <Checkbox/>
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
            {props.footer ? <div className="table-footer">{props.footer}</div> : ''}
            {props.items.length === 0 ? <div className="table-empty"><Empty/></div> : ''}
        </div>
    )
}
