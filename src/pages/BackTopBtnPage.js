import React, { createRef } from 'react';
import { BackTopBtn, Card, Table, Collapse } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const BackTopBtnPage = () => {
    const blockref = createRef();
    const api = createRef();
    const rows = []
    for (let i = 0; i < 20; i++) {
        rows.push(i)
    }

    const keys = ['property', 'description', 'default', 'type', 'value'];
    const items = [
        { 
            property: 'setRef', 
            description: 'Pass the reference of parent element to component',
            default: '', 
            type: '',
            value: ''
        },
        { 
            property: 'breakpoint', 
            description: 'Set scrollY breakpoint when button should appear',
            default: '60px', 
            type: 'number',
            value: ''
        },
        { 
            property: 'size', 
            description: 'Set button size',
            default: '', 
            type: 'string',
            value: 'medium | large'
        },
        { 
            property: 'tooltip', 
            description: 'Set button tooltip',
            default: '', 
            type: 'string',
            value: ''
        },
        { 
            property: 'offsetX', 
            description: 'Set offset from right',
            default: '25px', 
            type: 'number | string',
            value: ''
        },
        { 
            property: 'offsetY', 
            description: 'Set offset from bottom',
            default: '25px', 
            type: 'number | string',
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

    const simpleList =
`// Usage examples
import React, { createRef } from 'react';
import { BackTopBtn } from '@assenti/rui-components';

function Example() {
    const parentRef = createRef();
    const rows = []
    for (let i = 0; i < 20; i++) {
        rows.push(i)
    }

    return (
        <div ref={parentRef}>
            {rows.map(item => 
                <p key={item}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            )}
            <BackTopBtn setRef={parentRef} dark/>
        </div>
    )
}
`
    const goToApi = () => {
        if (api.current) api.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="page" ref={blockref}>
            <div className="row align-center space-between">
                <div className="page-title">BackTopBtn Component</div>
                <a className="fz-13 fw-bold" onClick={goToApi}>API</a>
            </div>
            <p>Set the scroll to top button when scroll down the page</p>
            <Card outlined color="primary" title="BackTopBtn" className="mt-20">
                {rows.map(item => 
                    <p key={item}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                )}
                <Collapse icon="code" iconSize={18} tooltip="Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {simpleList}
                    </SyntaxHighlighter>
                </Collapse>
            </Card>
            <BackTopBtn dark setRef={blockref} size="medium" tooltip="Up"/>
            <h2 ref={api}>API</h2>
            <Table
                bordered
                headers={keys}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}


