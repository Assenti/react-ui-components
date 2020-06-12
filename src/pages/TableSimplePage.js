import React, { useState } from 'react';
import { Switch, ThemeContext, Divider, TableSimple, toFinancial } from '../components';
import Page from '../layouts/Page';
const { Head, Body, Row, Header, Cell } = TableSimple;

const rows = [
    { 
        property: '<TableSimple stripped/>',
        description: 'Highlight every even row in table', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: '<TableSimple bordered/>',
        description: 'Set table borders', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: '<TableSimple grid/>',
        description: 'Set table cells borders', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: '<TableSimple noHover/>',
        description: 'Disable table rows hovering', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: '<TableSimple dark/>',
        description: 'Set dark mode', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: '<TableSimple id/>',
        description: 'Set an html id to component', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<TableSimple style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<TableSimple className/>',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Head className/>',
        description: 'Set a custom css class', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Body className/>',
        description: 'Set a custom css class', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Head style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<Body style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<Row style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<Row className/>',
        description: 'Set a custom css class', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Header align/>',
        description: 'Set th text alignment', 
        default: '', 
        type: 'string (Enum)',
        value: 'left | right | center'
    },
    { 
        property: '<Header style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<Header className/>',
        description: 'Set a custom css class', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Header colSpan/>',
        description: 'Set th colSpan', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: '<Header rowSpan/>',
        description: 'Set th rowSpan', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: '<Cell align/>',
        description: 'Set td text alignment', 
        default: '', 
        type: 'string (Enum)',
        value: 'left | right | center'
    },
    { 
        property: '<Cell style/>',
        description: 'Set inline styles', 
        default: '', 
        type: 'Styles object',
        value: ''
    },
    { 
        property: '<Cell className/>',
        description: 'Set a custom css class', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: '<Cell colSpan/>',
        description: 'Set th colSpan', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: '<Cell rowSpan/>',
        description: 'Set th rowSpan', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: '<TableSimple tableRef/>',
        description: 'Set ref', 
        default: '', 
        type: 'React.RefObject',
        value: ''
    }
]

const usage =
`// Usage examples
import React from 'react';
import { TableSimple, toFinancial } from '@assenti/rui-components';
const { Head, Body, Row, Header, Cell } = TableSimple;

let goods = []
for (let i = 0; i < 10; i++) {
    goods.push({
        name: Product \${i+1},
        price: $ \${Math.ceil(Math.random() * 1000)},
        count: Math.ceil(Math.random() * 500)
    })
}

function Example() {
    const getTotalCount = () => {
        let sum = 0;
        for (const item of goods) {
            sum += Number(item.count)
        }
        return sum;
    }

    const getTotalAmount = () => {
        let sum = 0;
        for (const item of goods) {
            sum += Number(item.price) * Number(item.count)
        }
        return sum;
    }

    return (
        <>
            <TableSimple 
                grid
                noHover
                bordered>
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
                    {goods.map((item, index) => 
                        <Row key={index}>
                            <Cell>{item.name}</Cell>
                            <Cell>$ {item.price}</Cell>
                            <Cell>{item.count}</Cell>
                            <Cell>$ {toFinancial(item.count * item.price)}</Cell>
                        </Row>
                    )}
                </Body>
                <Head>
                    <Row>
                        <Header>Total:</Header>
                        <Header/>
                        <Header>{toFinancial(getTotalCount())}</Header>
                        <Header>$ {toFinancial(getTotalAmount())}</Header>
                    </Row>
                </Head>
            </TableSimple>
        </>
    )
}`

let goods = []
for (let i = 0; i < 10; i++) {
    goods.push({
        name: `Product ${i+1}`,
        price: Math.ceil(Math.random() * 1000),
        count: Math.ceil(Math.random() * 500)
    })
}

const TableSimplePage = () => {
    const [stripped, setStripped] = useState(false);
    const [hover, setHover] = useState(true);
    const [grid, setGrid] = useState(true);
    const [bordered, setBordered] = useState(true);

    const getTotalCount = () => {
        let sum = 0;
        for (const item of goods) {
            sum += Number(item.count)
        }
        return sum;
    }

    const getTotalAmount = () => {
        let sum = 0;
        for (const item of goods) {
            sum += Number(item.price) * Number(item.count)
        }
        return sum;
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    backTopBtn
                    apiSearchable
                    componentName="<TableSimple/>"
                    apiDescItems={rows}>
                    <Switch 
                        color="primary" 
                        check={grid}
                        className="mb-10"
                        rightLabel="Grid"
                        onChange={() => setGrid(!grid)}/>
                    <Switch 
                        color="primary" 
                        check={bordered}
                        className="my-10"
                        rightLabel="Bordered"
                        onChange={() => setBordered(!bordered)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={stripped}
                        className="my-10"
                        rightLabel="Stripped"
                        onChange={() => setStripped(!stripped)}/>
                    <Switch 
                        color="primary" 
                        check={hover}
                        className="my-10"
                        rightLabel="No Hover"
                        onChange={() => setHover(!hover)}/>
                    <Divider/>
                    <br/>
                    <TableSimple
                        dark={theme}
                        stripped={stripped}
                        noHover={hover}
                        grid={grid}
                        bordered={bordered}>
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
                            {goods.map((item, index) => 
                                <Row key={index}>
                                    <Cell>{item.name}</Cell>
                                    <Cell>$ {item.price}</Cell>
                                    <Cell>{item.count}</Cell>
                                    <Cell>$ {toFinancial(item.count * item.price)}</Cell>
                                </Row>
                            )}
                        </Body>
                        <Head>
                            <Row>
                                <Header>Total:</Header>
                                <Header/>
                                <Header>{toFinancial(getTotalCount())}</Header>
                                <Header>$ {toFinancial(getTotalAmount())}</Header>
                            </Row>
                        </Head>
                    </TableSimple>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TableSimplePage;