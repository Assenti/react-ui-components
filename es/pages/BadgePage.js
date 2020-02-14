import React, { useState } from 'react';
import { Badge } from '../components/badge/Badge';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

export const BadgePage = () => {
    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'value', 
            description: 'Set badge value', 
            default: '', 
            type: 'string | number',
            value: ''
        },
        { 
            property: 'color', 
            description: 'Set badge color', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error'
        },
        { 
            property: 'rounded', 
            description: 'Set rounded badge borders', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'parent', 
            description: 'Parent component for badge', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'visible', 
            description: 'Badge visible state', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        // { 
        //     property: 'header', 
        //     description: 'Set drawer header', 
        //     default: '', 
        //     type: 'any',
        //     value: ''
        // },
        // { 
        //     property: 'dark', 
        //     description: 'Set dark mode', 
        //     default: 'false', 
        //     type: 'boolean',
        //     value: 'true | false'
        // },
        // { 
        //     property: 'absolute', 
        //     description: 'Set drawer position to absolute', 
        //     default: 'false', 
        //     type: 'boolean',
        //     value: 'true | false'
        // },
    ]

    const [badge, setBadge] = useState(true);

    return (
        <div className="page">
            <div className="page-title">Badges</div>
            <Card>
                <div className="row align-center">
                    <Badge 
                        color="info" 
                        value={100} 
                        className="mr-20"
                        parent={<Icon size={24} name="account"/>}/>
                    <Badge 
                        color="error" 
                        value={10} 
                        rounded
                        className="mr-20"
                        parent={<Icon size={24} name="smartphone"/>}/>
                    <Badge 
                        color="error" 
                        value={10} 
                        rounded
                        visible={badge}
                        className="mr-20"
                        parent={<Icon size={24} name="smartphone"/>}/>
                    <Button name="Toggle badge" color="info" onClick={() => setBadge(!badge)}/>
                </div>
            </Card>
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
