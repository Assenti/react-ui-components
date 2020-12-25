import React from 'react';
import Uploader from '../../components/uploader';

export default {
    title: 'Example/Uploader',
    component: Uploader
};

const Template = (args) => (
    <>
        <Uploader
            {...args}
            />
        <br/>
        <Uploader
            placeholder="Drag & Drop file"
            height={220}
            width={220}
            dropBox
            />
    </>
)

export const Uploader_ = Template.bind({});

Uploader_.args = {
    placeholder: 'File upload',
    width: 300,
    color: 'primary',
    title: 'Сhoose a file(-s) please'
};