import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with the{" "}
          <Link
            href="https://www.legislation.nsw.gov.au/view/html/inforce/current/act-2015-050"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Strata Schemes Management Act (2015)
          </Link>{" "}
          in mind.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Strata Management Portal
        </p>
      </div>
    </footer>
  )
}

