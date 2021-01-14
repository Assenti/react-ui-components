import React from 'react';
import Spinner from '../../components/spinner';

export default {
  title: 'Example/Spinner',
  component: Spinner
};

const Template = (args) => (
    <Spinner {...args}/>
)

export const Spinner_ = Template.bind({});

Spinner_.args = {
    size: 24,
    color: 'primary'
};