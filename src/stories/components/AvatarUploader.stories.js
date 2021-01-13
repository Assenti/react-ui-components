import React from 'react';
import AvatarUploader from '../../components/avatarUploader';

export default {
    title: 'Example/Avataruploader',
    component: AvatarUploader
};

const Template = (args) => (
    <AvatarUploader {...args}/>
)

export const Avataruploader_ = Template.bind({});

Avataruploader_.args = {
    value: '',
    width: 140,
    height: 170,
    borderType: 'default'
};