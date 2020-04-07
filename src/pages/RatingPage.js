import React, { useState, useRef } from 'react';
import { Card, Rating, Switch, InputField, Select, Icon, Table, Collapse, BackTopBtn, CopyToClipboard, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'rate', 
        description: 'Pass current rate',
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'count', 
        description: 'Set rate scale',
        default: '5', 
        type: 'number',
        value: ''
    },
    { 
        property: 'disabled', 
        description: 'Make rating component disabled',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'Invokes on rate changes (return rated value)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set stars size',
        default: '24px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set stars color', 
        default: 'yellow', 
        type: 'string',
        value: 'yellow | primary | info | success | error'
    },
    { 
        property: 'hideRate', 
        description: 'Hide rate digits',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'text',
        description: 'Set text', 
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
const colors = ['yellow', 'primary', 'info', 'success', 'error'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Card, Rating, Switch, InputField, Select, Icon } from '@assenti/rui-components';
const colors = ['yellow', 'primary', 'info', 'success', 'error'];

function Example() {
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(5);
    const [rate, setRate] = useState(3.5);
    const [color, setColor] = useState(colors[0]);
    const [hide, setHide] = useState(false);

    return (
        <div>
            <div className="row column">
                <InputField
                    width={100} 
                    value={count}
                    type="number"
                    min={0}
                    label="Rating scale"
                    placeholder="Define stars count" 
                    onChange={e => setCount(e.target.value)}/>
                <InputField
                    width={100} 
                    value={rate}
                    type="number"
                    min={0}
                    label="Current rate"
                    placeholder="Define rate" 
                    onChange={e => setRate(e.target.value)}/>
                <div style={{ width: 100 }}>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={100}
                        className="mx-5"
                        label="Color theme"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                </div>
                <Switch 
                    color="primary" 
                    check={disabled}
                    className="my-10"
                    rightLabel="Disabled"
                    onChange={() => setDisabled(!disabled)}/>
                <Switch 
                    color="primary" 
                    check={hide}
                    className="my-10"
                    rightLabel="Hide rate"
                    onChange={() => setHide(!hide)}/>
            </div>
            <Rating
                className="pa-10"
                text="Your Rate"
                hideRate={hide}
                rate={rate}
                color={color}
                onChange={(rated) => {
                    console.log(rated)
                    setRate(rated)
                }}
                disabled={disabled} 
                count={count}/>
        </div>
    )
}`

const RatingPage = () => {
    const parent = useRef();
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(5);
    const [rate, setRate] = useState(3.5);
    const [color, setColor] = useState(colors[0]);
    const [hide, setHide] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="rui-page-title">{'<Rating/>'} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <div className="row column">
                            <InputField
                                width={100} 
                                value={count}
                                type="number"
                                min={0}
                                dark={theme}
                                label="Rating scale"
                                placeholder="Define stars count" 
                                onChange={e => setCount(e.target.value)}/>
                            <InputField
                                width={100} 
                                value={rate}
                                type="number"
                                min={0}
                                dark={theme}
                                label="Current rate"
                                placeholder="Define rate" 
                                onChange={e => setRate(e.target.value)}/>
                            <div style={{ width: 100 }}>
                                <Select
                                    items={colors}
                                    prefix={<Icon name="brush"/>}
                                    width={100}
                                    dark={theme}
                                    className="mx-5"
                                    label="Color theme"
                                    color="primary"
                                    value={color}
                                    onChange={v => setColor(v)}/>
                            </div>
                            <Switch 
                                color="primary" 
                                check={disabled}
                                className="my-10"
                                rightLabel="Disabled"
                                onChange={() => setDisabled(!disabled)}/>
                            <Switch 
                                color="primary" 
                                check={hide}
                                className="my-10"
                                rightLabel="Hide rate"
                                onChange={() => setHide(!hide)}/>
                        </div>
                        <Divider/>
                        <Rating
                            className="pa-10"
                            text="Your Rate"
                            hideRate={hide}
                            rate={rate}
                            color={color}
                            onChange={(rated) => {
                                console.log(rated)
                                setRate(rated)
                            }}
                            disabled={disabled} 
                            count={count}/>
                        <Collapse 
                            icon="code" 
                            iconSize={18} 
                            dark={theme}
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                dark={theme}
                                text={usage} 
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
                    <BackTopBtn size="medium" dark setRef={parent}/>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={rows}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default RatingPage;