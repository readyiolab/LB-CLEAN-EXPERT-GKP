import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const services = [
  "Deep Home Cleaning",
  "Kitchen Deep Cleaning",
  "Bathroom Deep Cleaning",
  "Sofa Cleaning",
  "Carpet Cleaning",
  "Mattress Cleaning",
  "Curtain Cleaning",
  "Move-In / Move-Out Cleaning",
  "Villa & Apartment Cleaning",
  "Commercial Cleaning",
  "Office Cleaning",
  "Retail Store Cleaning",
  "Restaurant Cleaning",
  "School & College Cleaning",
  "Hospital & Clinic Cleaning",
  "Warehouse Cleaning",
  "Factory Cleaning",
  "Hotel & Guest House Cleaning",
  "Water Tank Cleaning",
  "Solar Panel Cleaning",
  "Post Construction Cleaning",
  "Others",
];

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+91[- ]?)?[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile number" }),
  address: z
    .string()
    .trim()
    .nonempty({ message: "Address is required" })
    .max(300, { message: "Address must be less than 300 characters" }),
  service: z.string().refine((v) => services.includes(v), { message: "Please select a service" }),
});

type Errors = Partial<Record<"name" | "mobile" | "address" | "service", string>>;

const Contact = () => {
  const [form, setForm] = useState({ name: "", mobile: "", address: "", service: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const message = `New cleaning enquiry:%0AName: ${encodeURIComponent(
      result.data.name
    )}%0AMobile: ${encodeURIComponent(result.data.mobile)}%0AAddress: ${encodeURIComponent(
      result.data.address
    )}%0AService: ${encodeURIComponent(result.data.service)}`;
    window.location.href = `mailto:cleaningexpert9@gmail.com?subject=${encodeURIComponent(
      "Cleaning Service Enquiry — " + result.data.service
    )}&body=${message}`;
    toast.success("Thanks! Your enquiry is ready to send. We'll respond within the hour.");
    setForm({ name: "", mobile: "", address: "", service: "" });
  };

  return (
    <Layout>
      <Seo
        title="Contact Cleaning Expert Gorakhpur | 24/7 Service"
        description="Contact Cleaning Expert Gorakhpur at Lohiya Enclave Phase 1. Call or submit our 4-field quick form for 24/7 home and commercial cleaning bookings."
        keywords={[
          "contact professional home cleaning company in gorakhpur",
          "24 hour cleaning services contact number gorakhpur",
          "book deep house cleaning service near me gorakhpur",
          "cleaning expert lohiya enclave phase 1 gorakhpur",
          "local cleaning service inquiry form near zoo gorakhpur",
        ]}
        path="/contact"
      />

      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-secondary/30">
        <div className="container-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Contact Cleaning Expert Gorakhpur
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-full grid gap-12 lg:grid-cols-2">
          {/* Business info */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              Business Contact Information
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Cleaning Expert Gorakhpur</p>
                  <p className="text-muted-foreground leading-relaxed">
                    32/301 Lohiya Enclave Phase 1, Opposite Zoo, Deoria bypass road, Gorakhpur,
                    Uttar Pradesh – 273016
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+91-9115339900" className="text-muted-foreground hover:text-foreground transition-colors">
                  +91-9115339900
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:cleaningexpert9@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  cleaningexpert9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">Open 24 Hours / 7 Days a Week</p>
              </li>
            </ul>
          </div>

          {/* Lead form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Quick Lead Capture</h2>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2"
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="mobile">Mobile No.</Label>
                <Input
                  id="mobile"
                  type="tel"
                  inputMode="tel"
                  maxLength={15}
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="mt-2"
                  placeholder="9115339900"
                />
                {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile}</p>}
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  rows={3}
                  maxLength={300}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="mt-2"
                  placeholder="Your address in Gorakhpur"
                />
                {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address}</p>}
              </div>

              <div>
                <Label htmlFor="service">Services Needed</Label>
                <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                  <SelectTrigger id="service" className="mt-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full py-6 font-semibold">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
