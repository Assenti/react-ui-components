import React, { useState } from 'react';
import { Badge, Icon, Select, Switch, Avatar, ThemeContext, Divider } from '../components';
import manImage from '../img/hipster.png';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'value', 
        description: 'Set badge value', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set badge icon', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'color', 
        description: 'Set badge color', 
        default: 'secondary', 
        type: 'string',
        value: 'primary | info | success | error | dark | secondary'
    },
    { 
        property: 'rounded', 
        description: 'Set rounded badge borders', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'parent', 
        description: 'Parent component for badge', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'visible', 
        description: 'Badge visible state', 
        default: '', 
        type: 'boolean',
        value: 'true | false'
    }
]

const usage =
`// Usage examples
import React from 'react';
import { Badge, Icon, Avatar } from '@assenti/rui-components';

function Example() {
    return (
        <div className="row align-center">
            <Badge 
                color="primary" 
                value={100}
                className="mr-20"
                parent={<Icon size={30} name="email" color="#ffa600"/>}/>
            <Badge 
                color="primary" 
                icon="plus"
                parent={<Avatar img={manImage}/>}/>
        </div>
    )
}`
const colors = ['secondary', 'primary', 'info', 'success', 'error', 'dark'];

const BadgePage = () => {
    const [badge, setBadge] = useState(false);
    const [rounded, setRounded] = useState(false);
    const [color, setColor] = useState(colors[1]);

    return (
       <ThemeContext.Consumer>
           {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Badge/>"
                    >
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Badge color"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={badge}
                        rightLabel="Hide"
                        className="my-10"
                        onChange={() => setBadge(!badge)}/>
                    <Switch 
                        color="primary" 
                        check={rounded}
                        rightLabel="Rounded"
                        className="my-10"
                        onChange={() => setRounded(!rounded)}/>
                    <Divider/>
                    <br/>
                    <div className="row align-center py-10">
                        <Badge 
                            color={color} 
                            value={100}
                            rounded={rounded} 
                            className="mr-20"
                            visible={badge}
                            parent={<Icon size={30} name="email" color="#ffa600"/>}/>
                        <Badge 
                            color={color} 
                            icon="plus"
                            rounded={rounded} 
                            className="mr-20"
                            visible={badge}
                            parent={<Avatar img={manImage} dark={theme}/>}/>
                    </div>
                </Page>
           )}
       </ThemeContext.Consumer>
    )
}
export default BadgePage;