import React, { useState } from 'react';
import { Modal, Button, Card, Collapse, Table } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Button, Modal } from '@assenti/rui-components';

function Example() {
    const [modal, setModal] = useState(false);

    return (
        <div>
            <Button
                color="info"
                size="medium"
                name="Open modal"
                onClick={() => setModal(true)}/>
            <Button
                color="black"
                size="medium"
                name="Open dark modal"
                onClick={() => setModalDark(true)}/>
            <Modal
                closable
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Modal title</div>}
                footer={
                    <React.Fragment>
                        <Button
                            className="mr-10"
                            color="secondary"
                            name="Cancel"
                            onClick={() => setModal(false)}/>
                        <Button
                            color="info"
                            name="Confirm"
                            onClick={() => setModal(false)}/>
                    </React.Fragment>
                }>
                    <p>Modal content...</p>
            </Modal>
            <Modal
                dark
                onClose={() => setModalDark(false)} 
                visible={modalDark} 
                header="Modal title"
                footer={
                    <React.Fragment>
                        <Button
                            className="mr-10"
                            color="secondary"
                            name="Cancel"
                            onClick={() => setModalDark(false)}/>
                        <Button
                            color="info"
                            name="Confirm"
                            onClick={() => setModalDark(false)}/>
                    </React.Fragment>
                }>
                    <p>Modal content...</p>
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

    return (
        <div className="rui-page">
            <div className="rui-page-title">Modal Component</div>
            <Card outlined color="primary" title="Modal usage">
                <Button
                    color="info"
                    size="medium"
                    name="Open modal"
                    onClick={() => setModal(true)}/>
                <Button
                    color="black"
                    size="medium"
                    name="Open dark modal"
                    onClick={() => setModalDark(true)}/>
                <Modal
                    closable
                    onClose={() => setModal(false)} 
                    visible={modal} 
                    header={<div>Modal title</div>}
                    footer={
                        <React.Fragment>
                            <Button
                                className="mr-10"
                                color="secondary"
                                name="Cancel"
                                onClick={() => setModal(false)}/>
                            <Button
                                color="info"
                                name="Confirm"
                                onClick={() => setModal(false)}/>
                        </React.Fragment>
                    }>
                        <p>Modal content...</p>
                </Modal>
                <Modal
                    dark
                    onClose={() => setModalDark(false)} 
                    visible={modalDark} 
                    header="Modal title"
                    footer={
                        <React.Fragment>
                            <Button
                                className="mr-10"
                                color="secondary"
                                name="Cancel"
                                onClick={() => setModalDark(false)}/>
                            <Button
                                color="info"
                                name="Confirm"
                                onClick={() => setModalDark(false)}/>
                        </React.Fragment>
                    }>
                        <p>Modal content...</p>
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
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}

export default ModalPage;
