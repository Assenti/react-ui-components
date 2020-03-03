import React, { useState, createRef } from 'react';
import { Select, Table, Card, Collapse, Icon, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const keys = ['property', 'description', 'default', 'type', 'value'];
const rows = [
    { 
        property: 'items', 
        description: 'Select options', 
        default: '', 
        type: 'string[] | object[]',
        value: ''
    },
    { 
        property: 'itemName', 
        description: 'Set if you pass items as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes in select option select (return item value)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'childrenKey', 
        description: 'Set if you pass items with children array (pass the key of item that has children array)', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'searchable', 
        description: 'Enable searching field in select menu (has effect only with one level list)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'size', 
        description: 'Set select size', 
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'width', 
        description: 'Set select width', 
        default: 'auto', 
        type: 'string | number',
        value: '100px | 100% | 100'
    },
    { 
        property: 'label', 
        description: 'Set select label', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholder', 
        description: 'Set placeholder', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set select color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'borderType', 
        description: 'Set borders type', 
        default: '', 
        type: 'string',
        value: 'tile | smooth | rounded'
    },
    { 
        property: 'multiple', 
        description: 'Enable multiple selection (Warning: if multiple prop set, childrenKey has no effect)',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onSelect', 
        description: 'Invokes on multiple selection (return selected value & selected list)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'tagColor', 
        description: 'Set Tag color (Has effect only with multiple prop)',
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | black'
    },
    { 
        property: 'prefix', 
        description: 'Set prefix',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'whiteBackground',
        description: 'Set input background color to white', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]

const simpleUsage = 
`// Usage examples
import React, { useState } from 'react';
import { Select } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]
function Example() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return (
        <div className="pa-20">
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                color="info"
                placeholder="Countries"
                value={country}
                onChange={v => setCountry(v)}/>
            <Select
                className="ml-20"
                label="Select your favourite city"
                items={countries}
                itemTitle="country"
                childrenKey="cities"
                color="primary"
                width={250}
                placeholder="Cities"
                value={city}
                onChange={v => setCity(v)}/>
        </div>
    )
}`

const searchUsage = 
`// Usage examples
import React, { useState } from 'react';
import { Select } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]

function Example() {
    const [country_, setCountry_] = useState('');
    const [search, setSearch] = useState('');

    return (
        <div className="pa-20">
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                size="medium"
                searchable
                color="info"
                placeholder="Countries"
                value={country_}
                onChange={value => setCountry_(value)}/>
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite country"
                width={250}
                searchable
                rounded
                className="ml-20"
                color="info"
                placeholder="Countries"
                value={country_}
                onChange={value => setCountry_(value)}/>
        </div>
    )
}`

const multipleUsage = 
`// Usage examples
import React from 'react';
import { Select } from '@assenti/react-ui-components';

const countries = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] }, 
    { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }, 
    { country: 'France', cities: ['Paris', 'Nice', 'Marselle'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] },
    { country: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
    { country: 'South Korea', cities: ['Seoul', 'Busan', 'Daegu'] }
]

function Example() {
    return (
        <div>
            <Select
                items={countries}
                prefix={<Icon name="earth"/>}
                itemTitle="country"
                label="Select your favourite countries"
                width={250}
                childrenKey="cities"
                multiple
                whiteBackground
                color="info"
                placeholder="Countries"
                onSelect={(value, selectedList) => console.log(value, selectedList)}/>
        </div>
    )
}`

const SelectPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [country_, setCountry_] = useState('');
    const parent = createRef();
    const api = createRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">
                    Select Component
                </div>
                <div className="rui-link fz-13 fw-bold mr-10" onClick={() => goToApi()}>API</div>
            </div>
            <Card outlined title="Simple Selects">
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    color="info"
                    placeholder="Countries"
                    value={country}
                    onChange={v => setCountry(v)}/>
                <Select
                    className="ml-20"
                    label="Select your favourite city"
                    items={countries}
                    itemTitle="country"
                    childrenKey="cities"
                    color="primary"
                    width={250}
                    placeholder="Cities"
                    value={city}
                    onChange={v => setCity(v)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleUsage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Simple Select with searching">
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    size="medium"
                    searchable
                    color="info"
                    placeholder="Countries"
                    value={country_}
                    onChange={value => setCountry_(value)}/>
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite country"
                    width={250}
                    searchable
                    borderType="rounded"
                    className="ml-20"
                    color="info"
                    placeholder="Countries"
                    value={country_}
                    onChange={value => setCountry_(value)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {searchUsage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <br/>
            <Card outlined title="Multiple selection">
                <Select
                    items={countries}
                    prefix={<Icon name="earth"/>}
                    itemTitle="country"
                    label="Select your favourite countries"
                    width={250}
                    childrenKey="cities"
                    multiple
                    whiteBackground
                    color="info"
                    placeholder="Countries"
                    onSelect={(value, selectedList) => console.log(value, selectedList)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {multipleUsage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <BackTopBtn setRef={parent} dark size="medium"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
        
    )
}

export default SelectPage;