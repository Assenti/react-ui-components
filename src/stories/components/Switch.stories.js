import React from 'react';
import Switch from '../../components/switch';

export default {
    title: 'Example/Switch',
    component: Switch
};

const Template = (args) => (
    <>
        <Switch {...args}/>
        <br/>
        <br/>
        <Switch
            vertical={args.vertical} 
            check={args.check} 
            color="info"
            leftIcon="moon"
            rightIcon="sun"
            onChange={() => {}}/>
        <br/>
        <br/>
        <Switch 
            vertical={args.vertical}
            check={args.check} 
            color="info"
            leftLabel="On"
            rightLabel="Off"
            onChange={() => {}}/>
    </>
)

export const Switch_ = Template.bind({});

Switch_.args = {
    check: true,
    color: 'primary',
};