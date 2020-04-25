import React, { useState } from 'react';
import { ThemeContext, Carousel, Divider, Switch } from '../components';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'items', 
        description: 'Carousel slides',
        default: '', 
        type: '{ img: string, title: string }',
        value: ''
    },
    { 
        property: 'onClick', 
        description: 'Invokes on slide click',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'height',
        description: 'Set Carousel height', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'width',
        description: 'Set Carousel width', 
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'hideArrows',
        description: 'Hide arrows', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'hideDots',
        description: 'Hide dots', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'autoMotion',
        description: 'Enable Carousel auto motion', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'interval',
        description: 'Set Carousel slides change motion interval', 
        default: '3000ms', 
        type: 'number',
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
`// Usage example
import React from 'react';
import { Carousel } from '../components';
import slide1 from 'path/to/images/slide1.jpg';
import slide2 from 'path/to/images/slide2.jpg';
import slide3 from 'path/to/images/slide3.jpg';

function Example() {
    const slides = [
        { img: slide1, title: 'Slide 1' },
        { img: slide2, title: 'Slide 2' },
        { img: slide3, title: 'Slide 3' }
    ]

    return (
        <>
            <Carousel 
                height={400}
                autoMotion
                items={slides}/>
        </>
    )
}`

const CarouselPage = () => {
    const slides = [
        { img: slide1, title: 'Slide 1' },
        { img: slide2, title: 'Slide 2' },
        { img: slide3, title: 'Slide 3' }
    ]

    const [hide, setHide] = useState(false);
    const [hideDots, setHideDots] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Carousel/>">
                    <Switch 
                        color="primary" 
                        check={hide}
                        rightLabel="Hide arrows"
                        className="my-10"
                        onChange={() => setHide(!hide)}/>
                    <Switch 
                        color="primary" 
                        check={hideDots}
                        rightLabel="Hide dots"
                        className="my-10"
                        onChange={() => setHideDots(!hideDots)}/>
                    <br/>
                    <Divider/>
                    <Carousel 
                        height={400}
                        autoMotion
                        hideArrows={hide}
                        onClick={(index, item) => console.log(index, item)}
                        hideDots={hideDots}
                        items={slides}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default CarouselPage;