import { cn } from "@/lib/utils";
import {
  IconKey, IconChartArrows, IconGlobe, IconGlobeOff, IconDroplet, IconChartLine,  IconRocket, IconEyeDollar
} from "@tabler/icons-react";

export function Features() {
  const features = [
    {
      title: "Secure Transactions",
      description:
        "Protecting Your Wealth with Every Transaction. At YG Investment, we prioritize your security. Leveraging blockchain technology and high-grade encryption, we ensure that your assets stay safe and accessible only to you. Invest confidently, knowing your transactions are secure.",
      icon: <IconKey />,
    },
    {
      title: "Transparent Ledger ",
      description:
        "Visibility You Can Trust. YG Investment's commitment to transparency means you have a clear view of every transaction on our platform. With our blockchain-backed system, trust and accountability are built into every trade, making your investment journey transparent and reliable.",
      icon: <IconChartArrows />,
    },
    {
      title: "Global Accessibility",
      description:
        "Your Investments, Anywhere, Anytime. YG Investment opens the door to global markets, enabling you to invest without borders. No matter where you are, our platform empowers you to engage with a borderless financial landscape.",
      icon: <IconGlobe />,
    },
    {
      title: "Decentralization",
      description: "Put Control Back in Your Hands. At YG Investment, decentralization isn’t just a concept—it’s our foundation. By removing intermediaries, we give you direct control over your assets, letting you manage your investments on your terms.",
      icon: <IconGlobeOff />,
    },
    {
      title: "High Liquidity",
      description: "Seamless Transactions, Anytime. Our platform provides high liquidity, so you can buy or sell assets with ease. YG Investment is here to make your transactions smooth, efficient, and available when you need them.",
      icon: <IconDroplet />,
    },
    {
      title: "Portfolio Diversification",
      description:
        "Broaden Your Investment Horizons. YG Investment offers access to an alternative asset class, helping you diversify and strengthen your portfolio. Crypto investments can enhance resilience and growth, especially in volatile markets.",
      icon: <IconChartLine />,
    },
    {
      title: "Low Transaction Costs",
      description:
        "Minimize Fees, Maximize Value. With YG Investment, you benefit from low transaction costs, especially for cross-border transfers. Our goal is to make every transaction cost-effective, helping you keep more of what you earn.",
      icon: <IconEyeDollar />,
    },
    {
      title: "Advanced Technology",
      description: "Investing in Tomorrow’s Technology. YG Investment embraces cutting-edge financial technology, from smart contracts to tokenization, ensuring you have access to innovative tools that support your financial goals.",
      icon: <IconRocket />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-6 max-w-7xl mx-8">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-green-500">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
