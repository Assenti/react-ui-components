import React,  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from '../components/Drawer';
import { Button } from '../components/Button';
import { List } from '../components/List';
import { Tooltip } from '../components/Tooltip';
import reactLogo from '../img/logo.svg';

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
                headerCentered
                header={<img src={reactLogo} alt="React logo"/>}
                min={drawerMin}
                onResize={() => setDrawerMin(!drawerMin)}>
                {drawerMin ? 
                <List onItemClick={() => {}} 
                    items={props.items} 
                    isActiveItem={() => false}>
                        {props.items.map((item, index) => 
                            <Tooltip key={index}    
                                tooltip={item.name}
                                position="right">
                                <Button 
                                    dark
                                    onAction={() => handleItemClick(item)} 
                                    icon="chip"/>
                            </Tooltip>
                        )}
                    </List> : 
                <List dark
                    hover
                    onItemClick={handleItemClick} 
                    items={props.items} 
                    itemTitle="name" 
                    isActiveItem={current => current.path === window.location.pathname}/>}
            </Drawer>
        </div>
    )
}
