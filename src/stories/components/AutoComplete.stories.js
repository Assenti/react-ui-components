import React from 'react';
import AutoComplete from '../../components/autoComplete';
import Icon from '../../components/icon';

const countries = [
    { country: 'Kazakhstan' }, 
    { country: 'Russia' }, 
    { country: 'USA' }, 
    { country: 'United Kingdom' }, 
    { country: 'Canada' }, 
    { country: 'Germany' }, 
    { country: 'France' }, 
    { country: 'China' },
    { country: 'Japan' },
    { country: 'South Korea' }
]

export default {
  title: 'Example/Autocomplete',
  component: AutoComplete
};

const Template = (args) => (
  <>
    <AutoComplete
        items={countries}
        style={{ width: 300 }}
        contentMaxHeight={300}
        itemKey="country"
        listHeader={
            <div className="fz-9 text-info py-10">
                Start typing your favourite country
            </div>}
        footer={(filteredLength) => 
            <div className="text-right fz-8 text-info px-10 py-15">
                {filteredLength} results
            </div>}
        {...args}
        // prefix={<Icon name="earth"/>}
        // suffix={<Icon name="chevron-down"/>}
        />
  </>
)

export const Autocomplete_ = Template.bind({});

Autocomplete_.args = {
    color: 'primary',
    label: 'Countries',
    placeholder: 'Choose your favourive country',
    prefix: <Icon name="earth"/>,
    suffix: <Icon name="chevron-down"/>
};