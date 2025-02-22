import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    markdown: {
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
