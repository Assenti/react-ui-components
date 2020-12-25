import React from 'react';
import Card from '../../components/card';
import Divider from '../../components/divider';
import Skeleton from '../../components/skeleton';

export default {
    title: 'Example/Skeleton',
    component: Skeleton
};

const Template = (args) => (
    <Card style={{ width: 240, height: 310 }}>
        <div className="row justify-center py-10">
            <Skeleton
                {...args}/>
        </div>
        <Divider/>
        <Skeleton height={35} className="my-5" active={args.active}/>
        <Skeleton height={35} className="my-5" active={args.active}/>
        <Skeleton height={35} className="my-5" active={args.active}/>
    </Card>
)

export const Skeleton_ = Template.bind({});

Skeleton_.args = {
    active: true,
    rounded: true,
    width: 100,
    height: 100
};