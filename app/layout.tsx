import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Personal Chatbot Predefined",
  description: "A predefined personal chatbot for handling common queries and tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
