"use client";

import type { Route } from "next";
import type { LinkProps } from "next/link";
import NextLink from "next/link";

import { useViewTransitionRouter } from "./useViewTransitionRouter";

export function Link({ children, href, ...props }: LinkProps & { children: React.ReactNode, className: string }) {
    const router = useViewTransitionRouter();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        router.push(href.toString());
    };

    return (
        <NextLink {...props} href={href} onClick={handleLinkClick}>
            {children}
        </NextLink>
    );
}