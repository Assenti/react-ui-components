import React, { useState, useRef } from 'react';
import { Select, Table, Card, Collapse, Icon, BackTopBtn, Switch, Badge } from '../components';
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

const usage = 
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

const colors = ['primary', 'info', 'success', 'error'];
const sizes = ['default', 'medium', 'large'];

const SelectPage = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [color, setColor] = useState(colors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [disabled, setDisabled] = useState(false);
    const [searchable, setSearchable] = useState(false);
    const [prefix, setPrefix] = useState(true);
    const [multiple, setMultiple] = useState(false);
    const [label, setLabel] = useState(true);
    const [whiteBackground, setWhiteBackground] = useState(false);
    const parent = useRef();
    const api = useRef();

    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="row">
                    <div className="rui-page-title">{'<Select/>'} Component</div>
                    <Badge 
                        color="error" 
                        value="WIP"
                        className="ml-10"
                        parent={<Icon name="wrench" size={20}/>}/>
                </div>
                <div className="rui-link fz-13 fw-bold mr-10" onClick={() => goToApi()}>API</div>
            </div>
            <Card outlined title="Usage">
            <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Switch color"
                    color="primary"
                    className="my-10"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="Switch size"
                    color="primary"
                    className="my-10"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Switch 
                    check={searchable} 
                    color="primary"
                    rightLabel="Searchable" 
                    className="my-10"
                    onChange={() => setSearchable(!searchable)}/>
                <Switch 
                    check={disabled} 
                    color="primary"
                    rightLabel="Disabled" 
                    className="my-10"
                    onChange={() => setDisabled(!disabled)}/>
                <br/>
                <Switch 
                    check={prefix} 
                    color="primary"
                    rightLabel="Prefix" 
                    className="my-10"
                    onChange={() => setPrefix(!prefix)}/>
                <Switch 
                    check={multiple} 
                    color="primary"
                    rightLabel="Multiple selection" 
                    className="my-10"
                    onChange={() => setMultiple(!multiple)}/>
                <br/>
                <Switch 
                    check={whiteBackground} 
                    color="primary"
                    rightLabel="WhiteBackground" 
                    className="my-10"
                    onChange={() => setWhiteBackground(!whiteBackground)}/>
                <Switch 
                    check={label} 
                    color="primary"
                    rightLabel="Label" 
                    className="my-10"
                    onChange={() => setLabel(!label)}/>
                <br/>
                <Select
                    items={countries}
                    prefix={prefix ? <Icon name="earth"/> : null}
                    itemTitle="country"
                    label={label ? 'Select your favourite country' : null}
                    width={250}
                    disabled={disabled}
                    searchable={searchable}
                    size={size}
                    multiple={multiple}
                    whiteBackground={whiteBackground}
                    color={color}
                    onSelect={(value, selectedList) => console.log(value, selectedList)}
                    placeholder="Countries"
                    value={country}
                    onChange={v => setCountry(v)}/>
                <br/>
                <Select
                    prefix={prefix ? <Icon name="earth"/> : null}
                    label={label ? 'Select your favourite city of countries' : null}
                    items={countries}
                    itemTitle="country"
                    childrenKey="cities"
                    color={color}
                    whiteBackground={whiteBackground}
                    width={250}
                    searchable={searchable}
                    size={size}
                    placeholder="Cities"
                    value={city}
                    onChange={v => setCity(v)}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    contentStyles={{ padding: 0 }}
                    tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
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