import React, { useState } from 'react';
import { Card, List, Switch, ThemeContext, Divider } from '../components';
import manImage from '../img/man.png';
import manImage2 from '../img/hipster.png';
import girlImage from '../img/girl.png';
import girlImage2 from '../img/girl_.png';
import Page from '../layouts/Page';
import { heroes } from '../data/heroes';

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
        property: 'cardRef',
        description: 'Set ref to Card component', 
        default: '', 
        type: 'React ref object',
        value: ''
    },
    { 
        property: 'onClick',
        description: 'Invokes on Card component click (return an event object)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'style',
        description: 'Set a custom inline styles', 
        default: '', 
        type: 'object',
        value: ''
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

const usage =
`// Usage examples
import React from 'react';
import { Card, List } from '@assenti/rui-components';

const heroes = [
    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, 
    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, 
    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, 
    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }
];

function Example() {
    return (
        <>
            <Card header="Marvel heroes">
                <List dark={theme}>
                    {heroes.map((item, index) => 
                        <List.Item 
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
                        style={{ width: 200 }} 
                        footer={<h4 className="text-center">{item.name}</h4>}>
                        <img src={item.img} style={{ width: '100%' }} alt="example"/>
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
                    <Divider className="my-20"/>
                    <Card
                        dark={theme}
                        flat={flat} 
                        hover={hover}
                        header="Marvel heroes">
                        <List dark={theme}>
                            {heroes.map((item, index) => 
                                <List.Item 
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