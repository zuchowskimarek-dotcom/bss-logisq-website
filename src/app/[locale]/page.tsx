import Hero from "@/components/home/Hero";
import SolutionsHub from "@/components/home/SolutionsHub";
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
      <SolutionsHub dict={dict.solutionsHub} locale={locale} />
    </>
  );
}
