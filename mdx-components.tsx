import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Coda } from "next/font/google"
import { Link } from './components/Link'

const coda = Coda({ subsets: ["latin"], weight: "400" })

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        a: (props) => <Link className={props.className ?? ""} href={(props.href ?? "")} {...props}>{props.children}</Link>,
        ...components,
    }
}