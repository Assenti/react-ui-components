import React, { useState } from 'react';
import Page from '../layouts/Page';
import { ThemeContext, Button, Snackbar, snackbar, Select, Icon } from '../components';
const usage = 
`// Usage examples
import React, { useState } from 'react';
import { Button, Modal } from '@assenti/rui-components';

function Example() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Button
                color="primary"
                name="Open Modal"
                onClick={() => setModal(true)}/>
            <Modal
                centered
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Sign in</div>}>
                content...
            </Modal>
        </>
    )
}`;
const items = [
    { 
        property: 'visible', 
        description: 'Set modal visible state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose', 
        description: 'Ivokes on close icon click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'closable', 
        description: 'Set closable on modal overlay click', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'centered', 
        description: 'Set modal vertical position - center', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'marginTop', 
        description: 'Set margin top (has no effect with centered prop)', 
        default: '20px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'padding', 
        description: 'Set modal body padding', 
        default: '15px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'width', 
        description: 'Set modal width', 
        default: '', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'toggleFullscreen', 
        description: 'Enable modal fullscreen mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'headerReverse', 
        description: 'Reverse modal header icons position', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'closeIconColor', 
        description: 'Set close icon color', 
        default: 'gray', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    },
    { 
        property: 'fullscreenIconColor', 
        description: 'Set fullscreen icon color', 
        default: 'gray', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    },
    { 
        property: 'dark', 
        description: 'Set modal dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'header', 
        description: 'Set modal header', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'footer', 
        description: 'Set modal footer', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'className', 
        description: 'Set css custom class', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const types = ['info', 'success', 'error'];
const borders = ['default','tile', 'rounded'];

const SnackbarPage = () => {
    const [type, setType] = useState('');
    const [border, setBorder] = useState('');

    const handleClick = () => {
        snackbar.message('I am a Snackbar', 
            { 
                type: type, 
                borderType: border,
                controls: <Button dark name="CLOSE" onClick={() => snackbar.remove()}/> 
            })
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Snackbar/>">
                    <Snackbar/>
                    <Select
                        items={types}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        placeholder="Choose type"
                        label="Type"
                        color="primary"
                        className="my-5"
                        value={type}
                        onChange={_type => setType(_type)}/>
                    <br/>
                    <Select
                        items={borders}
                        dark={theme}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        placeholder="Choose border type"
                        label="Border type"
                        color="primary"
                        className="my-5"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Button
                        className="mt-10 ml-0"
                        onClick={handleClick} 
                        name="Invoke snackbar" 
                        color="primary"/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default SnackbarPage;