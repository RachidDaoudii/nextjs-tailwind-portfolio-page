/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { SpeedInsights } from '@vercel/speed-insights/next';
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700", "900"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Rachid Daoudi - Portfolio",
  description:
    "Rachid Daoudi is a Full-Stack Developer based in Morocco. Here, you'll get a glimpse of his journey in the world of web development, where creativity meets functionality.",

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
      <meta property="og:title" content="Rachid Daoudi - Portfolio" />
      <meta property="og:description" content="Rachid Daoudi is a Full-Stack Developer based in Morocco. Here, you'll get a glimpse of his journey in the world of web development, where creativity meets functionality." />
      <meta property="og:url" content="https://rachiddaoudi.vercel.app/" />
      <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/my.jfif" type="image/png" />
      </head>
      <body>
        <Layout>
          {children}
          <FixedPlugin />
          <SpeedInsights />
        </Layout>
      </body>
    </html>
  );
}