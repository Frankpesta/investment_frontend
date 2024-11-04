"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Testimonial() {
	return (
		<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
		</div>
	);
}

const testimonials = [
	{
		quote:
			"YG Investment made crypto investing easy to understand and accessible. My portfolio has grown steadily, and I feel more in control of my financial future. Highly recommend it to anyone looking to start in crypto!",
		name: "Emma R.",
		title: "Marketing Specialist",
	},
	{
		quote:
			"Thanks to YG Investment, I’ve diversified my investments beyond traditional stocks. Their platform is secure and transparent, and it’s incredible to see my assets grow without all the usual financial barriers.",
		name: "Liam P.",
		title: "Software Engineer",
	},
	{
		quote:
			"I was initially nervous about crypto, but YG Investment’s customer support and education resources changed that. I feel empowered and informed, and my earnings have exceeded my expectations!",
		name: "Sophia W.",
		title: "Freelance Graphic Designer",
	},
	{
		quote:
			"As a professional in finance, I was impressed by YG Investment’s advanced technology and market insights. It’s a trustworthy platform that’s helped me expand my investments with confidence.",
		name: "James T.",
		title: "Financial Analyst",
	},
	{
		quote:
			"YG Investment has been a game-changer for me. Their easy-to-use platform helped me navigate crypto markets and grow my savings far more effectively than I imagined.",
		name: "Olivia L.",
		title: "Business Consultant",
	},
	{
		quote:
			"Crypto seemed daunting until I joined YG Investment. Their expert guidance and low fees have made investing in digital assets simple and profitable. My portfolio has never looked better!",
		name: "Daniel M.",
		title: "Entrepreneur",
	},
	{
		quote:
			"With YG Investment, I can invest globally without the usual banking limitations. Their decentralized approach has given me complete control over my assets, and my financial growth speaks for itself.",
		name: "Ava C.",
		title: "Data Analyst",
	},
	{
		quote:
			"As someone who’s new to crypto, YG Investment made everything so straightforward. I’ve seen my savings grow consistently, and I’m excited about what’s next!",
		name: "Michael B.",
		title: "Teacher",
	},
	{
		quote:
			"I’ve tried other platforms, but YG Investment’s transparency and security are unmatched. It’s been a dependable partner in helping me build a future for my family.",
		name: "Emily H.",
		title: "Small Business Owner",
	},
	{
		quote:
			"YG Investment has helped me make the most of my retirement savings. The platform’s ease of use and customer support have made investing in crypto a stress-free experience, and the returns have been fantastic!",
		name: "Jacob S.",
		title: "Retired Professional",
	},
];
