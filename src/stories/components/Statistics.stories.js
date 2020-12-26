import React from 'react';
import Statistics from '../../components/statistics';
import Tag from '../../components/tag';
import Icon from '../../components/icon';
import Card from '../../components/card';

export default {
  title: 'Example/Statistics',
  component: Statistics
};

const Template = (args) => (
    <Card
        style={{ 
            width: 200, 
            height: 95 
        }} 
        className="my-5 mr-10">
        <Statistics
            title={
                <Tag
                    color="success"
                    className="ma-0"
                    tiny>Downloads, p/w</Tag>}
            align={args.align}
            value={args.value}
            style={{ width: 170 }}
            valueColor={args.valueColor}
            valueSize={args.valueSize}
            fractions={args.fractions}
            step={args.step}
            autoFill={args.autoFill}
            onDone={() => console.log('DONE')}
            prefix={<Icon name="download"/>}/>
    </Card>
)

export const Statistics_ = Template.bind({});

Statistics_.args = {
    value: 1000,
    valueColor: '#1aaa55',
    valueSize: 30,
    fractions: 2,
    step: 20,
    autoFill: true,
    align: 'bottom'
};