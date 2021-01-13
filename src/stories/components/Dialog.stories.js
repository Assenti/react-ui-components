import React from 'react';
import Dialog from '../../components/dialog';
import Button from '../../components/button';
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
    active: true
});

export default {
    title: 'Example/Dialog',
    component: Dialog
};

const actionImitation = async () => {
    return new Promise(async (resolve) => {
        setTimeout(() => {
            resolve()
        }, 1500)
    })
}

const Template = (args) => (
    <State store={store}>
        {state => 
            <>
                <Button
                    color="info"
                    onClick={() => store.set({ active: true })}
                    name="Invoke Dialog"/>
                <Dialog
                {...args}
                visible={state.active}
                onConfirm={actionImitation}
                onCancel={() => {
                    console.log('Canceled')
                    store.set({ active: false })
                }}/>
            </>
        }
    </State>
)

export const Dialog_ = Template.bind({});

Dialog_.args = {
    visible: true,
    icon: 'alert',
    iconColor: 'red',
    titleColor: 'red', 
    title: 'Delete',
    description: 'Are you sure?',
    confirmBtnColor: 'error'
}