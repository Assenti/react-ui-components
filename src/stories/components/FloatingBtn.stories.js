import React from 'react';
import Card from '../../components/card';
import FloatingBtn from '../../components/floatingBtn';
import manImage from '../../img/man.png';

export default {
  title: 'Example/Floatingbtn',
  component: FloatingBtn,
};

const Template = (args) => (
    <Card 
        className="relative"
        style={{
            width: 200
        }} 
        footer={<h4 className="text-center">John Doe</h4>}>
        <img src={manImage} style={{ width: '100%' }} alt="example"/>
        <FloatingBtn 
            {...args}/>
    </Card>
)

export const Floatingbtn_ = Template.bind({});

Floatingbtn_.args = {
    icon: 'plus',
    size: 'large',
    tooltip: 'Add friend',
    color: 'primary',
    tooltipPosition: 'top',
    position: 'bottom-right',
    offsetX: 5,
    offsetY: 5
}