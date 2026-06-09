import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

export function Certificates() {
  const animationRef = useIntersectionObserver();
  const carouselRef = useRef<any>(null);

  const certificates = [
    {
      id: 1,
      title: "JavaScript",
      issuer: "Guvi Geek Networks",
      date: "June 25 2023",
      image: "/c1.webp",
    },
    {
      id: 2,
      title: "Html & CSS",
      issuer: "Guvi Geek Networks",
      date: "June 29 2023",
      image: "/c2.webp",
    },
    {
      id: 3,
      title: "Git",
      issuer: "Guvi Geek Networks",
      date: "June  25 2023",
      image: "/c3.webp",
    },
    {
      id:4,
      title:"MondoDb",
      issuer:"Guvi Geek Networks",
      date:"June 23 2023",
      image:"/c4.webp",
    },
     {
      id:5,
      title:"Spring Boot",
      issuer:"Guvi Geek Networks",
      date:"December 26 2023",
      image:"/c5.webp",
    },
     {
      id:6,
      title:"MYSQL",
      issuer:"Guvi Geek Networks",
      date:"June 24 2023",
      image:"/c6.webp",
    },
     {
      id:7,
      title:"Data Analatics Using Pandas",
      issuer:"Guvi Geek Networks",
      date:"June 25 2023",
      image:"/c7.webp",
    },
     {
      id:8,
      title:"Cyber Security & Ethical Hacking For Beginners",
      issuer:"Guvi Geek Networks",
      date:"January 5 2024",
      image:"/c8.webp",
    },
     {
      id:9,
      title:"Java",
      issuer:"Guvi Geek Networks",
      date:"November 22  2023",
      image:"/c9.webp",
    },
    {
      id:10,
      title:"Servlts & JSP",
      issuer:"Guvi Geek Networks",
      date:"December 14 2024",
      image:"/c10.webp",
    },
    {
       id:11,
       title:"Vue.js",
       issuer:"Guvi Geek Networks",
       date:"july 30 2023",
       image:"/c11.webp",
    }

  ];


  return (
    <section id="certificates" className="py-16 md:py-24" ref={animationRef}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">Certificates</h2>
        <p className="text-muted-foreground">My verified certificates</p>
      </div>

      <div className="relative max-w-2xl mx-auto px-4">
        <Carousel ref={carouselRef}>
          <CarouselContent>
            {certificates.map((cert) => (
              <CarouselItem
                key={cert.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <Card className="overflow-hidden shadow-lg rounded-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover"
                  />
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Issued by: {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Date: {cert.date}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
      
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 sm:block" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:block" />
        </Carousel>
      </div>
    </section>
  );
}
