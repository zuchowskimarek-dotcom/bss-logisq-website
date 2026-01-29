import { getDictionary } from '@/dictionaries/get-dictionary';
import PageHero from '@/components/common/PageHero';
import SystemBoundaries from '@/components/technology/SystemBoundaries';
import ExecutionModel from '@/components/technology/ExecutionModel';
import SafetyControl from '@/components/technology/SafetyControl';
import ArchitectureStack from '@/components/technology/ArchitectureStack';
import IntegrationAPIs from '@/components/technology/IntegrationAPIs';
import TechDigitalTwin from '@/components/technology/TechDigitalTwin';
import FinalNote from '@/components/technology/FinalNote';
import TechnologyNavigation from '@/components/technology/TechnologyNavigation';

export default async function TechnologyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const t = dict.technologyPage;

    return (
        <main>
            <PageHero
                category={t.category}
                headline={t.intro.title}
                clarifier={t.intro.bodyShort}
                definition={t.wesDefinition}
                archetype="prove"
            />
            <TechnologyNavigation dict={t.navigationHub} locale={locale} />
            <SystemBoundaries dict={t.boundaries} />
            <ExecutionModel dict={t.execution} />
            <SafetyControl dict={t.safety} />
            <ArchitectureStack dict={t.stack} />
            <IntegrationAPIs dict={t.integration} />
            <TechDigitalTwin dict={t.digitalTwin} />
            <FinalNote dict={t.final} />
        </main>
    );
}
