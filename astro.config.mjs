import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    markdown: {
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [rehypeHeadingIds]
    },
    integrations: [
        mdx({
            rehypePlugins: [rehypeHeadingIds],
            remarkPlugins: [remarkReadingTime]
            // extendMarkdownConfig: true
        }),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
