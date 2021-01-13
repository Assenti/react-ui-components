import React from 'react';
import Timeline from '../../components/timeline';

export default {
  title: 'Example/Timeline',
  component: Timeline
};

const Template = (args) => (
    <Timeline {...args}/>
)

export const Timeline_ = Template.bind({});

Timeline_.args = {
    color: 'primary',
    date: 'date',
    title: 'title',
    subtitle: 'subtitle',
    tagBorderType: 'default',
    tagColor: 'primary',
    items: [
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' },
        { date: '2020-02-29', title: 'Some event on Feb 29th', subtitle: 'Some subtitle' }
    ]
};