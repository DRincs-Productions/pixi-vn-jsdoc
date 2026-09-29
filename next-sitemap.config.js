/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://jsdocs.pixi-vn.com/",
    generateRobotsTxt: true,
    outDir: "./out",
    transform: async (config, path) => {
        const isContentMdRoute = path.endsWith("content.md");
        const isDocRoute = path !== "/" && !isContentMdRoute;

        return {
            loc: path,
            changefreq: isDocRoute ? "daily" : "monthly",
            priority: isContentMdRoute ? 0.2 : isDocRoute ? 0.5 : config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs ?? [],
        };
    },
};
