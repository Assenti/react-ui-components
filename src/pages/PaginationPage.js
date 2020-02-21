import React, { useState, createRef } from 'react';
import { Pagination, InputField, Table, Card, Collapse, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'itemsCount', 
        description: 'Pass items count', 
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

const defaultUsage =
`// Usage examples
import React, { useState } from 'react';
import { Pagination, InputField } from '@assenti/rui-components';

function Example() {
    const [itemsCount, setItemsCount] = useState(100);

    return (
        <div>
            <InputField 
                value={itemsCount}
                color="info"
                type="number"
                width={150}
                label="Input items count" 
                onChange={e => setItemsCount(e.target.value)}/>
            <Pagination
                itemsCount={itemsCount}
                color="primary"
                className="pa-5"
                pageText="module"/>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                current={2}
                className="pa-5"
                perPage={20}/>
            <Pagination
                itemsCount={itemsCount}
                color="success"
                className="pa-5"
                current={3}
                perPage={20}/>
            <Pagination
                itemsCount={itemsCount}
                color="error"
                className="pa-5"
                current={4}/> 
        </div>
    )
}
`

const mediumSize =
`// Usage examples
import React from 'react';
import { Pagination } from '@assenti/rui-components';

function Example() {
    return (
        <div>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                className="pa-5"
                size="medium"
                rounded/>
        </div>
    )
}
`

const largeSize =
`// Usage examples
import React from 'react';
import { Pagination } from '@assenti/rui-components';

function Example() {
    return (
        <div>
            <Pagination
                itemsCount={itemsCount}
                color="info"
                className="pa-5"
                size="large"/>
        </div>
    )
}
`

export const PaginationPage = () => {
    const [itemsCount, setItemsCount] = useState(100);
    const api = createRef();
    const parent = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="page" ref={parent}>
            <div className="row align-center space-between">
                <div className="page-title">Pagination Component</div>
                <div onClick={goToApi} className="link fz-13 fw-bold">API</div>
            </div>
            <Card outlined color="primary" title="Default pagination (in different colors)">
                <InputField 
                    value={itemsCount}
                    color="info"
                    type="number"
                    width={150}
                    label="Input items count" 
                    onChange={e => setItemsCount(e.target.value)}/>
                <Pagination
                    itemsCount={itemsCount}
                    color="primary"
                    className="pa-5"
                    pageText="module"/>
                <Pagination
                    itemsCount={itemsCount}
                    color="info"
                    current={2}
                    className="pa-5"
                    perPage={20}/>
                <Pagination
                    itemsCount={itemsCount}
                    color="success"
                    className="pa-5"
                    current={3}
                    perPage={20}/>
                <Pagination
                    itemsCount={itemsCount}
                    color="error"
                    className="pa-5"
                    current={4}/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {defaultUsage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Medium size rounded pagination">
                <Pagination
                    itemsCount={itemsCount}
                    color="info"
                    className="pa-5"
                    size="medium"
                    rounded/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {mediumSize}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <br/>
            <Card outlined color="primary" title="Large size pagination">
                <Pagination
                    itemsCount={itemsCount}
                    color="info"
                    className="pa-5"
                    size="large"/>
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {largeSize}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn size="medium" dark setRef={parent}/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
