import React, { useState } from 'react';
import { Drawer } from '../components/Drawer';
import { List } from '../components/List';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';
import { Code } from '../icons/index';

export const DrawerPage = () => {
    const [drawer, setDrawer] = useState(true);
    const [drawerMin, setDrawerMin] = useState(false);

    const items = [
        { name: 'JavaScript', Icon: Code }, 
        { name: 'TypeScript', Icon: Code },
        { name: 'React', Icon: Code },
        { name: 'React Router', Icon: Code },
        { name: 'React Redux', Icon: Code }
    ]

    return (
        <div className="page">
            <div className="page-title">Drawer</div>
            <div className="app bordered">
                <Drawer
                    drawer={drawer}
                    min={drawerMin}
                    onResize={() => setDrawerMin(!drawerMin)}>
                    {drawerMin ? 
                        <List onItemClick={() => {}} 
                        items={items} 
                        isActiveItem={() => false}>
                            {items.map(({name, Icon}, index) => 
                                <Tooltip key={index}    
                                    tooltip={name}
                                    position="right">
                                    <Button 
                                    onAction={() => {}} 
                                    icon><Icon/></Button>
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
                </div>
            </div>
        </div>
    )
}
