import { CONTACTS } from "../../config/contacts";
import { PageContainer } from "../layout/PageContainer";
import { SocialMorphButton } from "./SocialMorphButton";
import { ContactBlock } from "./ContactBlock";

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <PageContainer>
        <ContactBlock />
        <div className="mt-6 flex flex-wrap gap-3">
          <SocialMorphButton href={CONTACTS.yandexMaps} label="Мы на Яндекс картах" />
          <SocialMorphButton href={CONTACTS.vk} label="Наше сообщество Вконтакте" />
        </div>
      </PageContainer>
    </footer>
  );
}
