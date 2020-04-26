import React, { useState } from 'react';
import { Pagination, Select, Icon, Switch, ThemeContext, Divider, InputField } from '../components';
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
        property: 'borderType', 
        description: 'Set border radius',
        default: '', 
        type: 'string',
        value: 'default | tile | rounded'
    },
    { 
        property: 'dense', 
        description: 'Set pagination items density',
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
import { Pagination, Select, Icon, Switch, Divider, InputField } from '@assenti/rui-components';
const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const borders = ['default','tile','rounded'];

function Example() {
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[1]);
    const [dense, setDense] = useState(true);
    const [itemsCount, setItemsCount] = useState(500);
    const [border, setBorder] = useState(borders[1]);

    return (
        <>
            <div className="row">
                <InputField
                    label="Items count"
                    width={200}
                    type="number"
                    className="mr-10"
                    value={itemsCount}
                    onChange={e => setItemsCount(parseInt(e.target.value))}
                    />
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    dark={theme}
                    label="Color"
                    color="primary"
                    value={color}
                    onChange={v => setColor(v)}/>
            </div>
            <br/>
            <div className="row">
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    dark={theme}
                    label="Size"
                    color="primary"
                    className="mr-10"
                    value={size}
                    onChange={v => setSize(v)}/>
                <Select
                    items={borders}
                    prefix={<Icon name="shape"/>}
                    width={200}
                    dark={theme}
                    label="Border type"
                    color="primary"
                    value={border}
                    onChange={v => setBorder(v)}/>
            </div>
            <br/>
            <Switch 
                check={dense} 
                color="primary"
                rightLabel="Dense" 
                className="my-10"
                onChange={() => setDense(!dense)}/>
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
                dense={dense}
                borderType={border}/>
        </>
    )
}`

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];
const borders = ['default','tile','rounded'];

const PaginationPage = () => {
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[1]);
    const [dense, setDense] = useState(true);
    const [itemsCount, setItemsCount] = useState(500);
    const [border, setBorder] = useState(borders[1]);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    componentName="<Pagination/>"
                    apiDescItems={items}>
                    <div className="row">
                        <InputField
                            label="Items count"
                            width={200}
                            type="number"
                            className="mr-10"
                            value={itemsCount}
                            onChange={e => setItemsCount(parseInt(e.target.value))}
                            />
                        <Select
                            items={colors}
                            prefix={<Icon name="brush"/>}
                            width={200}
                            dark={theme}
                            label="Color"
                            color="primary"
                            value={color}
                            onChange={v => setColor(v)}/>
                    </div>
                    <br/>
                    <div className="row">
                        <Select
                            items={sizes}
                            prefix={<Icon name="format-size"/>}
                            width={200}
                            dark={theme}
                            label="Size"
                            color="primary"
                            className="mr-10"
                            value={size}
                            onChange={v => setSize(v)}/>
                        <Select
                            items={borders}
                            prefix={<Icon name="shape"/>}
                            width={200}
                            dark={theme}
                            label="Border type"
                            color="primary"
                            value={border}
                            onChange={v => setBorder(v)}/>
                    </div>
                    <br/>
                    <Switch 
                        check={dense} 
                        color="primary"
                        rightLabel="Dense" 
                        className="my-10"
                        onChange={() => setDense(!dense)}/>
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
                        dense={dense}
                        borderType={border}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default PaginationPage;