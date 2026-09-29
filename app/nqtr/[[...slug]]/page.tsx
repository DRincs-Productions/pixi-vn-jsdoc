import JsdocPage from "@/components/jsdoc-page";
import { jsdocNqtrSource } from "@/lib/source";

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    return <JsdocPage slug={slug} lib="nqtr" />;
}

export async function generateStaticParams() {
    return jsdocNqtrSource.generateParams();
}
