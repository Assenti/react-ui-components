import React, { useState } from 'react';
import { Modal, Button,Icon, InputField, Checkbox, ThemeContext, Switch, Divider } from '../components';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Button, Modal, Checkbox, InputField, Switch } from '@assenti/rui-components';

function Example() {
    const [modal, setModal] = useState(false);
    const [reversed, setReversed] = useState(false);
    const [closable, setClosable] = useState(false);
    const [centered, setCentered] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <>
            <Switch 
                color="primary" 
                check={reversed}
                rightLabel="Reversed header"
                className="pl-10 my-10"
                onChange={() => setReversed(!reversed)}/>
            <Switch 
                color="primary" 
                check={closable}
                rightLabel="Close on background"
                className="pl-10 my-10"
                onChange={() => setClosable(!closable)}/>
            <br/>
            <Switch 
                color="primary" 
                check={centered}
                rightLabel="Centered"
                className="pl-10 my-10"
                onChange={() => setCentered(!centered)}/>
            <Switch 
                color="primary" 
                check={fullScreen}
                rightLabel="With full screen option"
                className="pl-10 my-10"
                onChange={() => setFullScreen(!fullScreen)}/>
            <Divider/>
            <br/>
            <Button
                color="primary"
                name="Open Modal"
                onClick={() => setModal(true)}/>
            <Modal
                closable={closable}
                dark={theme}
                centered={centered}
                toggleFullscreen={fullScreen}
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Sign in</div>}>
                <div className="pa-10">
                    <InputField
                        className="my-15 mx-0"
                        dark={theme}
                        prefix={<Icon name="account" />} 
                        placeholder="Login"/>
                    <InputField
                        className="my-15 mx-0"
                        dark={theme}
                        prefix={<Icon name="key" />} 
                        placeholder="Password"
                        type="password"/>
                    <Checkbox
                        className="my-15 mx-0" 
                        color="primary" 
                        label="Remember me?"/>
                    <Button 
                        className="my-15 mx-0"
                        color="primary" 
                        name="Sign in" block/>
                    <div className="fz-9 rui-link text-center py-10">
                        Dont't have an account?
                    </div>
                </div>
            </Modal>
        </>
    )
}`

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

const ModalPage = () => {
    const [modal, setModal] = useState(false);
    const [reversed, setReversed] = useState(false);
    const [closable, setClosable] = useState(false);
    const [centered, setCentered] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Modal/>">
                    <Switch 
                        color="primary" 
                        check={reversed}
                        rightLabel="Reversed header"
                        className="pl-10 my-10"
                        onChange={() => setReversed(!reversed)}/>
                    <Switch 
                        color="primary" 
                        check={closable}
                        rightLabel="Close on background"
                        className="pl-10 my-10"
                        onChange={() => setClosable(!closable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={centered}
                        rightLabel="Centered"
                        className="pl-10 my-10"
                        onChange={() => setCentered(!centered)}/>
                    <Switch 
                        color="primary" 
                        check={fullScreen}
                        rightLabel="With full screen option"
                        className="pl-10 my-10"
                        onChange={() => setFullScreen(!fullScreen)}/>
                    <Divider/>
                    <br/>
                    <Button
                        color="primary"
                        name="Open Modal"
                        onClick={() => setModal(true)}/>
                    <Modal
                        closable={closable}
                        dark={theme}
                        centered={centered}
                        headerReverse={reversed}
                        toggleFullscreen={fullScreen}
                        onClose={() => setModal(false)} 
                        visible={modal} 
                        header={<div>Sign in</div>}>
                        <div className="pa-10">
                            <InputField
                                className="my-15 mx-0"
                                dark={theme}
                                prefix={<Icon name="account" />} 
                                placeholder="Login"/>
                            <InputField
                                className="my-15 mx-0"
                                dark={theme}
                                prefix={<Icon name="key" />} 
                                placeholder="Password"
                                type="password"/>
                            <Checkbox
                                className="my-15 mx-0" 
                                color="primary" 
                                checked={reversed}
                                label="Remember me?"/>
                            <Button 
                                className="my-15 mx-0"
                                color="primary" 
                                name="Sign in" block/>
                            <div className="fz-9 rui-link text-center py-10">
                                Dont't have an account?
                            </div>
                        </div>
                    </Modal>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default ModalPage;
