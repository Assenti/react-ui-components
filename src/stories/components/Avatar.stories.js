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
        style={args.style}
        borderType={args.borderType}
        {...args}
        img={manImage}/>
    <br/>
    <br/>
    <Avatar
        initials="AS"
        style={{
          width: 100,
          height: 120
        }}/>
  </>
)

export const Avatar_ = Template.bind({});

Avatar_.args = {
    style: {
      width: 100,
      height: 100
    },
    borderType: 'rounded'
}