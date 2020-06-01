import React, { useState } from 'react';
import { List, Button, Card, Select, Icon, Switch, RadioGroup, phoneMask, ThemeContext, Divider, ButtonGroup, Avatar } from '../components';
import { heroes } from '../data/heroes';
import Page from '../layouts/Page';

const usage =
`// Usage examples
import React, { useState } from 'react';
import { List, Button } from '@assenti/rui-components';
const names = [
    { name: 'Steve Rogers', hero: 'Captain America', phone: '1234567890', icon: 'shield-account', img: manImage, check: false, active: false }, 
    { name: 'Peter Parker', hero: 'Spider man', phone: '1234567890', icon: 'shield-account', img: manImage2, check: false, active: true }, 
    { name: 'Tony Stark', hero: 'Iron man', phone: '1234567890', icon: 'shield-account', img: manImage3, check: false, active: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false },
    { name: 'Natasha Romanoff', hero: 'Black Widow', phone: '1234567890', icon: 'shield-account', img: girlImage, check: false, active: false },
    { name: 'Stephen Strange', hero: 'Doctor Strange', phone: '1234567890', icon: 'shield-account', img: manImage4, check: false, active: false },
];

function Example() {
    const [selected, setSelected] = useState([]);

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
        <>
            <List
                header={
                    <div className="row align-center space-between">
                        Selected persons: {selected.length}
                        {selected.length > 0 ? <Button className="ma-0" light icon="share" size={18}/> : ''}
                    </div>
                }>
                {names.map((item, index) => 
                    <List.Item
                        isActiveItem={isSelected(item.hero)}
                        onClick={() => checkbox ? selectOne(item.hero) : {}}
                        key={index} 
                        item={item.name}
                        color="primary"
                        subTitle={item.hero}
                        icon={item.icon}
                        checkbox={checkbox}/>
                )}
            </List>
        </>
    )
}`

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
        property: 'grid',
        description: 'Set grid view', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark',
        description: 'Set dark mode (can not be used with light prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'id',
        description: 'Set a custom html id to component', 
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
const items2 = [
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
        type: 'string | number | object',
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
        property: 'href', 
        description: 'Set list item title as <a/> tag with href', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'blank', 
        description: 'Open a link in a new browser tab (has effect with href prop)', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
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
        property: 'avatar',
        description: 'Avatar slot', 
        default: '', 
        type: 'ReactNode',
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

const sizes = ['default', 'medium', 'large'];
const colors = ['primary', 'info', 'success', 'error'];
const borders = ['default', 'rounded', 'tile'];
const types = ['image', 'icon', 'none'];
const icons = ['view-list', 'grid'];

const ListPage = () => {
    const [selected, setSelected] = useState([]);
    const [size, setSize] = useState(sizes[0]);
    const [border, setBorder] = useState(borders[1]);
    const [color, setColor] = useState(colors[0]);
    const [header, setHeader] = useState(true);
    const [rounded, setRounded] = useState(false);
    const [divider, setDivider] = useState(false);
    const [hover, setHover] = useState(true);
    const [subtitle, setSubtitle] = useState(true);
    const [left, setLeft] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [controls, setControls] = useState(true);
    const [type, setType] = useState(types[0]);
    const [view, setView] = useState('view-list');

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
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    componentName="<List/>"
                    apiDescItems={items}
                    apiHeader="List API"
                    apiHeader2="List.Item API"
                    apiDescItems2={items2}
                    usage={usage}>
                    <Select
                        items={sizes}
                        prefix={<Icon name="format-size"/>}
                        width={200}
                        dark={theme}
                        label="List size"
                        color="primary"
                        value={size}
                        onChange={v => setSize(v)}/>
                    <br/>
                    <br/>
                    <Select
                        items={borders}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        dark={theme}
                        label="Avatar border type"
                        color="primary"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Active item color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={hover}
                        rightLabel="Hover"
                        className="my-10"
                        onChange={() => setHover(!hover)}/>
                    <Switch 
                        color="primary" 
                        check={divider}
                        rightLabel="Hide dividers"
                        className="my-10"
                        onChange={() => setDivider(!divider)}/>
                    <br/>
                    <RadioGroup
                        options={types} 
                        value={type}
                        name="type"
                        className="mt-10" 
                        onChange={(value) => setType(value)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={subtitle}
                        rightLabel="Subtitle"
                        className="my-10"
                        onChange={() => setSubtitle(!subtitle)}/>
                    <Switch 
                        color="primary" 
                        check={header}
                        rightLabel="Header"
                        className="my-10"
                        onChange={() => setHeader(!header)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={rounded}
                        rightLabel="Rounded active item"
                        className="my-10"
                        onChange={() => setRounded(!rounded)}/>
                    <Switch 
                        color="primary" 
                        check={left}
                        rightLabel="Active item left border"
                        className="my-10"
                        onChange={() => setLeft(!left)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={checkbox}
                        rightLabel="Checkbox"
                        className="my-10"
                        onChange={() => setCheckbox(!checkbox)}/>
                    <Switch 
                        color="primary" 
                        check={controls}
                        rightLabel="Controls"
                        className="my-10"
                        onChange={() => setControls(!controls)}/>
                    <br/>
                    <div className="row justify-end">
                        <ButtonGroup 
                            default={0} 
                            options={icons} 
                            icon
                            onChange={v => setView(v)}
                            dark={theme}/>
                    </div>
                    <Divider/>
                    <br/>
                    <Card
                        className="pa-0" 
                        dark={theme}>
                        <List
                            grid={view === 'grid' ? true : false}
                            size={size}
                            dark={theme} 
                            header={header ?
                                <div className="row align-center space-between">
                                    Selected persons: {selected.length}
                                    {selected.length > 0 ? <Button className="ma-0" light icon="share" size={18}/> : ''}
                                </div> : null
                            }>
                            {heroes.map((item, index) => 
                                <List.Item
                                    isActiveItem={isSelected(item.hero)}
                                    onClick={() => checkbox ? selectOne(item.hero) : {}}
                                    key={index} 
                                    hover={hover}
                                    width={view === 'grid' ? '25%' : ''}
                                    item={item.name}
                                    color={color}
                                    noDivider={divider}
                                    roundedActive={rounded}
                                    leftBorder={left}
                                    subTitle={subtitle ? item.hero : null}
                                    icon={type === 'icon' ? item.icon : null}
                                    avatar={type === 'image' ? 
                                        <Avatar
                                            className="mr-10" 
                                            img={item.img}
                                            width={40} 
                                            height={40}
                                            borderType="rounded"/> 
                                    : null}
                                    checkbox={checkbox}
                                    controls={controls ?
                                        <div className="row align-center justify-end fz-9">
                                            <div className="row align-center justify-end">
                                                <Icon 
                                                    name="smartphone" 
                                                    size={16} 
                                                    className="mr-5" 
                                                    color={theme ? 'lightgray' : ''}/>
                                                {phoneMask(item.phone)}
                                            </div>
                                            {view === 'grid' ? 
                                                null :
                                                <Button 
                                                    className="ml-10" 
                                                    dark={theme}
                                                    light={!theme}
                                                    icon="edit"
                                                    iconSize={16}/>
                                            }
                                        </div> : null}/>
                            )}
                        </List>
                    </Card>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default ListPage;