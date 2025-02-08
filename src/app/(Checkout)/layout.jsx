import "../globals.css";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSansArabic.className} h-full`}>
        <main className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-grow flex-col">{children}</div>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
