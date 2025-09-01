import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary">
          Privacy Policy
        </h1>

        <p className="text-lg mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect information such as your name, email address, and browsing behavior to improve your experience on our site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          Your data may be used to provide personalized content, communicate updates, and improve website functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services such as Google Analytics or advertising partners who may collect information to provide better services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please <a href="mailto:catewebs@yahoo.com" className="text-primary underline">contact us</a>.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
