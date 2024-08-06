
import withMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from "remark-gfm"

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const options = {
    keepBackground: false,
}

export default withMDX({
    options : {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
})(nextConfig);
