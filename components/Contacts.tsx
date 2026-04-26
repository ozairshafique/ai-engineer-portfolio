import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10"
    >
      <p className="text-xs text-white/30 uppercase tracking-widest mb-2">
        Contact
      </p>
      <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
      <p className="text-white/50 text-sm mb-12">
        Open to AI Engineer, ML Engineer, and MLOps roles across Europe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <div className="flex flex-col gap-6">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
