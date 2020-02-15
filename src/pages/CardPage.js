import React from 'react';
import { Card } from '../components/card';
import { List, ListItem } from '../components/list';
import { Table } from '../components/table';
import { Icon } from '../components/icon';

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
            property: 'outlined',
            description: 'Set card borders outlined', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color',
            description: 'Set card borders color from colors list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error'
        },
        { 
            property: 'title',
            description: 'Set outlined card title (has effect only with outlined prop)', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'className',
            description: 'Set a custom css class to component', 
            default: '', 
            type: 'string',
            value: ''
        }
    ]

    const imageCards = () => {
        let cards = [1,2,3]
        return (
            <div className="row">
                {cards.map((item, index) => 
                    <Card 
                        key={index}
                        className="ma-5 col"
                        width={200} 
                        img={<div className="row justify-center"><Icon name="react" size={50} color="#42a5f5"/></div>}
                        footer={'Some description ' + item}>
                        <p>Some title {item}</p>
                    </Card>
                )}
            </div>
        )
    }

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
                {imageCards()}
                <h3>Outlined Cards with titles</h3>
                <Card outlined title="Marvel Avengers" color="info">
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
