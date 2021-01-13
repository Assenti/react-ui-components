import React from 'react';
import TextareaField from '../../components/textarea';
import Icon from '../../components/icon';
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
    value: ''
});


export default {
    title: 'Example/Textareafield',
    component: TextareaField
};

const Template = (args) => (
    <State store={store}>
        {state => 
            <TextareaField 
                {...args}
                prefix={<Icon name="edit"/>} 
                value={state.value} 
                onChange={e => store.set({ value: e.target.value })}
                onClear={() => store.set({ value: '' })}/>}
    </State>
)

export const Textareafield_ = Template.bind({});

Textareafield_.args = {
    placeholder: 'Input text...',
    maxRows: 20,
    color: 'primary',
    rows: 4,
    width: 300,
    label: 'Textarea field',
    value: '',
    hintColor: 'default',
    borderType: 'default'
};