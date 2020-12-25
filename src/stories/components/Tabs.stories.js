import React from 'react';
import Tabs from '../../components/tabs';

export default {
    title: 'Example/Tabs',
    component: Tabs
};

const Template = (args) => (
    <Tabs 
        {...args}
        onChange={(activeKey) => console.log('activeKey: ' + activeKey)} 
        tabItems={[<div>Tab Content 1</div>, <div>Tab Content 2</div>, <div>Tab Content 3</div>]}/>
)

export const Tabs_ = Template.bind({});

Tabs_.args = {
    tabs: [
        { name: 'Home', icon: 'home' }, 
        { name: 'Account', icon: 'account' }, 
        { name: 'Settings', icon: 'cog-outline' }
    ],
    tabTitleKey: 'name',
    tabIconKey: 'icon',
    defaultTab: 0,
    color: 'primary'
};