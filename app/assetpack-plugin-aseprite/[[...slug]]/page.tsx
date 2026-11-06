import JsdocPage from "@/components/jsdoc-page";
import { jsdocAssetpackPluginAsepriteSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="assetpack-plugin-aseprite" />;
}

export async function generateStaticParams() {
    return jsdocAssetpackPluginAsepriteSource.generateParams();
}
