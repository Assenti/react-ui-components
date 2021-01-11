import React from 'react';
import Icon from '../../components/icon';

export default {
    title: 'Example/Icon',
    component: Icon
};

const Template = (args) => (
    <>
        <Icon {...args} name="search" color="red"/>
        <Icon {...args} name="home" color="#1976d2"/>
        <Icon {...args} name="account" color="#rgb(0,0,5)"/>
    </>
)

export const Icon_ = Template.bind({});

Icon_.args = {
    size: 24,
    className: 'ma-8'
}