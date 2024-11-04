"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { FlipWords } from "../ui/flip-words";

export function Hero2() {
	const images = [
		"/p1.png",
		"/p2.png",
		"/p3.png",
		"/p4.png",
		"/p5.png",
		"/p6.png",
	];
	const words = ["Top", "Premier", "Elite", "Foremost", "Ultimate", "Pinnacle"];
	return (
		<ImagesSlider className="h-[40rem] mb-6" images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center">
				<motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
					"Leading the Future of Wealth: <br /> The World’s
					<FlipWords words={words} />
					Crypto Investment Platform"
				</motion.p>
				<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
					<span>Join now →</span>
					<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
				</button>
			</motion.div>
		</ImagesSlider>
	);
}
