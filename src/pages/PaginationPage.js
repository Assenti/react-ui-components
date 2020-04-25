import React, { useState, useRef } from 'react';
import { Pagination, Select, Icon, Switch, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

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
import { Pagination, Select, Icon, Switch } from '@assenti/rui-components';
const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

function Example() {
    const [itemsCount] = useState(100);
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [rounded, setRounded] = useState(false);
    const parent = useRef();

    return (
        <>
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
        </>
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
                <Page
                    usage={usage}
                    componentName="<Pagination/>"
                    apiDescItems={items}>
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
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default PaginationPage;