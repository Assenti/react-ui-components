import React, { useState } from 'react';
import { Header, Button, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'height',
        description: 'Set Header height', 
        default: '50px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'bgColor',
        description: 'Set Header background color', 
        default: '', 
        type: 'string',
        value: 'hex | rgb(-a)'
    },
    { 
        property: 'sticky',
        description: 'Set Header position sticky', 
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
        property: 'lifted', 
        description: 'Elevate header', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'smooth',
        description: 'Make header borders smooth', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'id',
        description: 'Set a custom html id to component', 
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

const usage = 
`// Usage examples
import React from 'react';
import { Header, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Header lifted>
                <h3>Header</h3>
                <Button 
                    dark={theme}
                    light={!theme}
                    icon="account"/>
            </Header>
        </>
    )
}`

const HeaderPage = () => {
    const [smooth, setSmooth] = useState(false);
    const [elevated, setElevated] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Header/>"
                    apiDescItems={items}>
                    <Header
                        smooth={smooth}
                        dark={theme}
                        lifted={elevated}>
                        <h3>Header</h3>
                        <Button 
                            dark={theme}
                            light={!theme}
                            icon="account"/>
                    </Header>
                    <br/>
                    <Divider/>
                    <Switch 
                        color="primary" 
                        check={smooth}
                        rightLabel="Smooth borders"
                        className="my-10"
                        onChange={() => setSmooth(!smooth)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={elevated}
                        rightLabel="Lifted"
                        className="my-10"
                        onChange={() => setElevated(!elevated)}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default HeaderPage;