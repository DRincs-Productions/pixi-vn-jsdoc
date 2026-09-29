import {
    jsdocNqtrSource,
    jsdocPixiVnAiSource,
    jsdocPixiVnInkSource,
    jsdocPixiVnJsonSource,
    jsdocPixiVnLive2dSource,
    jsdocPixiVnSource,
    jsdocPixiVnSpineSource,
} from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

export const revalidate = false;

const combinedSource = {
    getPages: () => [
        ...jsdocPixiVnSource.getPages(),
        ...jsdocPixiVnJsonSource.getPages(),
        ...jsdocPixiVnInkSource.getPages(),
        ...jsdocNqtrSource.getPages(),
        ...jsdocPixiVnSpineSource.getPages(),
        ...jsdocPixiVnLive2dSource.getPages(),
        ...jsdocPixiVnAiSource.getPages(),
    ],
};

export const { staticGET: GET } = createFromSource(combinedSource, {
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: "english",
});
