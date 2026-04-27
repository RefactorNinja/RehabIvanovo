import { HeroSection } from "../components/hero/HeroSection";
import { ValuesSection } from "../components/values/ValuesSection";
import { RecoveryTimelineSection } from "../components/recovery/RecoveryTimelineSection";
import { CenterSection } from "../components/center/CenterSection";
import { FooterSection } from "../components/footer/FooterSection";
import { StickyHelpButton } from "../components/layout/StickyHelpButton";

export function App() {
  return (
    <>
      <HeroSection />
      <main>
        <ValuesSection />
        <RecoveryTimelineSection />
        <CenterSection />
      </main>
      <FooterSection />
      <StickyHelpButton />
    </>
  );
}
