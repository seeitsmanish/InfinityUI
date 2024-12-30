'use client';
import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';

type CopyItemProps = {
    size?: string;
    className?: string;
    copyIconClassName?: string;
    checkIconClassName?: string;
    duration?: number;
    content?: string;
};

const CopyItem: React.FC<CopyItemProps> = ({
    size = '18',
    className,
    copyIconClassName = '',
    checkIconClassName = '',
    duration = 500,
    content = '',
}) => {

    const [copyIconVisible, setCopyIconVisible] = useState(true);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(content);
        setCopyIconVisible(false);
        setTimeout(() => setCopyIconVisible(true), duration);
    }

    return (
        <span className={className}>
            {
                copyIconVisible ? (
                    <Copy size={size} className={copyIconClassName} onClick={handleCopyClick} />
                ) : (
                    <Check size={size} className={checkIconClassName} />
                )
            }
        </span>
    )
}
export default CopyItem;