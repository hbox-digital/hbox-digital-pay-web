import Container from "../Container";

interface CenterHeadingDesignProps {
  title: string;
  highlightTitle?: string;
  description: string;
}

const CenterHeadingDesign = ({
  title,
  highlightTitle,
  description,
}: CenterHeadingDesignProps) => {
  return (
    <Container>
      <div className="mx-auto mb-16 lg:mb-20 flex flex-col items-center text-center gap-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          <span>{title}</span>{" "}
          {highlightTitle && (
            <span className="bg-yellow-500 bg-clip-text text-transparent">
              {highlightTitle}
            </span>
          )}
        </h2>

        <p className="leading-relaxed max-w-3xl">{description}</p>
      </div>
    </Container>
  );
};

export default CenterHeadingDesign;
