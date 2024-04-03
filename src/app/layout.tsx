import "./global.css";
import PageLayout from "@/layouts/PageLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
