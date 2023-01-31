import "./globals.css";
import { Raleway, Merriweather_Sans } from "@next/font/google";

const raleway = Raleway({
  variable: "--display-font",
});

const merriweather = Merriweather_Sans({
  variable: "--body-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${merriweather.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
