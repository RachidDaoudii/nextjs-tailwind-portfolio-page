/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachid Daoudi",
  description: "Highly skilled and creative Web Developer with 2+ years of experience in crafting visually stunning and functionally robust websites and web applications.",
  keywords: ["Rachid", "Daoudi", "Web", "Developer", "React", "Next.js", "Tailwind", "CSS", "HTML", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "Firebase", "Figma", "Adobe", "Photoshop", "Illustrator", "UI", "UX", "Design", "Frontend", "Backend", "Fullstack", "MERN", "Stack", "GraphQL", "RESTful", "API", "Responsive", "Mobile", "First", "Design", "SEO", "Optimization", "Performance", "Accessibility", "Web", "Standards", "Best", "Practices", "Code", "Quality", "Testing", "Deployment", "Version", "Control", "Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "Workflow", "Agile", "Scrum", "Kanban", "Jira", "Trello", "Slack", "Zoom", "Google", "Meet", "Microsoft", "Teams", "VSCode", "IntelliJ", "WebStorm", "Postman", "Insomnia", "Google", "Lighthouse", "Web", "Vitals", "Performance", "Budgets", "PWA", "AMP", "SPA", "SSR", "ISR", "SSG", "SEO", "Sitemap", "Robots", "txt", "Schema", "Structured", "Data", "Open", "Graph", "Twitter", "Card", "Meta", "Tags", "Canonical", "Hreflang", "Pagination", "Href", "Lang", "Accessibility", "ARIA", "Landmarks", "Screen", "Reader", "Skip", "Links", "Focus", "Management", "Keyboard", "Navigation", "Contrast", "Ratio", "Color", "Blindness", "Deuteranopia", "Protanopia", "Tritanopia", "Monochromacy", "Dyschromatopsia", "Inclusive", "Design", "User", "Experience", "Performance", "Optimization", "SEO", "Accessibility", "Web", "Standards", "Best", "Practices", "Code", "Quality", "Testing", "Deployment", "Version", "Control", "Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "Workflow", "Agile", "Scrum", "Kanban", "Jira", "Trello", "Slack", "Zoom", "Google", "Meet", "Microsoft", "Teams", "VSCode", "IntelliJ", "WebStorm", "Postman", "Insomnia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="my.jfif" className="rounded-lg" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

export function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
}




