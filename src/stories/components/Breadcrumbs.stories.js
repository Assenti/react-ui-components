import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs';

export default {
    title: 'Example/Breadcrumbs',
    component: Breadcrumbs
};

const Template = (args) => (
    <Breadcrumbs
        itemKey="item"
        urlKey="url"
        {...args}/>
)

export const Breadcrumbs_ = Template.bind({});

Breadcrumbs_.args = {
    size: 'default',
    position: 'default',
    color: 'secondary',
    icon: 'icon',
    crumbs: [
        { item: 'Home', url: '', icon: 'home' },
        { item: 'Section', url: '', icon: 'credit-card' },
        { item: 'Module', url: '', icon: 'help-circle-outline'}
    ]
}