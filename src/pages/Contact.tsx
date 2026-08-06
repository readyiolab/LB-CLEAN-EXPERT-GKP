import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { MapPin, Phone, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

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
  service: z.string().refine((v) => services.includes(v), { message: "Please select a service" }),
});

type Errors = Partial<Record<"name" | "mobile" | "service", string>>;

const Contact = () => {
  const [form, setForm] = useState({ name: "", mobile: "", service: "" });
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

    const text = `Hello Cleaning Expert Gorakhpur! 👋%0AI would like to book a service:%0A%0A*Name:* ${encodeURIComponent(
      result.data.name
    )}%0A*Mobile No.:* ${encodeURIComponent(
      result.data.mobile
    )}%0A*Service Required:* ${encodeURIComponent(result.data.service)}`;

    window.open(`https://wa.me/919115339900?text=${text}`, "_blank");
    toast.success("Opening WhatsApp to send your booking enquiry!");
    setForm({ name: "", mobile: "", service: "" });
  };

  return (
    <Layout>
      <Seo
        title="Contact Cleaning Expert Gorakhpur | 24/7 Service"
        description="Contact Cleaning Expert Gorakhpur at Lohiya Enclave Phase 1. Quick booking via WhatsApp or Phone for 24/7 home and commercial cleaning."
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
                <a href="tel:+91-9115339900" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  Call 24/7: +91-9115339900
                </a>
              </li>
              <li className="flex items-center gap-4">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/919115339900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  WhatsApp: +91-9115339900
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="text-muted-foreground">Open 24 Hours / 7 Days a Week</p>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
              <a
                href="https://wa.me/919115339900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+91-9115339900"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Quick Lead Form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Book Cleaning Service
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details below for instant booking via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="mobile">Mobile No. *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  inputMode="tel"
                  maxLength={15}
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="mt-2"
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.mobile && <p className="mt-1 text-xs text-destructive">{errors.mobile}</p>}
              </div>

              <div>
                <Label htmlFor="service">Services Needed *</Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm({ ...form, service: v })}
                >
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

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full py-6 font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 text-base shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

