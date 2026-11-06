import Link from "next/link";
import { site } from "@/content/site";
import { MailingListForm } from "@/components/MailingListForm";

export function Footer() {
  return (
    <footer className="border-t-4 border-pink bg-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 md:px-8 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <p className="font-serif text-4xl italic leading-none">{site.title}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {site.social.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="underline decoration-pink underline-offset-4">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-white/70">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-2xl">Contact info</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-white/90">
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
              <a href={`mailto:${site.contact.email}`} className="underline decoration-pink underline-offset-4">
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl">Important links</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6">
            {site.footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-white/30 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl">{site.mailingList.heading}</h2>
          <p className="mt-4 text-sm leading-6 text-white/90">
            {site.mailingList.text}
          </p>
          <div className="mt-4">
            <MailingListForm />
          </div>
        </div>
      </div>
      <p className="px-4 pb-24 text-center text-sm text-white/75">
        {site.year} {site.title}. Replace this line when the site is yours.
      </p>
    </footer>
  );
}
