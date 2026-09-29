import { fullRehypeCodeOptions, lightRehypeCodeOptions } from "@/lib/shared";
import type { ProcessorOptions } from "@mdx-js/mdx";
import { remarkMdxMermaid } from "fumadocs-core/mdx-plugins";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { applyMdxPreset, defineConfig, defineDocs } from "fumadocs-mdx/config";

function createDocsCollection(
    dir: string,
    mdxOptions?: ProcessorOptions | ((environment: any) => Promise<ProcessorOptions>),
) {
    return defineDocs({
        dir,
        docs: {
            schema: pageSchema,
            postprocess: {
                includeProcessedMarkdown: true,
            },
            mdxOptions,
        },
        meta: {
            schema: metaSchema,
        },
    });
}

export default defineConfig({});

export const jsdocPixiVnDocs = createDocsCollection(
    "content/pixi-vn",
    applyMdxPreset({
        rehypeCodeOptions: lightRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);

export const jsdocPixiVnJsonDocs = createDocsCollection(
    "content/pixi-vn-json",
    applyMdxPreset({
        rehypeCodeOptions: lightRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
        remarkPlugins: [remarkMdxMermaid],
    }),
);

export const jsdocPixiVnInkDocs = createDocsCollection(
    "content/pixi-vn-ink",
    applyMdxPreset({
        rehypeCodeOptions: fullRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);

export const jsdocNqtrDocs = createDocsCollection(
    "content/nqtr",
    applyMdxPreset({
        rehypeCodeOptions: fullRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);

export const jsdocPixiVnSpineDocs = createDocsCollection(
    "content/pixi-vn-spine",
    applyMdxPreset({
        rehypeCodeOptions: fullRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);

export const jsdocPixiVnLive2dDocs = createDocsCollection(
    "content/pixi-vn-live2d",
    applyMdxPreset({
        rehypeCodeOptions: fullRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);

export const jsdocPixiVnAiDocs = createDocsCollection(
    "content/pixi-vn-ai",
    applyMdxPreset({
        rehypeCodeOptions: fullRehypeCodeOptions,
        remarkCodeTabOptions: {
            parseMdx: true,
        },
    }),
);
