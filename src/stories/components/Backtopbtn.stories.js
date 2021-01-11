import React, { useRef } from 'react';
import BackTopBtn from '../../components/backtop';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
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

const Page = ({ ...args }) => {
    const blockRef = useRef();

    return (
        <div ref={blockRef}>
            <List header="Countries">
                {countriesMock().map((item, index) => 
                    <List.Item
                        key={index}
                        hover
                        noDivider
                        icon="flag" 
                        item={item.country}
                        subTitle={item.cities[0]}/>
                )}
            </List>
            <BackTopBtn
                dark={args.dark}
                tooltip={args.tooltip}
                text={args.text}
                breakpoint={args.breakpoint} 
                setRef={blockRef}/>
        </div>
    )
}

const Template = (args) => (
    <Page {...args}/>
)

export const Backtopbtn_ = Template.bind({});

Backtopbtn_.args = {
    breakpoint: 60,
    tooltip: 'To Up',
    text: 'To Up'
}