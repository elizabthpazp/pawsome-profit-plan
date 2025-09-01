import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-secondary">
          About Us
        </h1>

        <p className="text-lg mb-4">
          Welcome! We are a passionate team dedicated to providing high-quality content and resources about Pet Care
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to educate, inspire, and help our audience with reliable and easy-to-understand information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Team</h2>
        <p className="mb-4">
          We are professionals with expertise in veterinary. Our team works tirelessly to create engaging content and valuable resources.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Get in Touch</h2>
        <p className="mb-4">
          Have questions or suggestions? <a href="mailto:catewebs@yahoo.com" className="text-primary underline">Contact us</a> anytime. We'd love to hear from you!
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default About;
