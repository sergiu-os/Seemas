import HeroHeader from "@/components/headers/hero-header";
import PlatformOverviewHeroBg from "./components/hero-bg/platform-overview-hero-bg";
import { ROUTES } from "@/constants/routes";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center bg-neutral-50 h-[680px] md:h-[800px] xl:h-[1100px] overflow-hidden">
      <PlatformOverviewHeroBg />
      <HeroHeader
        className="mt-[100px] xl:mt-[140px] mx-[25px] md:mx-8 max-w-[704px] xl:max-w-[1172px] relative z-10"
        title="Audit-Ready Valuation & Transfer Pricing"
        subtitle="AI-powered documentation tax authorities and auditors can trust"
        description="The SeemaS Platform delivers clear, defensible valuation and transfer pricing analysis and documentation that eases engagement with tax authorities and auditors while uncovering opportunities across complex global operations"
        titleClassName="max-w-[600px] xl:max-w-[872px] text-h4"
        descriptionClassName="max-w-[600px] 2xl:max-w-[796px] px-0 mb-8 xl:mb-6 xl:text-body-l"
        buttonConfig={[
          {
            children: "Book a Demo",
            variant: "primary",
            size: "L",
            href: ROUTES.BOOK_DEMO,
          },
          {
            children: "Watch Video",
            variant: "outline",
            size: "L",
            href: "#"
          }
        ]}
      />

      <div className="absolute z-[2] left-1/2 scale-(2) -translate-x-1/2 bottom-0 md:-bottom-[100px] lgg:-bottom-[230px] xl:-bottom-[100px] 2xl:-bottom-[285px] w-full h-auto">
        <video autoPlay muted loop className="w-full h-auto object-cover pointer-events-none scale-[1.8] lg:scale-[1.5] lgg:scale-[1.1]">
          <source src="/assets/videos/tiles.mp4" type="video/mp4" />
        </video>
      </div>

     

      <div className="absolute z-[3] left-0 right-0 bottom-0 h-[324px] md:h-[444px] bg-[linear-gradient(180deg,rgba(250,250,250,0.00)_79.95%,#FAFAFA_100%)]" />
    </section>
  );
};

export default HeroSection;
