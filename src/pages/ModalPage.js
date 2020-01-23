import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

export const ModalPage = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className="page">
            <div className="page-title">Modals</div>
            <Button
                color="info"
                size="medium"
                name="Open modal"
                onAction={() => setModal(true)}/>
            <Modal
                closable
                onClose={() => setModal(false)} 
                visible={modal} 
                header={<div>Modal title</div>}
                footer={
                    <React.Fragment>
                        <Button
                            className="mr-10"
                            color="secondary"
                            name="Cancel"
                            onAction={() => setModal(false)}/>
                        <Button
                            color="info"
                            name="Confirm"
                            onAction={() => setModal(false)}/>
                    </React.Fragment>
                }>
                    <p>Modal content...</p>
                </Modal>
        </div>
    )
}
