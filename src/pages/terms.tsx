import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary">
          Terms and Conditions
        </h1>

        <p className="text-lg mb-4">
          By accessing and using this website, you agree to comply with the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Website</h2>
        <p className="mb-4">
          You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
        <p className="mb-4">
          All content on this website, including text, images, and logos, is the property of the site owner and protected by copyright laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
        <p className="mb-4">
          We are not responsible for any damages or losses resulting from the use of this website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Modifications</h2>
        <p className="mb-4">
          We reserve the right to update or modify these terms at any time. Changes will be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
        <p className="mb-4">
          For questions about these Terms and Conditions, please <a href="mailto:catewebs@yahoo.com" className="text-primary underline">contact us</a>.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
