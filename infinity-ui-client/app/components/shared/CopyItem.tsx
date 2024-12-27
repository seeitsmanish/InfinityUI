'use client';
import { Check, Copy } from 'lucide-react';
import React, { Fragment, useState } from 'react';

type CopyItemProps = {
    size?: string;
    copyIconClassName?: string;
    checkIconClassName?: string;
    duration?: number;
    content?: string;
};

const CopyItem: React.FC<CopyItemProps> = ({
    size = '18',
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
        <Fragment>
            {
                copyIconVisible ? (
                    <Copy size={size} className={copyIconClassName} onClick={handleCopyClick} />
                ) : (
                    <Check size={size} className={checkIconClassName} />
                )
            }
        </Fragment>
    )
}
export default CopyItem;