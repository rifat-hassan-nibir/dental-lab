import { cn } from "@/lib/utils";

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
      className={cn(
        "flex justify-center items-center bg-primary text-white px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 hover:opacity-90 hover:scale-102 shadow-md hover:shadow-lg hover:cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
