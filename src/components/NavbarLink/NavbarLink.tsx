import { ubuntuBold } from "@/fonts/ubuntu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavbarLinkProps {
  href: string;
  children: string;
}

export const NavbarLink = ({ href, children: text }: INavbarLinkProps) => {
  const path = usePathname();
  const isCurrentPage = path === href;

  return (
    <li>
      <Link
        href={href}
        className={`navbarLink__link p-1 ${
          isCurrentPage ? "text-[var(--sky-color)]" : "text-black"
        }
        text-[1.17rem] hover:text-[var(--sky-color)] 
        transition-all 
        duration-500 ease-out ${ubuntuBold.className}
        `}
      >
        {text}
      </Link>
    </li>
  );
};
