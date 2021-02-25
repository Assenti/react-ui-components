import React from 'react';
import ExpansionList from '../../components/expansionList';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import { countries } from '../../data/countries';
List.Item = ListItem;

export default {
  title: 'Example/Expansionlist',
  component: ExpansionList,
};

const Template = (args) => (
    <ExpansionList
        {...args}
        titleContent={(item) => 
            <List.Item
                icon="map-marker" 
                item={item.country}/>    
        }
        itemContent={(item) =>
            <List>
                {item.cities.map((subItem, index) => 
                    <List.Item
                        key={index}
                        hover
                        item={subItem}/>
                )}
            </List>
        }/>
)

export const Expansionlist_ = Template.bind({});

Expansionlist_.args = {
    width: 250, 
    hover: true,
    dark: false,
    defaultOpens: [0],
    accordion: true,
    items: countries
}