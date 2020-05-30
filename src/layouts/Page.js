import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Table, CopyToClipboard, Card, ThemeContext, BackTopBtn, Button, Icon } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { keys } from '../data/apiTableHeaders';

const Page = (props) => {
    const parent = useRef();
    const [open, setOpen] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className="rui-page" ref={parent}>
                    <div className="rui-page-title">
                        {props.componentName} Component 
                        <CopyToClipboard 
                            noTooltip
                            className="ml-10"
                            text={props.componentName} 
                            dark={theme}/>
                    </div>
                    <Card dark={theme} header={
                            <div className="row align-center pb-10">
                                <Icon name="bulb" size={18} color="#42a5f5" className="mr-8"/>
                                <h4 className="my-0 text-info">Usage</h4>
                            </div>
                        }>
                        {props.children}
                        <Collapse
                            className="mt-10"
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={props.usage} 
                                dark={theme}/>} 
                            onChange={state => setOpen(state)} 
                            customToggler={<Button className="ml-20" name="Code" icon="code" color="info"/>}
                            dark={theme}>
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {props.usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    {props.backTopBtn ? <BackTopBtn dark setRef={parent} size="medium" tooltip="Up"/> : null}
                    <Card className="mt-10">
                        {props.apiDescItems.length > 0 &&
                        <Table
                            tableTitle={<h2>API</h2>}
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={props.apiDescItems}
                            index
                            bordered
                            searchable={props.apiSearchable}
                            searchKey="property"
                            itemTitles={keys}/>}
                        {props.content}
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
    apiSearchable: PropTypes.bool,
    content: PropTypes.node
}
export default Page;