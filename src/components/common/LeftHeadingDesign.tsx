import Container from "../Container";

interface LeftHeadingDesignProps {
  title: string;
  highlightTitle: string;
  description: string;
}

const LeftHeadingDesign = ({
  title,
  highlightTitle,
  description,
}: LeftHeadingDesignProps) => {
  return (
    <Container>
      <div className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-start">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {title}
              <br />
              <span className="text-yellow-500">{highlightTitle}</span>
            </h2>
          </div>

          {/* Right Column - Description & Button */}
          <div className="space-y-6">
            <p className=" leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LeftHeadingDesign;
