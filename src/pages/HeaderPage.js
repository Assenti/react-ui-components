import React, { useState } from 'react';
import { Header, Button, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'title',
        description: 'Set Header title', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'height',
        description: 'Set Header height', 
        default: '50px', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set Header background color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | info | black'
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
        property: 'leftControl', 
        description: 'Set control button on left side', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'leftControlIcon', 
        description: 'Set control button icon (see icons list)', 
        default: 'menu', 
        type: 'string',
        value: ''
    },
    { 
        property: 'leftControlSize', 
        description: 'Set left control button size', 
        default: 'medium', 
        type: 'string',
        value: 'default | medium | large'
    },
    { 
        property: 'onLeftControl', 
        description: 'Invokes on left control click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'rightSide',
        description: 'Set right side elements', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'smooth',
        description: 'Make header borders smooth', 
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

const usage = 
`// Usage examples
import React from 'react';
import { Header, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Header
                title="Header light" 
                leftControl
                rightSide={<Button icon="account"/>}
        </>
    )
}`

const colors = ['default', 'primary', 'info', 'success', 'error', 'black'];

const HeaderPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [smooth, setSmooth] = useState(false);
    const [leftControl, setLeftControl] = useState(true);
    const [rightSide, setRightSide] = useState(false);
    const [elevated, setElevated] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Header/>"
                    apiDescItems={items}>
                    <Header
                        color={!theme ? color : null}
                        smooth={smooth}
                        dark={theme}
                        lifted={elevated}
                        title="Header" 
                        leftControl={leftControl}
                        rightSide={rightSide ?
                            <Button 
                                dark={theme || (color && color !== 'default')}
                                light={color === 'default' && !theme}
                                icon="account"/> : null}/>
                    <br/>
                    <Divider/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color theme"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={smooth}
                        rightLabel="Smooth borders"
                        className="my-10"
                        onChange={() => setSmooth(!smooth)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={rightSide}
                        rightLabel="Right side"
                        className="my-10"
                        onChange={() => setRightSide(!rightSide)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={leftControl}
                        rightLabel="Left control"
                        className="my-10"
                        onChange={() => setLeftControl(!leftControl)}/>
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