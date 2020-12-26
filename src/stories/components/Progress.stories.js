import React from 'react';
import Card from '../../components/card';
import Progress from '../../components/progress';

export default {
  title: 'Example/Progress',
  component: Progress
};

const Template = (args) => (
    <div className="row">
        <Card width={150} className="row justify-center mr-10">
            <Progress
                circle
                className="my-10"
                icon={args.complete === 100 ? 'check-circle' : null}
                {...args}/>
        </Card>
        <div style={{ height: 40 }}>
            <Card>
                <Progress
                    icon={args.complete === 100 ? 'check-circle' : null}
                    {...args}/>
            </Card>
        </div>
    </div>
)

export const Progress_ = Template.bind({});

Progress_.args = {
    color: 'primary',
    active: false,
    hideState: false,
    iconColor: '#1aaa55',
    complete: 35
};