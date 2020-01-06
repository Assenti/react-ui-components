import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';

export const HomePage = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [drawer, setDrawer] = useState(true);
    const [menu, setMenu] = useState(false);
    const [stack, setStack] = useState('');

    const items = ['JavaScript', 'TypeScript', 'React', 'React-Native', 'Next', 'Redux', 'React-Redux', 'Vue', 'Vuex', 'Nuxt']

    return (
        <div>
            <h1 className="text-primary">Welcome</h1>
            <div style={{ display: 'flex' }}>
                {showButton && 
                    <Button
                        color="primary"
                        name="Show Message"
                        onAction={() => setShowMessage(true)}/>          
                }
                <span className="mx-5"></span>
                <Button
                    color="primary"
                    name={drawer ? 'Close Drawer' : 'Open Drawer'}
                    onAction={() => setDrawer(!drawer)}/> 
                <span className="mx-5"></span>
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
        </div>
    )
}
