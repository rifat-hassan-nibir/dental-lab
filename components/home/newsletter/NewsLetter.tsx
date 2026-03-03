"use client";

import { Mail, MoveRight } from "lucide-react";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-14 lg:py-20 overflow-hidden">
      <div className="body-container">
        <div className="bg-primary/5 shadow-sm rounded-2xl px-4 py-8 md:px-14 md:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-primary text-[12px] font-bold uppercase tracking-widest mb-3">
              <Mail className="w-3.5 h-3.5" />
              Newsletter
            </span>
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold leading-tight text-black mb-2">
              Stay Ahead in Dental Innovation
            </h2>
            <p className="font-inter text-paragraph text-[14px] md:text-[15px] leading-relaxed max-w-md">
              Get the latest case studies, lab tips, and exclusive offers delivered straight to your
              inbox. No spam — ever.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-auto md:min-w-120">
            {submitted ? (
              <div className="flex flex-col items-start gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-black font-semibold text-[15px]">You&apos;re subscribed!</p>
                <p className="font-inter text-paragraph text-[13px]">
                  Thanks for joining. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="font-inter flex-1 text-[14px] text-black placeholder:text-gray-400 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-primary/40 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-md hover:shadow-lg hover:cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe <MoveRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="font-inter text-[12px] text-paragraph mt-3">
              Join <span className="font-semibold text-black">1,700+ dental professionals</span>{" "}
              already subscribed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
