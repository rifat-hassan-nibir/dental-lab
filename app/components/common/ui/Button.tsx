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
    <button className={`bg-primary text-white px-4 py-2 rounded-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
