import React,  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from '../components/Drawer';
import { List } from '../components/List';

export const DrawerContent = (props) => {
    const history = useHistory();
    const [drawerMin, setDrawerMin] = useState(false);

    const handleItemClick = (item) => {
        history.push(item.path)
    }
    
    return (
        <div>
            <Drawer
                drawer={props.drawer}
                fullHeight
                dark
                min={drawerMin}
                onResize={() => setDrawerMin(!drawerMin)}>
                <List dark
                    onItemClick={handleItemClick} 
                    items={props.items} 
                    itemTitle="name" 
                    isActiveItem={current => current.path === window.location.pathname}/>
            </Drawer>
        </div>
    )
}
