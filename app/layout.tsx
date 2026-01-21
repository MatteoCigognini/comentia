import type { Metadata } from "next";
import { Roboto_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const font1 = Mona_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'auto',
});

const font2 = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'auto',
});

export const metadata: Metadata = {
  title: "Comentia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font1.className} ${font2.className}`}>
        {children}
      </body>
    </html>
  );
}