type InformationProps = {
  label: string;
  content: string;
  icon: React.ReactNode;
};

export default function Information({
  content,
  icon,
  label,
}: InformationProps) {
  return (
    <div className="h-[150px] w-[400px] rounded-[10px] border border-purple-200 p-[25px] shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-poppins text-xl font-semibold">{label}</h2>
        {icon}
      </div>
      <p className="font-semibold text-black/70">{content}</p>
    </div>
  );
}
