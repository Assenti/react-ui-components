import React from 'react';
import Calendar from '../../components/calendar';

export default {
    title: 'Example/Calendar',
    component: Calendar
};

const Template = (args) => (
    <Calendar {...args}/>
)

const events = [
    { 
        date: new Date(new Date().getFullYear(),2,8), 
        items: [
            { title: 'Event', event: 'International Women Day', color: '#9C27B0' },
            { title: 'Event', event: 'Congratulate my women', color: '#9C27B0' }

        ]
    },
    { 
        date: new Date(new Date().getFullYear(),2,22), 
        items: [
            { title: 'Event', event: 'Nauryz Meiramy Holiday', color: '#9C27B0' }
        ]
    },
]

const holidays = [
    { date: new Date(new Date().getFullYear(),2,8) },
    { date: new Date(new Date().getFullYear(),2,9) },
    { date: new Date(new Date().getFullYear(),2,22) },
    { date: new Date(new Date().getFullYear(),2,23) }
]

export const Calendar_ = Template.bind({});

Calendar_.args = {
    width: 400,
    shortWeekName: true,
    active: '',
    disabledDates: [new Date(new Date().getFullYear(),3,19), new Date(new Date().getFullYear(),3,20)],
    maxDate: new Date(),
    events: events,
    holidays: holidays,
    weekStartsSunday: false,
    onlyPast: true,
    color: 'primary'
}