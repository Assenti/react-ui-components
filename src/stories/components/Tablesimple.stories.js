import React from 'react';
import TableSimple from '../../components/tableSimple';
const { Head, Body, Row, Header, Cell } = TableSimple;

export default {
    title: 'Example/Tablesimple',
    component: TableSimple
};

const getList = () => {
    const goods = [];
    for (let i = 0; i < 10; i++) {
        goods.push({
            name: `Product ${i+1}`,
            price: Math.ceil(Math.random() * 1000),
            count: Math.ceil(Math.random() * 500)
        })
    }
    return goods;
}

const getTotalCount = () => {
    let sum = 0;
    for (const item of getList()) {
        sum += Number(item.count)
    }
    return sum;
}

const getTotalAmount = () => {
    let sum = 0;
    for (const item of getList()) {
        sum += Number(item.price) * Number(item.count)
    }
    return sum;
}

const Template = (args) => (
    <TableSimple {...args}>
        <Head>
            <Row>
                <Header rowSpan={2}>Name</Header>
                <Header colSpan={3} align="center">Finance</Header>
            </Row>
            <Row>
                <Header>Price</Header>
                <Header>Count</Header>
                <Header>Amount</Header>
            </Row>
        </Head>
        <Body>
            {getList().map((item, index) => 
                <Row key={index}>
                    <Cell>{item.name}</Cell>
                    <Cell>$ {item.price}</Cell>
                    <Cell>{item.count}</Cell>
                    <Cell>$ {item.count * item.price}</Cell>
                </Row>
            )}
        </Body>
        <Head>
            <Row>
                <Header>Total:</Header>
                <Header/>
                <Header>{getTotalCount()}</Header>
                <Header>$ {getTotalAmount()}</Header>
            </Row>
        </Head>
    </TableSimple>
)

export const Tablesimple_ = Template.bind({});

Tablesimple_.args = {
    grid: true,
    bordered: true
}