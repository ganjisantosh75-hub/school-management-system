import ContactBanner from "../component/contact/ContactBanner";
import ContactSection from "../component/contact/ContactSection";
import ContactMap from "../component/contact/ContactMap";

function Contact() {
  return (
    <main>
      <ContactBanner />
      <ContactSection />
        <ContactMap />
    </main>
  );
}

export default Contact;