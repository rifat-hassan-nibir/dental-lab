export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`hover:cursor-pointer bg-primary text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-102 shadow-md hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
