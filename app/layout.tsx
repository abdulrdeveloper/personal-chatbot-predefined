import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HiteshBot | A Predefined Chatbot",
  description: "A predefined chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
