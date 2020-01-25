import React from 'react';
import { Card } from '../components/Card';
import { List } from '../components/List';
import logo from '../img/logo.svg';

export const CardPage = () => {
    const itemsComplexInitial = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
    ];

    return (
        <div className="page">
            <div className="page-title">Cards</div>
            <div style={{ maxWidth: 500 }}>
                <h3>Card with header</h3>
                <Card header="Marvel heroes">
                    <List items={itemsComplexInitial} itemTitle="name"/>
                </Card>
                <h3>Card flat</h3>
                <Card header="Marvel heroes" flat>
                    <List items={itemsComplexInitial} itemTitle="name"/>
                </Card>
                <h3>Card with image</h3>
                <Card 
                    width={200} 
                    img={logo}
                    footer="Some description">
                    <p>Some title</p>
                </Card>
            </div>
        </div>
    )
}
