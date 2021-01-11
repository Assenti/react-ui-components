import React from 'react';
import Drawer from '../../components/drawer';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem'
List.Item = ListItem;

export default {
  title: 'Example/Drawer',
  component: Drawer
};

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

const Template = (args) => (
    <div className="rui-app relative pa-0" 
        style={{ height: 400, overflow: 'hidden' }}>
        <Drawer
            {...args}>
            <List size="medium" dark={args.dark}>
                {stack.map(({name, icon}, index) => 
                    <List.Item
                        key={index}
                        noDivider
                        hover
                        item={name}
                        icon={icon}/>
                )}
            </List>
        </Drawer>
        <div className="rui-page">
            <div className="pa-20 fz-12">
                Page
            </div>
        </div>
    </div>
)

export const Drawer_ = Template.bind({});

Drawer_.args = {
    lifted: false,
    position: 'left',
    dark: false,
    drawer: true
};