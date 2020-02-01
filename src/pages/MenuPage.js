import React, { useState } from 'react';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { InputField } from '../components/Input';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Tag } from '../components/Tag';

export const MenuPage = () => {
    const [menu, setMenu] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [item, setItem] = useState('');
    const [item2, setItem2] = useState('');

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'items', 
            description: 'Menu items', 
            default: '', 
            type: 'string[] | object[] | number[]',
            value: ''
        },
        { 
            property: 'itemTitle', 
            description: 'If you pass items as array of objects pass the key of field that you want to display', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'visible', 
            description: 'Menu visible state', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'trigger', 
            description: 'Trigger element (Button, Input Field & etc.)',
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'onClose',
            description: 'Handle on close event', 
            default: '', 
            type: 'function',
            value: ''
        },
        { 
            property: 'onSelect', 
            description: 'Handle menu item selection event', 
            default: '',
            type: 'function', 
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
            <div className="page-title">Menu</div>
            <h3>Menu using with Button</h3>
            <Card>
                <div className="row align-center">
                    <Menu
                        items={heroes}
                        itemTitle="name"
                        visible={menu}
                        onClose={() => setMenu(false)}
                        onSelect={v => setItem(v)}
                        trigger={<Button
                        color="info"
                        name="Menu button"
                        onClick={() => setMenu(true)}/>}/>
                    <Tag value={`Your select: ${item}`} className="ml-10"/>
                </div>
            </Card>
            <h3>Menu using with Input Field</h3>
            <Card>
                <div className="row">
                    <Menu
                        items={heroes}
                        visible={menu2}
                        itemTitle="name"
                        onClose={() => setMenu2(false)}
                        onSelect={v => setItem2(v)}
                        trigger={<InputField
                            color="info"
                            value={item2}
                            onClear={() => setMenu2('')}
                            onFocus={() => setMenu2(true)}
                        placeholder="Choose a hero"
                        onClick={() => setMenu(true)}/>}/>
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
