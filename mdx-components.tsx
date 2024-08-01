import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Coda } from "next/font/google"

const coda = Coda({ subsets: ["latin"], weight: "400" })

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: (props) => <h1 className="text-3xl font-bold py-2" {...props} />,
        code: (props) => <code className={` bg-gray-100 p-2 rounded-md ${coda.className}`} {...props} />,
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                {...(props as ImageProps)}
            />
        ),
        ...components,
    }
}