import React, { useState } from 'react';
import { Button, Preloader, Table } from '../components';

export const PreloaderPage = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'visible', 
            description: 'Preloader visibile state', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'preloader', 
            description: 'Pass your own custom preloader element', 
            default: 'Moving ellipsis', 
            type: 'any',
            value: ''
        },
        { 
            property: 'backgroundColor', 
            description: 'Set preloader background color', 
            default: 'transparent', 
            type: 'string',
            value: ''
        },
        { 
            property: 'color', 
            description: 'Set preloader default ellipsis color', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    return (
        <div className="page">
            <div className="page-title">Preloader</div>
            <div className="pa-10">
                <Button name="Activate" color="info" onClick={handleClick}/>
            </div>
            <Preloader visible={loading}/>
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
