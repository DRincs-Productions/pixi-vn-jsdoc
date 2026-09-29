import { Image } from "fumadocs-core/framework";
import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export async function sidebar(): Promise<
    Partial<DocsLayoutProps["sidebar"]> & {
        enabled?: boolean;
        component?: ReactNode;
    }
> {
    return {
        tabs: [
            {
                title: "@drinc/pixi-vn",
                icon: <Image width={16} height={16} src="/icon.png" alt="Pixi’VN" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn`,
            },
            {
                title: "@drinc/nqtr",
                icon: <Image width={16} height={16} src="/nqtr.png" alt="NQTR" />,
                description: "Auto-generated API reference",
                url: `/nqtr`,
            },
            {
                title: "@drinc/pixi-vn-ink",
                icon: <Image width={16} height={16} src="/ink.svg" alt="ink" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn-ink`,
            },
            {
                title: "@drinc/pixi-vn-json",
                icon: <Image width={16} height={16} src="/pixivn-json.svg" alt="Pixi’VN Json" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn-json`,
            },
            {
                title: "@drinc/pixi-vn-spine",
                icon: <Image width={16} height={16} src="/spine.svg" alt="Spine 2D" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn-spine`,
            },
            {
                title: "@drinc/pixi-vn-live2d",
                icon: <Image width={16} height={16} src="/live2d.png" alt="Live2D" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn-live2d`,
            },
            {
                title: "@drinc/pixi-vn-ai",
                icon: <Image width={16} height={16} src="/pixi-vn-ai.svg" alt="Pixi’VN AI" />,
                description: "Auto-generated API reference",
                url: `/pixi-vn-ai`,
            },
        ],
    };
}
