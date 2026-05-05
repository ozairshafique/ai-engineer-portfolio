function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.12-.93a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
    </svg>
  );
}

const contactLinks = [
  {
    label: "+39 348 048 3117",
    href: "tel:+393480483117",
    icon: <PhoneIcon />,
  },
  {
    label: "uzairi_11@hotmail.com",
    href: "mailto:uzairi_11@hotmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "linkedin.com/in/uzair-shafique",
    href: "https://www.linkedin.com/in/uzair-shafique-97836810a",
    icon: <LinkedInIcon />,
  },
  {
    label: "github.com/ozairshafique",
    href: "https://github.com/ozairshafique",
    icon: <GitHubIcon />,
  },

  {
    label: "uzairshafique.vercel.app",
    href: "https://uzairshafique.vercel.app",
    icon: <WebIcon />,
  },
];
const availability = [
  { label: "Status", value: "Open to work", highlight: true },
  { label: "Location", value: "Bari, Italy 🇮🇹" },
  { label: "Available for", value: "EU + Remote" },
  { label: "Permit", value: "EU Residence ✓" },
  { label: "Response time", value: "Within 24 hours" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Direct contact */}
      <div>
        <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
          Direct contact
        </p>
        <div className="flex flex-col gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
            >
              <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold group-hover:border-white/30 transition-colors">
                {link.icon}
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="border-t border-white/10 pt-6">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-4">
          Availability
        </p>
        <div className="flex flex-col gap-3 text-sm">
          {availability.map((item, index) => (
            <div
              key={item.label}
              className={`flex justify-between pb-3 ${
                index < availability.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-white/40">{item.label}</span>
              <span
                className={
                  item.highlight
                    ? "text-emerald-400 flex items-center gap-1.5"
                    : "text-white/80"
                }
              >
                {item.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                )}
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
