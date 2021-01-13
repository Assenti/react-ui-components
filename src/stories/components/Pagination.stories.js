import React from 'react';
import Pagination from '../../components/pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination
};

const Template = (args) => (
    <Pagination
        {...args}/>
)

export const Pagination_ = Template.bind({});

Pagination_.args = {
    perPage: 10,
    currentPage: 1,
    color: 'primary',
    itemsCount: 1000,
    borderType: 'default',
    size: 'default'
};