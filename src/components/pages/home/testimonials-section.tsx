import SectionWrapper from "@/components/sections/section-wrapper";
import TestimonialCard, {
  TestimonialCardProps,
} from "./components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const TestimonialsSection = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      quote:
        "“The SeemaS valuation tool provides our organization with accurate, easy to interpret real-time valuations for entities and loans, which has significantly improved our transaction planning and execution process.”",
      authorName: "Scott Yogerst",
      authorTitle: "Director of International Tax Planning, Johnson Controls International ",
    },
     {
      quote:
        "“SeemaS is a game changer. It delivers deeper, more transparent economic insight and audit ready transfer pricing documentation.”",
      authorName: "Mathijs de Vries",
      authorTitle: "V.P. of International Tax & Global Transfer Pricing, Paramount Global",
       logo: "/assets/paramount-logo.png"
    },
     {
      quote:
        "“AI is transforming economic analysis in global tax from manual, backward‑looking work into always‑on, rigorously data‑driven analysis, where AI agents handle the analytics and documentation, allowing tax teams reserve their judgment for the truly complex issues.”",
      authorName: "Jay Kushner ",
      authorTitle: " Ex-Senior V.P. of Global Taxation & Treasury, Viacom",
      logo: "/assets/viacom-logo.png"
    },
  ];

  return (
    <SectionWrapper className="relative xl:pt-[224px]">
      <section aria-label="Testimonials">
        <Carousel className="flex flex-col gap-8 md:gap-14">
          <div className="flex items-center gap-2.5">
            <h6 className="grow text-subtitle-xl md:text-h4 text-zinc-800 text-center xl:text-left">
              Testimonials
            </h6>

            <div className="hidden xl:inline-flex gap-2">
              <CarouselPrevious
                variant="layer"
                size="iconL"
                className="static translate-y-0 translate-x-0"
              >
                <IconChevronLeft />
              </CarouselPrevious>

              <CarouselNext
                variant="layer"
                size="iconL"
                className="static translate-y-0 translate-x-0"
              >
                <IconChevronRight />
              </CarouselNext>
            </div>
          </div>

          <CarouselContent containerClassName="overflow-visible md:-ml-6">
            {testimonials.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:pl-6 basis-full md:basis-auto"
              >
                <TestimonialCard {...t} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </SectionWrapper>
  );
};
export default TestimonialsSection;
