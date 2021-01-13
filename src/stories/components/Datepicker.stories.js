import React from 'react';
import DatePicker from '../../components/datePicker';

export default {
    title: 'Example/Datepicker',
    component: DatePicker
};

const Template = (args) => (
    <DatePicker
        {...args}/>
)

export const Datepicker_ = Template.bind({});

Datepicker_.args = {
    color: 'primary',
    value: '',
    placeholder: 'DD.MM.YYYY',
    clearable: false,
    width: 250,
    maxDate: new Date(),
    selectBorderType: 'default',
    locale: 'en',
    size: 'default'
}