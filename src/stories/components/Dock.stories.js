import React from 'react';
import Dock from '../../components/dock';
import manImage from '../../img/man.png';

export default {
  title: 'Example/Dock',
  component: Dock
};

const dockItems = [
    { title: 'WhatsApp', icon: 'whatsapp', iconColor: '#25D366' },
    { title: 'Account', icon: '', iconColor: '', img: manImage },
    { title: 'Facebook', icon: 'facebook', iconColor: '#3b5998' },
    { title: 'LinkedIn', icon: 'linkedin', iconColor: '#007bb6' },
    { title: 'Instagram', icon: 'instagram', iconColor: '#8134AF' },
    { divider: true },
    { title: 'Github', icon: 'github', iconColor: '#4d4d4d' },
    { title: 'Gitlab', icon: 'gitlab', iconColor: '#fc6d26' },
    { divider: true },
    { title: 'Trash', icon: 'delete', iconColor: '#4d4d4d' }
]

const Template = (args) => (
    <Dock {...args}/>
)

export const Dock_ = Template.bind({});

Dock_.args = {
    items: dockItems,
    length: 500,
    tile: false,
    dark: false,
    visible: true, 
    position: 'bottom'
};