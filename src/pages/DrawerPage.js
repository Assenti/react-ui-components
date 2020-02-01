import React, { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { List, ListItem } from '../components/List';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { Table } from '../components/Table';

export const DrawerPage = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [content, setContent] = useState('');

    const stack = [
        { name: 'JavaScript', icon: 'code' }, 
        { name: 'TypeScript', icon: 'code' },
        { name: 'React', icon: 'code' },
        { name: 'React Router', icon: 'code' },
        { name: 'React Redux', icon: 'code' }
    ]

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'drawer', 
            description: 'Drawer visibilty state', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'min', 
            description: 'Set drawer width to minimum size', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'onResize', 
            description: 'Handle drawer min prop toggling', 
            default: '', 
            type: 'function',
            value: ''
        },
        { 
            property: 'fullHeight', 
            description: 'Set drawer height to full screen height', 
            default: '', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'header', 
            description: 'Set drawer header', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'dark', 
            description: 'Set dark mode', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'absolute', 
            description: 'Set drawer position to absolute', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
    ]

    return (
        <div className="page">
            <div className="page-title">Drawer</div>
            <div className="app bordered" style={{ minHeight: 400 }}>
                <Drawer
                    drawer={drawer}
                    min={drawerMin}
                    header="Title"
                    onResize={() => setDrawerMin(!drawerMin)}>
                    {drawerMin ? 
                        <List>
                            {stack.map(({name, icon}, index) => 
                                <Tooltip key={index}    
                                    tooltip={name}
                                    position="right">
                                    <Button
                                        light 
                                        onClick={() => setContent(name)} 
                                        icon={icon}/>
                                </Tooltip>
                            )}
                        </List> : 
                        <List>
                            {stack.map((item, index) => 
                                <ListItem 
                                    key={index}    
                                    item={item}
                                    hover
                                    itemTitle="name" />
                            )}
                        </List>
                    }
                </Drawer>
                <div className="px-20">
                    <h1>Just content</h1>
                    <Button 
                        name="Toggle" 
                        color="info"
                        onClick={() => setDrawer(!drawer)}/>
                    <p>{content}</p>
                </div>
            </div>
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
