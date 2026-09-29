import JsdocPage from "@/components/jsdoc-page";
import { jsdocPixiVnJsonSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="pixi-vn-json" />;
}

export async function generateStaticParams() {
    return jsdocPixiVnJsonSource.generateParams();
}
