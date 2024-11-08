import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { CheckIcon } from "lucide-react";
import { cardDetails } from "@/constants";

const PlansSection = () => {
	return (
		<section className="px-8 py-4">
			<h2 className="text-2xl md:text-5xl text-black dark:text-white font-bold pb-4 md:pb-0">
				Plans That Fit You the Best.
			</h2>
			<div className="flex flex-col md:flex-row items-center justify-center gap-4">
				{cardDetails.map((card) => (
					<CardContainer className="inter-var" key={card.header}>
						<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:![350px] h-auto rounded-xl p-6 border">
							<CardItem
								translateZ="50"
								className="text-xl font-bold text-neutral-600 dark:text-white">
								{card.header}
								<h2 className="text-3xl">
									{card.minPrice} - {card.maxPrice}
								</h2>
							</CardItem>
							<CardItem
								translateZ={"60"}
								className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
								{card.text}
								<ul className="my-4 flex flex-col gap-2">
									{card.incentives.map((item) => (
										<li key={item.id} className="flex items-center gap-2">
											<CheckIcon className="text-green-500" /> {item.name}
										</li>
									))}
								</ul>
							</CardItem>
							<div className="flex justify-end items-center mt-8">
								<CardItem
									translateZ={20}
									as={"button"}
									className="px-4 py-2 rounded-xl bg-green-500 text-white font-bold">
									Get Started Now
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				))}
			</div>
		</section>
	);
};

export default PlansSection;
