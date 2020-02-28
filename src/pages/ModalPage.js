import React, { useState } from 'react';
import { Modal, Button, Card, Collapse, Table, Icon, InputField, Checkbox } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Button, Modal, Checkbox, InputField } from '@assenti/rui-components';

function Example() {
    const [modal, setModal] = useState(false);
    const [modalDark, setModalDark] = useState(false);
    const [modalReverse, setModalReverse] = useState(false);

    return (
        <div>
            <Button
                color="primary"
                name="Default modal"
                onClick={() => setModal(true)}/>
            <Button
                color="primary"
                name="Reversed header modal"
                onClick={() => setModalReverse(true)}/>
            <Button
                color="black"
                name="Dark centered modal"
                onClick={() => setModalDark(true)}/>
            <Modal
                closable
                toggleFullscreen
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Sign in</div>}>
                <div className="pa-10">
                    <InputField
                        className="my-15 mx-0"
                        prefix={<Icon name="account" />} 
                        placeholder="Login"/>
                    <InputField
                        className="my-15 mx-0"
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
            <Modal
                closable
                toggleFullscreen
                headerReverse
                onClose={() => setModalReverse(false)} 
                visible={modalReverse} 
                header={<div>Sign in</div>}>
                <div className="pa-10">
                    <InputField
                        className="my-15 mx-0"
                        prefix={<Icon name="account" />} 
                        placeholder="Login"/>
                    <InputField
                        className="my-15 mx-0"
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
            <Modal
                dark
                centered
                onClose={() => setModalDark(false)} 
                visible={modalDark} 
                header="Sign in">
                <div className="pa-10">
                    <InputField
                        className="my-15 mx-0"
                        prefix={<Icon name="account" />} 
                        placeholder="Login"/>
                    <InputField
                        className="my-15 mx-0"
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
        </div>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
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
    const [modalDark, setModalDark] = useState(false);
    const [modalReverse, setModalReverse] = useState(false);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Modal Component</div>
            <Card outlined title="Modal usage">
                <Button
                    color="primary"
                    name="Default modal"
                    onClick={() => setModal(true)}/>
                <Button
                    color="primary"
                    name="Reversed header modal"
                    onClick={() => setModalReverse(true)}/>
                <Button
                    color="black"
                    name="Dark centered modal"
                    onClick={() => setModalDark(true)}/>
                <Modal
                    closable
                    toggleFullscreen
                    onClose={() => setModal(false)} 
                    visible={modal} 
                    header={<div>Sign in</div>}>
                    <div className="pa-10">
                        <InputField
                            className="my-15 mx-0"
                            prefix={<Icon name="account" />} 
                            placeholder="Login"/>
                        <InputField
                            className="my-15 mx-0"
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
                <Modal
                    closable
                    toggleFullscreen
                    headerReverse
                    onClose={() => setModalReverse(false)} 
                    visible={modalReverse} 
                    header={<div>Sign in</div>}>
                    <div className="pa-10">
                        <InputField
                            className="my-15 mx-0"
                            prefix={<Icon name="account" />} 
                            placeholder="Login"/>
                        <InputField
                            className="my-15 mx-0"
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
                <Modal
                    dark
                    centered
                    onClose={() => setModalDark(false)} 
                    visible={modalDark} 
                    header="Sign in">
                    <div className="pa-10">
                        <InputField
                            className="my-15 mx-0"
                            prefix={<Icon name="account" />} 
                            placeholder="Login"/>
                        <InputField
                            className="my-15 mx-0"
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
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default ModalPage;
