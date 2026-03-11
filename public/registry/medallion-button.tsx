import React, { useEffect } from 'react';
import { Button, ButtonProps } from 'antd';
import cn from 'classnames';
import './medallion-button.css';

export const ButtonVariant = {
    Primary: 'primary',
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Destructive: 'destructive',
} as const;

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive';

export const ButtonSize = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
} as const;

export type ButtonSize = 'small' | 'medium' | 'large';

export interface MedallionButtonProps extends Omit<ButtonProps, 'type' | 'size'> {
    /** Text content */
    label?: string;
    /** Button visual variant */
    variant?: ButtonVariant;
    /** Button size */
    size?: ButtonSize;
    /** Active state (for secondary/tertiary variants only) */
    active?: boolean;
    /** Leading icon component */
    leadingIcon?: React.ReactNode;
    /** Trailing icon component */
    trailingIcon?: React.ReactNode;
    /** Icon-only button — requires aria-label, no label prop */
    icon?: React.ReactNode;
}

export const MedallionButton: React.FC<MedallionButtonProps> = ({
    label,
    variant = ButtonVariant.Secondary,
    size = ButtonSize.Medium,
    active = false,
    leadingIcon,
    trailingIcon,
    icon,
    loading = false,
    disabled = false,
    className,
    ...rest
}) => {
    const normalizedSize =
        size === ButtonSize.Small ? 'sm' : size === ButtonSize.Medium ? 'md' : 'lg';
    const isIconOnly = !!icon && !label;

    const buttonClassName = cn(
        'mds-button',
        `mds-variant-${variant}`,
        `mds-size-${normalizedSize}`,
        {
            'mds-icon-only': isIconOnly,
            'mds-button--active': active,
        },
        className
    );

    return (
        <Button
            className={buttonClassName}
            loading={loading}
            disabled={disabled}
            {...rest}
        >
            {leadingIcon && (
                <span className="mds-icon mds-icon-left">{leadingIcon}</span>
            )}
            {label}
            {trailingIcon && (
                <span className="mds-icon mds-icon-right">{trailingIcon}</span>
            )}
            {icon && !label && (
                <span className="mds-icon mds-icon-only-icon">{icon}</span>
            )}
        </Button>
    );
};

export default MedallionButton;
