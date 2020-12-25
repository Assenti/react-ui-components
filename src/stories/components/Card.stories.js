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
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = () => (
    <div className="row wrap">
        {cards.map((item, index) => 
            <Card 
                key={index}
                hover
                className="ma-5 relative"
                style={{ width: 200 }} 
                footer={<h4 className="text-center">{item.name}</h4>}>
                <img src={item.img} style={{ width: '100%' }} alt="example"/>
                <p className="text-center">Hey there!</p>
                <FloatingBtn 
                    icon="like"
                    color="info"
                    // onClick={() => snackbar.message('Thank you, dude 🙂')}
                    />
            </Card>
        )}
    </div>
)
// export Template;
export const Card_ = Template.bind({});
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