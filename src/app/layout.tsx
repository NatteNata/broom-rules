import type {Metadata} from "next";
import "../styles/globals.css";
import { Header } from "@/components/Header";


export const metadata: Metadata = {
  title: "My broom rules",
  description: "Making every home sweet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}
