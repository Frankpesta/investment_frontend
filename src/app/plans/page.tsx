import { CTA } from "@/components/global/Cta2";
import PlansSection from "@/components/global/Plans";
import SectionHeader from "@/components/global/SectionHeader";
import { Testimonial } from "@/components/global/Testimonial";
import LampDemo from "@/components/ui/lamp";
import React from "react";

const Plans = () => {
	return (
		<>
			<SectionHeader
				title="Plans"
				subtitle="Explore our list of investment plans. Select the one that best suits your financial goals and continue to start earning returns."
			/>
			<div className="py-8 px-1">
				<PlansSection />
			</div>
			<section className="py-4 px-8">
				<h2 className="text-3xl md:text-6xl text-black dark:text-neutral-200 pb-6 font-bold">
					What Do People Say About Us?
				</h2>
			</section>
			<Testimonial />
			<CTA />
		</>
	);
};

export default Plans;
