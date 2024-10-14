import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
);

const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    // Simulating form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you for contacting us. We will respond as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gradient-to-r from-red-800 to-red-600 text-white">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl mr-2">🐠</span>
          <span className="text-lg font-bold">Feng Shui Koi</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Consultation
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Blog
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="submit" className="bg-black w-full text-white">
                <Send className="w-4 h-4 mr-2 inline-block text-white" />
                Send Message
              </Button>
            </form>

            {/* {status && (
              <div
                className={`mt-4 p-3 ${
                  status.type === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                } rounded`}
              >
                <div className="flex items-center">
                  <span className="mr-2">
                    {status.type === "error" ? "⚠️" : "✅"}
                  </span>
                  <span>{status.message}</span>
                </div>
              </div>
            )} */}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-2" />
                <span>info@fengshui-koi.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-2" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-600 mr-2" />
                <span>
                  123 Feng Shui Street, Harmony District, Ho Chi Minh City
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Saturday: 9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2023 Feng Shui Koi Consulting System. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-red-600 hover:underline">
              Privacy Policy
            </a>
            {" | "}
            <a href="#" className="text-red-600 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
