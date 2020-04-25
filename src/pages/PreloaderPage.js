import React, { useState } from 'react';
import { Button, Preloader, ThemeContext } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'visible', 
        description: 'Preloader visibile state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'preloader', 
        description: 'Pass your own custom preloader element', 
        default: 'Moving ellipsis', 
        type: 'any',
        value: ''
    },
    { 
        property: 'backgroundColor', 
        description: 'Set preloader background color', 
        default: 'transparent', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set preloader default ellipsis color', 
        default: 'primary (#1678c2)', 
        type: 'string',
        value: 'hex | rgb '
    }
]

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Preloader, Button } from '@assenti/rui-components';

function Example() {
    const [loading, setLoading] = useState(false);
    
    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <div>
            <div className="py-10">
                <Button name="Activate" color="info" onClick={handleClick}/>
            </div>
            <Preloader visible={loading}/>
        </div>
    )
}`

const PreloaderPage = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Preloader/>"
                    apiDescItems={items}>
                    <p>Launch full page preloader and make all actions on screen disabled</p>
                    <div className="py-10">
                        <Button name="Activate" color="primary" onClick={handleClick}/>
                    </div>
                    <Preloader visible={loading}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default PreloaderPage;