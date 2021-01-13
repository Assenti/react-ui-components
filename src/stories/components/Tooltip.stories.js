import React from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import Icon from '../../components/icon';

export default {
    title: 'Example/Tooltip',
    component: Tooltip
}

const Template = (args) => (
    <div style={{ margin: 15 }}>
        <Tooltip {...args}>
            <Button 
                icon={<Icon name="moon"/>} 
                color="info"/>
        </Tooltip>
        <br/>
        <Tooltip 
            {...args} 
            tooltip="I am a tooltip"
            position="top">
            <Button 
                name="Button with tooltip"
                color="primary"/>
        </Tooltip>
    </div>
)

export const Tooltip_ = Template.bind({});

Tooltip_.args = {
    tooltip: 'Fly me to the moon',
    color: 'default',
    position: 'right'
}