import React, { useState } from 'react';
import { InputField, CopyToClipboard, ThemeContext } from '../components';
import Page from '../layouts/Page';

const items = [
    { 
        property: 'text', 
        description: 'Set text that should be copied', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'icon', 
        description: 'Set custom icon from icons list', 
        default: 'content-copy', 
        type: 'string',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set icon size', 
        default: '16px', 
        type: 'number',
        value: ''
    }, 
    { 
        property: 'color', 
        description: 'Set icon color', 
        default: 'gray', 
        type: 'string',
        value: ''
    },
    { 
        property: 'defaultText', 
        description: 'Set tooltip default text', 
        default: 'Copy', 
        type: 'string',
        value: ''
    },
    { 
        property: 'copiedText', 
        description: 'Set tooltip copied text', 
        default: 'Copied to clipboard', 
        type: 'string',
        value: ''
    },
    { 
        property: 'noTooltip', 
        description: 'Hide tooltip', 
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    {
        property: 'tooltipPosition',
        description: 'Set tooltip position', 
        default: '', 
        type: 'string (Enum)',
        value: 'top | bottom | left | right'
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: 'hex | rgb() | css preset colors'
    }
]

const usage = 
`// Usage examples
import React from 'react';
import { CopyToClipboard, InputField } from '@assenti/react-ui-components';
const text = 'Some text';

function Example() {
    return (
        <div className="row align-center">
            <InputField className="mr-10" color="info" readOnly value={text} width={200}/>
            <CopyToClipboard text={text}/>
        </div>
    )
}`


const CopyToClipboardPage = () => {
    const [text, setText] = useState('Some text');

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<CopyToClipboard/>">
                    <div className="row align-center">
                        <InputField
                            dark={theme} 
                            color="info" 
                            className="mr-10"
                            onChange={e => setText(e.target.value)} 
                            value={text} 
                            width={200}/>
                        <CopyToClipboard 
                            text={text}
                            dark={theme}/>
                    </div>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default CopyToClipboardPage;