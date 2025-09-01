import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const formData = new FormData();
      formData.append("email_address", email);
      formData.append("form_id", "8504163"); // tu Form ID de ConvertKit

      const res = await fetch("https://app.kit.com/forms/8504163/subscriptions", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Get Weekly Pet Care Tips & Exclusive Reviews
          </h3>

          {/* Form usando tu estilo pero enviando a ConvertKit */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            data-sv-form="8504163"
          >
            <Input
              type="email"
              name="email_address"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </form>

          {status === "success" && (
            <p className="text-green-400 mt-2">
              Success! Check your email to confirm subscription.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">Error, try again.</p>
          )}

          <p className="text-xs text-primary-foreground/60 mt-3">
            We won't send you spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
