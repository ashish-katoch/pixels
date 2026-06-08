import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "ashishkatoch7113@hotmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Hello Ashish — from ${form.name || "the portfolio"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-border/60"
      data-testid="contact-section"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="overline mb-4">— Contact</p>
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.98]">
              Have something
              <br />
              <span className="italic">worth building?</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-md leading-relaxed">
              I respond to most messages within 48 hours. For projects, briefs, and
              quiet conversations alike — the door is open.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="overline mb-2">Direct</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="link-editorial font-serif italic text-xl md:text-2xl"
                  data-testid="contact-direct-email"
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="overline mb-2">Telephone</p>
                <a
                  href="tel:+910000000000"
                  className="link-editorial font-serif text-xl md:text-2xl"
                  data-testid="contact-phone"
                >
                  +91 · available on request
                </a>
              </div>
              <div>
                <p className="overline mb-2">Studio</p>
                <p className="font-serif text-xl md:text-2xl">Chandigarh, India</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <form
              onSubmit={onSubmit}
              className="space-y-8"
              data-testid="contact-form"
            >
              <Field
                id="contact-name"
                label="01 / Name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                required
              />
              <Field
                id="contact-email"
                label="02 / Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                required
              />
              <Field
                id="contact-message"
                label="03 / Message"
                textarea
                value={form.message}
                onChange={(v) => setForm((f) => ({ ...f, message: v }))}
                required
              />

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground hover:opacity-80 transition-opacity"
                  data-testid="contact-submit"
                >
                  <span className="link-editorial">Send via mail client</span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </button>
                {sent && (
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400"
                    data-testid="contact-sent"
                  >
                    ✓ Mail client opened
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, value, onChange, type = "text", textarea, required }) {
  return (
    <label htmlFor={id} className="block">
      <span className="overline block mb-3">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-foreground outline-none py-3 text-lg font-serif placeholder:text-muted-foreground/60 resize-none transition-colors"
          placeholder="Tell me about what you're building…"
          data-testid={id}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-foreground outline-none py-3 text-lg font-serif placeholder:text-muted-foreground/60 transition-colors"
          placeholder={type === "email" ? "you@studio.com" : "Your full name"}
          data-testid={id}
        />
      )}
    </label>
  );
}
