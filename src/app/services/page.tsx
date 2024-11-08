import React from "react";
import { ServiceSection } from "@/components/global/ServiceSection";
import SectionHeader from "@/components/global/SectionHeader";
import { Cta } from "@/components/global/Cta";

const Services = () => {
	return (
		<>
			<SectionHeader
				title="Services"
				subtitle="Explore our services. These are what we offer to our clients a company committed to delivering the best return on investment."
			/>
			<section className="px-8 py-8">
				<ServiceSection />
				<Cta />
			</section>
		</>
	);
};

export default Services;
