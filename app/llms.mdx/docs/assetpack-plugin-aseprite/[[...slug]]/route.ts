import {
    getJsdocPageMarkdownUrl,
    getLLMText,
    jsdocAssetpackPluginAsepriteSource,
} from "@/lib/source";
import { notFound } from "next/navigation";

export const revalidate = false;

export async function GET(_req: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;
    const page = jsdocAssetpackPluginAsepriteSource.getPage(slug?.slice(0, -1));
    if (!page) notFound();

    return new Response(await getLLMText(page), {
        headers: {
            "Content-Type": "text/markdown",
        },
    });
}

export function generateStaticParams() {
    return jsdocAssetpackPluginAsepriteSource.getPages().map((page) => ({
        slug: getJsdocPageMarkdownUrl(page, "assetpack-plugin-aseprite").segments,
    }));
}
