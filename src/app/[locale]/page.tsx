import Hero from "@/components/home/Hero";
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
      {/* Other sections like Value Propositions, Trust, and CTO will follow */}
    </>
  );
}
