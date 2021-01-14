import React from 'react';
import Button from '../../components/button';
import Icon from '../../components/icon';

export default {
    title: 'Example/Button',
    component: Button
};

const Template = (args) => (
    <div className="row align-center">
        <Button {...args}/>
        <Button {...args}
            icon={<Icon name="facebook" color="#1678c2"/>}/>
    </div>
)

export const Button_ = Template.bind({});

Button_.args = {
    color: 'primary',
    name: 'Facebook',
    loadingContent: 'Loading...'
}