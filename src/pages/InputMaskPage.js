import React, { useState } from 'react';
import { InputMask, Card, Table, Collapse, Icon, CopyToClipboard } from '../components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { phoneMask, creditMask, creditIssueMask, iinMask } from '../components/utils';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { InputMask, Icon } from '@assenti/react-ui-components';
import { phoneMask, creditMask, creditIssueMask, iinMask } from '@assenti/react-ui-components';

function Example() {
    const [phone, setPhone] = useState('');
    const [card, setCard] = useState('');
    const [cardIssue, setCardIssue] = useState('');
    const [iin, setIin] = useState('');
    const kztPhone = '7777777777';
    const cardForm = '1234567890191112';
    const cardIssueForm = '0220';
    const iinForm = '123456789012';

    return (
        <div>
            <div className="pa-5 fz-9">Kazakhstan phone mask: {phoneMask(kztPhone)}</div>
                <InputMask 
                    width={250}
                    size="medium"
                    value={phone}
                    mask="phone"
                    code="+7"
                    placeholder="+7 (___) ___-__-__"
                    onChange={(value, rowValue) => {
                        console.log(value)
                        console.log(rowValue)
                        setPhone(rowValue)
                    }}
                    prefix={<Icon name="smartphone"/>}/>
                <br/>
                <div className="pa-5 fz-9">Credit card mask: {creditMask(cardForm)}, Credit card issue date: {creditIssueMask(cardIssueForm)}</div>
                <div className="row">
                    <InputMask 
                        width={250}
                        size="medium"
                        value={card}
                        mask="card"
                        placeholder="____-____-____-____"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setCard(rowValue)
                        }}
                        prefix={<Icon name="credit-card"/>}/>
                    <InputMask 
                        width={90}
                        size="medium"
                        value={cardIssue}
                        mask="card-issue"
                        placeholder="__ / __"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setCardIssue(rowValue)
                        }}
                        prefix={<Icon name="calendar-month"/>}/>
                </div>
                <br/>
                <div className="pa-5 fz-9">Kazakhstan IIN/BIN: {iinMask(iinForm)}</div>
                <InputMask 
                    width={250}
                    size="medium"
                    value={iin}
                    mask="iin"
                    placeholder="___ ___ ___ ___"
                    onChange={(value, rowValue) => {
                        console.log(value)
                        console.log(rowValue)
                        setIin(rowValue)
                    }}
                    prefix={<Icon name="card-account-details"/>}/>
        </div>
    )
}`
const keys = ['property', 'description', 'default', 'type', 'value'];
const items = [
    { 
        property: 'mask',
        description: 'Set mask type', 
        default: '', 
        type: 'string',
        value: 'phone | card | card-issue | iin | date | time'
    },
    { 
        property: 'onChange',
        description: 'Invokes on input value change (return (value, rawValue))', 
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'code',
        description: 'Set phone prefix code (example: "+7", "+1", has effect with mask="phone")', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'dateDelimiter',
        description: 'Set date delimiter (has effect with mask="date")', 
        default: '.', 
        type: 'string',
        value: ''
    },
    { 
        property: 'timeDelimiter',
        description: 'Set date delimiter (has effect with mask="date")', 
        default: ':', 
        type: 'string',
        value: ''
    },
    { 
        property: 'InputField Component all props',
        description: 'You can set all InputField Component props', 
        default: '', 
        type: '',
        value: ''
    }
]

const InputMaskPage = () => {
    const [phone, setPhone] = useState('');
    const [card, setCard] = useState('');
    const [cardIssue, setCardIssue] = useState('');
    const [iin, setIin] = useState('');
    const [date, setDate] = useState('');
    const kztPhone = '7777777777';
    const cardForm = '1234567890191112';
    const cardIssueForm = '0220';
    const iinForm = '123456789012';

    return (
        <div className="rui-page">
            <div className="row align-center space-between">
                <div className="rui-page-title">{'<InputMask/>'} Component</div>
            </div>
            <Card outlined color="gray" title="Usage">
                <div className="pa-5 fz-9">Kazakhstan phone mask: {phoneMask(kztPhone)}</div>
                <InputMask 
                    width={250}
                    size="medium"
                    value={phone}
                    mask="phone"
                    code="+7"
                    placeholder="+7 (___) ___-__-__"
                    onChange={(value, rowValue) => {
                        console.log(value)
                        console.log(rowValue)
                        setPhone(rowValue)
                    }}
                    prefix={<Icon name="smartphone"/>}/>
                <br/>
                <div className="pa-5 fz-9">Credit card mask: {creditMask(cardForm)}, Credit card issue date: {creditIssueMask(cardIssueForm)}</div>
                <div className="row">
                    <InputMask 
                        width={250}
                        size="medium"
                        value={card}
                        mask="card"
                        placeholder="____-____-____-____"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setCard(rowValue)
                        }}
                        prefix={<Icon name="credit-card"/>}/>
                    <InputMask 
                        width={90}
                        size="medium"
                        value={cardIssue}
                        mask="card-issue"
                        placeholder="__ / __"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setCardIssue(rowValue)
                        }}
                        prefix={<Icon name="calendar-month"/>}/>
                </div>
                <br/>
                <div className="pa-5 fz-9">Kazakhstan IIN/BIN: {iinMask(iinForm)}</div>
                <InputMask 
                    width={250}
                    size="medium"
                    value={iin}
                    mask="iin"
                    placeholder="___ ___ ___ ___"
                    onChange={(value, rowValue) => {
                        console.log(value)
                        console.log(rowValue)
                        setIin(rowValue)
                    }}
                    prefix={<Icon name="card-account-details"/>}/>
                <br/>
                <div className="pa-5 fz-9">Date (DD.MM.YYYY or MM/DD/YYYY)</div>
                <InputMask 
                    width={250}
                    size="medium"
                    value={date}
                    mask="date"
                    placeholder="DD.MM.YYYY"
                    onChange={(value, rowValue) => {
                        console.log(value)
                        console.log(rowValue)
                        setDate(rowValue)
                    }}
                    prefix={<Icon name="calendar-month"/>}/>
                <Collapse 
                    icon="code" 
                    iconSize={18}
                    extra={<CopyToClipboard defaultText="Copy code" text={usage} className="mr-10"/>} 
                    contentStyles={{ padding: 0 }}
                    tooltip="Show/Hide Code">
                    <SyntaxHighlighter language="jsx" style={prism}>
                        {usage}
                    </SyntaxHighlighter> 
                </Collapse>
            </Card>
            <h2>API</h2>
            <Table
                bordered
                headers={['Property', 'Description', 'Default', 'Type', 'Value']}
                items={items}
                index={true}
                itemTitles={keys}/>
        </div>
    )
}
export default InputMaskPage;