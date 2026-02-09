import React from "react";
import HeroHeading, { HeroHeadingProps } from "./components/hero-heading";
import HeroContent from "./components/hero-content";
import { ImageProps } from "next/image";
import BgLinesXl from "./elements/bg-lines-xl";
import BgLinesMd from "./elements/bg-lines-md";
import BgLines from "./elements/bg-lines";
import { cn } from "@/lib/utils";
import BgLinesXl2 from "./elements/bg-lines-xl-2";
import BgLinesMd2 from "./elements/bg-lines-md-2";

interface ValuationSuiteProductHeroProps {
  backgroundImageProps?: ImageProps;
  wrapperClassName?: string;
  heroHeading: HeroHeadingProps;
  imageProps?: ImageProps;
  logoProps?: ImageProps;
  page?: "valuation-suite" | "transfer-pricing";
  bottomItems?: {
    title: string;
    icon: React.ReactNode;
  }[];
}

const ValuationSuiteProductHero = ({
  wrapperClassName,
  heroHeading,
  logoProps,
  imageProps, 
  bottomItems,
  page
}: ValuationSuiteProductHeroProps) => {
  return (
    <section className={cn("relative xl:h-[1166px] bg-neutral-50 overflow-hidden px-4 md:px-8 pt-32 xl:pt-[184px]", wrapperClassName)}>
      <BgLines className="w-[378px] h-[414px] absolute z-[2] pointer-events-none top-[97px] left-1/2 -translate-x-1/2 block md:hidden" />

      {page === "valuation-suite" ? (
        <>
          <BgLinesXl className="w-[1913px] h-[838px] absolute z-[2] pointer-events-none top-[90px] left-1/2 -translate-x-1/2 hidden 2xl:block" />
          <BgLinesMd className="w-[693px] h-[414px] xl:w-[1051px] xl:h-[600px] absolute z-[2] pointer-events-none top-[97px] left-1/2 -translate-x-1/2 hidden md:block 2xl:hidden" />
        </>
      ) : null}

        {page === "transfer-pricing" ? (
        <>
          <BgLinesXl2 className="w-[1913px] h-[838px] absolute z-[2] pointer-events-none top-0 left-1/2 -translate-x-1/2 hidden 2xl:block" />
          <BgLinesMd2 className="w-[693px] h-[414px] xl:w-[1051px] xl:h-[600px] absolute z-[2] pointer-events-none top-[97px] left-1/2 -translate-x-1/2 hidden md:block 2xl:hidden" />
        </>
      ) : null}

      <div className="h-full flex flex-col md:max-w-[704px] xl:max-w-[1232px] mx-auto">
        <HeroHeading {...heroHeading} contentWrapperClassName="relative z-10" headingLevel="h1" />

        <div className="relative z-10">
          <HeroContent imageProps={imageProps} logoProps={logoProps} />
          {bottomItems ? (
            <div className="flex flex-wrap gap-3 mt-6 justify-center mx-auto flex-col md:flex-row md:w-[508px] xl:w-[811px] xl:mt-24">
              {bottomItems.map((item) => (
                <div key={item.title} className="flex items-center gap-3 py-2 pl-2 pr-6 bg-[#FFFFFF33] rounded-xl border border-white">
                  <div className="flex p-2 bg-white rounded-lg ">{item.icon}</div>
                  <p className="text-body-s text-zinc-800" dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ValuationSuiteProductHero;
