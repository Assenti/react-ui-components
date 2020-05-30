import React, { useState } from 'react';
import { AvatarUploader, Select, Icon, ThemeContext, Divider, Switch } from '../components';
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
        property: 'avatar', 
        description: 'Pass avatar state value',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'onChange', 
        description: 'Invokes on image uploading',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'onClear', 
        description: 'Invokes on delete button click',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'label', 
        description: 'Set label text',
        default: 'Upload avatar', 
        type: 'string',
        value: ''
    },
    { 
        property: 'title', 
        description: 'Set title',
        default: 'Choose file', 
        type: 'string',
        value: ''
    },
    { 
        property: 'accept', 
        description: 'Set accepted MIME types for files',
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'placeholderImage', 
        description: 'Set custom placeholder',
        default: '', 
        type: 'ReactNode',
        value: '<svg/> or <img/>'
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
const borders = ['default', 'smooth', 'rounded', 'tile'];
const usage =
`// Usage example
import React, { useState } from 'react';
import { AvatarUploader } from '../components';

function Example() {
    const [avatar, setAvatar] = useState('');

    return (
        <>
            <AvatarUploader
                width={140}
                height={170}
                avatar={avatar}
                onChange={a => setAvatar(a)}
                onClear={() => setAvatar('')}/>
        </>
    )
}`

const AvatarUploaderPage = () => {
    const [border, setBorder] = useState(borders[0]);
    const [avatar, setAvatar] = useState('');
    const [lifted, setLifted] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    apiDescItems={items}
                    componentName="<AvatarUploader/>"
                    usage={usage}>
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
                    <Divider/>
                    <br/>
                    <AvatarUploader
                        dark={theme}
                        lifted={lifted}
                        borderType={border}
                        avatar={avatar}
                        onChange={a => setAvatar(a)}
                        onClear={() => setAvatar('')}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default AvatarUploaderPage;