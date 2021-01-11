import React from 'react';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import { modules } from '../../data/modules';
List.Item = ListItem;

export default {
    title: 'Example/List',
    component: List,
    subcomponents: { ListItem }
};

const Template = (args) => (
    <List {...args}>
        {modules.map((item, index) =>
            <List.Item 
                key={index}
                hover
                noDivider 
                item={item.name} 
                icon={item.icon}/>
        )}
    </List>
)

export const List_ = Template.bind({});

List_.args = {
    dark: false,
    size: 'default',
    header: 'Modules'
}

export const Listitem_ = Template.bind({});

Listitem_.args = {
    noDivider: true,
    hover: true
}