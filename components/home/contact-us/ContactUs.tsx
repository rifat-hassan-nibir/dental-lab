"use client";

import Button from "@/components/common/ui/Button";
import { topbarInfo } from "@/constants";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-light-gray px-4 py-10 lg:py-16 xl:py-24">
      <div className="body-container">
        {/* ── Section Header ── */}

        {/* ── Two-Column Layout ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* ── LEFT: Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[38%] w-full"
          >
            <div className="text-black h-full">
              <h3 className="text-[22px] md:text-[32px] font-bold leading-tight mb-2">
                Get In Touch
              </h3>
              <p className="text-paragraph font-inter text-[14px] md:text-[15px] leading-relaxed mb-8">
                Our team is ready to consult on your cases, answer questions, and help you get
                started with a lab you can trust.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-paragraph font-bold mb-1">
                      Our Locations
                    </p>
                    <p className="text-black font-semibold text-[14px] leading-snug">
                      {topbarInfo.location.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-paragraph font-bold mb-1">
                      Call Us
                    </p>
                    <p className="text-black font-semibold text-[14px] leading-snug">
                      {topbarInfo.phone.phoneNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-paragraph font-bold mb-1">
                      Email Us
                    </p>
                    <p className="text-black font-semibold text-[14px] leading-snug break-all">
                      {topbarInfo.email.mailId}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-[11px] uppercase tracking-widest text-black font-bold mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {topbarInfo.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300"
                    >
                      <link.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[62%] w-full"
          >
            <div className="bg-white rounded-2xl p-7 md:p-9 shadow-lg shadow-gray-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Mail className="w-7 h-7" />
                  </div>
                  <h3 className="text-[22px] font-bold text-black mb-2">Message Received!</h3>
                  <p className="font-inter text-paragraph text-[15px] leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[13px] font-semibold text-black">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Dr. John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="font-inter text-[14px] text-black placeholder:text-gray-400 bg-light-gray border border-transparent rounded-xl px-4 py-3 outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Practice */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="practice" className="text-[13px] font-semibold text-black">
                        Practice Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="practice"
                        name="practice"
                        type="text"
                        required
                        placeholder="Smith Family Dental"
                        value={formData.practice}
                        onChange={handleChange}
                        className="font-inter text-[14px] text-black placeholder:text-gray-400 bg-light-gray border border-transparent rounded-xl px-4 py-3 outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[13px] font-semibold text-black">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="doctor@practice.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="font-inter text-[14px] text-black placeholder:text-gray-400 bg-light-gray border border-transparent rounded-xl px-4 py-3 outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[13px] font-semibold text-black">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="font-inter text-[14px] text-black placeholder:text-gray-400 bg-light-gray border border-transparent rounded-xl px-4 py-3 outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[13px] font-semibold text-black">
                      How Can We Support Your Practice? <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your case volume, the types of restorations you need, your current lab situation, or any specific questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      className="font-inter text-[14px] text-black placeholder:text-gray-400 bg-light-gray border border-transparent rounded-xl px-4 py-3 outline-none focus:border-primary/40 focus:bg-white transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <Button className="w-full px-10">
                      <div className="flex items-center gap-2">
                        Send Message <MoveRight className="w-4 h-4" />
                      </div>
                    </Button>{" "}
                    <p className="font-inter text-paragraph text-[12px] mt-3">
                      We respond within 1 business day. Your first case includes a{" "}
                      <span className="text-primary font-semibold">$150 lab credit</span>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
