"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

const routes = [
  {
    href: "/",
    label: "Dashboard",
  },
  {
    href: "/owners",
    label: "Owners & Residents",
  },
  {
    href: "/finances",
    label: "Finances",
  },
  {
    href: "/maintenance",
    label: "Maintenance",
  },
  {
    href: "/documents",
    label: "Documents",
  },
  {
    href: "/meetings",
    label: "Meetings",
  },
  {
    href: "/announcements",
    label: "Announcements",
  },
  {
    href: "/committee",
    label: "Committee",
  },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav pathname={pathname} />
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Building className="h-6 w-6" />
          <span className="font-bold inline-block">Strata Portal</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <Link href="/" className="flex items-center space-x-2">
        <Building className="h-6 w-6" />
        <span className="font-bold inline-block">Strata Portal</span>
      </Link>
      <div className="flex flex-col gap-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

