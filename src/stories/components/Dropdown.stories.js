import React from 'react';
import Dropdown from '../../components/dropdown';
import Divider from '../../components/divider';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Avatar from '../../components/avatar';
import manImage from '../../img/man_.png';
import List from '../../components/list/List';
import ListItem from '../../components/list/ListItem';
import { modules } from '../../data/modules';
List.Item = ListItem;

export default {
  title: 'Example/Dropdown',
  component: Dropdown
};

const Template = (args) => (
    <Dropdown
        {...args}
        trigger={
            <Button 
                color="primary"
                name="Account"
                icon={<Icon name="account"/>}/>
        }>
        <div className="pa-10">
            <div className="text-center">
                <Avatar img={manImage} borderType="rounded" style={{ width: 100, height: 100 }} dark={args.dark}/>
                <h4>John Doe</h4>
            </div>
            <Divider/>
            <List dark={args.dark}>
                {modules.map((item, index) =>
                    <List.Item 
                        key={index}
                        hover
                        noDivider 
                        item={item.name} 
                        icon={item.icon}/>
                )}
            </List>
        </div>
    </Dropdown>
)

export const Dropdown_ = Template.bind({});

Dropdown_.args = {
    dark: false,
    width: 200,
    position: 'left'
};