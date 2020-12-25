import React from 'react';
import Avatar from '../../components/avatar';
import manImage from '../../img/man.png';

export default {
  title: 'Example/Avatar',
  component: Avatar
};

const Template = (args) => (
  <>
    <Avatar
        width={args.width}
        height={args.height}
        borderType={args.borderType}
        {...args}
        img={manImage}/>
    <br/>
    <br/>
    <Avatar
        initials="AS"/>
  </>
)

export const Avatar_ = Template.bind({});

Avatar_.args = {
    width: 100,
    height: 100,
    borderType: 'rounded'
};