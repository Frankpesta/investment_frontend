import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";
import { MenuIcon } from 'lucide-react';
import { Button } from "../ui/button";

const MobileNav = () => {
	return (
		<nav className="md:hidden">
			<Sheet>
				<SheetTrigger className="align-middle">
					<MenuIcon className="w-[24px] h-[24px]" />
				</SheetTrigger>
				<SheetContent className="flex flex-col gap-6 md:hidden">
					<Image
						src={"/next.svg"}
						alt="logo"
						width={128}
						height={28}
					/>
					<Separator className="border border-gray-50" />
					<NavItems />
          <div className="md:hidden flex flex-col gap-4">
          <Button size={'lg'} className="bg-green-500 text-white">Register</Button>
          <Button size={'lg'}>Login</Button>
          </div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
