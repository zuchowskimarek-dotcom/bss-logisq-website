import type { Metadata } from "next";
import "../globals.css";
import EventBanner from "@/components/layout/EventBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getDictionary } from "@/dictionaries/get-dictionary";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <EventBanner dict={dict.eventBanner} />
        <Navbar locale={locale} navigationDict={dict.navigation} />
        <main>{children}</main>
        <Footer dict={dict.footer} locale={locale} />
      </body>
    </html>
  );
}
