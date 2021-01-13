import React from 'react';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import Avatar from '../../components/avatar';
import { heroes } from '../../data/heroes';
List.Item = ListItem;

export default {
    title: 'Example/List',
    component: List,
    subcomponents: { ListItem }
};

const Template = (args) => (
    <List {...args}>
        {heroes.map((item, index) =>
            <List.Item 
                key={index}
                hover={args.hover}
                noDivider={args.noDivider} 
                item={item.name}
                subTitle={item.hero} 
                avatar={<Avatar
                            className="mr-10" 
                            img={item.img}
                            width={40} 
                            height={40}
                            borderType="rounded"/> }/>
        )}
    </List>
)

export const List_ = Template.bind({});

List_.args = {
    dark: false,
    size: 'default',
    header: 'Marvel heroes'
}

export const Listitem_ = Template.bind({});

Listitem_.args = {
    noDivider: true,
    hover: true
}