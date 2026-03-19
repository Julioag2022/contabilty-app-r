import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Shell from "@/components/Shell";

export const metadata = {
  title: "LedgerFlow",
  description: "E-commerce accounting & inventory management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
