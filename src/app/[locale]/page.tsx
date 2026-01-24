import Hero from "@/components/home/Hero";
import TheProblem from "@/components/home/TheProblem";
import TheDifference from "@/components/home/TheDifference";
import OperationalAnchor from "@/components/home/OperationalAnchor";
import ProductOverview from "@/components/home/ProductOverview";
import ValuePillars from "@/components/home/ValuePillars";
import DigitalTwinSection from "@/components/home/DigitalTwinSection";
import TrustSection from "@/components/home/TrustSection";
import ContactCTA from "@/components/home/ContactCTA";
import ProcessCarousel from "@/components/technology/ProcessCarousel";
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
      <Hero dict={dict.hero} locale={locale} />
      <TheProblem dict={dict.problem} />
      <TheDifference dict={dict.difference} />
      <OperationalAnchor dict={dict.operational} />
      <ProcessCarousel dict={dict.technologyPage.processes} />
      <ProductOverview dict={dict.productStructureLight} />
      <ValuePillars dict={dict.benefits} />
      <DigitalTwinSection dict={dict.digitalTwinRepositioned} />
      <TrustSection dict={dict.trust} locale={locale} />
    </>
  );
}
