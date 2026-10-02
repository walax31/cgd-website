type SectionTitleProps = {
  title: string;
  description?: string;
  accentClassName?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  description,
  accentClassName = "bg-[#35c5b2]",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-[32px] font-medium leading-tight text-[var(--cgd-primary)]">
        {title}
      </h2>
      <div
        className={`mx-auto mt-3 h-[3px] w-[90px] rounded-full ${accentClassName}`}
      />
      {description ? (
        <p className="mt-4 text-[17px] leading-tight text-[#aaa]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
