import JsdocPage from "@/components/jsdoc-page";
import { jsdocPixiVnLive2dSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="pixi-vn-live2d" />;
}

export async function generateStaticParams() {
    return jsdocPixiVnLive2dSource.generateParams();
}
