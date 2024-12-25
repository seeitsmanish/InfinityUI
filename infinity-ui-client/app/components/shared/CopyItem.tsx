'use client';
import { Check, Copy } from 'lucide-react';
import React, { Fragment, useState } from 'react';

type CopyItemProps = {
    size?: string;
    className?: string;
    duration?: number;
    content?: string;
};

const CopyItem: React.FC<CopyItemProps> = ({
    size = '18',
    className = '',
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
        <Fragment>
            {
                copyIconVisible ? (
                    <Copy size={size} className={className} onClick={handleCopyClick} />
                ) : (
                    <Check size={size} className={className} />
                )
            }
        </Fragment>
    )
}
export default CopyItem;