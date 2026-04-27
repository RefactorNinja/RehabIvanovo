import { ExternalLinkButton } from "../shared/ExternalLinkButton";

type SocialMorphButtonProps = {
  href: string;
  label: string;
};

export function SocialMorphButton({ href, label }: SocialMorphButtonProps) {
  return <ExternalLinkButton href={href} label={label} className="transition active:scale-95" />;
}
