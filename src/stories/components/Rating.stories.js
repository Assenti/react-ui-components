import React from 'react';
import Rating from '../../components/rating';

export default {
    title: 'Example/Rating',
    component: Rating
};

const Template = (args) => (
    <Rating {...args}/>
)

export const Rating_ = Template.bind({});

Rating_.args = {
    color: 'yellow',
    count: 5,
    rate: 3.5
}