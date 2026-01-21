import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import TrustSection from "@/components/home/TrustSection";
import ProductOverview from "@/components/home/ProductOverview";
import ContactCTA from "@/components/home/ContactCTA";
import { getDictionary } from "@/dictionaries/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <ValuePillars dict={dict.pillars} />
      <TrustSection locale={locale} />
      <ProductOverview dict={dict.products} />
      <ContactCTA dict={dict.cta} />
    </>
  );
}
