import React from 'react';
import InputMask from '../../components/inputMask';
import Icon from '../../components/icon';

export default {
  title: 'Example/Inputmask',
  component: InputMask
};

const Template = (args) => (
    <InputMask
        {...args} 
        prefix={<><Icon name="smartphone"/><span>+7</span></>}/>
)

export const Inputmask_ = Template.bind({});

Inputmask_.args = {
    value: '',
    width: 250,
    size: '',
    mask: 'phone',
    color: 'primary',
    placeholder: '(___) ___-__-__'
}