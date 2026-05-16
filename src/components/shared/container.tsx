import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className={cn('mx-auto max-w-310 w-full px-1.25 __container h-full', className)}>
            {children}
        </div>
    );
};