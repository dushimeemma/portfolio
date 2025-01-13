import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { createHtmlPlugin } from "vite-plugin-html";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    svgr(),

    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Emmanuel Dushime | Senior Full Stack Software Engineer",
          description:
            "Highly motivated Full-Stack Software Engineer with 5+ years of experience designing, developing, and maintaining software applications. Proficient in modern web and mobile technologies with a focus on delivering robust, scalable, and high-performance solutions. Strong communicator, adept at collaboration across teams, and a fast learner who quickly adapts to new tools and environments. Proven track record in both onsite and remote roles.",
          ogImage:
            "https://firebasestorage.googleapis.com/v0/b/kigc-blog-atlp.appspot.com/o/Emmanuel%20Dushime%20Preview%20Image.png?alt=media&token=d51d682e-3c06-4e1e-b9f2-1c85ef134b68",
          schema: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Emmanuel Dushime",
            url: "https://dushimeemma.vercel.app",
            jobTitle: "Senior Full Stack Software Engineer",
            description:
              "Highly motivated Full-Stack Software Engineer with 5+ years of experience designing, developing, and maintaining software applications. Proficient in modern web and mobile technologies with a focus on delivering robust, scalable, and high-performance solutions. Strong communicator, adept at collaboration across teams, and a fast learner who quickly adapts to new tools and environments. Proven track record in both onsite and remote roles.",
            sameAs: [
              "https://www.linkedin.com/in/dushimeemma",
              "https://github.com/dushimeemma",
              "https://www.instagram.com/_dushimeemma_",
            ],
          }),
        },
      },
    }),

    Sitemap({
      hostname: "https://dushimeemma.vercel.app",
      generateRobotsTxt: true,
    }),
  ],
});
