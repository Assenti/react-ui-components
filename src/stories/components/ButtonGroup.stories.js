import React from 'react';
import ButtonGroup from '../../components/buttonGroup';
import Icon from '../../components/icon';
const langs = ['KZ', 'RU', 'EN'];

export default {
  title: 'Example/Buttongroup',
  component: ButtonGroup
};

const Template = (args) => (
  <div className="row align-center">
    <ButtonGroup 
        {...args}/>
    <ButtonGroup 
        {...args}
        icon
        outlined
        color="secondary"
        options={[
            <Icon size={20} name="format-align-left"/>,
            <Icon size={20} name="format-align-center"/>,
            <Icon size={20} name="format-align-right"/>
        ]}/>
  </div>
)

export const Buttongroup_ = Template.bind({});

Buttongroup_.args = {
    size: 'default',
    default: 0,
    color: 'primary',
    options: langs,
    className: 'ma-4'
}