import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs';

export default {
  title: 'Example/Breadcrumbs',
  component: Breadcrumbs
};

const Template = () => (
    <Breadcrumbs
        itemKey="item"
        urlKey="url"
        // icon="icon"
        // onChange={(item, index) => setActive(index)}
        // isActive={(item, index) => index === active} 
        crumbs={[
            { item: 'Home', url: '', icon: 'home' },
            { item: 'Section', url: '', icon: 'credit-card' },
            { item: 'Module', url: '', icon: 'help-circle-outline'}
        ]}/>
)

export const Breadcrumbs_ = Template.bind({});

Breadcrumbs_.args = {

}