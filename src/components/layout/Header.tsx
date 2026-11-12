import Link from "next/link";
import { landing } from "@/content/landing";

export function Header() {
  const { headerTitle, logoImage } = landing.site;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E8EB] bg-white">
      <div className="flex h-16 w-full items-center justify-center px-5">
        <Link href="/" className="inline-flex items-center gap-2">
          {logoImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoImage} alt="" className="h-8 w-auto" />
          ) : null}
          <span className="whitespace-nowrap text-base font-semibold leading-none text-[#16324F]">
            {headerTitle}
          </span>
        </Link>
      </div>
    </header>
  );
}
