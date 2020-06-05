import React, { useState } from 'react';
import { Tooltip, Button, Select, Icon, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const usage = 
`// Usage examples
import React from 'react';
import { Tooltip } from '@assenti/react-ui-components';

function Example() {
    return (
        <>
            <Tooltip 
                tooltip="Tooltip"
                color="primary">
                <Button icon="search" color="info"/>
            </Tooltip>
        </>
    )
}`
const items = [
    { 
        property: 'tooltip',
        description: 'Set tooltip text', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'position', 
        description: 'Set tooltip position', 
        default: 'top', 
        type: 'string',
        value: 'bottom | right | left'
    },
    { 
        property: 'color', 
        description: 'Set tooltip color', 
        default: 'transparent black', 
        type: 'string',
        value: 'primary | info | error | success'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['default', 'primary', 'info', 'success', 'error'];

const TooltipPage = () => {
    const [color, setColor] = useState(colors[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Tooltip/>"
                    apiDescItems={items}>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Tooltip color"
                        color="primary"
                        className="my-10"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Divider/>
                    <div className="row align-center py-20">
                        <Tooltip 
                            tooltip="Top position"
                            color={color} 
                            className="mr-20">
                            <Button icon={<Icon name="search"/>} color="info"/>
                        </Tooltip>
                        <Tooltip 
                            tooltip="Bottom position" 
                            position="bottom"
                            color={color}  
                            className="mr-20">
                            <Button color="info" name="Button" onAction={() =>{}}/>
                        </Tooltip>
                        <Tooltip 
                            tooltip="Left position"
                            color={color}  
                            position="left" 
                            className="mr-20">
                            <Button icon={<Icon name="menu"/>} dark={theme} light={!theme}/>
                        </Tooltip>
                        <Tooltip 
                            tooltip="Right position"
                            color={color}  
                            position="right">
                            <Button icon={<Icon name="rocket"/>} color="error"/>
                        </Tooltip>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TooltipPage;