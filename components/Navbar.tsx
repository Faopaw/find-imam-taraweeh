"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MainNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-md font-semibold text-foreground hover:text-primary transition-colors"
        >
          Home
        </Link>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/submit-vacancy" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Add Vacancy
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                legacyBehavior
                passHref
                className="text-foreground hover:text-primary transition-colors"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Navigate through the application
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <Link
                href="/submit-vacancy"
                className={cn(navigationMenuTriggerStyle(), "justify-start")}
                onClick={() => setShowMobileMenu(false)}
              >
                Add Vacancy
              </Link>
              <Link
                href="/contact"
                className={cn(navigationMenuTriggerStyle(), "justify-start")}
                onClick={() => setShowMobileMenu(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className={cn(navigationMenuTriggerStyle(), "justify-start")}
                onClick={() => setShowMobileMenu(false)}
              >
                FAQ
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  );
}
