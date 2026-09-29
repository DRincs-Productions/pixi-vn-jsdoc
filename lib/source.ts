import {
    jsdocNqtrDocs,
    jsdocPixiVnAiDocs,
    jsdocPixiVnDocs,
    jsdocPixiVnInkDocs,
    jsdocPixiVnJsonDocs,
    jsdocPixiVnLive2dDocs,
    jsdocPixiVnSpineDocs,
} from "collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import {
    docsContentRoute,
    jsdocNqtrRoute,
    jsdocPixiVnAiRoute,
    jsdocPixiVnInkRoute,
    jsdocPixiVnJsonRoute,
    jsdocPixiVnLive2dRoute,
    jsdocPixiVnRoute,
    jsdocPixiVnSpineRoute,
} from "./shared";

function createJsdocLoader(
    baseUrl: string,
    docsSource: ReturnType<typeof jsdocPixiVnDocs.toFumadocsSource>,
) {
    return loader({
        baseUrl,
        source: docsSource,
        plugins: [],
        icon(icon) {
            if (icon && icon in icons) return createElement(icons[icon as keyof typeof icons]);
        },
    });
}

export const jsdocPixiVnSource = createJsdocLoader(
    jsdocPixiVnRoute,
    jsdocPixiVnDocs.toFumadocsSource(),
);
export const jsdocPixiVnJsonSource = createJsdocLoader(
    jsdocPixiVnJsonRoute,
    jsdocPixiVnJsonDocs.toFumadocsSource(),
);
export const jsdocPixiVnInkSource = createJsdocLoader(
    jsdocPixiVnInkRoute,
    jsdocPixiVnInkDocs.toFumadocsSource(),
);
export const jsdocNqtrSource = createJsdocLoader(jsdocNqtrRoute, jsdocNqtrDocs.toFumadocsSource());
export const jsdocPixiVnSpineSource = createJsdocLoader(
    jsdocPixiVnSpineRoute,
    jsdocPixiVnSpineDocs.toFumadocsSource(),
);
export const jsdocPixiVnLive2dSource = createJsdocLoader(
    jsdocPixiVnLive2dRoute,
    jsdocPixiVnLive2dDocs.toFumadocsSource(),
);
export const jsdocPixiVnAiSource = createJsdocLoader(
    jsdocPixiVnAiRoute,
    jsdocPixiVnAiDocs.toFumadocsSource(),
);

export function getJsdocPageMarkdownUrl(
    page: { slugs: string[] },
    lib:
        | "pixi-vn"
        | "pixi-vn-json"
        | "pixi-vn-ink"
        | "nqtr"
        | "pixi-vn-spine"
        | "pixi-vn-live2d"
        | "pixi-vn-ai",
) {
    const segments = [...page.slugs, "content.md"];
    const url = `${docsContentRoute}/jsdoc/${lib}/${segments.join("/")}`;

    return {
        segments,
        url,
    };
}

export async function getLLMText(page: {
    data: { title: string; getText: (type: "processed" | "raw") => Promise<string> };
    url: string;
}) {
    const processed = await page.data.getText("processed");

    return `# ${page.data.title} (${page.url})

${processed}`;
}

export type AnyJsdocPage = InferPageType<typeof jsdocPixiVnSource>;
