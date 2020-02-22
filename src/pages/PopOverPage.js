import React, { useState } from 'react';
import { Card, PopOver, Icon, Button, Table, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'trigger', 
        description: 'Set pop over trigger', 
        default: 'click', 
        type: 'string',
        value: 'click | hover'
    },
    { 
        property: 'control', 
        description: 'Allow pop over custom state control', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'visible', 
        description: 'Set custom state (active if control prop set)', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onClose', 
        description: 'Invokes on pop over close button click and blur', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'noBlur', 
        description: 'Disable closeing popover on blur (has effect with control prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'title',
        description: 'Set pop over title', 
        default: '', 
        type: '',
        value: ''
    },
    { 
        property: 'content',
        description: 'Set content in pop over body', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'bottom', 
        description: 'Set popover position to bottom', 
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
import { PopOver, Icon, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <div className="pa-20">
            <div>
                <PopOver trigger="hover" title="Title" content="Content" className="mr-20">
                    Hover me
                </PopOver>
            </div>
            <br/>
            <div className="row">
                <div className="mr-20">
                    Click on icon
                    <PopOver title="Title"
                        content={
                            <div>
                                <p>How are doing?</p>
                                <div className="row align-center justify-center py-10">
                                    <Button 
                                        name="Not bad" 
                                        color="info" 
                                        className="mr-10"
                                        onClick={() => console.log('Not bad!')}/>
                                    <Button 
                                        name="Great!" 
                                        color="error" 
                                        onClick={() => console.log('Great!')}/>
                                </div>
                            </div>
                        }>
                        <Icon 
                            name="help-circle-outline" 
                            size={18} 
                            className="ml-5 cursor-pointer"/>
                    </PopOver>
                </div>
                <div>
                    Click on icon
                    <PopOver dark title="Title"
                        content={
                            <div>
                                <p>How are doing?</p>
                                <div className="row align-center justify-center py-10">
                                    <Button 
                                        name="Not bad" 
                                        color="info" 
                                        className="mr-10"
                                        onClick={() => console.log('Not bad!')}/>
                                    <Button 
                                        name="Great!" 
                                        color="error" 
                                        onClick={() => console.log('Great!')}/>
                                </div>
                            </div>
                        }>
                        <Icon 
                            name="help-circle-outline" 
                            size={18} 
                            className="ml-5 cursor-pointer"/>
                    </PopOver>
                </div>
            </div>
            <br/>
            <div>
                <PopOver title="Quit"
                    bottom
                    content={
                        <div>
                            <p>Are are sure?</p>
                            <div className="row align-center justify-center">
                                <Button 
                                    name="Nope" 
                                    color="secondary" 
                                    className="mr-10"
                                    onClick={() => console.log('Nope!')}/>
                                <Button 
                                    name="Yeap" 
                                    color="primary" 
                                    onClick={() => console.log('Yeap!')}/>
                            </div>
                        </div>
                    }>
                    <Button 
                        name="Quit" 
                        color="error"/>
                </PopOver>
            </div>
        </div>
    )
}`

const usageControl = 
`// Usage examples
import React, { useState } from 'react';
import { PopOver, Button } from '@assenti/react-ui-components';

function Example() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="pa-20">
            <PopOver 
                title="Title"
                control
                visible={visible}
                onClose={() => setVisible(false)}
                content="Custom visible state control">
                <Button
                    onClick={() => setVisible(true)} 
                    name="Click me" 
                    color="info"/>
            </PopOver>
        </div>
    )
}`

export const PopOverPage = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="page">
            <div className="row align-center space-between">
                <div className="page-title">PopOver Component</div>
            </div>
            <Card outlined color="primary" title="Pop over usage">
                <br/>
                <div className="pa-20">
                    <div>
                        <PopOver 
                            bottom
                            trigger="hover" 
                            title="Title" 
                            content="Content" 
                            className="mr-20">
                            Hover me
                        </PopOver>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="mr-20">
                            Hover on icon
                            <PopOver title="Title"
                                trigger="hover"
                                content={
                                    <div>
                                        <p>How are doing?</p>
                                        <div className="row align-center justify-center">
                                            <Button 
                                                name="Not bad" 
                                                color="info" 
                                                className="mr-10"
                                                onClick={() => console.log('Not bad!')}/>
                                            <Button 
                                                name="Great!" 
                                                color="error" 
                                                onClick={() => console.log('Great!')}/>
                                        </div>
                                    </div>
                                }>
                                <Icon 
                                    name="help-circle-outline" 
                                    size={18} 
                                    className="ml-5 cursor-pointer"/>
                            </PopOver>
                        </div>
                        <div>
                            Click on icon
                            <PopOver dark title="Title"
                                content={
                                    <div>
                                        <p>How are doing?</p>
                                        <div className="row align-center justify-center">
                                            <Button 
                                                name="Not bad" 
                                                color="info" 
                                                className="mr-10"
                                                onClick={() => console.log('Not bad!')}/>
                                            <Button 
                                                name="Great!" 
                                                color="error" 
                                                onClick={() => console.log('Great!')}/>
                                        </div>
                                    </div>
                                }>
                                <Icon 
                                    name="help-circle-outline" 
                                    size={18} 
                                    className="ml-5 cursor-pointer"/>
                            </PopOver>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <PopOver title="Quit"
                            bottom
                            content={
                                <div>
                                    <p>Are are sure?</p>
                                    <div className="row align-center justify-center">
                                        <Button 
                                            name="Nope" 
                                            color="secondary" 
                                            className="mr-5"
                                            onClick={() => console.log('Nope!')}/>
                                        <Button 
                                            name="Yeap" 
                                            color="primary" 
                                            onClick={() => console.log('Yeap!')}/>
                                    </div>
                                </div>
                            }>
                            <Button 
                                name="Quit" 
                                color="error"/>
                        </PopOver>
                    </div>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <Card outlined color="primary" title="Control pop over state">
                <div className="pa-20">
                    <PopOver 
                        title="Title"
                        control
                        visible={visible}
                        onClose={() => setVisible(false)}
                        content="Custom visible state control">
                        <Button
                            onClick={() => setVisible(true)} 
                            name="Click me" 
                            color="info"/>
                    </PopOver>
                </div>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usageControl}
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
