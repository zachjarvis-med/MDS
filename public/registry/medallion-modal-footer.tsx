import cn from 'classnames';
import { ButtonVariant, MedallionButton } from './medallion-button';
import { MedallionModalProps } from './medallion-modal';

interface MedallionModalFooterProps {
    cancelText: MedallionModalProps['cancelText'];
    successText: MedallionModalProps['successText'];
    footerContent: MedallionModalProps['footerContent'];
    onOk: MedallionModalProps['onOk'];
    onCancel: MedallionModalProps['onCancel'];
}

const MedallionModalFooter = ({
    cancelText,
    successText,
    footerContent,
    onOk,
    onCancel,
}: MedallionModalFooterProps) => {
    const footerClassName = cn('medallion-modal-footer', {
        'medallion-modal-footer-content': !!footerContent,
    });

    return (
        <div className={footerClassName}>
            {footerContent && (
                <div className="medallion-modal-footer-left">{footerContent}</div>
            )}
            <div className="medallion-modal-footer-buttons">
                {cancelText && (
                    <MedallionButton
                        label={cancelText}
                        variant={ButtonVariant.Tertiary}
                        onClick={onCancel}
                    />
                )}
                {successText && (
                    <MedallionButton
                        label={successText}
                        variant={ButtonVariant.Primary}
                        onClick={onOk}
                    />
                )}
            </div>
        </div>
    );
};

export default MedallionModalFooter;
