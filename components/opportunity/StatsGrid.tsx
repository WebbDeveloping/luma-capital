export default function StatsGrid() {
  return (
    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-[#1b1308] sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-4">
      {[
        { label: "Fixed Annual Returns", value: "8-12% APY" },
        { label: "Minimum Investment", value: "$500" },
        { label: "First Payout", value: "60 days" },
        { label: "Investment Fees", value: "0%" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-y-3 border-l border-[#624315]/30 pl-6 font-sans"
        >
          <dt className="text-sm/6 text-[#5a4a36]">{stat.label}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-[#FFE898] font-serif">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
