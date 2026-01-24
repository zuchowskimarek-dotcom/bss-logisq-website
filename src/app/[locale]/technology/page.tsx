import { getDictionary } from '@/dictionaries/get-dictionary';
import TechIntro from '@/components/technology/TechIntro';
import SystemBoundaries from '@/components/technology/SystemBoundaries';
import ExecutionModel from '@/components/technology/ExecutionModel';
import SafetyControl from '@/components/technology/SafetyControl';
import ArchitectureStack from '@/components/technology/ArchitectureStack';
import IntegrationAPIs from '@/components/technology/IntegrationAPIs';
import TechDigitalTwin from '@/components/technology/TechDigitalTwin';
import ProcessCarousel from '@/components/technology/ProcessCarousel';
import FinalNote from '@/components/technology/FinalNote';

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
            <TechIntro dict={t.intro} />
            <SystemBoundaries dict={t.boundaries} />
            <ExecutionModel dict={t.execution} />
            <SafetyControl dict={t.safety} />
            <ArchitectureStack dict={t.stack} />
            <IntegrationAPIs dict={t.integration} />
            <TechDigitalTwin dict={t.digitalTwin} />
            <ProcessCarousel dict={t.processes} />
            <FinalNote dict={t.final} />
        </main>
    );
}
