"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Reveal } from "../components/Reveal";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "me@ashishpixels.com";
const FORMSPREE_ID = "xvzjnakk";

function ContactForm() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const recaptchaData = executeRecaptcha
    ? { "g-recaptcha-response": executeRecaptcha }
    : {};

  const [state, handleSubmit] = useForm(FORMSPREE_ID, {
    data: recaptchaData,
  });

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thank-you");
    }
  }, [state.succeeded, router]);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      data-testid="contact-form"
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <Field
        id="contact-name"
        name="name"
        label="01 / Name"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-red-500" />
      <Field
        id="contact-email"
        name="email"
        label="02 / Email"
        type="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500" />
      <Field
        id="contact-message"
        name="message"
        label="03 / Message"
        textarea
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500" />

      <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-foreground hover:opacity-80 transition-opacity disabled:opacity-50"
          data-testid="contact-submit"
        >
          <span className="link-editorial">
            {state.submitting ? "Sending…" : "Send message"}
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 group-hover:bg-foreground group-hover:text-background transition-colors">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </button>
        {state.succeeded && (
          <p
            className="font-mono text-[12px] uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400"
            data-testid="contact-sent"
          >
            ✓ Message sent
          </p>
        )}
        {state.errors && state.errors.getFormErrors().length > 0 && (
          <p
            className="font-mono text-[12px] uppercase tracking-[0.22em] text-red-600 dark:text-red-400"
            data-testid="contact-error"
          >
            ✕ Failed — email me directly
          </p>
        )}
      </div>
    </form>
  );
}

export function Contact() {
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
                  href="tel:+918699314112"
                  className="link-editorial font-serif text-xl md:text-2xl"
                  data-testid="contact-phone"
                >
                  +91 86993 14112
                </a>
              </div>
              <div>
                <p className="overline mb-2">Studio</p>
                <p className="font-serif text-xl md:text-2xl">Mohali, India</p>
              </div>
              <div>
                <p className="overline mb-2">Availability</p>
                <p className="text-base text-foreground/75">
                  Open to freelance and full-time · Remote worldwide · IST timezone
                </p>
              </div>
              <div>
                <p className="overline mb-2">Services</p>
                <ul className="text-sm text-foreground/75 space-y-1">
                  <li>React.js / Next.js development</li>
                  <li>Frontend architecture & code review</li>
                  <li>Performance & accessibility audits</li>
                  <li>Design-to-code implementation</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ id, name, label, type = "text", textarea, required }) {
  return (
    <label htmlFor={id} className="block">
      <span className="overline block mb-3">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-foreground outline-none py-3 text-lg font-serif placeholder:text-muted-foreground/60 resize-none transition-colors"
          placeholder="Tell me about what you're building…"
          data-testid={id}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className="w-full bg-transparent border-0 border-b border-border/60 focus:border-foreground outline-none py-3 text-lg font-serif placeholder:text-muted-foreground/60 transition-colors"
          placeholder={type === "email" ? "you@studio.com" : "Your full name"}
          data-testid={id}
        />
      )}
    </label>
  );
}
