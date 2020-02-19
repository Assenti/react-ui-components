import React, { useState, createRef } from 'react';
import { Button, Table, Card, Switch, BackTopBtn, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'onClick', 
            description: 'Handle button click', 
            default: '', 
            type: 'function',
            value: 'return a button click event object'
        },
        { 
            property: 'name', 
            description: 'Set button name (can be set with icon)', 
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'lifted', 
            description: 'Lift up the button', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'color', 
            description: 'Set background and border color of button from list', 
            default: '', 
            type: 'string',
            value: 'primary | info | success | error | black | secondary'
        },
        { 
            property: 'disabled',
            description: 'Make Button disabled', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
        },
        { 
            property: 'loading',
            description: 'Activate loading and make Button disabled', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
        },
        { 
            property: 'rounded', 
            description: 'Make border radius rounded',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'smooth',
            description: 'Set button borders more smooth', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'outlined', 
            description: 'Make button background transparent and outline borders', 
            default: 'false',
            type: 'boolean', 
            value: 'true | false'
        },
        { 
            property: 'uppercase',
            description: 'Transform text to upper case', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'block', 
            description: 'Fills the parent component width',
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'size', 
            description: 'Set button size',
            default: '', 
            type: 'string',
            value: 'medium | large'},
        { 
            property: 'icon',
            description: 'Set icon in button and give circle shape to it (can be set with name)', 
            default: '', 
            type: 'string',
            value: 'home | search | etc. (see icon names list in docs)'
        },
        { 
            property: 'iconLeft',
            description: 'Change icon position to the left from name', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'dark',
            description: 'Set dark mode (can not be used with light prop)', 
            default: 'false', 
            type: 'boolean',
            value: 'true | false'
        },
        { 
            property: 'light',
            description: 'Set light mode (can not be used with dark prop)', 
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

    const buttonTypes = 
`// Usage examples
import React from 'react';
import { Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <div className="row align-center">
            <Button
                className="mr-5"
                color="primary"
                lifted
                name="Primary"
                />
            <Button
                smooth
                className="mr-5"
                color="primary"
                name="Smooth"
                />
            <Button
                className="mr-5"
                outlined
                color="primary"
                name="Outlined"
                />
            <Button
                className="mr-5"
                outlined
                uppercase
                color="primary"
                name="uppercase"
                />
            <Button
                className="mr-5"
                outlined
                rounded
                color="primary"
                name="Rounded"
                />
        </div>
    )
}
`

    const buttonSizes = 
`// Usage examples
import React from 'react';
import { Button } from '@assenti/react-ui-components';

function Example() {
    return(
        <div className="row align-center">
            <Button
                className="mr-5"
                color="info"
                name="Default"
                />
            <Button
                className="mr-5"
                color="info"
                size="medium"
                name="Medium"
                />
            <Button
                className="mr-5"
                size="large"
                color="info"
                name="Large"
                /> 
            <Button
                rounded
                className="mr-5"
                color="info"
                name="Default"
                />
            <Button
                rounded
                outlined
                uppercase
                className="mr-5"
                color="info"
                size="medium"
                name="Medium"
                />
            <Button
                rounded
                uppercase
                size="large"
                color="info"
                name="Large"
                /> 
        </div>
    )
}
`

const buttonColors = 
`// Usage examples
import React from 'react';
import { Button } from '@assenti/react-ui-components';

function Example() {
    return(
        <div>
            <Button
                className="mr-5"
                color="primary"
                name="Primary"
                />
            <Button
                className="mr-5"
                color="info"
                name="Info"
                />  
            <Button
                className="mr-5"
                color="error"
                name="Error"
                /> 
            <Button
                className="mr-5"
                color="success"
                name="Success"
                /> 
            <Button
                className="mr-5"
                color="secondary"
                name="Secondary"
                /> 
            <Button
                className="mr-5"
                color="black"
                name="Black"
                /> 
            <Button
                disabled
                color="success"
                name="Disabled"
                />  
        </div>
    )
}
`

    const blockButtons =
`// Usage examples
import React from 'react';
import { Button } from '@assenti/rui-components';

function Example() {
    return (
        <div style={{ width: 300 }} className="mb-10">
            <Button
                block
                className="my-5"
                color="primary"
                name="Block button"
                />
            <Button
                block
                className="my-10"
                color="primary"
                outlined
                name="Block button"
                />
            <Button
                block
                rounded
                outlined
                className="my-5"
                color="error"
                name="Block button"
                />   
        </div>
    )
}
`

    const usageIcon =
`// Usage examples
import React from 'react';
import { Button } from '@assenti/rui-components';

function Example() {
    return (
        <div className="row align-center">
            <Button
                className="mr-10"
                color="primary"
                icon="search"
                />
            <Button
                outlined
                className="mr-10"
                color="primary"
                icon="menu"
                />
            <Button
                light
                className="mr-10"
                icon="search"
                />
            <Button
                className="mr-10"
                color="primary"
                name="Search"
                icon="search"
                />
            <Button
                outlined
                className="mr-10"
                color="primary"
                name="Search"
                icon="search"
                />
            <Button
                className="mr-10"
                color="info"
                name="Home"
                icon="home"
                iconLeft
                />
        </div>
    )
}
`

    const loadingButtons =
`// Usage examples
import React, { useState } from 'react';
import { Button, Switch } from '@assenti/rui-components';

function Example() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="row align-center py-20">
            <label>Toggle loaders</label>
            <Switch 
                check={loading} 
                color="info" 
                className="ml-10"
                onChange={() => setLoading(!loading)}/>
        </div>
        <div className="row align-center">
            <Button
                outlined
                className="mr-10"
                color="primary"
                loading={loading}
                icon="search"
                />
            <Button
                className="mr-10"
                light
                loading={loading}
                icon="search"
                />
            <Button
                className="mx-10"
                color="info"
                name="Home"
                icon="home"
                loading={loading}
                iconLeft
                />
            <Button
                className="mx-10"
                color="info"
                loading={loading}
                rounded
                name="Button"
                />
            <Button
                className="mx-10"
                color="info"
                loading={loading}
                rounded
                outlined
                name="Button"
                />
        </div>
    )
}
`

export const ButtonPage = () => {
    const [loading, setLoading] = useState(true);
    const parentRef = createRef();
    const api = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="page" ref={parentRef}>
            <div className="row align-center space-between">
                <div className="page-title">Button Component</div>
                <a onClick={goToApi} className="fz-13 fw-bold">API</a>
            </div>
            <Card outlined color="primary" title="Button types">
                <div className="row align-center">
                    <Button
                        className="mr-5"
                        color="primary"
                        lifted
                        name="Primary"
                        />
                    <Button
                        smooth
                        className="mr-5"
                        color="primary"
                        name="Smooth"
                        />
                    <Button
                        className="mr-5"
                        outlined
                        color="primary"
                        name="Outlined"
                        />
                    <Button
                        className="mr-5"
                        outlined
                        uppercase
                        color="primary"
                        name="uppercase"
                        />
                    <Button
                        className="mr-5"
                        outlined
                        rounded
                        color="primary"
                        name="Rounded"
                        />
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {buttonTypes}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Button sizes">
                <div className="row align-center">
                    <Button
                        className="mr-5"
                        color="info"
                        name="Default"
                        />
                    <Button
                        className="mr-5"
                        color="info"
                        size="medium"
                        name="Medium"
                        />
                    <Button
                        className="mr-5"
                        size="large"
                        color="info"
                        name="Large"
                        /> 
                    <Button
                        rounded
                        className="mr-5"
                        color="info"
                        name="Default"
                        />
                    <Button
                        rounded
                        outlined
                        uppercase
                        className="mr-5"
                        color="info"
                        size="medium"
                        name="Medium"
                        />
                    <Button
                        rounded
                        uppercase
                        size="large"
                        color="info"
                        name="Large"
                        /> 
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {buttonSizes}
                    </SyntaxHighlighter>
                </Collapse> 
            </Card>
            <br/>
            <Card outlined color="primary" title="Button colors">
                <Button
                    className="mr-5"
                    color="primary"
                    name="Primary"
                    />
                <Button
                    className="mr-5"
                    color="info"
                    name="Info"
                    />  
                <Button
                    className="mr-5"
                    color="error"
                    name="Error"
                    /> 
                <Button
                    className="mr-5"
                    color="success"
                    name="Success"
                    /> 
                <Button
                    className="mr-5"
                    color="secondary"
                    name="Secondary"
                    /> 
                <Button
                    className="mr-5"
                    color="black"
                    name="Black"
                    /> 
                <Button
                    disabled
                    color="success"
                    name="Disabled"
                    /> 
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {buttonColors}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Block button">
                <div style={{ width: 300 }} className="mb-10">
                    <Button
                        block
                        className="my-5"
                        color="primary"
                        name="Block button"
                        />
                    <Button
                        block
                        className="my-10"
                        color="primary"
                        outlined
                        name="Block button"
                        />
                    <Button
                        block
                        rounded
                        outlined
                        className="my-5"
                        color="error"
                        name="Block button"
                        />   
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {blockButtons}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Icon buttons">
                <div className="row align-center">
                    <Button
                        className="mr-10"
                        color="primary"
                        icon="search"
                        />
                    <Button
                        outlined
                        className="mr-10"
                        color="primary"
                        icon="menu"
                        />
                    <Button
                        light
                        className="mr-10"
                        icon="search"
                        />
                    <Button
                        className="mr-10"
                        color="primary"
                        name="Search"
                        icon="search"
                        />
                    <Button
                        outlined
                        className="mr-10"
                        color="primary"
                        name="Search"
                        icon="search"
                        />
                    <Button
                        className="mr-10"
                        color="info"
                        name="Home"
                        icon="home"
                        iconLeft
                        />
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageIcon}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Loading">
                <div className="row align-center py-20">
                    <label>Toggle loaders</label>
                    <Switch 
                        check={loading} 
                        color="info" 
                        className="ml-10"
                        onChange={() => setLoading(!loading)}/>
                </div>
                <div className="row align-center">
                    <Button
                        outlined
                        className="mr-10"
                        color="primary"
                        loading={loading}
                        icon="search"
                        />
                    <Button
                        className="mr-10"
                        light
                        loading={loading}
                        icon="search"
                        />
                    <Button
                        className="mx-10"
                        color="info"
                        name="Home"
                        icon="home"
                        loading={loading}
                        iconLeft
                        />
                    <Button
                        className="mx-10"
                        color="info"
                        loading={loading}
                        rounded
                        name="Button"
                        />
                    <Button
                        className="mx-10"
                        color="info"
                        loading={loading}
                        rounded
                        outlined
                        name="Button"
                        />
                </div>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {loadingButtons}
                    </SyntaxHighlighter>
                </Collapse> 
            </Card>
            <BackTopBtn setRef={parentRef} dark/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
