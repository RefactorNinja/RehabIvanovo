import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { GlassCard } from "./GlassCard";

export function CenterSection() {
  return (
    <Section className="py-16 md:py-20">
      <PageContainer>
        <SectionTitle title="Наш центр" subtitle="Домашняя атмосфера и поддержка в Иванове." />
        <GlassCard>
          <p className="text-slate-700">{SITE_CONTENT.center}</p>
        </GlassCard>
      </PageContainer>
    </Section>
  );
}
