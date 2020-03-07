import React, { useState } from 'react';
import { Calendar, Card, Table, Collapse, Select, Icon, Switch } from '../components';
const colors = ['primary', 'info', 'success', 'error', 'dark'];
const sizes = ['default', 'medium', 'large'];

const CalendarPage = () => {
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);

    return (
        <div className="rui-page">
            <div className="rui-page-title">Calendar Component</div>
            <Card outlined title="Calendar usage">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Radio button color"
                    color="primary"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Radio button size"
                    color="primary"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Calendar
                    className="my-10"
                    shortWeekName
                    size={size} 
                    color={color}/>
            </Card>
        </div>
    )
}
export default CalendarPage;