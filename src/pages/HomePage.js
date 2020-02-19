import React from 'react';
import { Tag, Icon, Card } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const HomePage = () => {
    const codeInstallation = 
`# Install package from NPM
% npm install @assenti/rui-components -S

               or

% yarn add @assenti/rui-components
`
    const stylesInstallation = 
`// Import styles in index.js (or your main.js file)
import '@assenti/react-ui-components/build/css/main.css';`;

    const codeUsage = 
`import React from 'react';
import { Card, Button } from '@assenti/react-ui-components';

function App() {
    return (
        <div>
            <Card outlined color="primary" title="Button">
                <Button color="primary" name="Button" icon="search"/>
            </Card>
        </div>
    );
} 
export default App;`

    return (
        <React.Fragment>
            <h2 className="text-primary">Welcome to React UI Components</h2>
            <div className="row align-center wrap">
                <Tag value={<strong>Main Goal</strong>} color="info"/>
                <div className="col fz-12 fw-bold py-10 px-5" style={{ minWidth: 400 }}>Create a lot of usefull and maximum reusable UI components for React apps</div>
            </div>
            <Tag iconLeft="hammer" value="Work in progress..."/>
            <Card outlined color="primary" title="Install" className="mt-15">
                <SyntaxHighlighter language="bash" style={prism}>
                    {codeInstallation}
                </SyntaxHighlighter>
                <br/>
                <SyntaxHighlighter language="js" style={prism}>
                    {stylesInstallation}
                </SyntaxHighlighter>
            </Card>
            <Card outlined color="primary" title="Usage (A-la-carte)" className="mt-20">
                <SyntaxHighlighter language="jsx" style={prism}>
                    {codeUsage}
                </SyntaxHighlighter>
            </Card>
        </React.Fragment>
    )
}
