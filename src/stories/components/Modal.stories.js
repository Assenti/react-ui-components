import React from 'react';
import Modal from '../../components/modal';
import Button from '../../components/button';
import { State, Store } from "@sambego/storybook-state";

const store = new Store({
    active: true
});

export default {
    title: 'Example/Modal',
    component: Modal
};

const Template = (args) => (
    <State store={store}>
        {state => 
            <>
                <Button
                    color="info"
                    onClick={() => store.set({ active: true })}
                    name="Invoke Modal"/>
                <Modal
                    {...args}
                    visible={state.active}
                    onClose={() => store.set({ active: false })}
                    footer={
                        <div 
                            style={{ width: '100%' }}
                            className="row justify-end">
                            <Button
                                className="ma-0"
                                color="error"
                                name="Close"
                                onClick={() => store.set({ active: false })}/>
                        </div>
                    }>
                    <p style={{ textAlign: 'justify' }}>
                    Modernipsum dolor sit amet remodernism baroque modern art, international gothic metaphysical art neoclassicism neo-expressionism monumentalism. Stuckism international historicism existentialism lowbrow synthetism intervention art expressionism, outsider art nonconformism hard-edge painting illusionism. Existentialism orphism stuckism cubism lettrism caravaggisti illusionism hudson river school, dadaism romanesque primitivism realism cloisonnism sound art.
                    </p>
                </Modal>
            </>
        }
    </State>
)

export const Modal_ = Template.bind({});

Modal_.args = {
    header: 'Modal',
    width: 330,
    visible: true,
    centered: true
}