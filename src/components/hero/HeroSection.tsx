import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { CallToActionButton } from "./CallToActionButton";
import { SunriseBackground } from "./SunriseBackground";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden p-0">
      <div className="relative w-full">
        <SunriseBackground />
        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <PageContainer className="pb-10 pt-16 md:pb-16 md:pt-24">
            <header className="relative max-w-3xl">
              <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm md:text-left md:text-6xl">
                {SITE_CONTENT.hero.title}
              </h1>
              <p className="mt-5 text-center text-lg text-slate-800 drop-shadow-sm md:text-left md:text-xl">
                {SITE_CONTENT.hero.subtitle}
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <CallToActionButton />
              </div>
            </header>
          </PageContainer>
        </div>
      </div>
    </Section>
  );
}
