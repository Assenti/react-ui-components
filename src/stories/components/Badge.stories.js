import React from 'react';
import Badge from '../../components/badge';
import Icon from '../../components/icon';
import Avatar from '../../components/avatar';
import manImage from '../../img/man.png';

export default {
  title: 'Example/Badge',
  component: Badge
};

const Template = (args) => (
  <div className="row align-center">
    <Badge
        {...args} 
        parent={<Icon size={30} name="email" color="#ffa600"/>}/>
    <Badge 
        color="primary" 
        icon="plus"
        parent={<Avatar img={manImage}/>}/>
  </div>
)

export const Badge_ = Template.bind({});

Badge_.args = {
    color: 'primary',
    value: 100,
    className: 'mr-20'
};