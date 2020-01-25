import React, { useState } from 'react';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { InputField } from '../components/Input';

export const MenuPage = () => {
    const [menu, setMenu] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [item, setItem] = useState('');
    const [item2, setItem2] = useState('');

    const items = [
        { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
        { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
        { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
        { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
    ];

    return (
        <div className="page">
            <div className="page-title">Menu</div>
            <h3>Menu using with Button</h3>
            <div className="row align-center">
                <Menu
                    items={items}
                    itemTitle="name"
                    visible={menu}
                    onClose={() => setMenu(false)}
                    onSelect={v => setItem(v)}
                    trigger={<Button
                        color="info"
                        name="Menu button"
                        icon="chevron-down"
                        onClick={() => setMenu(true)}/>}/>
                <p className="mx-20">Your select: {item}</p>
            </div>
            <h3>Menu using with InputField</h3>
            <div className="row">
                <Menu
                    items={items}
                    visible={menu2}
                    itemTitle="name"
                    onClose={() => setMenu2(false)}
                    onSelect={v => setItem2(v)}
                    trigger={<InputField
                        color="info"
                        value={item2}
                        onFocus={() => setMenu2(true)}
                        placeholder="Choose a hero"
                        onClick={() => setMenu(true)}/>}/>
            </div>
        </div>
    )
}
