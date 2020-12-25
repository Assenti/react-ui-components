import React from 'react';
import Select from '../../components/select';
import Icon from '../../components/icon';

export default {
    title: 'Example/Select',
    component: Select
};

const Template = (args) => (
    <Select
        prefix={<Icon name="earth"/>}
        {...args}
        />
)

export const Select_ = Template.bind({});

Select_.args = {
    itemKey: 'country',
    color: 'primary',
    maxHeight: 200,
    width: 250,
    placeholder: 'Countries',
    items: [
        { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
        { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
        { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
        { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
        { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
        { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
        { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
        { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
        { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
        { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
    ],
    label: 'One level items with multiple select'
}