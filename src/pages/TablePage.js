import React, { createRef, useState } from 'react';
import { Table, Button, Tooltip, Card, BackTopBtn, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const items = [
    { country: 'Kazakhstan', capital: 'Nur-Sultan', population: 1029556 }, 
    { country: 'Russia', capital: 'Moscow', population: 12476000 }, 
    { country: 'USA', capital: 'Washington, D.C.', population: 711571 }, 
    { country: 'United Kingdom', capital: 'London', population: 8787892 }, 
    { country: 'China', capital: 'Beijing', population: 21542000 }
];

const headers = ['Country', 'Capital', 'Population'];
const headers2 = ['Country', 'Capital', 'Population'];

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'items', 
        description: 'Pass the items',
        default: '', 
        type: 'string[] | number[] | object[]',
        value: ''
    },
    { 
        property: 'itemTitles', 
        description: 'Set header titles',
        default: '', 
        type: 'string[]',
        value: ''
    },
    { 
        property: 'alignment', 
        description: 'Set table data alignment',
        default: 'left', 
        type: 'string',
        value: 'left | center | right'
    },
    { 
        property: 'pagination', 
        description: 'Add pagination to table',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'paginationPosition', 
        description: 'Set pagination block position',
        default: 'left', 
        type: 'string',
        value: 'left | right'
    },
    { 
        property: 'perPageOptions', 
        description: 'Set per page options',
        default: '[10, 20, 50, 100]', 
        type: 'number[]',
        value: ''
    },
    { 
        property: 'paginationColor', 
        description: 'Set pagination color',
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'itemsTotal', 
        description: 'Required if you use pagination prop',
        default: '0', 
        type: 'number',
        value: ''
    },
    { 
        property: 'stripped',
        description: 'Highlight every even row in table', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'headerColor',
        description: 'Set header color', 
        default: 'gray', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'footer',
        description: 'Set table footer', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'footerColor',
        description: 'Set footer color', 
        default: 'gray', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

    const simpleUsage =
`// Usage examples
import React from 'react';
import { Table } from '@assenti/rui-components';

function Example() {
    return (
        <div>
            <Table
                bordered
                stripped
                noHover={true} 
                headers={headers}
                items={items}
                index={true}
                footer={<div>I am a footer</div>}
                itemTitles={['country', 'capital', 'population']}/>  
        </div>
    )
}
`
let goods = []
for (let i = 0; i < 100; i++) {
    goods.push({
        name: `Product ${i+1}`,
        price: `$ ${Math.ceil(Math.random() * 1000)}`,
        count: Math.ceil(Math.random() * 500)
    })
}

export const TablePage = () => {
    const api = createRef();
    const parent = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="page" ref={parent}>
            <div className="row align-center space-between">
                <div className="page-title">Table Component</div>
                <div onClick={goToApi} className="link fz-13 fw-bold">API</div>
            </div>
            <Card outlined color="primary" title="Table with order index, no hover, stripped and footer">
                <Table
                    bordered
                    stripped
                    noHover 
                    headers={headers}
                    items={items}
                    index
                    footer={<div>I am a footer</div>}
                    itemTitles={['country', 'capital', 'population']}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Table with checkboxes and controls">
                <Table
                    checkbox 
                    noHover
                    headers={headers2}
                    items={items}
                    itemTitles={['country', 'capital', 'population']}
                    controls={
                        <div className="row justify-center align-center">
                            <Tooltip tooltip="Edit">
                                <Button
                                    small
                                    className="mr-10"
                                    color="light"
                                    icon="edit"
                                    onClick={() => {}}>
                                </Button>
                            </Tooltip>
                            <Tooltip tooltip="Delete">
                                <Button
                                    small
                                    color="light"
                                    icon="delete"
                                    onClick={() => {}}>
                                </Button> 
                            </Tooltip>
                        </div>
                    }/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Table with pagination">
                <Table
                    noHover
                    pagination
                    paginationPosition="right"
                    stripped
                    bordered
                    headerColor="primary"
                    itemsTotal={goods.length}
                    headers={['Name', 'Price', 'Count']}
                    items={goods}
                    footer={<div>Total count: <strong>{goods.length}</strong></div>}
                    itemTitles={['name', 'price', 'count']}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2 ref={api}>API</h2>
            <BackTopBtn size="medium" dark setRef={parent}/>
            <Table
                bordered
                headers={keys}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
