
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const contactInfo = [
  { icon: <Phone className="h-4 w-4" />,  label: "Phone",    value: "+91 6380249114",                                  link: "tel:+916380249114",                  color: "#60a5fa" },
  { icon: <Mail className="h-4 w-4" />,   label: "Email",    value: "ganeshkrishnak202@gmail.com",                     link: "mailto:ganeshkrishnak202@gmail.com", color: "#a78bfa" },
  { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "155, Arunachalam Street, Idayankulam, Srivilliputtur", link: undefined,                      color: "#34d399" },
];

const socialLinks = [
  { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", link: "https://linkedin.com/in/k-ganesh-krishna-584652364" },
  { icon: <Github   className="h-4 w-4" />, label: "GitHub",   link: "https://github.com/Ganesh-krish" },
];

const inputCls = "w-full px-4 py-3 rounded-xl text-sm border border-slate-700/60 bg-slate-800/60 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10 transition-all";

export function Contact() {
  const sectionRef = useIntersectionObserver();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email") || !data.get("subject") || !data.get("message")) {
      toast.error("All fields are required.");
      return;
    }
    toast.success("Message sent!");
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040d1a 0%, #0b0929 55%, #04121f 100%)", "--section-accent": "hsl(4,56%,48%)", "--section-accent-end": "hsl(4,56%,65%)" } as { [key: string]: string }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='white' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-16 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)" }}
      />

      {/* Floating code — top right */}
      <div className="absolute top-10 right-8 font-mono text-[11px] text-slate-700 select-none pointer-events-none leading-7 hidden lg:block">
        <div style={{ color: "#334155" }}>{"// contact.php"}</div>
        <div style={{ color: "#1e3a5f" }}>{"function sendMessage($data) {"}</div>
        <div style={{ color: "#1e3a5f" }}>{"  $mail = new PHPMailer();"}</div>
        <div style={{ color: "#1e3a5f" }}>{"  return $mail->send();"}</div>
        <div style={{ color: "#1e3a5f" }}>{"}"}</div>
      </div>
      {/* Floating code — bottom left */}
      <div className="absolute bottom-12 left-6 font-mono text-[11px] select-none pointer-events-none leading-7 hidden lg:block">
        <div style={{ color: "#1e3a5f" }}>{"POST /api/contact HTTP/1.1"}</div>
        <div style={{ color: "#14532d" }}>{"→ 200 OK · message queued"}</div>
      </div>

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-8">
              <div className="stagger-item">
                <p
                  className="font-mono-code text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#60a5fa" }}
                >
                  // get in touch
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-4">
                  Let's Work<br />Together
                </h2>
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)" }}
                />
              </div>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm stagger-item">
                Open to backend engineering roles and API integration projects. Drop a message and I'll get back within 24 hours.
              </p>

              {/* Contact info cards */}
              <div className="flex flex-col gap-3 stagger-item">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 backdrop-blur-sm hover:-translate-y-0.5 transition-transform duration-200"
                    style={{ background: "rgba(15,23,42,0.6)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}18`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono-code text-[10px] text-slate-500">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-sm font-medium hover:underline" style={{ color: item.color }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social buttons */}
              <div className="flex gap-3 stagger-item">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-700 text-slate-300 hover:border-blue-500/60 hover:text-blue-400 transition-all"
                            style={{ background: "rgba(15,23,42,0.5)" }}>
                      {s.icon} {s.label}
                    </button>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="stagger-item">
              <div
                className="rounded-2xl border border-slate-700/40 backdrop-blur-sm p-7"
                style={{ background: "rgba(13,17,23,0.8)" }}
              >
                <p className="font-mono-code text-[10px] text-slate-600 mb-2">// send_message.php</p>
                <h3 className="font-bold text-xl text-white font-display mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input
                      id="contact-name" name="name" type="text"
                      placeholder="Your Name" autoComplete="name"
                      className={inputCls}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <input
                      id="contact-email" name="email" type="email"
                      placeholder="Your Email" autoComplete="email"
                      className={inputCls}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="sr-only">Subject</label>
                    <input
                      id="contact-subject" name="subject" type="text"
                      placeholder="Subject"
                      className={inputCls}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <textarea
                      id="contact-message" name="message"
                      placeholder="Your Message" rows={5}
                      className={`${inputCls} resize-none`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 h-11 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                  >
                    Send Message <ArrowRight size={15} />
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
