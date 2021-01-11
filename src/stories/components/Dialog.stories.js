import React from 'react';
import Dialog from '../../components/dialog';

export default {
    title: 'Example/Dialog',
    component: Dialog
};

const Template = (args) => (
    <Dialog
        {...args}/>
)

export const Dialog_ = Template.bind({});

Dialog_.args = {
    visible: true,
    icon: 'alert',
    iconColor: 'red',
    titleColor: 'red', 
    title: 'Delete',
    description: 'Are you sure?',
    confirmBtnColor: 'error'
}