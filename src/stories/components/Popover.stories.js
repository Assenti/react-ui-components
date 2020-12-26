import React from 'react';
import PopOver from '../../components/popover';
import Button from '../../components/button';

export default {
  title: 'Example/Popover',
  component: PopOver
};

const Template = (args) => (
    <div
        style={{
            width: 320,
            height: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <PopOver {...args}>
            <Button
                name="Get started" 
                color="primary"/>
        </PopOver>
    </div>
)

export const Popover_ = Template.bind({});

Popover_.args = {
    title: 'Quit',
    content: 'Content...'
};