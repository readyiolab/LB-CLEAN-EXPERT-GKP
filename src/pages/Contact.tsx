import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { MapPin, Mail, Phone, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
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
import { cn } from "@/lib/utils";

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

const stepOneSchema = z.object({
  service: z.string().refine((v) => services.includes(v), { message: "Please select a service" }),
  address: z
    .string()
    .trim()
    .nonempty({ message: "Address is required" })
    .max(300, { message: "Address must be less than 300 characters" }),
});

const stepTwoSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  mobile: z
    .string()
    .trim()
    .regex(/^(\+91[- ]?)?[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile number" }),
});

type Errors = Partial<Record<"name" | "mobile" | "address" | "service", string>>;

const steps = [
  { id: 1, label: "What & where" },
  { id: 2, label: "Your details" },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", mobile: "", address: "", service: "" });
  const [errors, setErrors] = useState<Errors>({});

  const collect = (issues: z.ZodIssue[]) => {
    const fieldErrors: Errors = {};
    issues.forEach((issue) => {
      const key = issue.path[0] as keyof Errors;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    });
    return fieldErrors;
  };

  const handleNext = () => {
    const result = stepOneSchema.safeParse(form);
    if (!result.success) {
      setErrors(collect(result.error.issues));
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = stepTwoSchema.safeParse(form);
    if (!result.success) {
      setErrors(collect(result.error.issues));
      return;
    }
    setErrors({});
    const message = `New cleaning enquiry:%0AName: ${encodeURIComponent(
      result.data.name
    )}%0AMobile: ${encodeURIComponent(result.data.mobile)}%0AAddress: ${encodeURIComponent(
      form.address
    )}%0AService: ${encodeURIComponent(form.service)}`;
    window.location.href = `mailto:cleaningexpert9@gmail.com?subject=${encodeURIComponent(
      "Cleaning Service Enquiry — " + form.service
    )}&body=${message}`;
    toast.success("Thanks! Your enquiry is ready to send. We'll respond within the hour.");
    setForm({ name: "", mobile: "", address: "", service: "" });
    setStep(1);
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

          {/* 2-step booking form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Book in Two Quick Steps
            </h2>

            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-8">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-3 flex-1 last:flex-none">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                        step >= s.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {step > s.id ? <Check className="w-3.5 h-3.5" /> : s.id}
                    </span>
                    <span
                      className={cn(
                        "text-xs font-medium tracking-wide",
                        step >= s.id ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i === 0 && (
                    <span className="h-px flex-1 bg-border relative overflow-hidden">
                      <span
                        className={cn(
                          "absolute inset-0 bg-primary origin-left transition-transform duration-500",
                          step > 1 ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <AnimatePresence mode="wait" initial={false}>
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div>
                      <Label htmlFor="service">Services Needed</Label>
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

                    <Button
                      type="button"
                      size="lg"
                      onClick={handleNext}
                      className="w-full rounded-full py-6 font-semibold"
                    >
                      Continue <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div className="rounded-xl bg-secondary/40 p-4 text-sm">
                      <p className="font-semibold text-foreground">{form.service}</p>
                      <p className="text-muted-foreground mt-1 leading-relaxed">{form.address}</p>
                    </div>

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

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="rounded-full py-6 px-6 font-semibold"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <Button type="submit" size="lg" className="flex-1 rounded-full py-6 font-semibold">
                        Confirm Booking Request
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="mt-5 text-xs text-muted-foreground text-center">
              Prefer to talk?{" "}
              <a href="tel:+91-9115339900" className="text-foreground font-medium hover:text-primary">
                Call 24/7: +91-9115339900
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
