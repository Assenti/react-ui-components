import React, { useState, useEffect, useRef } from 'react';
import { ThemeContext, Skeleton, Divider, Switch, Card, Avatar } from '../components'
import Page from '../layouts/Page';
import manImage from '../img/man.png';

const items = [
    { 
        property: 'active', 
        description: 'Set active animation', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'width', 
        description: 'Set Skeleton component width', 
        default: '100% of parent element', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'height', 
        description: 'Set Skeleton component height', 
        default: '100% of parent element', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'rounded', 
        description: 'Set rounded borders', 
        default: '', 
        type: 'boolean',
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
import React, { useState, useEffect } from 'react';
import { Skeleton, Divider, Card, Avatar } from '@assenti/react-ui-components';

function Example() {
    const [active, setActive] = useState(true);

    useEffect(() => {
        
        setTimeout(() => {
            setActive(false)
        }, 3000)
        
    }, [])

    return (
        <>
            <Card style={{ width: 240, height: 310 }}>
                <div className="row justify-center py-10">
                    {active ?
                    <Skeleton 
                        width={100}
                        active
                        height={100}
                        rounded/> :
                    <Avatar
                        img={manImage}
                        width={100}
                        height={100}
                        borderType="rounded"
                        />}
                </div>
                <Divider/>
                {active ?
                    <>
                        <Skeleton height={35} className="my-5" active/>
                        <Skeleton height={35} className="my-5" active/>
                        <Skeleton height={35} className="my-5" active/>
                    </> :
                    <>
                        <h2 style={{ height: 35 }} className="text-center mb-10">John Doe</h2>
                        <h4 style={{ height: 35 }} className="text-center mb-10">Software Engineer</h4>
                        <div 
                            style={{ height: 35 }} 
                            className="text-center fw-bold text-info">jdoe@awesome.com</div>
                    </>
                }
            </Card>
        </>
    )
}`


const SkeletonPage = () => {
    const [active, setActive] = useState(true);
    const card = useRef();

    useEffect(() => {

        if (card.current) console.log(card.current.clientHeight)
        
        setTimeout(() => {
            setActive(false)
        }, 3000)
        
    }, [])

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<Skeleton/>">
                    <Switch
                        check={active}
                        rightLabel="Active"
                        color="primary"
                        className="my-10"
                        onChange={() => setActive(!active)}/>
                    <Divider/>
                    <Card
                        cardRef={card} 
                        style={{ width: 240, height: 310 }}>
                        <div className="row justify-center py-10">
                            {active ?
                            <Skeleton 
                                width={100}
                                active
                                height={100}
                                rounded/> :
                            <Avatar
                                img={manImage}
                                width={100}
                                height={100}
                                borderType="rounded"
                                />}
                        </div>
                        <Divider/>
                        {active ?
                            <>
                                <Skeleton height={35} className="my-5" active/>
                                <Skeleton height={35} className="my-5" active/>
                                <Skeleton height={35} className="my-5" active/>
                            </> :
                            <>
                                <h2 style={{ height: 35 }} className="text-center mb-10">John Doe</h2>
                                <h4 style={{ height: 35 }} className="text-center mb-10">Software Engineer</h4>
                                <div 
                                    style={{ height: 35 }} 
                                    className="text-center fw-bold text-info">jdoe@awesome.com</div>
                            </>
                        }
                    </Card>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}

export default SkeletonPage;