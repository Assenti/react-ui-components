import React, { useState } from 'react';
import { Menu } from '../components/Menu';

export const MenuPage = () => {
    const [menu, setMenu] = useState(false);
    const [stack, setStack] = useState('');
    const items = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Next', 'Redux', 'React-Redux', 'Vue', 'Vuex', 'Nuxt']

    return (
        <div className="page">
            <div className="input-group">
                <label htmlFor="stack-id">Input your variant or choose on of option</label>
                <input
                id="stack-id" 
                value={stack}
                onChange={e => setStack(e.target.value)}
                className="input"
                placeholder="Choose Stack"
                onFocus={() => setMenu(true)}
                onBlur={() => setMenu(false)}/>
                <Menu menu={menu} title="Choose Stack" items={items} onSelect={v => setStack(v)}/>
            </div>
        </div>
    )
}
