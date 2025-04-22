import Link from "next/link";

import Logo from "@/app/components/common/Logo";

export default function Header() {
    return (
        <header className="w-fit mx-auto text-center select-none">
            <Link href="/" className="block w-fit duration-150 hover:opacity-80 active:opacity-70"><Logo width={360} height={88} /></Link>
            <div className="text-lg font-medium text-slate-400 mt-6">An AI background removal tool</div>
        </header>
    );
}