import React from 'react';
import Alert from '../../components/alert';

export default {
    title: 'Example/Alert',
    component: Alert
}

const Template = (args) => (<Alert {...args}/>)

export const Alert_ = Template.bind({});

Alert_.args = {
    status: 'info',
    visible: true, 
    message: 'Alert title',
    text: 'Alert description text'
};