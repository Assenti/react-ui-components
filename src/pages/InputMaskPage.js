import React, { useState } from 'react';
import { Icon, ThemeContext } from '../components';
import { phoneMask, creditMask, creditIssueMask, iinMask } from '../components/utils';
import Page from '../layouts/Page';
import InputMask from 'react-input-mask';

const usage = 
`// Usage examples
import React, { useState } from 'react';
import { InputMask, Icon, phoneMask } from '@assenti/react-ui-components';

function Example() {
    const [phone, setPhone] = useState('');

    return (
        <>
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
        </>
    )
}`
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
    const [phone, setPhone] = useState('7777777777');
    const [card, setCard] = useState('');
    const [cardIssue, setCardIssue] = useState('');
    const [iin, setIin] = useState('');
    const [date, setDate] = useState('');
    const kztPhone = '7777777777';
    const cardForm = '1234567890191112';
    const cardIssueForm = '0220';
    const iinForm = '123456789012';

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={items}
                    componentName="<InputMask/>">
                    <InputMask 
                        mask="(999) 999 99 99" 
                        maskChar={null} 
                        value={phone} 
                        onChange={e => {
                            setPhone(e.target.value)
                            console.log(phone)
                        }} 
                        />
                    {/* <div className="py-10 fz-9">Kazakhstan phone mask: {phoneMask(kztPhone)}</div> */}
                    {/* <InputMask 
                        style={{ width: 250 }}
                        size="medium"
                        value={phone}
                        label="Input your phone number"
                        mask="phone"
                        clearable
                        onClear={() => setPhone('')}
                        dark={theme}
                        placeholder="(___) ___-__-__"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setPhone(rowValue)
                        }}
                        prefix={<><Icon name="smartphone"/><span>+7</span></>}/> */}
                    <br/>
                    {/* <div className="pa-5 fz-9">Credit card mask: {creditMask(cardForm)}, Credit card issue date: {creditIssueMask(cardIssueForm)}</div>
                    <div className="row">
                        <InputMask 
                            style={{ width: 250 }}
                            size="medium"
                            value={card}
                            dark={theme}
                            mask="card"
                            className="mr-10"
                            placeholder="**** **** **** ****"
                            onChange={(value, rowValue) => {
                                console.log(value)
                                console.log(rowValue)
                                setCard(rowValue)
                            }}
                            prefix={<Icon name="credit-card"/>}/>
                        <InputMask 
                            style={{ width: 90 }}
                            size="medium"
                            value={cardIssue}
                            dark={theme}
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
                        style={{ width: 250 }}
                        size="medium"
                        value={iin}
                        dark={theme}
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
                        style={{ width: 250 }}
                        size="medium"
                        value={date}
                        mask="date"
                        dark={theme}
                        placeholder="DD.MM.YYYY"
                        onChange={(value, rowValue) => {
                            console.log(value)
                            console.log(rowValue)
                            setDate(rowValue)
                        }}
                        prefix={<Icon name="calendar-month"/>}/> */}
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default InputMaskPage;