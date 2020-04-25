import React, { useState } from 'react';
import { Card, List, ListItem, Switch, Select, Icon, ThemeContext, Divider } from '../components';
import manImage from '../img/man.png';
import manImage2 from '../img/hipster.png';
import girlImage from '../img/girl.png';
import girlImage2 from '../img/girl_.png';
import Page from '../layouts/Page';

const itemsComplexInitial = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account', check: false }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account', check: false }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account', check: false }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account', check: false }
];

const items = [
    { 
        property: 'header', 
        description: 'Set card header',
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'footer',
        description: 'Set card footer', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set card width', 
        default: '', 
        type: 'string | number',
        value: '100, "100%", "100px"'
    },
    { 
        property: 'img',
        description: 'Set card image', 
        default: '', 
        type: 'string | base64',
        value: ''
    },
    { 
        property: 'flat', 
        description: 'Remove card box shadow',
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
        property: 'hover',
        description: 'Lift up the card on hover', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'outlined',
        description: 'Set card borders outlined', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'color',
        description: 'Set card borders color from colors list', 
        default: '', 
        type: 'string',
        value: 'primary | info | success | error | gray'
    },
    { 
        property: 'title',
        description: 'Set outlined card title (has effect only with outlined prop)', 
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
const colors = ['primary', 'info', 'success', 'error', 'gray'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Card, List, ListItem, Switch, Select, Icon, Divider } from '@assenti/rui-components';

const heroes = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }
];

function Example() {
    const [flat, setFlat] = useState(false);
    const [hover, setHover] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);

    return (
        <>
            <Switch 
                color="primary" 
                check={flat}
                rightLabel="Flat"
                className="my-10"
                onChange={() => setFlat(!flat)}/>
            <Switch 
                color="primary" 
                check={hover}
                rightLabel="Hover"
                className="my-10"
                onChange={() => setHover(!hover)}/>
            <Switch 
                color="primary" 
                check={outlined}
                rightLabel="Outlined"
                className="my-10"
                onChange={() => setOutlined(!outlined)}/>
            <br/>
            <Select
                items={colors}
                prefix={<Icon name="brush"/>}
                width={200}
                dark={theme}
                label="Outline color"
                color="primary"
                value={color}
                onChange={v => setColor(v)}/>
            <Divider className="my-20"/>
            <Card
                dark={theme}
                flat={flat} 
                hover={hover}
                outlined={outlined}
                title={outlined ? 'Card props' : ''}
                color={color}
                header="Marvel heroes">
                <List dark={theme}>
                    {heroes.map((item, index) => 
                        <ListItem 
                            key={index}
                            icon={item.icon}
                            item={item.name}
                            subTitle={item.hero}
                            hover/>
                    )}
                </List>
            </Card>
        </>
    )
}`

const CardPage = () => {
    const [flat, setFlat] = useState(false);
    const [hover, setHover] = useState(false);
    const [outlined, setOutlined] = useState(false);
    const [color, setColor] = useState(colors[0]);

    const imageCards = (dark) => {
        let cards = [
            {img: manImage, name: 'John Doe'},
            {img: manImage2, name: 'John Smith'},
            {img: girlImage, name: 'Jane Doe' },
            {img: girlImage2, name: 'Jane Smith'}     
        ];
        return (
            <div className="row wrap">
                {cards.map((item, index) => 
                    <Card 
                        key={index}
                        hover
                        dark={dark}
                        className="ma-5"
                        width={200} 
                        img={item.img}
                        footer={<h4 className="text-center">{item.name}</h4>}>
                        <p className="text-center">Hey there!</p>
                    </Card>
                )}
            </div>
        )
    }

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Card/>">
                    <Switch 
                        color="primary" 
                        check={flat}
                        rightLabel="Flat"
                        className="my-10"
                        onChange={() => setFlat(!flat)}/>
                    <Switch 
                        color="primary" 
                        check={hover}
                        rightLabel="Hover"
                        className="my-10"
                        onChange={() => setHover(!hover)}/>
                    <Switch 
                        color="primary" 
                        check={outlined}
                        rightLabel="Outlined"
                        className="my-10"
                        onChange={() => setOutlined(!outlined)}/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Outline color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <Divider className="my-20"/>
                    <Card
                        dark={theme}
                        flat={flat} 
                        hover={hover}
                        outlined={outlined}
                        title={outlined ? 'Card props' : ''}
                        color={color}
                        header="Marvel heroes">
                        <List dark={theme}>
                            {itemsComplexInitial.map((item, index) => 
                                <ListItem 
                                    key={index}
                                    icon={item.icon}
                                    item={item.name}
                                    subTitle={item.hero}
                                    hover/>
                            )}
                        </List>
                    </Card>
                    <br/>
                    <h4>Cards with image and hover</h4>
                    {imageCards(theme)}
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default CardPage;