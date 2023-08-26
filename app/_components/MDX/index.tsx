import { AnchorHTMLAttributes } from 'react'
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'
import { MDXRemoteProps } from 'next-mdx-remote/dist/rsc'
import CustomLink from '#/app/_components/MDX/CustomLink'
import remarkGfm from 'remark-gfm'
// import rehypePresetMinify from 'rehype-preset-minify'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import type { Node as HastNode } from 'hast-util-to-string'
import { h } from 'hastscript'
import Sparkles from '#/app/_components/Sparkles'

const components = {
  a: (props: AnchorHTMLAttributes<HTMLElement>) => {
    return <CustomLink props={props} />
  },
  Sparkles,
}

export const CustomMDX = async (originalContent: string, props?: MDXRemoteProps) => {
  const { content } = await compileMDX({
    source: originalContent,
    options: {
      scope: {
        ...props?.options?.scope,
      },
      mdxOptions: {
        remarkPlugins: [[remarkGfm]], // table ...etc https://mdxjs.com/guides/gfm/
        rehypePlugins: [
          [rehypeSlug],
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'prepend',
              content(node: HastNode) {
                return [
                  h(
                    'svg',
                    { ariaHidden: 'true', viewBox: '0 0 1024 1024', width: '18px', height: '18px' },
                    h('path', {
                      d: 'M569.1392 626.0736a166.2464 166.2464 0 0 1-117.4016-49.0496 22.8352 22.8352 0 1 1 32.256-32.256 121.4976 121.4976 0 0 0 170.3424 0l163.84-163.84a120.4224 120.4224 0 0 0-170.3424-170.3424l-138.24 138.24a22.8352 22.8352 0 1 1-32.256-32.256l138.24-138.24a165.12 165.12 0 0 1 233.5232 233.5232l-163.84 163.84a159.5392 159.5392 0 0 1-116.1216 50.3808zM299.4688 896a165.7856 165.7856 0 0 1-117.4016-282.5728l163.84-163.84a165.12 165.12 0 0 1 233.5232 0 22.8352 22.8352 0 1 1-32.256 32.256 121.4976 121.4976 0 0 0-170.3424 0l-163.84 163.84a120.4224 120.4224 0 0 0 170.3424 170.3424l138.24-138.24a22.8352 22.8352 0 0 1 32.256 32.256l-138.24 138.24A169.7792 169.7792 0 0 1 299.4688 896z',
                      fill: 'currentColor',
                    }),
                    h('path', {
                      d: 'M299.4688 908.6464a173.5168 173.5168 0 0 1-126.464-52.8896 178.7392 178.7392 0 0 1-52.8896-126.464 173.5168 173.5168 0 0 1 52.8896-126.464l163.84-163.84a178.7392 178.7392 0 0 1 126.464-52.8896 173.568 173.568 0 0 1 126.464 52.8896 35.84 35.84 0 0 1 10.24 25.6 40.96 40.96 0 0 1-10.24 25.6 35.072 35.072 0 0 1-50.3296 0 109.056 109.056 0 0 0-152.2688 0l-163.84 163.84a106.2912 106.2912 0 0 0-30.72 76.1344 111.9232 111.9232 0 0 0 30.72 76.1344 106.2912 106.2912 0 0 0 76.1344 30.72 111.9232 111.9232 0 0 0 76.1344-30.72l138.24-138.24a35.584 35.584 0 0 1 50.3296 50.3296l-138.24 138.24a179.7632 179.7632 0 0 1-126.464 52.0192zM462.0288 414.72a145.2032 145.2032 0 0 0-107.1104 45.1584l-163.84 163.84a152.576 152.576 0 0 0-45.1584 107.1104 145.2544 145.2544 0 0 0 45.1584 107.1104 152.576 152.576 0 0 0 107.1104 45.1584 145.2032 145.2032 0 0 0 107.1104-45.1584l138.24-138.24a9.1136 9.1136 0 0 0-12.9024-12.9024l-138.24 138.24a133.12 133.12 0 0 1-188.416-188.6208l163.84-163.84a135.5264 135.5264 0 0 1 189.44 0 8.6016 8.6016 0 0 0 12.9024 0 9.3696 9.3696 0 0 0 0-12.9024A148.0704 148.0704 0 0 0 462.0288 414.72z m107.1104 224.512a173.5168 173.5168 0 0 1-126.464-52.8896 35.584 35.584 0 0 1 50.3296-50.3296 109.056 109.056 0 0 0 152.2688 0l163.84-163.84a106.2912 106.2912 0 0 0 30.72-76.1344 111.9232 111.9232 0 0 0-30.72-76.1344 106.2912 106.2912 0 0 0-76.1344-30.72 111.9232 111.9232 0 0 0-76.1344 30.72l-138.24 138.24A35.584 35.584 0 0 1 468.48 307.2l138.24-138.24a178.7392 178.7392 0 0 1 126.464-52.8896A173.568 173.568 0 0 1 859.648 168.96a179.2 179.2 0 0 1 0 252.8768l-163.84 163.84a178.7392 178.7392 0 0 1-126.464 52.8896z m-101.9392-86.6816a9.8816 9.8816 0 0 0-6.4512 2.56 8.6016 8.6016 0 0 0 0 12.9024 152.576 152.576 0 0 0 107.1104 45.1584 145.2032 145.2032 0 0 0 107.1104-45.1584l163.84-163.84A152.8832 152.8832 0 0 0 731.6992 143.36 145.2032 145.2032 0 0 0 624.64 188.672l-138.24 138.24a9.1136 9.1136 0 1 0 12.9024 12.9024l138.24-138.24a133.12 133.12 0 0 1 188.3648 188.3648l-163.84 163.84a135.5264 135.5264 0 0 1-189.44 0c0-1.28-2.56-1.28-5.12-1.28z',
                      fill: 'currentColor',
                    }),
                  ),
                ]
              },
            },
          ],
          [rehypePrism],
          // { ...rehypePresetMinify }
          // { plugins: [...rehypePresetMinify.plugins], settings: { ...rehypePresetMinify.settings } },
        ],
        format: 'mdx',
      },
    },
    components: {
      ...components,
      ...(props?.components || {}),
    },
  })
  return content
}

const options = {
  mdxOptions: {
    remarkPlugins: [[remarkGfm]], // table ...etc https://mdxjs.com/guides/gfm/
    rehypePlugins: [
      [rehypePrism],
      // { ...rehypePresetMinify }
      // { plugins: [...rehypePresetMinify.plugins], settings: { ...rehypePresetMinify.settings } },
    ],
    format: 'mdx',
  },
}

export function CustomSimpleMDX(props: MDXRemoteProps) {
  // @ts-expect-error Async Server Component Workaround
  return <MDXRemote {...props} options={...options} components={{ ...components, ...(props.components || {}) }} />
}
