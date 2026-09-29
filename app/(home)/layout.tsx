import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";
import LayoutProvider from "../layout.provider";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <LayoutProvider>
            <HomeLayout {...baseOptions("home")}>{children}</HomeLayout>
        </LayoutProvider>
    );
}
