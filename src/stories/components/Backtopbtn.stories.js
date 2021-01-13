import React from 'react';
import BackTopBtn from '../../components/backtop';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import Icon from '../../components/icon';
import { countries } from '../../data/countries';
List.Item = ListItem;

export default {
  title: 'Example/Backtopbtn',
  component: BackTopBtn
};

const countriesMock = () => {
    const list = [];
    for (let i = 0; i < 4; i++) {
        list.push(...countries);
    }
    return list;
}

const Template = (args) => (
    <div>
        <p>Checkout Docs</p>
        <BackTopBtn
            {...args}
            icon={<Icon name="arrow-up-bold"/>}/>
    </div>
)

export const Backtopbtn_ = Template.bind({});

Backtopbtn_.args = {
    lifted: true,
    breakpoint: 60,
    tooltip: 'To Up',
    size: 'default',
    offsetX: 25,
    offsetY: 25
}