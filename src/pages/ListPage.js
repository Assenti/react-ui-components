import React from 'react';
import { List } from '../components/List';
import { Button } from '../components/Button';
import { Delete, Edit } from '../icons';

const items = ['John Doe', 'Peter Parker', 'Tony Stark', 'Bruce Benner']

export const ListPage = () => {
    return (
        <div className="page">
            <div className="page-title">Lists</div>
            <List items={items} listTitle="Simple list"/>
            <br/>
            <List items={items}
                checkbox 
                listTitle="List with checkboxes and toolbar"/>
            <br/>
            <List items={items}
                checkbox 
                listTitle="List with checkboxes, toolbar and controls">
                <Button small icon onAction={() => {}}><Edit color="#42a5f5" size={18}/></Button>
                <Button small icon onAction={() => {}}><Delete color="#f44336" size={18}/></Button>
            </List>
        </div>
    )
}
