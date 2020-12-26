import React from 'react';
import Slider from '../../components/slider';
import Avatar from '../../components/avatar';

export default {
  title: 'Example/Slider',
  component: Slider
};

const Template = (args) => (
    <Slider
        length={args.length} 
        items={[
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "whatsapp", iconColor: "#25D366", iconSize: 30, size: 80 },
            { icon: "instagram", iconColor: "#8134AF", iconSize: 30, size: 80 },
            { icon: "linkedin", iconColor: "#007bb6", iconSize: 30, size: 80 },
            { icon: "facebook-workplace", iconSize: 30, size: 80 },
            { icon: "gitlab", iconColor: "#fc6d26", iconSize: 30, size: 80 },
            { icon: "github", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 },
            { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 80 }
        ]}
        render={(item, index) => 
            <Avatar
                key={index}
                icon={item.icon} 
                iconColor={item.iconColor}
                iconSize={item.iconSize}
                width={item.size}
                height={item.size}/>}/>
)

export const Slider_ = Template.bind({});

Slider_.args = {
    length: 300
};