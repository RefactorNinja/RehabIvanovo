import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { CallToActionButton } from "./CallToActionButton";
import { SunriseBackground } from "./SunriseBackground";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden py-20 md:py-28">
      <SunriseBackground />
      <PageContainer>
        <header className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-slate-800 md:text-6xl">{SITE_CONTENT.hero.title}</h1>
          <p className="mt-5 text-lg text-slate-600 md:text-xl">{SITE_CONTENT.hero.subtitle}</p>
          <div className="mt-8">
            <CallToActionButton />
          </div>
        </header>
      </PageContainer>
    </Section>
  );
}
