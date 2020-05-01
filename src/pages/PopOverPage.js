import React, { useState } from 'react';
import { PopOver, Icon, Button, Switch, Select, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

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
        property: 'position', 
        description: 'Set popover position', 
        default: 'top', 
        type: 'string',
        value: 'top | bottom | right | left'
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
import React, { useState } from 'react';
import { PopOver, Button } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <PopOver 
                title="Quit"
                content={
                    content...
                }>
                <Button
                    name="Get started" 
                    color="primary"/>
            </PopOver>
        </>
    )
}`
const positions = ['left', 'top', 'bottom', 'right'];

const PopOverPage = () => {
    const [visible, setVisible] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [control, setControl] = useState(false);
    const [position, setPosition] = useState(positions[1]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<PopOver/>"
                    apiDescItems={items}>
                    <Select
                        items={positions}
                        dark={theme}
                        prefix={<Icon name="chart-ppf"/>}
                        width={200}
                        label="PopOver position"
                        color="primary"
                        className="my-10"
                        value={position}
                        onChange={v => setPosition(v)}/>
                    <br/>
                    <Switch 
                        check={trigger} 
                        color="primary"
                        leftLabel="Hover" 
                        rightLabel="Click" 
                        className="my-10"
                        onChange={() => setTrigger(!trigger)}/>
                    <br/>
                    <Switch 
                        check={control} 
                        color="primary"
                        rightLabel="Control state" 
                        className="my-10"
                        onChange={() => setControl(!control)}/>
                    <Divider/>
                    <div className="row justify-center py-30">
                        <PopOver 
                            title="Quit"
                            dark={theme}
                            trigger={trigger ? 'click' : 'hover'}
                            position={position}
                            control={control}
                            visible={visible}
                            onClose={() => setVisible(false)}
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
                                onClick={() => control ? setVisible(true) : {}} 
                                name="Get started" 
                                color="primary"/>
                        </PopOver>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default PopOverPage;