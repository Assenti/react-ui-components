import React, { useState } from 'react';
import { Card, Avatar, Slider, Divider, Switch, ThemeContext } from '../components'
import manImage from '../img/man.png';
import manImage2 from '../img/hipster.png';
import manImage3 from '../img/old.png';
import manImage4 from '../img/man_.png';
import girlImage from '../img/girl.png';
import girlImage2 from '../img/girl_.png';
import girlImage3 from '../img/woman.png';
import girlImage4 from '../img/girl__.png';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'items', 
        description: 'Slider content items', 
        default: '', 
        type: 'any',
        value: ''
    },
    { 
        property: 'render', 
        description: 'Render function return item and index', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onItemClick', 
        description: 'Handle item click (return item, index)', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'length',
        description: 'Set slider length (Horizontal: width; Vertical: Height)', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'dark',
        description: 'Set dark mode', 
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

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Slider, Divider, Switch } from '@assenti/react-ui-components';

// Imported images 
const cards = [
    manImage,
    manImage2,
    girlImage,
    girlImage2,
    manImage3,
    manImage4,
    girlImage3,
    girlImage4,
    manImage
]

const avatars = [
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "whatsapp", iconColor: "#25D366", iconSize: 30, size: 60 },
    { icon: "instagram", iconColor: "#8134AF", iconSize: 30, size: 60 },
    { icon: "linkedin", iconColor: "#007bb6", iconSize: 30, size: 60 },
    { icon: "facebook-workplace", iconSize: 30, size: 60 },
    { icon: "gitlab", iconColor: "#fc6d26", iconSize: 30, size: 60 },
    { icon: "github", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 }
]

function Example() {
    const [vertical, setVertical] = useState(true);

    return (
        <>
            <Slider 
                items={cards}
                render={(item, index) => 
                    <Card
                        hover
                        width={120} 
                        img={item}
                        footer={<h4 className="text-center">Person</h4>}/>
                }/>
            <Divider/>
            <Switch 
                color="primary" 
                check={vertical}
                rightLabel="Vertical"
                className="my-10"
                onChange={() => setVertical(!vertical)}/>
            <br/>
            <Slider 
                items={avatars}
                vertical={vertical}
                length={300}
                render={(item, index) => 
                <Avatar
                    key={index}
                    icon={item.icon} 
                    dark={theme}
                    iconColor={item.iconColor}
                    iconSize={item.iconSize}
                    width={item.size}
                    height={item.size}/>}/>
        </>
    )
}`

const cards = [
    manImage,
    manImage2,
    girlImage,
    girlImage2,
    manImage3,
    manImage4,
    girlImage3,
    girlImage4,
    manImage
]

const avatars = [
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "whatsapp", iconColor: "#25D366", iconSize: 30, size: 60 },
    { icon: "instagram", iconColor: "#8134AF", iconSize: 30, size: 60 },
    { icon: "linkedin", iconColor: "#007bb6", iconSize: 30, size: 60 },
    { icon: "facebook-workplace", iconSize: 30, size: 60 },
    { icon: "gitlab", iconColor: "#fc6d26", iconSize: 30, size: 60 },
    { icon: "github", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 },
    { icon: "facebook", iconColor: "#3b5998", iconSize: 30, size: 60 }
]

const SliderPage = () => {
    const [vertical, setVertical] = useState(true);
    const [slidable, setSlidable] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Slider/>">
                    <Slider 
                        items={cards}
                        dark={theme}
                        slidable={slidable}
                        render={(item, index) => 
                            <Card
                                hover
                                width={120} 
                                dark={theme}
                                img={item}
                                footer={<h4 className="text-center">Person</h4>}/>
                        }/>
                    <Divider/>
                    <Switch 
                        color="primary" 
                        check={vertical}
                        rightLabel="Vertical"
                        className="my-10"
                        onChange={() => setVertical(!vertical)}/>
                    <Switch 
                        color="primary" 
                        check={slidable}
                        rightLabel="Slidable"
                        className="my-10"
                        onChange={() => setSlidable(!slidable)}/>
                    <br/>
                    <Slider 
                        items={avatars}
                        vertical={vertical}
                        slidable={slidable}
                        length={300}
                        dark={theme}
                        render={(item, index) => 
                        <Avatar
                            key={index}
                            icon={item.icon} 
                            dark={theme}
                            iconColor={item.iconColor}
                            iconSize={item.iconSize}
                            width={item.size}
                            height={item.size}/>}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default SliderPage;