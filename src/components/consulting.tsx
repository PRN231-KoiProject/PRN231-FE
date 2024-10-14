import { Send } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Select = ({ children, ...props }: any) => (
  <select
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  >
    {children}
  </select>
);

const TextArea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
);

const Consulting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    birthYear: "",
    pondSize: "",
    currentKoi: "",
    concerns: "",
  });
  const [status, setStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (
      !formData.name ||
      !formData.email ||
      !formData.gender ||
      !formData.birthYear
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    // Simulating form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you for your consultation request. We will get back to you soon with personalized Feng Shui Koi advice.",
      });
      setFormData({
        name: "",
        email: "",
        gender: "",
        birthYear: "",
        pondSize: "",
        currentKoi: "",
        concerns: "",
      });
    }, 1000);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Feng Shui Koi Consultation
        </h1>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Request a Personalized Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
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
                Email *
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
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender *
              </label>
              <Select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div>
              <label
                htmlFor="birthYear"
                className="block text-sm font-medium text-gray-700"
              >
                Year of Birth *
              </label>
              <Select
                id="birthYear"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
                required
              >
                <option value="">Select year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <label
                htmlFor="pondSize"
                className="block text-sm font-medium text-gray-700"
              >
                Pond Size (if applicable)
              </label>
              <Input
                id="pondSize"
                name="pondSize"
                placeholder="e.g., 10x15 feet"
                value={formData.pondSize}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="currentKoi"
                className="block text-sm font-medium text-gray-700"
              >
                Current Koi (if any)
              </label>
              <Input
                id="currentKoi"
                name="currentKoi"
                placeholder="e.g., 3 red, 2 white"
                value={formData.currentKoi}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="concerns"
                className="block text-sm font-medium text-gray-700"
              >
                Specific Concerns or Questions
              </label>
              <TextArea
                id="concerns"
                name="concerns"
                rows={4}
                placeholder="Please share any specific concerns or questions you have about Feng Shui and Koi."
                value={formData.concerns}
                onChange={handleInputChange}
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Request Consultation
            </Button>
          </form>

          {/* {status && (
            <Alert
              className={`mt-4 ${
                status.type === "error" ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <AlertDescription>{status.message}</AlertDescription>
            </Alert>
          )} */}
        </div>
      </main>
    </div>
  );
};

export default Consulting;
