import TimeLine from "@/components/global/TimeLine";
import { Features } from "@/components/global/Feature";
import { Hero2 } from "@/components/global/Hero2";
import { Testimonial } from "@/components/global/Testimonial";
import { Cta } from "@/components/global/Cta";
import PlansSection from "@/components/global/Plans";

export default function Home() {
	return (
		<div className="">
			{/* <Hero /> */}
			<Hero2 />
			<TimeLine />
			<section className="py-4 px-8">
				<h2 className="text-3xl md:text-6xl text-black dark:text-neutral-200 pb-6 font-bold">
					Why We Stand Out?
				</h2>
				<Features />
			</section>

			<PlansSection />
			<section className="py-4 px-8">
				<h2 className="text-3xl md:text-6xl text-black dark:text-neutral-200 pb-6 font-bold">
					What Do People Say About Us?
				</h2>
				<Testimonial />
			</section>
			<Cta />
		</div>
	);
}
