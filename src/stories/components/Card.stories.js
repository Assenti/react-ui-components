import React from 'react';
import Card from '../../components/card';
import FloatingBtn from '../../components/floatingBtn';
import manImage from '../../img/man.png';
import girlImage from '../../img/girl.png';

const cards = [
    {img: manImage, name: 'John Doe'},
    {img: girlImage, name: 'Jane Doe' }
];

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => (
    <div className="row wrap">
        {cards.map((item, index) => 
            <Card 
                key={index}
                {...args}
                footer={<h4 className="text-center">{item.name}</h4>}>
                <img src={item.img} style={{ width: '100%' }} alt="example"/>
                <p className="text-center">Hey there!</p>
                <FloatingBtn 
                    icon="like"
                    color="info"
                    />
            </Card>
        )}
    </div>
)

export const Card_ = Template.bind({});

Card_.args = {
    className: 'ma-5 relative',
    style: { width: 200 }
};