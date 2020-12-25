import React from 'react';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import Icon from '../../components/icon';

export default {
    title: 'Example/Tooltip',
    component: Tooltip,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
};

const Template = () => (
    <div style={{ margin: 15 }}>
        <Tooltip 
            tooltip="I am a Tooltip">
            <Button 
                icon={<Icon name="search"/>} 
                color="info"/>
        </Tooltip>
    </div>
)

export const Tooltip_ = Template.bind({});