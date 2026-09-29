import {
    jsdocNqtrSource,
    jsdocPixiVnAiSource,
    jsdocPixiVnInkSource,
    jsdocPixiVnJsonSource,
    jsdocPixiVnLive2dSource,
    jsdocPixiVnSource,
    jsdocPixiVnSpineSource,
} from "@/lib/source";
import { llms } from "fumadocs-core/source";

export const revalidate = false;

export async function GET() {
    const parts = await Promise.all([
        llms(jsdocPixiVnSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn API")),
        llms(jsdocPixiVnJsonSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn-json API")),
        llms(jsdocPixiVnInkSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn-ink API")),
        llms(jsdocNqtrSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## nqtr API")),
        llms(jsdocPixiVnSpineSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn-spine API")),
        llms(jsdocPixiVnLive2dSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn-live2d API")),
        llms(jsdocPixiVnAiSource)
            .index()
            .then((t) => t.replaceAll("# Docs", "## pixi-vn-ai API")),
    ]);

    return new Response(parts.join("\n\n"));
}
