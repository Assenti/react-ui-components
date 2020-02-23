import React, { useState } from 'react';
import { Select, Table, Card } from '../components';

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
        property: 'selectedItem', 
        description: 'Selected option', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'onSelect', 
        description: 'Handle selected value', 
        default: '', 
        type: 'function',
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
        property: 'addSubItem', 
        description: 'Set second additional prop of object if you pass items as array of objects', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'width', 
        description: 'Set select width', 
        default: 'auto', 
        type: 'string | number',
        value: '100px | 100% | 100'
    },
    { 
        property: 'minWidth', 
        description: 'Set select min width', 
        default: 'auto', 
        type: 'string | number',
        value: '100px | 100% | 100'
    },
    { 
        property: 'labelName', 
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
        description: 'Set color of pagination from list', 
        default: '', 
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
        property: 'subItem', 
        description: 'Set item name in subitems menu',
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
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]

const items = [
    { country: 'Kazakhstan', cities: [ 'Nur-Sultan', 'Almaty', 'Shymkent' ] }, 
    { country: 'Russia', cities: ['Moscow', 'St. Petersburg', 'Krasnodar'] }, 
    { country: 'USA', cities: ['Washington, D.C.', 'New York City', 'San Francisco'] }, 
    { country: 'United Kingdom', cities: ['London', 'York', 'Manchester'] }, 
    { country: 'China', cities: ['Beijing', 'Shanghai', 'Shenzhen'] }
]

export const SelectPage = () => {
    const [selected, setSelected] = useState('');
    const [selectedCascader, setSelectedCascader] = useState('');
    const [selectedCascaderSubItem, setSelectedCascaderSubItem] = useState('');

    return (
        <div className="rui-page">
            <div className="rui-page-title">Selects</div>
            <Card outlined color="primary" title="Simple Selects">
                <Select
                    items={items}
                    color="primary"
                    width={200}
                    itemName="country"
                    placeholder="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    items={items}
                    labelName="Rounded select"
                    width={200}
                    color="info"
                    rounded
                    itemName="country"
                    placeholder="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    items={items}
                    width={200}
                    color="success"
                    itemName="country"
                    placeholder="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    items={items}
                    width={200}
                    color="error"
                    itemName="country"
                    placeholder="Countries"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    placeholder="Select a country" 
                    items={items}
                    width={200}
                    size="medium"
                    itemName="country"
                    labelName="Medium size select"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    placeholder="Select a country" 
                    items={items}
                    width={200}
                    size="medium"
                    rounded
                    color="info"
                    itemName="country"
                    labelName="Rounded medium size select"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
                <Select
                    placeholder="Select a country" 
                    items={items}
                    width={200}
                    size="large"
                    itemName="country"
                    labelName="Large size select"
                    selectedItem={selected}
                    onSelect={v => setSelected(v)}/>
            </Card>
            <br/>
            <Card outlined color="primary" title="Selects with subitems">
                <Select
                    items={items}
                    width={200}
                    selectedItem={selectedCascader}
                    placeholder="Select a country and a capital" 
                    itemName="country"
                    subItemsField="cities"
                    color="info"
                    labelName="Countries and capitals"
                    onSelect={v => setSelectedCascader(v)}/>
            </Card>
            <br/>
            <Card outlined color="primary" title="Selects with subitems (show only subitem value)">
                <Select
                    items={items}
                    width={200}
                    selectedItem={selectedCascaderSubItem}
                    placeholder="Select a country and a capital" 
                    itemName="country"
                    subItemsField="cities"
                    subTitle
                    showSubItemOnly={true}
                    labelName="Countries and capitals"
                    color="info"
                    onSelect={v => setSelectedCascaderSubItem(v)}/>
                <Select
                    items={items}
                    width={200}
                    selectedItem={selectedCascaderSubItem}
                    placeholder="Select a country and a capital" 
                    itemName="country"
                    subItemsField="cities"
                    subTitle
                    rounded
                    showSubItemOnly={true}
                    labelName="Countries and capitals"
                    color="info"
                    onSelect={v => setSelectedCascaderSubItem(v)}/>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={keys}
                items={rows}
                index={true}
                itemTitles={keys}/>
        </div>
        
    )
}
