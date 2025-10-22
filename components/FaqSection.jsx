import FAQ from "./Faq";
import PageButton from "./PageButton";

const FaqSection = () => {
  return (
    <section className="w-full h-fit bg-black  flex items-center justify-center py-5">
      <div className="mx-auto max-w-7xl w-full h-full flex flex-col md:flex-row">
        <div className="flex items-start h-full w-full flex-col gap-7 py-5 px-10">
          <PageButton PageTitle={"FAQ"} />
          <h1 className="text-white text-5xl md:text-6xl ">
            Frequently <span className="text-gray">Asked Questions</span>
          </h1>
          <p className="text-gray w-90">
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>
        </div>

        <div className="flex items-start h-full w-full">
            <FAQ />
        </div> 
      </div>
    </section>
  );
};

export default FaqSection;
