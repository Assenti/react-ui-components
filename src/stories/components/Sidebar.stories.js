import React from 'react';
import Sidebar from '../../components/sidebar';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem'
List.Item = ListItem;

export default {
  title: 'Example/Sidebar',
  component: Sidebar
};

const stack = [
    { name: 'JavaScript', icon: 'language-js' }, 
    { name: 'TypeScript', icon: 'language-ts' },
    { name: 'React', icon: 'react' },
    { name: 'React Router', icon: 'react' },
    { name: 'React Redux', icon: 'react' }
]

const Template = (args) => (
    <div className="row" 
        style={{ height: 400, overflow: 'hidden' }}>
        <Sidebar
            {...args}
            // onToggle={(flag) => setMin(flag)}
            >
            <List 
                size="medium">
                {stack.map(({name, icon}, index) => 
                    <List.Item
                        key={index}
                        isActiveItem={name === args.page}
                        noDivider
                        hover
                        onClick={() => {}}
                        item={name}
                        icon={icon}
                        tooltip={args.min ? name : null}
                        tooltipPosition="right"/>
                )}
            </List>
        </Sidebar>
        <div className="rui-page">
            <div className="pa-20 fz-12">
                {1} Page
            </div>
        </div>
    </div>
)

export const Sidebar_ = Template.bind({});

Sidebar_.args = {
    collapsable: true,
    
};