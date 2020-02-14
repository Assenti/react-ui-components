import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from '../components/Drawer';
import { List, ListItem } from '../components/List';
import reactLogo from '../img/logo.svg';

export const DrawerContent = (props) => {
    const history = useHistory();

    const handleItemClick = (item) => {
        history.push(item.path)
    }
    
    return (
        <div>
            <Drawer
                drawer={props.drawer}
                fullHeight
                dark
                onClose={() => props.onClose()}
                headerCentered
                header={<img src={reactLogo} alt="React logo"/>}>
                <List dark>
                    {props.items.map((item, index) => 
                        <ListItem
                            key={index}
                            right
                            isActiveItem={current => current.path === window.location.pathname}
                            onItemClick={() => handleItemClick(item)}
                            itemTitle="name"
                            hover
                            item={item}/>
                    )}
                </List>
            </Drawer>
        </div>
    )
}
