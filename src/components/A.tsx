import * as React from 'react';
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export const A = ({children, href, className}: Props) => {
    return (
        <Link href={href} className={`inline-flex items-center justify-center ${className}`}>
            {children}
        </Link>
    );
};