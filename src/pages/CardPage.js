import React from 'react';
import { Card } from '../components/Card';
import { List, ListItem } from '../components/List';
import { Table } from '../components/Table';
import logo from '../img/logo.svg';

export const CardPage = () => {
    const itemsComplexInitial = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
    ];

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'header', 
            description: 'Set card header',
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'footer',
            description: 'Set card footer', 
            default: '', 
            type: 'any',
            value: ''
        },
        { 
            property: 'width',
            description: 'Set card width', 
            default: '', 
            type: 'string | number',
            value: '100, "100%", "100px"'
        },
        { 
            property: 'padding',
            description: 'Set card padding', 
            default: '15px', 
            type: 'string | number',
            value: ''
        },
        { 
            property: 'img',
            description: 'Set card image', 
            default: '', 
            type: 'string | base64',
            value: ''
        },
        { 
            property: 'flat', 
            description: 'Remove card box shadow',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'dark',
            description: 'Set dark mode', 
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

    return (
        <div className="page">
            <div className="page-title">Cards</div>
            <div style={{ maxWidth: 500 }}>
                <h3>Card with header</h3>
                <Card header="Marvel heroes">
                    <List>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item}
                                hover
                                itemTitle="name"/>
                        )}
                    </List>
                </Card>
                <h3>Card flat</h3>
                <Card header="Marvel heroes" flat>
                    <List>
                        {itemsComplexInitial.map((item, index) => 
                            <ListItem 
                                key={index}
                                item={item}
                                hover
                                itemTitle="name"/>
                        )}
                    </List>
                </Card>
                <h3>Card with image</h3>
                <Card 
                    width={200} 
                    img={logo}
                    footer="Some description">
                    <p>Some title</p>
                </Card>
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
