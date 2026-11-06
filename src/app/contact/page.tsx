import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" ctaLabel="Go to the form" />
      <div id="page-content" className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <h2 className="text-4xl text-navy">Get in touch</h2>
          <p className="mt-4 leading-7">
            Write about a piece, a class, or a commission. The form does not send email yet.
          </p>
          <address className="mt-8 space-y-3 text-sm not-italic leading-6">
            <p>
              {site.contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p>{site.contact.hours}</p>
            <p>{site.contact.phone}</p>
            <p>
              <a className="underline decoration-pink underline-offset-4" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="text-4xl text-navy">Contact form</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
