import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="w-500 py-4 mx-auto flex justify-between items-center text-sm text-slate-400/75">
            <div>
                {new Date().getFullYear()} &middot; Byeground &middot; <Link href="https://harveycoombs.com" target="_blank" rel="noopener" className="hover:underline">Harvey Coombs</Link>
            </div>

            <div>
                <Link href="https://github.com/harveycoombs/byeground" target="_blank" rel="noopener" className="text-lg cursor-pointer duration-150 hover:text-slate-500 active:text-slate-600"><FontAwesomeIcon icon={faGithub} /></Link>
            </div>
        </footer>
    );
}