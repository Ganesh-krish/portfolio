
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 6380249114",
      link: "tel:+916380249114",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "ganeshkrishnak202@gmail.com",
      link: "mailto:ganeshkrishnak202@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "155, Arunachalam Street, Idayankulam, Srivilliputtur",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "k-ganesh-krishna584652364",
      link: "https://www.linkedin.com/in/k-ganesh-krishna584652364",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "Ganesh-krish",
      link: "https://github.com/Ganesh-krish",
    },
  ];


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();  
  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    toast.error("All fields are required.");
    return;
  }

  
  toast.success("Message send Successfullly");
  form.reset();
};


  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Contact Me</h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {contactInfo.map((item, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-primary hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 w-full max-w-4xl flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    {social.icon}
                    {social.title}
                  </Button>
                </a>
              ))}
            </div>
            
            <div className="mt-12 w-full">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-center mb-6">Send Me a Message</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md border bg-background/50"
                        required
                      />
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md border bg-background/50"
                        required
                      />
                    </div>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 rounded-md border bg-background/50"
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      className="w-full p-3 rounded-md border bg-background/50 resize-none"
                      required
                    ></textarea>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
