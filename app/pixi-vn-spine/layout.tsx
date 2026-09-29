import { sidebar } from "@/components/docs-layout-props";
import { baseOptions } from "@/lib/layout.shared";
import { jsdocPixiVnSpineSource } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import LayoutProvider from "../layout.provider";

export default async function Layout({ children }: { children: ReactNode }) {
    const sidebarVar = await sidebar();
    return (
        <LayoutProvider>
            <DocsLayout
                sidebar={sidebarVar}
                tree={jsdocPixiVnSpineSource.pageTree}
                {...baseOptions("docs")}
            >
                {children}
            </DocsLayout>
        </LayoutProvider>
    );
}
