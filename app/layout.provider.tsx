import { Provider } from "@/components/provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

export default function LayoutProvider({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={`${manrope.variable} ${sora.variable}`} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <Provider>{children}</Provider>
            </body>
            <GoogleAnalytics gaId="G-KGCCEKXRVG" />
        </html>
    );
}
