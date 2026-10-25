import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const XIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68L14.54 10.246 24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.84L0 1.154h7.594l5.243 6.932zm-1.29 19.491h2.039L6.486 3.24H4.298z" />
  </svg>
);

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kishlay-tejeswi",
    Icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/kisxslay_sinha",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kisx.slay?igsh=MW00MndqNGh1Z2JzeQ==",
    Icon: Instagram,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-secondary/30 px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Have a project in mind or want to collaborate? Reach out by email or
          connect with me on social media.
        </p>

        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 shadow-xs sm:p-10">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:kishlay4305t@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  kishlay4305t@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+917050412643"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 70504 12643
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  Ranchi, Jharkhand, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 text-center">
            <h4 className="mb-4 font-medium">Connect With Me</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} profile`}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
