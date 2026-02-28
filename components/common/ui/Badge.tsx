export default function Badge({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center w-fit gap-2 mb-3 py-2 px-4 rounded-full bg-light-gray ${className}`}
    >
      {icon}
      <p className="text-black font-light text-[13px] leading-none">{title}</p>
    </div>
  );
}
