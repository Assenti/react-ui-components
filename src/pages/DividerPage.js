import React, { useState } from 'react';
import { Select, Icon, Avatar, Divider, ThemeContext } from '../components';
import manImage from '../img/man.png';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'color', 
        description: 'Set divider color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | secondary'
    },
    { 
        property: 'dark', 
        description: 'Set dark theme', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'vertical', 
        description: 'Set vertical divider', 
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
const colors = ['primary', 'info', 'success', 'error', 'secondary'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Divider } from '@assenti/react-ui-components';

function Example() {
    const [color, setColor] = useState(colors[4]);

    return (
        <>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                dark={theme}
                label="Color"
                color="primary"
                value={color}
                className="mb-20"
                onChange={v => setColor(v)}/>
            <br/>
            <div className="row">
                <Avatar img={manImage} dark={theme} height={100}/>
                <Divider vertical color={color}/>
                <div>
                    <h2 className="text-primary">John Doe</h2>
                    <p className="text-dark">jdoe@awesome.mail</p>
                </div>
            </div>
            <Divider color={color}/>
            <p>Age: 33</p>
            <p>Birth date: 1987/1/1</p>
            <p>Address: 13, Friday str., NYC</p>
        </>
    )
}`

const DividerPage = () => {
    const [color, setColor] = useState(colors[4]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Divider/>">
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color"
                        color="primary"
                        value={color}
                        className="mb-20"
                        onChange={v => setColor(v)}/>
                    <br/>
                    <div className="row">
                        <Avatar img={manImage} dark={theme} height={100}/>
                        <Divider vertical color={color}/>
                        <div>
                            <h2 className="text-primary">John Doe</h2>
                            <p className="text-dark">jdoe@awesome.mail</p>
                        </div>
                    </div>
                    <Divider color={color}/>
                    <p>Age: 33</p>
                    <p>Birth date: 1987/1/1</p>
                    <p>Address: 13, Friday str., NYC</p>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default DividerPage;