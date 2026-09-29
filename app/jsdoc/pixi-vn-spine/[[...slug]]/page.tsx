import JsdocPage from "@/components/jsdoc-page";
import { jsdocPixiVnSpineSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="pixi-vn-spine" />;
}

export async function generateStaticParams() {
    return jsdocPixiVnSpineSource.generateParams();
}
