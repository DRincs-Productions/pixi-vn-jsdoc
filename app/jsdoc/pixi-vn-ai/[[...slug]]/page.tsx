import JsdocPage from "@/components/jsdoc-page";
import { jsdocPixiVnAiSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="pixi-vn-ai" />;
}

export async function generateStaticParams() {
    return jsdocPixiVnAiSource.generateParams();
}
