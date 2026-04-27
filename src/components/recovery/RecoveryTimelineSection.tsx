import { useState } from "react";
import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { ProgressIndicator } from "./ProgressIndicator";
import { RecoveryStepItem } from "./RecoveryStepItem";

export function RecoveryTimelineSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section className="bg-slate-50 py-16 md:py-20">
      <PageContainer>
        <SectionTitle title="Этапы выздоровления" subtitle="Путь от первого звонка до полной социализации." />
        <ProgressIndicator current={activeStep} total={SITE_CONTENT.recoverySteps.length} />
        <div className="grid gap-3 md:grid-cols-2">
          {SITE_CONTENT.recoverySteps.map((step, index) => (
            <RecoveryStepItem key={step} label={step} active={index === activeStep} onClick={() => setActiveStep(index)} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
