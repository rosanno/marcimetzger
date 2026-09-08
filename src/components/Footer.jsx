import { EMAIL, PHONE, PHONE_TEL } from "../constants";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="flex flex-col leading-none mb-4">
            <span className="font-serif text-xl text-white">Marci Metzger</span>
            <span className="font-serif italic text-sm text-adobe-light -mt-1">
              Homes
            </span>
          </div>
          <p className="text-sm max-w-xs leading-relaxed">
            Pahrump Realtor with The Ridge Realty Group. Nearly three decades of
            real estate experience across Southern Nevada.
          </p>
          <SocialLinks className="mt-6" />
        </div>
        <div>
          <h4 className="text-white text-sm tracking-wide mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "#home"],
              ["Listings", "#listings"],
              ["Let's Move", "#move"],
              ["About Us", "#about"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm tracking-wide mb-4">Reach Marci</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={PHONE_TEL} className="hover:text-white">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
            <li>3190 S Highway 160, Suite F</li>
            <li>Pahrump, NV 89048</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>
            © 2026 Marci Metzger, The Ridge Realty Group. All rights reserved.
          </p>
          <p>Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
