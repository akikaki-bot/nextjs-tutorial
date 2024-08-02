import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Coda } from "next/font/google"

const coda = Coda({ subsets: ["latin"], weight: "400" })

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    }
}