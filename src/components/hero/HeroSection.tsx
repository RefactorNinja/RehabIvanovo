import { SITE_CONTENT } from "../../content/siteContent";
import { PageContainer } from "../layout/PageContainer";
import { Section } from "../layout/Section";
import { CallToActionButton } from "./CallToActionButton";
import { SunriseBackground } from "./SunriseBackground";

export function HeroSection() {
  return (
    <Section className="relative p-0">
      <div className="relative w-full">
        <SunriseBackground />
        <div className="relative z-10 -mt-4 pb-8 md:absolute md:inset-0 md:mt-0 md:flex md:flex-col md:justify-end">
          <PageContainer className="pt-2 md:pb-16 md:pt-24">
            <header className="relative max-w-3xl">
              <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm md:text-left md:text-6xl">
                {SITE_CONTENT.hero.title}
              </h1>
              <p className="mt-6 max-w-4xl rounded-2xl border border-white/60 bg-white/60 px-4 py-4 text-center text-xl font-extrabold leading-snug tracking-tight text-slate-950 shadow-sm backdrop-blur-sm md:text-left md:text-2xl lg:text-3xl">
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
