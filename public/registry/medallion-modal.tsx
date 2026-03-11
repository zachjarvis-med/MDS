import React from 'react';
import { Modal, ModalProps } from 'antd';
import cn from 'classnames';
import './medallion-modal.css';
import MedallionModalFooter from './medallion-modal-footer';

export interface MedallionModalProps extends ModalProps {
    /** Left section of the footer — right section is reserved for action buttons */
    footerContent?: React.ReactNode;
    /** Primary/OK button label */
    successText?: string;
    /** Cancel button label */
    cancelText?: string;
}

const MedallionModal: React.FC<MedallionModalProps> = ({
    children,
    footerContent,
    title,
    cancelText,
    successText,
    onOk,
    onCancel,
    className,
    ...props
}) => {
    // Show the close icon (top right) only when there is no cancel button
    const displayExitButton = !cancelText;
    const displayFooter = cancelText || successText || footerContent;

    return (
        <Modal
            {...props}
            bodyStyle={{ maxHeight: '80vh', overflowY: 'auto' }}
            centered
            className={cn('medallion-modal', className)}
            closable={displayExitButton}
            footer={null}
            maskClosable
            onCancel={onCancel}
            onOk={onOk}
            title={title}
        >
            <div className="medallion-modal-content">{children}</div>
            {displayFooter && (
                <MedallionModalFooter
                    cancelText={cancelText}
                    successText={successText}
                    footerContent={footerContent}
                    onOk={onOk}
                    onCancel={onCancel}
                />
            )}
        </Modal>
    );
};

export default MedallionModal;
