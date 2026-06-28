
import { Github, Linkedin, Mail, Phone, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useState } from "react";

const contactInfo = [
  { icon: <Phone className="h-4 w-4" />, label: "Phone", value: "+91 6380249114",               link: "tel:+916380249114",                  color: "#2563EB" },
  { icon: <Mail className="h-4 w-4" />,  label: "Email", value: "ganeshkrishnak202@gmail.com",   link: "mailto:ganeshkrishnak202@gmail.com", color: "#7C3AED" },
];

const socialLinks = [
  { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", link: "https://linkedin.com/in/k-ganesh-krishna-584652364" },
  { icon: <Github   className="h-4 w-4" />, label: "GitHub",   link: "https://github.com/Ganesh-krish" },
];

const inputCls = "w-full px-4 py-3 rounded-xl text-sm border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all";

export function Contact() {
  const sectionRef = useIntersectionObserver();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email") || !data.get("subject") || !data.get("message")) {
      toast.error("All fields are required.");
      return;
    }
    setSending(true);
    try {
      data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        formRef.current?.reset();
      } else {
        throw new Error(json.message);
      }
    } catch {
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950"
      style={{ "--section-accent": "hsl(4,56%,48%)", "--section-accent-end": "hsl(4,56%,65%)" } as { [key: string]: string }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000' fill-opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-16 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%)" }}
      />


      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-8">
              <div className="stagger-item">
                <span className="section-eyebrow">get in touch</span>
                <h2 className="section-title">Let's Work Together</h2>
                <div className="section-line" />
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm stagger-item">
                Open to backend engineering roles and API integration projects. Drop a message and I'll get back within 24 hours.
              </p>

              {/* Contact info cards */}
              <div className="flex flex-col gap-3 stagger-item">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}14`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono-code text-[10px] text-slate-400">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-sm font-medium hover:underline" style={{ color: item.color }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social buttons */}
              <div className="flex gap-3 stagger-item">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500/60 dark:hover:text-blue-400 bg-white dark:bg-slate-900/50 transition-all">
                      {s.icon} {s.label}
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="stagger-item">
              <div className="rounded-2xl border border-slate-100 dark:border-slate-700/40 bg-slate-50 dark:bg-slate-900/80 p-7">
                <p className="font-mono-code text-[10px] text-slate-400 mb-2">// send_message.php</p>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white font-display mb-6">Send a Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="Your Name" autoComplete="name" className={inputCls} required />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <input id="contact-email" name="email" type="email" placeholder="Your Email" autoComplete="email" className={inputCls} required />
                  </div>
                  <input type="hidden" name="subject" value="New message from portfolio contact form" />
                  <div>
                    <label htmlFor="contact-subject" className="sr-only">Subject</label>
                    <input id="contact-subject" name="topic" type="text" placeholder="Subject" className={inputCls} required />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <textarea id="contact-message" name="message" placeholder="Your Message" rows={5} className={`${inputCls} resize-none`} required />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 h-11 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                  >
                    {sending ? <><Loader2 size={15} className="animate-spin" /> Sending...</> : <>Send Message <ArrowRight size={15} /></>}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
