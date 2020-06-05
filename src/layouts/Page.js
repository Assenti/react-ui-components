import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse, Table, CopyToClipboard, Card, ThemeContext, BackTopBtn, Button, Icon, sortListByAsc, Tag, Tooltip } from '../components';
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
                            className="ml-10"
                            tooltipPosition="right"
                            defaultText="Copy Component Tag"
                            text={props.componentName} 
                            dark={theme}/>
                    </div>
                    <Card dark={theme} header={
                            <Tooltip tooltip="I am a <Tag/> component" position="right">
                                <Tag className="mx-0 mb-10 mt-0" color="secondary"><Icon name="cog-outline"/> Usage</Tag>
                            </Tooltip>
                        }>
                        {props.children}
                        <Collapse
                            className="mt-10"
                            extra={<CopyToClipboard 
                                defaultText="Copy code" 
                                text={props.usage} 
                                dark={theme}/>} 
                            onChange={state => setOpen(state)} 
                            customToggler={<Button className="ml-20" name="Code" icon={<Icon name="code" size={20}/>} color="info"/>}
                            dark={theme}>
                            <SyntaxHighlighter 
                                language="jsx" 
                                style={theme ? tomorrow : coy}>
                                {props.usage}
                            </SyntaxHighlighter>
                        </Collapse>
                    </Card>
                    {props.backTopBtn ? <BackTopBtn dark setRef={parent} size="medium" tooltip="Up"/> : null}
                    <Card className="mt-10 overflow-y"
                        style={{ maxWidth: '100%' }}>
                        {props.apiDescItems.length > 0 &&
                        <Table
                            tableTitle={<h2 className="ml-10">{props.apiHeader ? props.apiHeader : 'API'}</h2>}
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={sortListByAsc(props.apiDescItems, 'property')}
                            index
                            bordered
                            searchable={props.apiSearchable}
                            searchKey="property"
                            itemTitles={keys}/>}
                        {props.content}
                    </Card>
                    {props.apiDescItems2 &&
                    <Card className="mt-10">
                        {props.apiDescItems2.length > 0 &&
                        <Table
                            tableTitle={<h2 className="ml-10">{props.apiHeader2}</h2>}
                            dark={theme}
                            headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                            items={sortListByAsc(props.apiDescItems2, 'property')}
                            index
                            bordered
                            searchable={props.apiSearchable2}
                            searchKey="property"
                            itemTitles={keys}/>}
                        {props.content}
                    </Card>}
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
    apiDescItems2: PropTypes.array,
    apiSearchable: PropTypes.bool,
    apiHeader: PropTypes.string,
    apiHeader2: PropTypes.string,
    content: PropTypes.node,
    children: PropTypes.node
}
export default Page;