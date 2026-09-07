import { useState } from "react";

import { EMAIL, PHONE, PHONE_TEL } from "../constants";
import Reveal from "./Reveal";
import Icon from "./Icon";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Inquiry from marcimetzger.com")}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;
  const inputCls =
    "w-full bg-transparent border-b border-charcoal/20 focus:border-adobe px-0.5 py-2.5 text-sm focus:outline-none transition-colors";
  const hours = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-24">
      <Reveal className="max-w-xl mb-14">
        <p className="text-adobe text-sm tracking-wide mb-3">Call or visit</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-navy">
          Let's talk about your next move.
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16">
        <Reveal>
          <h3 className="font-serif text-xl text-navy mb-6">Send a message</h3>
          <div className="space-y-6 max-w-md">
            <div>
              <label className="text-xs uppercase tracking-wide text-charcoal/50">
                Name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-charcoal/50">
                Email *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-charcoal/50">
                Message
              </label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputCls}
              ></textarea>
            </div>
            <a
              href={mailtoHref}
              className="inline-block bg-navy hover:bg-navy-light text-white text-sm font-medium px-8 py-3 rounded-sm transition-colors focus-ring"
            >
              Send
            </a>
            <p className="text-xs text-charcoal/45 max-w-sm pt-2">
              This opens your email app addressed to Marci — no messages are
              stored on this page.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="space-y-10">
          <div>
            <h3 className="font-serif text-xl text-navy mb-4">
              Marci Metzger — The Ridge Realty Group
            </h3>
            <div className="space-y-3 text-[15px] text-charcoal/80">
              <p className="flex items-start gap-3">
                <Icon
                  name="pin"
                  className="w-5 h-5 text-adobe shrink-0 mt-0.5"
                />{" "}
                3190 S Highway 160, Suite F, Pahrump, NV 89048
              </p>
              <p className="flex items-center gap-3">
                <Icon name="phone" className="w-5 h-5 text-adobe shrink-0" />{" "}
                <a href={PHONE_TEL} className="hover:text-adobe">
                  {PHONE}
                </a>{" "}
                &nbsp;/&nbsp;{" "}
                <a href="tel:4259412560" className="hover:text-adobe">
                  (425) 941-2560
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="mail" className="w-5 h-5 text-adobe shrink-0" />{" "}
                <a href={`mailto:${EMAIL}`} className="hover:text-adobe">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-serif text-lg text-navy mb-3 flex items-center gap-2">
              <Icon name="clock" className="w-5 h-5 text-adobe" /> Office hours
            </h4>
            <ul className="text-sm text-charcoal/70 space-y-1">
              {hours.map((d) => (
                <li key={d} className="flex justify-between max-w-55">
                  <span>{d}</span>
                  <span>8:00 am – 7:00 pm</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-charcoal/60 mt-3">
              Appointments outside office hours are available upon request. Just
              call!
            </p>
          </div>
          <div className="rounded-sm overflow-hidden border border-charcoal/10 h-56">
            <iframe
              title="Map to Marci Metzger — The Ridge Realty Group, Pahrump, NV"
              className="w-full h-full grayscale-20"
              loading="lazy"
              src="https://www.google.com/maps?q=3190+S+Highway+160+Suite+F,+Pahrump,+NV+89048&output=embed"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
