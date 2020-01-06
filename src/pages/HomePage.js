import React, { useState } from 'react';
import { Button } from '../components/Button';

export const HomePage = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [drawer, setDrawer] = useState(true);

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
                </div>
        </div>
    )
}
