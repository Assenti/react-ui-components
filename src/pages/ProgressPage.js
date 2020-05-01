import React, { useState } from 'react';
import { Progress, Select, Icon, Button, Tooltip, Switch, ThemeContext, Divider, Card } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'complete', 
        description: 'Set progress completion percent', 
        default: '0', 
        type: 'number',
        value: '0 - 100'
    },
    { 
        property: 'hideState', 
        description: 'Hide progress state', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'circle', 
        description: 'Enable circular progress', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'stroke', 
        description: 'Set circular progress custom stroke width', 
        default: 'Depends on progress size', 
        type: 'number',
        value: ''
    },
    { 
        property: 'radius', 
        description: 'Set circular progress custom radius', 
        default: 'Depends on progress size', 
        type: 'number',
        value: ''
    },
    { 
        property: 'active', 
        description: 'Revive the progress bar', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'disabled', 
        description: 'Disable progress', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'icon', 
        description: 'Set icon on progress state instead', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconColor', 
        description: 'Set icon color', 
        default: 'Progress color', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set progress color', 
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error | dark'
    },
    { 
        property: 'size', 
        description: 'Set progress size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['primary', 'info', 'success', 'error', 'dark'];
const sizes = ['default', 'medium', 'large'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Progress } from '@assenti/rui-components';

function Example() {
    const [complete, setComplete] = useState(20);

    return (
        <>
            <Progress
                color="primary"
                icon={complete === 100 ? 'check-circle' : null}
                iconColor="#1aaa55" 
                complete={complete}/>
            <Progress
                circle
                className="my-10"
                color="primary"
                icon={complete === 100 ? 'check-circle' : null}
                iconColor="#1aaa55"
                complete={complete}/>
        </>
    )
}`

const ProgressPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [complete, setComplete] = useState(20);
    const [hideState, setHideState] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Progress/>"
                    apiDescItems={items}>
                    <Select
                        items={colors}
                        dark={theme}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        label="Radio button color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Select
                        items={sizes}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        dark={theme}
                        label="Radio button size"
                        color="primary"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <Switch
                        check={hideState}
                        rightLabel="Hide state"
                        color="primary"
                        className="my-10"
                        onChange={() => setHideState(!hideState)}/>
                    <Switch
                        check={disabled}
                        rightLabel="Disabled"
                        color="primary"
                        className="my-10"
                        onChange={() => setDisabled(!disabled)}/>
                    <Switch
                        check={active}
                        rightLabel="Active"
                        color="primary"
                        className="my-10"
                        onChange={() => setActive(!active)}/>
                    <Divider/>
                    <div className="row">
                        <Card width={150} className="row justify-center mr-10">
                            <Progress
                                circle
                                className="my-10"
                                color={color}
                                dark={theme}
                                size={size}
                                active={active}
                                icon={complete === 100 ? 'check-circle' : null}
                                iconColor="#1aaa55"
                                hideState={hideState}
                                disabled={disabled}
                                complete={complete}/>
                        </Card>
                        <div style={{ height: 40 }}>
                            <Card>
                                <Progress
                                    color={color}
                                    size={size}
                                    active={active}
                                    dark={theme}
                                    icon={complete === 100 ? 'check-circle' : null}
                                    iconColor="#1aaa55" 
                                    hideState={hideState}
                                    disabled={disabled}
                                    complete={complete}/>
                            </Card>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-center">
                        <Tooltip 
                            tooltip="Reduce progress" 
                            color="error"
                            className="mr-20">
                            <Button 
                                icon="minus" 
                                color="error"
                                disabled={complete === 0}
                                onClick={() => {
                                    if (complete > 0) setComplete(complete - 10)
                                }}/>
                        </Tooltip>
                        <Tooltip 
                            tooltip="Add progress" 
                            color="primary">
                            <Button 
                                icon="plus" 
                                color="primary"
                                disabled={complete === 100}
                                onClick={() => {
                                    if (complete < 100) setComplete(complete + 10)
                                }}/>
                        </Tooltip>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default ProgressPage;