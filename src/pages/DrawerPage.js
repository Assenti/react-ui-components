import React, { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { List } from '../components/List';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';

export const DrawerPage = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);
    const [content, setContent] = useState('');

    const items = [
        { name: 'JavaScript', icon: 'code' }, 
        { name: 'TypeScript', icon: 'code' },
        { name: 'React', icon: 'code' },
        { name: 'React Router', icon: 'code' },
        { name: 'React Redux', icon: 'code' }
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
                        <List onItemClick={() => {}} 
                        items={items} 
                        isActiveItem={() => false}>
                            {items.map(({name, icon}, index) => 
                                <Tooltip key={index}    
                                    tooltip={name}
                                    position="right">
                                    <Button 
                                        onAction={() => setContent(name)} 
                                        icon={icon}/>
                                </Tooltip>
                            )}
                        </List> : 
                        <List onItemClick={() => {}} 
                            items={items}
                            itemTitle="name" 
                            isActiveItem={() => false}/>
                    }
                </Drawer>
                <div className="px-20">
                    <h1>Just content</h1>
                    <Button 
                        name="Toggle" 
                        color="info"
                        onAction={() => setDrawer(!drawer)}/>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
