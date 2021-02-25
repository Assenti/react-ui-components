import React from 'react';
import Divider from '../../components/divider';
import Avatar from '../../components/avatar';
import manImage from '../../img/man.png';

export default {
    title: 'Example/Divider',
    component: Divider
};

const Template = (args) => (
    <>
        <div className="row">
            <Avatar img={manImage} style={{ height: 100, width: 100 }}/>
            <Divider vertical color={args.color}/>
            <div>
                <h2 className="text-primary">John Doe</h2>
                <p className="text-dark">jdoe@awesome.mail</p>
            </div>
        </div>
        <Divider color={args.color}/>
        <p>Age: 33</p>
        <p>Birth date: 1987/1/1</p>
        <p>Address: 13, Friday str., NYC</p>
    </>
)

export const Divider_ = Template.bind({});

Divider_.args = {
    color: 'secondary'
}