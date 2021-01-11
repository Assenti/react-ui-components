import React from 'react';
import CopyToClipboard from '../../components/copyToClipboard';
import InputField from '../../components/input';

export default {
  title: 'Example/Copytoclipboard',
  component: CopyToClipboard
};

const Template = (args) => (
    <div className="row align-center py-16">
        <InputField 
            className="mr-10" 
            color="info" 
            readOnly 
            value={args.text} 
            width={200}/>
        <CopyToClipboard {...args}/>
    </div>
)

export const Copytoclipboard_ = Template.bind({});

Copytoclipboard_.args = {
    text: 'Some text'
}