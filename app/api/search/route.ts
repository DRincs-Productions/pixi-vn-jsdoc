import {
    jsdocNqtrSource,
    jsdocPixiVnAiSource,
    jsdocPixiVnInkSource,
    jsdocPixiVnJsonSource,
    jsdocPixiVnLive2dSource,
    jsdocPixiVnSource,
    jsdocPixiVnSpineSource,
} from "@/lib/source";
import { createSearchAPI } from "fumadocs-core/search/server";

export const revalidate = false;

const allPages = [
    ...jsdocPixiVnSource.getPages(),
    ...jsdocPixiVnJsonSource.getPages(),
    ...jsdocPixiVnInkSource.getPages(),
    ...jsdocNqtrSource.getPages(),
    ...jsdocPixiVnSpineSource.getPages(),
    ...jsdocPixiVnLive2dSource.getPages(),
    ...jsdocPixiVnAiSource.getPages(),
];

export const { staticGET: GET } = createSearchAPI("simple", {
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: "english",
    indexes: async () =>
        Promise.all(
            allPages.map(async (page) => ({
                title: page.data.title,
                description: page.data.description,
                url: page.url,
                content: await page.data.getText("processed"),
            })),
        ),
});
