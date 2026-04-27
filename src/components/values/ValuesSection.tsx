import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { SectionTitle } from "../shared/SectionTitle";
import { ValueCard } from "./ValueCard";

export function ValuesSection() {
  return (
    <Section className="py-16 md:py-20">
      <PageContainer>
        <SectionTitle title="Поддержка и ценности" subtitle="Мы рядом на каждом этапе восстановления." />
        <div className="grid gap-4 md:grid-cols-2">
          {SITE_CONTENT.values.map((item) => (
            <ValueCard key={item.title} item={item} />
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
