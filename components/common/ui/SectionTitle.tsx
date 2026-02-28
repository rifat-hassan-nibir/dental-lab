export default function SectionTitle({
  title,
  description,
  isCenter = true,
  className,
}: {
  title: string;
  description: string;
  isCenter?: boolean;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2
        className={`text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-semibold leading-tight ${isCenter ? "text-center" : "text-left"} ${isCenter ? "md:w-175" : ""} ${isCenter ? "mx-auto" : ""} ${className}`}
      >
        {title}
      </h2>
      <p
        className={`text-paragraph text-base lg:text-[18px] font-normal leading-normal ${isCenter ? "text-center" : "text-left"} ${isCenter ? "md:w-150" : ""} ${isCenter ? "mx-auto" : ""} ${className}`}
      >
        {description}
      </p>
    </div>
  );
}
