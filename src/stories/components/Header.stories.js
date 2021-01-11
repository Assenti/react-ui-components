import React from 'react';
import Button from '../../components/button';
import Header from '../../components/header';
import Icon from '../../components/icon';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => (
    <Header {...args}>
        <h3 style={{ color: args.dark ? '#fff' : '#000' }}>Header</h3>
        <Button 
            dark={args.dark}
            light={!args.dark}
            icon={<Icon name="account"/>}/>
    </Header>
)

export const Header_ = Template.bind({});

Header_.args = {
    lifted: false
};