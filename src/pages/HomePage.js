import React from 'react';
import { Tag, Icon } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const HomePage = () => {
    const codeInstallation = '% npm install @assenti/rui-components -S';
    const stylesInstallation = "import '@assenti/react-ui-components/build/css/main.css';";

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
            <h1 className="text-info">Welcome to React UI Components</h1>
            <h3><Tag value="Main Goal:" color="info"/> Create a lot of usefull and maximum reusable UI components for React apps</h3>
            <Tag iconLeft="hammer" value="Work in progress..."/>
            <h3>Install</h3>
            <SyntaxHighlighter language="bash" style={prism}>
                {codeInstallation}
            </SyntaxHighlighter>
            <p className="row align-center"><Icon name="file-outline" color="gray" size={18}/> index.js</p>
            <SyntaxHighlighter language="js" style={prism}>
                {stylesInstallation}
            </SyntaxHighlighter>
            <h3>Usage</h3>
            <p className="row align-center"><Icon name="file-outline" color="gray" size={18}/> App.js</p>
            <SyntaxHighlighter language="jsx" style={prism}>
                {codeUsage}
            </SyntaxHighlighter>
        </React.Fragment>
    )
}
