import React, { useState } from 'react';
import { Table, Select, Icon, Switch, ButtonGroup, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

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
        description: 'Set items keys that should be rendered',
        default: '', 
        type: 'string[]',
        value: ''
    },
    { 
        property: 'headers', 
        description: 'Set table headers title',
        default: '', 
        type: 'string[]',
        value: ''
    },
    { 
        property: 'alignment', 
        description: 'Set table data alignment',
        default: 'left', 
        type: 'string (Enum)',
        value: 'left | center | right'
    },
    { 
        property: 'tableTitle', 
        description: 'Set table title',
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'controls', 
        description: 'Set table row controls',
        default: '', 
        type: 'ReactNode',
        value: ''
    },
    { 
        property: 'searchable', 
        description: 'Enable table data searching',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'searchKey', 
        description: 'Set searching column key',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'pagination', 
        description: 'Add pagination to table',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'paginationBorderType', 
        description: 'Set pagination border type',
        default: '', 
        type: 'string (Enum)',
        value: 'tile | rounded'
    },
    { 
        property: 'paginationDense', 
        description: 'Set pagination density',
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
        property: 'onPerPageSelect', 
        description: 'Invokes on per page selection (return perPage value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'paginationColor', 
        description: 'Set pagination color',
        default: 'primary', 
        type: 'string (Enum)',
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
        property: 'checkbox', 
        description: 'Set checkboxes',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'selectKey', 
        description: 'Set select key for activate row selection with checkbox',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onSelect', 
        description: 'Invokes on table row select (has effect with checkbox prop, returns selected rows array)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'sortable', 
        description: 'Set sorting filters on table header (sort asc | desc)',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set table rows size',
        default: '', 
        type: 'string (Enum)',
        value: 'medium | large'
    },
    { 
        property: 'indexSign', 
        description: 'Set order index sign in table header',
        default: '#', 
        type: 'string',
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
        property: 'color',
        description: 'Set table color set', 
        default: '', 
        type: 'string (Enum)',
        value: 'primary | info | success | error'
    },
    { 
        property: 'footer',
        description: 'Set table footer (auto set on checkbox prop)', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'ref',
        description: 'Set ref', 
        default: '', 
        type: 'ReactRefObject',
        value: ''
    },
    { 
        property: 'id',
        description: 'Set an html id to component', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage =
`// Usage examples
import React from 'react';
import { Table, Button, Icon, Tooltip } from '@assenti/rui-components';

let goods = []
for (let i = 0; i < 100; i++) {
    goods.push({
        name: Product \${i+1},
        price: $ \${Math.ceil(Math.random() * 1000)},
        count: Math.ceil(Math.random() * 500)
    })
}

function Example() {
    return (
        <>
            <Table
                pagination
                paginationPosition="right"
                itemsTotal={goods.length}
                stripped
                index
                sortable
                selectKey="name"
                checkbox
                onSelect={(selected) => console.log(selected)}
                color="primary"
                headers={['Name', 'Price', 'Count']}
                items={goods}
                itemTitles={['name', 'price', 'count']}
                controls={(item) =>
                    controls ? 
                    <div className="row justify-center align-center">
                        <Tooltip tooltip="Edit">
                            <Button
                                small
                                color="light"
                                className="mr-10"
                                icon={<Icon name="edit" />}
                                onClick={() => console.log(item, 'edited')}>
                            </Button>
                        </Tooltip>
                        <Tooltip tooltip="Delete">
                            <Button
                                small
                                color="light"
                                icon={<Icon name="delete"/>}
                                onClick={() => console.log(item, 'deleted')}>
                            </Button> 
                        </Tooltip>
                    </div> : null
                }
                />
        </>
    )
}`

let goods = []
for (let i = 0; i < 100; i++) {
    goods.push({
        name: `Product ${i+1}`,
        price: `$ ${Math.ceil(Math.random() * 1000)}`,
        count: Math.ceil(Math.random() * 500)
    })
}

const colors = ['default', 'primary', 'info', 'success', 'error'];
const textAligns = ['left', 'center', 'right'];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];

const TablePage = () => {
    const [color, setColor] = useState(colors[0]);
    const [grid, setGrid] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [bordered, setBordered] = useState(true);
    const [indexed, setIndexed] = useState(true);
    const [searchable, setSearchable] = useState(false);
    const [sortable, setSortable] = useState(true);
    const [title, setTitle] = useState(false);
    const [stripped, setStripped] = useState(false);
    const [hover, setHover] = useState(true);
    const [pagination, setPagination] = useState(true);
    const [textAlign, setTextAlign] = useState(textAligns[0]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    backTopBtn
                    apiSearchable
                    componentName="<Table/>"
                    apiDescItems={rows}>
                    <div className="row align-bottom">
                        <Select
                            items={colors}
                            dark={theme}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            label="Table color theme"
                            color="primary"
                            className="my-0"
                            value={color}
                            onChange={v => setColor(v)}/>
                        
                    </div>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={grid}
                        className="mb-10"
                        rightLabel="Grid"
                        onChange={() => setGrid(!grid)}/>
                    <Switch 
                        color="primary" 
                        check={checkbox}
                        className="my-10"
                        rightLabel="Checkbox"
                        onChange={() => setCheckbox(!checkbox)}/>
                    <Switch 
                        color="primary" 
                        check={stripped}
                        className="my-10"
                        rightLabel="Stripped"
                        onChange={() => setStripped(!stripped)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={title}
                        className="my-10"
                        rightLabel="Table title"
                        onChange={() => setTitle(!title)}/>
                    <Switch 
                        color="primary" 
                        check={bordered}
                        className="my-10"
                        rightLabel="Bordered"
                        onChange={() => setBordered(!bordered)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={indexed}
                        className="my-10"
                        rightLabel="Set index"
                        onChange={() => setIndexed(!indexed)}/>
                    <Switch 
                        color="primary" 
                        check={searchable}
                        className="my-10"
                        rightLabel="Searchable"
                        onChange={() => setSearchable(!searchable)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={hover}
                        className="my-10"
                        rightLabel="No Hover"
                        onChange={() => setHover(!hover)}/>
                    <Switch 
                        color="primary" 
                        check={sortable}
                        className="my-10"
                        rightLabel="Sortable"
                        onChange={() => setSortable(!sortable)}/>
                    <Switch 
                        color="primary" 
                        check={pagination}
                        className="my-10"
                        rightLabel="Pagination"
                        onChange={() => setPagination(!pagination)}/>
                    <div className="row justify-end">
                        <ButtonGroup 
                            default={0} 
                            icon
                            onChange={(item, index) => setTextAlign(textAligns[index])}
                            className="ml-10"
                            options={icons}/>
                    </div>
                    <Divider/>
                    <br/>
                    <Table
                        noHover={hover}
                        pagination={pagination}
                        paginationPosition="right"
                        itemsTotal={goods.length}
                        stripped={stripped}
                        grid={grid}
                        dark={theme}
                        index={indexed}
                        sortable={sortable}
                        tableTitle={title ? <h2>Table title</h2> : ''}
                        alignment={textAlign}
                        searchable={searchable}
                        searchKey="name"
                        selectKey="name"
                        checkbox={checkbox}
                        onSelect={(selected) => console.log(selected)}
                        color={color}
                        bordered={bordered}
                        headers={['Name', 'Price', 'Count']}
                        items={goods}
                        itemTitles={['name', 'price', 'count']}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default TablePage;