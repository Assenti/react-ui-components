import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from '../components/drawer';
import { List, ListItem } from '../components/list';
import { Icon } from '../components/icon';

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
                header={<Icon name="react" color="white" size={30}/>}>
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
