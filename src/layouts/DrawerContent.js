import React,  { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from '../components/Drawer';
import { Button } from '../components/Button';
import { List, ListItem } from '../components/List';
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
                <List dark>
                    {props.items.map((item, index) => 
                        <ListItem
                            key={index}
                            isActiveItem={current => current.path === window.location.pathname}
                            onItemClick={() => handleItemClick(item)}
                            itemTitle="name"
                            hover
                            item={item}/>
                    )}
                </List>}
            </Drawer>
        </div>
    )
}
