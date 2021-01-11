import React from 'react';
import Collapse from '../../components/collapse';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
List.Item = ListItem;

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'shield-account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'shield-account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'shield-account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'shield-account', check: false }
];

export default {
  title: 'Example/Collapse',
  component: Collapse
};

const Template = (args) => (
    <Collapse
        {...args}>
        <List 
            size="medium"
            className="py-10"
            hover>
            {names.map((item, index) => 
                <List.Item 
                    key={index} 
                    item={item.hero}
                    icon={item.icon}
                    hover/>
            )}
        </List>
    </Collapse>
)

export const Collapse_ = Template.bind({});

Collapse_.args = {
    title: <span className="mx-10 fz-10 fw-bold">Marvel Avengers</span>,
    defaultState: true, 
    border: true, 
    onChange: () => console.log('Do smth...'),
    dark: false,
    tooltip: ''
}