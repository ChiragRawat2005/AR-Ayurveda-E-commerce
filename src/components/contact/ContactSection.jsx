import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[380px_1fr]">
        <ContactInfo />

        <ContactForm />
      </div>
    </section>
  );
}
