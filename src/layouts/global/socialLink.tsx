import { IconType } from "react-icons";

type Props = {
  href: string;
  name: string;
  icon: IconType;
};

export const SocialLink = ({ href, name, icon: Icon }: Props) => (
  <a href={href} target="_blank" rel="noreferrer" title={name}>
    {<Icon />}
  </a>
);
