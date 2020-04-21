import React, { useRef, useState } from 'react';
import { Table, Button, Tooltip, Card, BackTopBtn, Collapse, Select, Icon, Switch, ButtonGroup, CopyToClipboard, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        type: 'string',
        value: 'left | center | right'
    },
    { 
        property: 'tableTitle', 
        description: 'Set table title',
        default: '', 
        type: 'string',
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
        type: 'string',
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
        type: 'string',
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
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Table, Switch, Icon, Select, ButtonGroup } from '@assenti/rui-components';

let goods = []
for (let i = 0; i < 100; i++) {
    goods.push({
        name: Product \${i+1},
        price: $ \${Math.ceil(Math.random() * 1000)},
        count: Math.ceil(Math.random() * 500)
    })
}

const colors = ['default', 'primary', 'info', 'success', 'error', 'dark'];
const textAligns = ['left', 'center', 'right'];
const icons = ['format-align-left', 'format-align-center', 'format-align-right'];

function Example() {
    const [color, setColor] = useState(colors[0]);
    const [grid, setGrid] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [footer, setFooter] = useState(true);
    const [bordered, setBordered] = useState(false);
    const [indexed, setIndexed] = useState(true);
    const [searchable, setSearchable] = useState(false);
    const [sortable, setSortable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [controls, setControls] = useState(false);
    const [title, setTitle] = useState(false);
    const [stripped, setStripped] = useState(true);
    const [hover, setHover] = useState(true);
    const [pagination, setPagination] = useState(true);
    const [textAlign, setTextAlign] = useState(textAligns[0]);

    return (
        <div>
            <div className="row align-bottom pt-10">
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Table color theme"
                    color="primary"
                    className="my-0"
                    value={color}
                    onChange={v => setColor(v)}/>
                <ButtonGroup 
                    default={0} 
                    icon
                    onChange={(item, index) => setTextAlign(textAligns[index])}
                    className="ml-10"
                    options={icons} 
                    color="secondary" 
                    outlined/>
            </div>
            <br/>
            <Switch 
                color="primary" 
                check={grid}
                className="my-10"
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
                check={footer}
                className="my-10"
                rightLabel="Footer"
                onChange={() => setFooter(!footer)}/>
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
            <Switch 
                color="primary" 
                check={controls}
                className="my-10"
                rightLabel="Controls"
                onChange={() => setControls(!controls)}/>
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
            <br/>
            <Switch 
                color="primary" 
                check={loading}
                className="my-10"
                rightLabel="Loading"
                onChange={() => setLoading(!loading)}/>
            <br/>
            <Table
                noHover={hover}
                pagination={pagination}
                paginationPosition="right"
                itemsTotal={goods.length}
                stripped={stripped}
                grid={grid}
                index={indexed}
                sortable={sortable}
                tableTitle={title ? 'Table title' : ''}
                alignment={textAlign}
                searchable={searchable}
                searchKey="name"
                selectKey="name"
                checkbox={checkbox}
                onSelect={(selected) => console.log(selected)}
                color={color}
                loading={loading}
                bordered={bordered}
                headers={['Name', 'Price', 'Count']}
                items={goods}
                footer={footer ? <div>Total count: <strong>{goods.length}</strong></div> : null}
                itemTitles={['name', 'price', 'count']}
                controls={(item) =>
                    controls ? 
                    <div className="row justify-center align-center">
                        <Tooltip tooltip="Edit">
                            <Button
                                small
                                color="light"
                                className="mr-10"
                                icon="edit"
                                onClick={() => console.log(item, 'edited')}>
                            </Button>
                        </Tooltip>
                        <Tooltip tooltip="Delete">
                            <Button
                                small
                                color="light"
                                icon="delete"
                                onClick={() => console.log(item, 'deleted')}>
                            </Button> 
                        </Tooltip>
                    </div> : null
                }
                />
        </div>
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
    const api = useRef();
    const parent = useRef();
    const [color, setColor] = useState(colors[0]);
    const [grid, setGrid] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [footer, setFooter] = useState(true);
    const [bordered, setBordered] = useState(false);
    const [indexed, setIndexed] = useState(true);
    const [searchable, setSearchable] = useState(false);
    const [sortable, setSortable] = useState(true);
    const [loading, setLoading] = useState(false);
    const [controls, setControls] = useState(false);
    const [title, setTitle] = useState(false);
    const [stripped, setStripped] = useState(true);
    const [hover, setHover] = useState(true);
    const [pagination, setPagination] = useState(true);
    const [textAlign, setTextAlign] = useState(textAligns[0]);

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Table/>'} Component</div>
                        <div onClick={goToApi} className="rui-link fz-13 fw-bold">API</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
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
                            check={footer}
                            className="my-10"
                            rightLabel="Footer"
                            onChange={() => setFooter(!footer)}/>
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
                        <Switch 
                            color="primary" 
                            check={controls}
                            className="my-10"
                            rightLabel="Controls"
                            onChange={() => setControls(!controls)}/>
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
                        <br/>
                        <Switch 
                            color="primary" 
                            check={loading}
                            className="my-10"
                            rightLabel="Loading"
                            onChange={() => setLoading(!loading)}/>
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
                            tableTitle={title ? 'Table title' : ''}
                            alignment={textAlign}
                            searchable={searchable}
                            searchKey="name"
                            selectKey="name"
                            checkbox={checkbox}
                            onSelect={(selected) => console.log(selected)}
                            color={color}
                            loading={loading}
                            bordered={bordered}
                            headers={['Name', 'Price', 'Count']}
                            items={goods}
                            footer={footer ? <div>Total count: <strong>{goods.length}</strong></div> : null}
                            itemTitles={['name', 'price', 'count']}
                            controls={(item) =>
                                controls ? 
                                <div className="row justify-center align-center">
                                    <Tooltip tooltip="Edit">
                                        <Button
                                            small
                                            color="light"
                                            className="mr-10"
                                            icon="edit"
                                            onClick={() => console.log(item, 'edited')}>
                                        </Button>
                                    </Tooltip>
                                    <Tooltip tooltip="Delete">
                                        <Button
                                            small
                                            color="light"
                                            icon="delete"
                                            onClick={() => console.log(item, 'deleted')}>
                                        </Button> 
                                    </Tooltip>
                                </div> : null
                            }
                            />
                        <Collapse 
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            extra={<CopyToClipboard dark={theme} defaultText="Copy code" text={usage} className="mr-10"/>} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2 ref={api}>API</h2>
                    <BackTopBtn size="medium" dark setRef={parent}/>
                    <Card className="pa-0">
                        <Table
                            searchable
                            searchKey="property"
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={rows}
                            index={true}
                            itemTitles={keys}/>
                    </Card>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default TablePage;