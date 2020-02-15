import React, { useState } from 'react';
import { Pagination, InputField, Table } from '../components';

export const PaginationPage = () => {
    const [itemsCount, setItemsCount] = useState(100);

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'itemsCount', 
            description: 'Pass items count', 
            default: '', 
            type: 'number',
            value: ''
        },
        { 
            property: 'perPageVariants', 
            description: 'Set per page preset variants', 
            default: '[10, 20, 50, 100]', 
            type: 'number[]',
            value: ''
        },
        { 
            property: 'perPage', 
            description: 'Set per page value', 
            default: '10', 
            type: 'number',
            value: ''
        },
        { 
            property: 'pageText', 
            description: 'Set "10 / page" text', 
            default: 'page', 
            type: 'string',
            value: ''
        },
        { 
            property: 'current', 
            description: 'Set pagination default current page', 
            default: '1', 
            type: 'number',
            value: ''
        },
        { 
            property: 'color', 
            description: 'Set color of pagination from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error'
        },
        { 
            property: 'rounded', 
            description: 'Make border radius rounded',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'size', 
            description: 'Set pagination size',
            default: '', 
            type: 'string',
            value: 'medium | large'
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    return (
        <div className="page">
            <div className="page-title">Pagination</div>
            <h3>Default pagination (in different colors)</h3>
            <InputField 
                value={itemsCount}
                color="info"
                type="number"
                width={150}
                label="Input items count" 
                onChange={e => setItemsCount(e.target.value)}/>
            <Pagination
                itemsCount={itemsCount}
                color="primary"
                className="pa-5"
                pageText="module"/>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                current={2}
                className="pa-5"
                perPage={20}/>
            <Pagination
                itemsCount={itemsCount}
                color="success"
                className="pa-5"
                current={3}
                perPage={20}/>
            <Pagination
                itemsCount={itemsCount}
                color="error"
                className="pa-5"
                current={4}/>
            <h3>Medium size rounded pagination</h3>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                className="pa-5"
                size="medium"
                rounded/>
            <h3>Large size pagination</h3>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                className="pa-5"
                size="large"/>
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
