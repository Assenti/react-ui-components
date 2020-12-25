import React from 'react';
import ButtonGroup from '../../components/buttonGroup';
const langs = ['KZ', 'RU', 'EN'];


export default {
  title: 'Example/Buttongroup',
  component: ButtonGroup,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = () => (
  <>
    <ButtonGroup 
        default={0} 
        // onChange={(item, index) => setOption(item)}
        options={langs} 
        color="secondary"/>
    <br/>
    <br/>
    <ButtonGroup 
        default={0} 
        // onChange={(item, index) => setOption(item)}
        options={langs} 
        color="primary"/>
  </>
)
// export Template;
export const Buttongroup_ = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };