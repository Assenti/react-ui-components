import React, { useState } from 'react';
import { List, ListItem } from '../components/List';
import { Button } from '../components/button/Button';
import { Checkbox } from '../components/Checkbox';
import { Table } from '../components/Table';
import { Card } from '../components/Card';
import { Tag } from '../components/Tag';

export const ListPage = () => {
    const names = [
        { name: 'John Doe', active: false },
        { name: 'Peter Parker', active: true },
        { name: 'Tony Stark', active: false },
        { name: 'Bruce Benner', active: false }
    ];

    const itemsComplexInitial = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
    ];

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'header', 
            description: 'Set list header',
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'dense', 
            description: 'Set list item density',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'dark',
            description: 'Set dark mode (can not be used with light prop)', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    const items2 = [
        { 
            property: 'itemTitle', 
            description: 'If you pass items as array of objects pass the key of field that you want to display', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'subTitle', 
            description: 'Set subtitle in list item (It can be just text or Tag and etc.)', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'isActiveItem', 
            description: 'Define the active item and set active class (return boolean)', 
            default: '', 
            type: 'function',
            value: ''
        },
        { 
            property: 'checkbox',
            description: 'A placeholder for checkbox (Expect a checkbox element or Component)', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'icon',
            description: 'Set icon before the text in list item', 
            default: '', 
            type: 'string',
            value: 'home | search | etc. (see icon names list in docs)'
        },
        { 
            property: 'controls',
            description: 'A placeholder for item controls like buttons or etc.', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'noDivider',
            description: 'Remove the divider line between items', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'hover',
            description: 'Set background color on item hover', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    const [itemsComplex, setItemsComplex] = useState(itemsComplexInitial);
    const [selected, setSelected] = useState([]);

    const selectOne = (item) => {
        if (isSelected(item, 'hero')) {
            setSelected(selected => selected.filter(_item => _item.hero !== item.hero))
        } else setSelected([...selected, item]);
    }

    const isSelected = (item, prop) => {
        let result = false
        if (prop) {
            for (const select of selected) {
                if (item[prop] === select[prop]) result = true 
            }
        }
        return result
    }

    return (
        <div className="page">
            <div className="page-title">Lists</div>
            <Card 
                outlined 
                className="px-0"
                color="primary" 
                title="Simple list with active item">
                <List>
                    {names.map((item, index) => 
                        <ListItem
                            isActiveItem={item => item.active} 
                            key={index} 
                            item={item}
                            itemTitle="name"/>
                    )}
                </List>
            </Card>
            <h4>Dark mode</h4>
            <Card 
                color="primary" 
                title="Simple list with dark mode, hover and icons" 
                dark
                className="px-0">
                <List items={itemsComplex} itemTitle="hero" dark hover>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item}
                            icon={item.icon}
                            itemTitle="hero"
                            hover/>
                    )}
                </List>
            </Card>
            <br/>
            <Card 
                outlined 
                color="primary" 
                title="Dense size list with header and hover"
                className="px-0">
                <List dense header="Marvel avengers:">
                    {names.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item}
                            icon="account"
                            itemTitle="name"
                            hover/>
                    )}
                </List>
            </Card>
            <br/>
            <Card 
                outlined 
                color="primary" 
                title="List with checkbox"
                className="px-0">
                <List header={'Selected Marvel avengers: ' + selected.length}>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item}
                            itemTitle="hero"
                            isActiveItem={item => isSelected(item, 'hero')}
                            hover
                            checkbox={<Checkbox 
                                checked={isSelected(item, 'hero')}
                                onChange={() => selectOne(item)}/>}/>
                    )}
                </List>
            </Card>
            <br/>
            <Card outlined color="primary" title="List with controls and subtitles">
                <List>
                    {itemsComplex.map((item, index) => 
                        <ListItem 
                            key={index} 
                            item={item}
                            icon={item.icon} 
                            itemTitle="name"
                            subTitle={<Tag small color="info" value={item.hero}/>}
                            controls={
                                <React.Fragment>
                                    <Button small color="light" className="mr-10" icon="edit"/>
                                    <Button small color="light" icon="close"/>
                                </React.Fragment>
                            }/>
                    )}
                </List>
            </Card>
            <h2>List API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
            <h2>ListItem API</h2>
            <Table
                bordered
                headers={keys}
                items={items2}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
