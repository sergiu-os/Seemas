import Quote from "@/components/testimonial/quote";
import Image from "next/image";
const QuoteSectionDamodaran = () => {
  return (
   <>
     <Quote
      quote="AI is shifting competitive advantage from merely owning large amounts of data to effectively analyzing it, enabling experts to transform numbers into timely, actionable insights."
      authorName="XYZ"
      authorTitle=""
      logo={
        <Image
          src="/assets/johnson-controls-logo-1.png"
          alt="Johnson Controls"
          width={90}
          height={40}
        />
      }
      withSeparator={true}
      authorClassName="text-center"
      className="pb-[160px] md:pt-[200px] py-[100px]"
    />
   </>
  );
};
export default QuoteSectionDamodaran;
