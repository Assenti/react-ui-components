import React, { useState } from 'react';
import { Avatar, Switch, Select, Icon, RadioGroup, ThemeContext, Divider } from '../components';
import manImage from '../img/man.png';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'width', 
        description: 'Set avatar width',
        default: '100px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'height', 
        description: 'Set avatar height',
        default: '120px', 
        type: 'number | string',
        value: ''
    },
    { 
        property: 'borderType', 
        description: 'Set avatar border type',
        default: '', 
        type: 'string',
        value: 'rounded | tile'
    },
    { 
        property: 'img', 
        description: 'Set avatar image',
        default: '', 
        type: 'base64 | string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set avatar icon',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'iconSize', 
        description: 'Set icon size',
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'iconColor', 
        description: 'Set icon color',
        default: 'gray', 
        type: 'string',
        value: ''
    },
    { 
        property: 'initials', 
        description: 'Set avatar initials',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'initialsFontSize', 
        description: 'Set avatar initials font size',
        default: '', 
        type: 'string | number',
        value: ''
    },
    { 
        property: 'lifted', 
        description: 'Elevate Avatar',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'dark', 
        description: 'Set avatar dark mode',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'transparent', 
        description: 'Set avatar background transparent',
        default: '', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'avatarRef',
        description: 'Set a ref to component', 
        default: '', 
        type: 'React.RefObject',
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
const borders = ['default', 'smooth','rounded', 'tile'];
const types = ['image', 'icon', 'initials'];
const usage =
`// Usage example
import React from 'react';
import { Avatar } from '../components';
import manImage from '/path/to/man.png';

function Example() {
    return (
        <>
            <Avatar
                iconSize="90%"
                img={manImage}/>
        </>
    )
}`

const AvatarPage = () => {
    const [type, setType] = useState(types[0]);
    const [border, setBorder] = useState(borders[1]);
    const [lifted, setLifted] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    apiDescItems={items}
                    usage={usage}
                    componentName="<Avatar/>">
                    <Select
                        dark={theme}
                        items={borders}
                        prefix={<Icon name="shape"/>}
                        width={200}
                        label="Border type"
                        color="primary"
                        value={border}
                        onChange={v => setBorder(v)}/>
                    <br/>
                    <Switch
                        color="primary"
                        check={lifted}
                        className="mt-10 mb-20"
                        rightLabel="Lifted"
                        onChange={() => setLifted(!lifted)}/>
                    <br/>
                    <RadioGroup
                        options={types} 
                        value={type}
                        name="type"
                        className="mt-10" 
                        onChange={(value) => setType(value)}/>
                    <Divider/>
                    <div className="pa-10">
                        <Avatar
                            height={100}
                            dark={theme}
                            lifted={lifted}
                            borderType={border} 
                            iconSize="90%"
                            img={type === 'image' ? manImage : null}
                            icon={type === 'icon' ? 'account' : null}
                            initials={type === 'initials' ? 'AS' : null}
                            />
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default AvatarPage;