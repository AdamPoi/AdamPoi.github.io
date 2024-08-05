import { isProd } from "./support/envs.ts";
import type { NavigationLink, Site } from "./types.ts";

export const SITE: Site = {
    author: "Adam Rafi Rezandi",
    url: "https://adampoi.github.io",
    title: "Adam Rafi Rezandi",
    description:
        "Adam Rafi Rezandi Personal Website. A place where I share my thoughts, projects, and experiences.",
    shortDescription: "",
    base: "/docs",
};

export const NavigationLinks: NavigationLink[] = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Posts", url: "/posts" },
    // { name: "Category", url: "/categories" },
];

export const FooterLinks = [
    {
        section: "Contact Me",
        links: [
            { name: "Email", url: "mailto:isadamrr@gmail.com" },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/adam-rafi-rezandi/",
            },
        ],
    },
];

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: "G-TKQ4L3ZDSF",
    },

    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: "bf63658a-9418-4f39-a6a1-5a0cedb6e429",
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) anywhere, simply set this to false
        uploadAssetsToS3: isProd(),
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader API
            // The following configuration will upload the compiled `assets` directory to the `gblog` folder in S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ["assets"],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: "gblog",
        },
    },
};

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        inLanguage: "en-US",
        "@id": SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            "@type": "WebSite",
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
};
