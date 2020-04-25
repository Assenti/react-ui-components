import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Table, CopyToClipboard, Card, ThemeContext, BackTopBtn } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { keys } from '../data/apiTableHeaders';

const Page = (props) => {
    const parent = useRef();

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="rui-page-title">{props.componentName} Component</div>
                    <Card dark={theme} header={<h4>Usage</h4>}>
                        {props.children}
                        <Collapse
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={props.usage} 
                                dark={theme}
                                className="mr-10"/>}  
                            icon="code" 
                            dark={theme}
                            iconSize={18} 
                            tooltip="Show/Hide Code">
                            <SyntaxHighlighter language="jsx" style={theme ? tomorrow : coy}>
                                {props.usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    <h2>API</h2>
                    {props.backTopBtn ? <BackTopBtn dark setRef={parent} size="medium" tooltip="Up"/> : null}
                    <Card className="pa-0">
                        <Table
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={props.apiDescItems}
                            index
                            searchable={props.apiSearchable}
                            searchKey="property"
                            itemTitles={keys}/>
                    </Card>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
Page.propTypes = {
    componentName: PropTypes.string,
    backTopBtn: PropTypes.bool,
    usage: PropTypes.string,
    apiDescItems: PropTypes.array,
    apiSearchable: PropTypes.bool
}
export default Page;