import { Card, Cards } from "fumadocs-ui/components/card";

const sections = [
    {
        title: "@drinc/pixi-vn",
        description: "Core visual novel engine API reference.",
        url: "/jsdoc/pixi-vn",
    },
    {
        title: "@drinc/pixi-vn-json",
        description: "JSON-based narrative format API reference.",
        url: "/jsdoc/pixi-vn-json",
    },
    {
        title: "@drinc/pixi-vn-ink",
        description: "ink narration integration API reference.",
        url: "/jsdoc/pixi-vn-ink",
    },
    {
        title: "@drinc/nqtr",
        description: "Navigation Quest Time Routine (NQTR) API reference.",
        url: "/jsdoc/nqtr",
    },
    {
        title: "@drinc/pixi-vn-spine",
        description: "Spine 2D integration API reference.",
        url: "/jsdoc/pixi-vn-spine",
    },
    {
        title: "@drinc/pixi-vn-live2d",
        description: "Live2D integration API reference.",
        url: "/jsdoc/pixi-vn-live2d",
    },
    {
        title: "@drinc/pixi-vn-ai",
        description: "AI-generated content helpers API reference.",
        url: "/jsdoc/pixi-vn-ai",
    },
];

export default function HomePage() {
    return (
        <main className="flex flex-1 flex-col items-center px-4 py-16 text-center">
            <h1 className="mb-4 text-4xl font-bold">Pixi’VN JSDocs</h1>
            <p className="mb-12 max-w-2xl text-fd-muted-foreground">
                API reference documentation for the Pixi’VN ecosystem. For guides and tutorials, see
                the{" "}
                <a
                    href="https://pixi-vn.com"
                    className="underline"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    main Pixi’VN wiki
                </a>
                .
            </p>
            <Cards className="w-full max-w-4xl text-left sm:grid-cols-2">
                {sections.map((section) => (
                    <Card key={section.url} title={section.title} href={section.url}>
                        {section.description}
                    </Card>
                ))}
            </Cards>
        </main>
    );
}
