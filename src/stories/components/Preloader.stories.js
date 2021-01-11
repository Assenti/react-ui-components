import React from 'react';
import Preloader from '../../components/preloader';

export default {
  title: 'Example/Preloader',
  component: Preloader
};

const Template = (args) => (
    <Preloader {...args}/>
)

export const Preloader_ = Template.bind({});

Preloader_.args = {
    visible: true
};