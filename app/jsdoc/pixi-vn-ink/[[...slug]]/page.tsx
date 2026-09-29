import JsdocPage from "@/components/jsdoc-page";
import { jsdocPixiVnInkSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="pixi-vn-ink" />;
}

export async function generateStaticParams() {
    return jsdocPixiVnInkSource.generateParams();
}
