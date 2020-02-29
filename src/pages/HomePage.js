import React, { useRef } from 'react';
import { Tag, Card, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeInstallation = 
`# Install package from NPM
% npm install @assenti/rui-components -S

               # or

% yarn add @assenti/rui-components
`
const stylesInstallation = 
`// Import styles in index.js | index.ts
import '@assenti/react-ui-components/build/css/main.css';`;

const codeUsage = 
`// Usage example
import React from 'react';
import { Card, Button } from '@assenti/react-ui-components';

function App() {
    return (
        <div>
            <Card outlined color="primary" title="Button">
                <Button color="primary" name="Rocket" icon="rocket"/>
            </Card>
        </div>
    );
} 
export default App;`

const HomePage = () => {
    const parent = useRef();

    return (
        <div className="rui-page" ref={parent}>
            <h2 className="text-night">Welcome to React UI Components</h2>
            <div className="row align-center wrap">
                <Tag value="Main Goal" color="info"/>
                <div className="col fz-11 fw-bold py-10 px-5" style={{ minWidth: 400 }}>
                    Create a lot of usefull and maximum reusable UI components for React apps
                </div>
            </div>
            <Tag iconLeft="hammer" color="secondary" value="Work in progress..."/>
            <h2 className="text-night">Getting started with React UI Components</h2>
            <Card outlined color="primary" title="Install" className="mt-20">
                <SyntaxHighlighter language="bash" style={prism}>
                    {codeInstallation}
                </SyntaxHighlighter>
                <br/>
                <SyntaxHighlighter language="js" style={prism}>
                    {stylesInstallation}
                </SyntaxHighlighter>
            </Card>
            <br/>
            <Card outlined color="primary" title="Usage (A-la-carte)" className="mt-20">
                <SyntaxHighlighter language="jsx" style={prism}>
                    {codeUsage}
                </SyntaxHighlighter>
            </Card>
            <br/>
            <Card outlined 
                color="primary" 
                title="TypeScript" 
                className="mt-15">
                <div className="py-20">
                    <div>TypeScript supported. Just install package to your react typescript app and use it.</div>
                    <div className="py-10 fz-9 text-dark">
                        Warning: components types declaration in process... But it does not interfere with use.
                    </div>
                </div>
            </Card>
            <BackTopBtn setRef={parent} dark size="medium"/>
        </div>
    )
}

export default HomePage;
