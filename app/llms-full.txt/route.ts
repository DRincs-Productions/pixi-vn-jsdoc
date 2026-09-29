import {
    getLLMText,
    jsdocNqtrSource,
    jsdocPixiVnAiSource,
    jsdocPixiVnInkSource,
    jsdocPixiVnJsonSource,
    jsdocPixiVnLive2dSource,
    jsdocPixiVnSource,
    jsdocPixiVnSpineSource,
} from "@/lib/source";

export const revalidate = false;

export async function GET() {
    const jsdocScan = [
        ...jsdocPixiVnSource.getPages(),
        ...jsdocPixiVnJsonSource.getPages(),
        ...jsdocPixiVnInkSource.getPages(),
        ...jsdocNqtrSource.getPages(),
        ...jsdocPixiVnSpineSource.getPages(),
        ...jsdocPixiVnLive2dSource.getPages(),
        ...jsdocPixiVnAiSource.getPages(),
    ].map(getLLMText);

    const scannedJsdoc = await Promise.all(jsdocScan);

    return new Response(scannedJsdoc.join("\n\n"));
}
