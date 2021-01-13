import React from 'react';
import TimePicker from '../../components/timePicker';

export default {
    title: 'Example/Timepicker',
    component: TimePicker
};

const Template = (args) => (
    <TimePicker {...args}/>
)

export const Timepicker_ = Template.bind({});

Timepicker_.args = {
    color: 'primary',
    value: '',
    clearable: false,
    width: 200,
    onChange: (value) => console.log(value),
    locale: 'en',
    size: 'default'
}