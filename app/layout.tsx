import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./store/providers/provider";

export const metadata: Metadata = {
  title: "Unicon",
  description:
    "Unicon is an open source event management and ticketing application. The service allows users to browse, create, and promote local events. Payment powered by Squad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
