import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/brazil.png" 
                    alt="Portuguese" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Portuguese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/germany.png" 
                    alt="German" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    German
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/france.png" 
                    alt="French" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/spain.png" 
                    alt="Spanish" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image 
                    src="/zulu.png" 
                    alt="Zulu" 
                    height={32} 
                    width={40} 
                    className="mr-4 rounded-md"
                    />
                    Zulu
                </Button>
            </div>
        </footer>
    );
};