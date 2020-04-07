import React, { useState, useRef } from 'react';
import { Pagination, Table, Card, Collapse, BackTopBtn, CopyToClipboard, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'itemsCount', 
        description: 'Pass items total count', 
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'perPageVariants', 
        description: 'Set per page preset variants', 
        default: '[10, 20, 50, 100]', 
        type: 'number[]',
        value: ''
    },
    { 
        property: 'perPage', 
        description: 'Set per page value', 
        default: '10', 
        type: 'number',
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
        property: 'perPageText', 
        description: 'Set "10 / page" text', 
        default: 'page', 
        type: 'string',
        value: ''
    },
    { 
        property: 'current', 
        description: 'Set pagination default current page', 
        default: '1', 
        type: 'number',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes on page selection (return page value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set color of pagination from list', 
        default: 'primary', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'rounded', 
        description: 'Make border radius rounded',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark', 
        description: 'Set dark mode',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set pagination size',
        default: '', 
        type: 'string',
        value: 'medium | large'
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
import { Pagination, InputField } from '@assenti/rui-components';

function Example() {
    const [itemsCount, setItemsCount] = useState(100);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <Pagination
                itemsCount={itemsCount}
                color="primary"
                perPage={perPage}
                current={currentPage}
                onChange={page => setCurrentPage(page)}
                onPerPageSelect={value => setPerPage(value)}
                className="pa-5"
                pageText="module"/>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                current={currentPage}
                onChange={page => setCurrentPage(page)}
                className="pa-5"
                perPage={perPage}
                onPerPageSelect={value => setPerPage(value)}/>
            <Pagination
                itemsCount={itemsCount}
                color="success"
                className="pa-5"
                current={currentPage}
                onChange={page => setCurrentPage(page)}
                perPage={perPage}
                onPerPageSelect={value => setPerPage(value)}/>
            <Pagination
                itemsCount={itemsCount}
                color="error"
                perPage={perPage}
                onPerPageSelect={value => setPerPage(value)}
                className="pa-5"
                current={currentPage}
                onChange={page => setCurrentPage(page)}/>
        </div>
    )
}
`

const mediumSize =
`// Usage examples
import React, { useState } from 'react';
import { Pagination } from '@assenti/rui-components';

function Example() {
    const [itemsCount, setItemsCount] = useState(100);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                perPage={perPage}
                onPerPageSelect={value => setPerPage(value)}
                className="pa-5"
                current={currentPage}
                onChange={page => setCurrentPage(page)}
                size="medium"
                rounded/>
        </div>
    )
}
`

const largeSize =
`// Usage examples
import React, { useState } from 'react';
import { Pagination } from '@assenti/rui-components';

function Example() {
    const [itemsCount, setItemsCount] = useState(100);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                perPage={perPage}
                current={currentPage}
                onChange={page => setCurrentPage(page)}
                onPerPageSelect={value => setPerPage(value)}
                className="pa-5"
                size="large"/>
        </div>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

const PaginationPage = () => {
    const [itemsCount] = useState(100);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [rounded, setRounded] = useState(false);
    const parent = useRef();

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="row align-center space-between">
                        <div className="rui-page-title">{'<Pagination/>'} Component</div>
                    </div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Pagination color"
                            color="primary"
                            className="my-10"
                            value={color}
                            onChange={v => setColor(v)}/>
                        <br/>
                        <Select
                            items={sizes}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            dark={theme}
                            label="Pagination size"
                            color="primary"
                            className="my-10"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <br/>
                        <Switch 
                            check={rounded} 
                            color="primary"
                            rightLabel="Rounded" 
                            className="my-10"
                            onChange={() => setRounded(!rounded)}/>
                        <Divider/>
                        <Pagination
                            itemsCount={itemsCount}
                            color={color}
                            size={size}
                            perPage={perPage}
                            dark={theme}
                            current={currentPage}
                            onChange={page => setCurrentPage(page)}
                            onPerPageSelect={value => setPerPage(value)}
                            className="pa-5"
                            rounded={rounded}/>
                        <Collapse 
                            icon="code" 
                            iconSize={18}
                            dark={theme}
                            extra={<CopyToClipboard dark={theme} defaultText="Copy code" text={usage} className="mr-10"/>}  
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
                                {usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <BackTopBtn size="medium" dark setRef={parent}/>
                    <h2>API</h2>
                    <Table
                        bordered
                        dark={theme}
                        headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                        items={items}
                        index={true}
                        itemTitles={keys}/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
export default PaginationPage;