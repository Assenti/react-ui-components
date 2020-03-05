import React, { useState, useRef } from 'react';
import { List, ListItem, Button, Table, Card, Collapse, BackTopBtn, Select, Icon, Switch, RadioGroup, phoneMask } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import manImage from '../img/man.png';
import manImage2 from '../img/hipster.png';
import manImage3 from '../img/man_.png';
import manImage4 from '../img/old.png';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { List, ListItem, Card, Select, Icon, Switch, RadioGroup, phoneMask } from '@assenti/rui-components';
const names = [
    { name: 'Steve Rogers', hero: 'Captain America', phone: '1234567890', icon: 'shield-account', img: manImage, check: false, active: false }, 
    { name: 'Peter Parker', hero: 'Spider man', phone: '1234567890', icon: 'shield-account', img: manImage2, check: false, active: true }, 
    { name: 'Tony Stark', hero: 'Iron man', phone: '1234567890', icon: 'shield-account', img: manImage3, check: false, active: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false }
];
const types = ['image', 'icon', 'none'];
const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'tile'];

function Example() {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[1]);
    const [color, setColor] = useState(colors[0]);
    const [dark, setDark] = useState(false);
    const [rounded, setRounded] = useState(false);
    const [divider, setDivider] = useState(false);
    const [hover, setHover] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const [left, setLeft] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [controls, setControls] = useState(true);
    const [type, setType] = useState('');

    const selectOne = (item) => {
        if (isSelected(item)) {
            setSelected(selected => selected.filter(_item => _item !== item))
        } else setSelected([...selected, item]);
    }

    const isSelected = (item) => {
        let result = false
        for (const select of selected) {
            if (item === select) result = true 
        }
        return result
    }

    return (
        <div>
            <Select
                items={sizes}
                prefix={<Icon name="format-size"/>}
                width={200}
                label="List size"
                color="primary"
                className="pl-10"
                value={size}
                onChange={v => setSize(v)}/>
            <br/>
            <Select
                items={borders}
                prefix={<Icon name="shape"/>}
                width={200}
                label="Avatar border type"
                color="primary"
                className="pl-10"
                value={border}
                onChange={v => setBorder(v)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                label="Active item color"
                color="primary"
                className="pl-10"
                value={color}
                onChange={v => setColor(v)}/>
            <br/>
            <Switch 
                color="primary" 
                check={dark}
                rightLabel="Dark"
                className="pl-10 my-10"
                onChange={() => setDark(!dark)}/>
            <Switch 
                color="primary" 
                check={hover}
                rightLabel="Hover"
                className="pl-10 my-10"
                onChange={() => setHover(!hover)}/>
            <Switch 
                color="primary" 
                check={divider}
                rightLabel="Hide dividers"
                className="pl-10 my-10"
                onChange={() => setDivider(!divider)}/>
            <br/>
            <RadioGroup
                options={types} 
                value={type}
                name="type"
                className="pl-10 mt-10" 
                onChange={(value) => setType(value)}/>
            <br/>
            <Switch 
                color="primary" 
                check={subtitle}
                rightLabel="Subtitle"
                className="pl-10 my-10"
                onChange={() => setSubtitle(!subtitle)}/>
            <br/>
            <Switch 
                color="primary" 
                check={rounded}
                rightLabel="Rounded active item"
                className="pl-10 my-10"
                onChange={() => setRounded(!rounded)}/>
            <Switch 
                color="primary" 
                check={left}
                rightLabel="Active item left border"
                className="pl-10 my-10"
                onChange={() => setLeft(!left)}/>
            <br/>
            <Switch 
                color="primary" 
                check={checkbox}
                rightLabel="Checkbox"
                className="pl-10 my-10"
                onChange={() => setCheckbox(!checkbox)}/>
            <Switch 
                color="primary" 
                check={controls}
                rightLabel="Controls"
                className="pl-10 my-10"
                onChange={() => setControls(!controls)}/>
            <Card
                className="ma-10" 
                dark={dark} 
                width={400}>
                <List
                    size={size}
                    dark={dark} 
                    header={
                        <div className="row align-center space-between">
                            Selected persons: {selected.length}
                            {selected.length > 0 ? <Button className="ma-0" light icon="share" size={18}/> : ''}
                        </div>
                    }>
                    {names.map((item, index) => 
                        <ListItem
                            isActiveItem={isSelected(item.hero)}
                            onClick={() => selectOne(item.hero)}
                            key={index} 
                            hover={hover}
                            item={item.name}
                            color={color}
                            noDivider={divider}
                            roundedActive={rounded}
                            leftBorder={left}
                            subTitle={subtitle ? item.hero : null}
                            icon={type === 'icon' ? item.icon : null}
                            avatar={type === 'image' ? item.img : null}
                            avatarBorderType={border}
                            checkbox={checkbox}
                            controls={controls ?
                                <div className="row align-center fz-9 text-dark">
                                    <Icon name="smartphone" size={16} className="mr-5"/>
                                    {phoneMask(item.phone)}
                                    <Button color="light" 
                                        className="ml-10" 
                                        icon="edit"
                                        iconSize={16}/>
                                </div> : null}/>
                    )}
                </List>
            </Card>
        </div>
    )
}`

const names = [
    { name: 'Steve Rogers', hero: 'Captain America', phone: '1234567890', icon: 'shield-account', img: manImage, check: false, active: false }, 
    { name: 'Peter Parker', hero: 'Spider man', phone: '1234567890', icon: 'shield-account', img: manImage2, check: false, active: true }, 
    { name: 'Tony Stark', hero: 'Iron man', phone: '1234567890', icon: 'shield-account', img: manImage3, check: false, active: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false }
];
const types = ['image', 'icon', 'none'];

const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'header', 
        description: 'Set list header',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set list item size',
        default: '', 
        type: 'string',
        value: 'medium | large'
    },
    { 
        property: 'dark',
        description: 'Set dark mode (can not be used with light prop)', 
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
const items2 = [
    { 
        property: 'render', 
        description: 'You can pass your own custom element', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Invokes on item click', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'item', 
        description: 'Set list item', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'subTitle', 
        description: 'Set subtitle in list item (It can be just text or Tag and etc.)', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'tooltip', 
        description: 'Set tooltip', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'tooltipPosition', 
        description: 'Set tooltip position', 
        default: 'top', 
        type: 'string',
        value: 'left | right | bottom'
    },
    { 
        property: 'isActiveItem', 
        description: 'Set active list item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'roundedActive', 
        description: 'Set hover and active list item rounded', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color', 
        description: 'Set active list item color', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error'
    },
    { 
        property: 'leftBorder', 
        description: 'Set left border highlighting on active item', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'checkbox',
        description: 'A placeholder for checkbox (Expect a checkbox element or Component)', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'icon',
        description: 'Set icon before the text in list item', 
        default: '', 
        type: 'string',
        value: 'home | search | etc. (see icon names list in docs)'
    },
    { 
        property: 'controls',
        description: 'A placeholder for item controls like buttons or etc.', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'noDivider',
        description: 'Remove the divider line between items', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'hover',
        description: 'Highlight hovered list item', 
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

const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'tile'];

const ListPage = () => {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[1]);
    const [color, setColor] = useState(colors[0]);
    const [dark, setDark] = useState(false);
    const [rounded, setRounded] = useState(false);
    const [divider, setDivider] = useState(false);
    const [hover, setHover] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const [left, setLeft] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [controls, setControls] = useState(true);
    const listApi = useRef();
    const listItemApi = useRef();
    const parent = useRef();
    const [type, setType] = useState('');

    const goListApi = () => {
        if (listApi.current) listApi.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const goListItemApi = () => {
        if (listItemApi.current) listItemApi.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const selectOne = (item) => {
        if (isSelected(item)) {
            setSelected(selected => selected.filter(_item => _item !== item))
        } else setSelected([...selected, item]);
    }

    const isSelected = (item) => {
        let result = false
        for (const select of selected) {
            if (item === select) result = true 
        }
        return result
    }
    
    return (
        <div className="rui-page" ref={parent}>
            <div className="row align-center space-between">
                <div className="rui-page-title">List, ListItem Components</div>
                <div className="row">
                    <div className="rui-link fz-13 fw-bold mr-10" onClick={() => goListApi()}>List API</div>
                    <div className="rui-link fz-13 fw-bold" onClick={() => goListItemApi()}>ListItem API</div>
                </div>
            </div>
            <Card 
                outlined 
                className="px-0"
                title="List usage">
                <Select
                    items={sizes}
                    prefix={<Icon name="format-size"/>}
                    width={200}
                    label="List size"
                    color="primary"
                    className="pl-10"
                    value={size}
                    onChange={v => setSize(v)}/>
                <br/>
                <Select
                    items={borders}
                    prefix={<Icon name="shape"/>}
                    width={200}
                    label="Avatar border type"
                    color="primary"
                    className="pl-10"
                    value={border}
                    onChange={v => setBorder(v)}/>
                <br/>
                <Select
                    items={colors}
                    prefix={<Icon name="brush"/>}
                    width={200}
                    label="Active item color"
                    color="primary"
                    className="pl-10"
                    value={color}
                    onChange={v => setColor(v)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={dark}
                    rightLabel="Dark"
                    className="pl-10 my-10"
                    onChange={() => setDark(!dark)}/>
                <Switch 
                    color="primary" 
                    check={hover}
                    rightLabel="Hover"
                    className="pl-10 my-10"
                    onChange={() => setHover(!hover)}/>
                <Switch 
                    color="primary" 
                    check={divider}
                    rightLabel="Hide dividers"
                    className="pl-10 my-10"
                    onChange={() => setDivider(!divider)}/>
                <br/>
                <RadioGroup
                    options={types} 
                    value={type}
                    name="type"
                    className="pl-10 mt-10" 
                    onChange={(value) => setType(value)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={subtitle}
                    rightLabel="Subtitle"
                    className="pl-10 my-10"
                    onChange={() => setSubtitle(!subtitle)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={rounded}
                    rightLabel="Rounded active item"
                    className="pl-10 my-10"
                    onChange={() => setRounded(!rounded)}/>
                <Switch 
                    color="primary" 
                    check={left}
                    rightLabel="Active item left border"
                    className="pl-10 my-10"
                    onChange={() => setLeft(!left)}/>
                <br/>
                <Switch 
                    color="primary" 
                    check={checkbox}
                    rightLabel="Checkbox"
                    className="pl-10 my-10"
                    onChange={() => setCheckbox(!checkbox)}/>
                <Switch 
                    color="primary" 
                    check={controls}
                    rightLabel="Controls"
                    className="pl-10 my-10"
                    onChange={() => setControls(!controls)}/>
                <Card
                    className="ma-10" 
                    dark={dark} 
                    width={400}>
                    <List
                        size={size}
                        dark={dark} 
                        header={
                            <div className="row align-center space-between">
                                Selected persons: {selected.length}
                                {selected.length > 0 ? <Button className="ma-0" light icon="share" size={18}/> : ''}
                            </div>
                        }>
                        {names.map((item, index) => 
                            <ListItem
                                isActiveItem={isSelected(item.hero)}
                                onClick={() => selectOne(item.hero)}
                                key={index} 
                                hover={hover}
                                item={item.name}
                                color={color}
                                noDivider={divider}
                                roundedActive={rounded}
                                leftBorder={left}
                                subTitle={subtitle ? item.hero : null}
                                icon={type === 'icon' ? item.icon : null}
                                avatar={type === 'image' ? item.img : null}
                                avatarBorderType={border}
                                checkbox={checkbox}
                                controls={controls ?
                                    <div className="row align-center fz-9 text-dark">
                                        <Icon name="smartphone" size={16} className="mr-5"/>
                                        {phoneMask(item.phone)}
                                        <Button color="light" 
                                            className="ml-10" 
                                            icon="edit"
                                            iconSize={16}/>
                                    </div> : null}/>
                        )}
                    </List>
                </Card>
                <Collapse className="px-15" icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <h2 ref={listApi}>List API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index
                itemTitles={keys}/>
            <h2 ref={listItemApi}>ListItem API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items2}
                index
                itemTitles={keys}/>
            <BackTopBtn setRef={parent} dark size="medium"/>
        </div>
    )
}
export default ListPage;