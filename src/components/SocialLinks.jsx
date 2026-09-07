import Icon from "./Icon";

function SocialLinks({ className = "" }) {
  const links = [
    {
      name: "facebook",
      href: "https://www.facebook.com/MarciHomes/",
      label: "Facebook",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/marcimetzger_theridge/",
      label: "Instagram",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/marci-metzger-30642496/",
      label: "LinkedIn",
    },
    {
      name: "yelp",
      href: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
      label: "Yelp",
    },
  ];
  return (
    <div className={"flex items-center gap-4 " + className}>
      {links.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-colors focus-ring"
        >
          <Icon name={l.name} className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
