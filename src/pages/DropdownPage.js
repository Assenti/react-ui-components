import React, { useState } from 'react';
import { Dropdown } from '../components/dropdown';
import { Button } from '../components/button';
import { InputField } from '../components/input';
import { Card } from '../components/card';
import { Table } from '../components/table';
import { Tag } from '../components/tag';
import { Icon } from '../components/icon';

export const DropdownPage = () => {
    const [item, setItem] = useState('');
    const [item2, setItem2] = useState('');

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'content', 
            description: 'Dropdown content', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'trigger', 
            description: 'Trigger element (Button, InputField & etc.)',
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'width', 
            description: 'Set Dropdown content width',
            default: '', 
            type: 'string | number',
            value: ''
        },
        { 
            property: 'minWidth', 
            description: 'Set Dropdown content minWidth',
            default: '', 
            type: 'string | number',
            value: ''
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    const heroes = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
    ];

    return (
        <div className="page">
            <div className="page-title">Dropdown Component</div>
            <Card outlined color="primary" title="Dropdown on Button">
                <div className="row align-center">
                    <Dropdown
                        content={
                            heroes.map((item, index) => 
                                <div key={index} 
                                    className="menu-item fz-8" 
                                    onClick={() => setItem(item.hero)}>{item.hero}</div>
                            )
                        }
                        itemTitle="name"
                        trigger={<Button
                            color="info"
                            name="Button"/>}/>
                    <Tag value={`Your select: ${item}`} className="ml-10"/>
                </div>
            </Card>
            <br/>
            <Card outlined color="primary" title="Dropdown on InputField">
                <div className="row">
                    <Dropdown
                        content={
                            heroes.map((item, index) => 
                                <div key={index} 
                                    className="menu-item" 
                                    onClick={() => setItem2(item.hero)}>{item.hero}</div>
                            )
                        }
                        trigger={<InputField
                                color="info"
                                prefix={<Icon name="shield-account"/>}
                                value={item2}
                                placeholder="Choose a hero"/>}/>
                </div>
            </Card>
            <br/>
            <Card outlined color="primary" title="Dropdown on Icon button">
                <div className="row">
                    <Dropdown
                        content={
                            <div className="row column justify-center px-15 pt-15 pb-20">
                                <Icon name="account" color="gray" size={90}/>
                                <strong className="text-center text-info fz-9 pt-5">John Doe</strong>
                            </div>
                        }
                        trigger={<Button
                                    light
                                    icon="account"/>}/>
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
