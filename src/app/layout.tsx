import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/components/MainWrapper";
import SideBar from "@/components/SideBar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tasky",
  description: "task maneger app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body
        className={cn(inter.className, "h-screen bg-background ")}
        style={{ direction: "rtl" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainWrapper>
            <SideBar />

            {children}
          </MainWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
