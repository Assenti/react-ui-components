import React from 'react';
import Table from '../../components/table';
import Tooltip from '../../components/tooltip';
import Button from '../../components/button';
import Icon from '../../components/icon';

const goods = [];
for (let i = 0; i < 100; i++) {
    goods.push({
        name: `Product ${i+1}`,
        price: `$ ${Math.ceil(Math.random() * 1000)}`,
        count: Math.ceil(Math.random() * 500)
    })
}

export default {
    title: 'Example/Table',
    component: Table
};

const Template = (args) => (
    <Table {...args}
        controls={(item) =>
            <div className="row justify-center align-center">
                <Tooltip tooltip="Edit">
                    <Button
                        small
                        color="light"
                        className="mr-10"
                        icon={<Icon size={18} name="edit" />}
                        onClick={() => console.log(item, 'edited')}>
                    </Button>
                </Tooltip>
                <Tooltip tooltip="Delete">
                    <Button
                        small
                        color="light"
                        icon={<Icon size={18} name="delete"/>}
                        onClick={() => console.log(item, 'deleted')}>
                    </Button> 
                </Tooltip>
            </div>}
        />
)

export const Table_ = Template.bind({});

Table_.args = {
    alignment: 'left',
    pagination: true,
    paginationColor: 'primary',
    paginationPosition: 'right',
    itemsTotal: goods.length,
    stripped: true,
    index: true,
    sortable: true,
    selectKey: 'name',
    checkbox: true,
    onSelect: (selected) => console.log(selected),
    color: 'primary',
    headers: ['Name', 'Price', 'Count'],
    items: goods,
    itemTitles: ['name', 'price', 'count'],
    paginationBorderType: 'default',
}