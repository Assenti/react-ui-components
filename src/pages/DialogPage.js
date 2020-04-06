import React, { useState } from 'react';
import { Dialog, Button, Card, Collapse, Table, Switch, CopyToClipboard, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Button, Dialog } from '@assenti/rui-components';

function Example() {
    const [dialog, setDialog] = useState(false);

    const actionImitation = async () => {
        return new Promise(async (resolve) => {
            setTimeout(() => {
                resolve()
            }, 1500)
        })
    }

    return (
        <>
            <Button
                color="error"
                name="Delete account"
                onClick={() => setDialog(true)}/>
            <Dialog
                onCancel={() => setDialog(false)}
                onConfirm={actionImitation}
                icon="alert"
                iconColor="red"
                titleColor="red" 
                visible={dialog} 
                title="Delete"
                description="Are you sure?"/>
        </>
    )
}`

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'visible', 
        description: 'Set Dialog visible state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onConfirm', 
        description: 'Ivokes on confirm button click', 
        default: '', 
        type: 'promised function',
        value: ''
    },
    { 
        property: 'onCancel', 
        description: 'Ivokes on cancel button click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'confirmText', 
        description: 'Set confirm text', 
        default: 'Confirm', 
        type: 'string',
        value: ''
    },
    { 
        property: 'confirmBtnColor', 
        description: 'Set confirm button color', 
        default: 'primary', 
        type: 'string',
        value: ''
    },
    { 
        property: 'confirmOnly', 
        description: 'Set confirm button only', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'cancelText', 
        description: 'Set cancel text', 
        default: 'Cancel', 
        type: 'string',
        value: ''
    },
    { 
        property: 'cancelBtnColor', 
        description: 'Set cancel button color', 
        default: 'secondary', 
        type: 'string',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set Dialog title', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'description', 
        description: 'Set Dialog description', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set Dialog icon', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'titleColor', 
        description: 'Set title color', 
        default: 'gray', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    },
    { 
        property: 'iconColor', 
        description: 'Set icon color', 
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
    }
]

const DialogPage = () => {
    const [dialog, setDialog] = useState(false);
    const [confirmOnly, setConfirmOnly] = useState(false);

    const actionImitation = async () => {
        return new Promise(async (resolve) => {
            setTimeout(() => {
                resolve()
            }, 1500)
        })
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page">
                    <div className="rui-page-title">{'<Dialog/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Switch 
                            color="primary" 
                            check={confirmOnly}
                            rightLabel="Confirm only"
                            className="my-10"
                            onChange={() => setConfirmOnly(!confirmOnly)}/>
                        <br/>
                        <Divider/>
                        <Button
                            color="error"
                            name="Delete account"
                            onClick={() => setDialog(true)}/>
                        <Dialog
                            onCancel={() => setDialog(false)}
                            onConfirm={actionImitation}
                            icon="alert"
                            dark={theme}
                            confirmOnly={confirmOnly}
                            confirmText={confirmOnly ? 'OK' : ''}
                            iconColor="red"
                            titleColor="red" 
                            visible={dialog} 
                            title="Delete"
                            description="Are you sure?"/>
                        <Collapse 
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={usage} 
                                dark={theme}
                                className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default DialogPage;