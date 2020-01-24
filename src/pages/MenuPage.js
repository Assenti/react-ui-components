import React, { useState } from 'react';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';

export const MenuPage = () => {
    const [menu, setMenu] = useState(false);
    const [stack, setStack] = useState('');
    const items = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Next', 'Redux', 'React-Redux', 'Vue', 'Vuex', 'Nuxt']

    return (
        <div className="page">
            <div className="page-title">Menu</div>

            <div className="row">
                <Menu
                    items={items}
                    visible={menu}
                    onClose={() => setMenu(false)}
                    title="Choose Stack"
                    onSelect={v => setStack(v)}
                    trigger={<Button
                        color="info"
                        size="medium"
                        name="Menu button"
                        onClick={() => setMenu(true)}/>}/>
                <p className="mx-20">{stack}</p>
            </div>
        </div>
    )
}
