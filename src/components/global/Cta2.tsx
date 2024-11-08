import React from "react";
import Cover from "../ui/cover";

export function CTA() {
	return (
		<div>
			<h1 className="my-4 text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
				Build Your Financial Dreams <br /> at{" "}
				<Cover className="text-green-500">YG Investment</Cover>
			</h1>
		</div>
	);
}
