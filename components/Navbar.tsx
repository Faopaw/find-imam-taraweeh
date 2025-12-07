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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MainNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showFAQ, setShowFAQ] = useState<boolean>(false);

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
              <Button
                variant="ghost"
                onClick={() => setShowFAQ(true)}
                className={cn(navigationMenuTriggerStyle(), "h-9")}
              >
                FAQ
              </Button>
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
              <Button
                variant="ghost"
                onClick={() => {
                  setShowMobileMenu(false);
                  setShowFAQ(true);
                }}
                className={cn(navigationMenuTriggerStyle(), "justify-start")}
              >
                FAQ
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* FAQ Dialog */}
      <Dialog open={showFAQ} onOpenChange={setShowFAQ}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>FAQ</DialogTitle>
            <DialogDescription>Frequently asked questions</DialogDescription>
          </DialogHeader>
          <div className="mt-1">
            <div>
              <h6 className="text-base font-semibold mb-2">
                Do I have to sign up to register a vacancy?
              </h6>
              <p className="text-sm text-muted-foreground">
                No, you may register a vacancy by simply filling out the
                registration form. Signing up is optional.
              </p>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2">
                I registered a vacancy, why is it not appearing on the homepage?
              </h6>
              <p className="text-sm text-muted-foreground">
                Once you have submitted a vacancy it will be processed by the
                team. Once approved it will appear on the home page of the app.
              </p>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2">
                I registered a vacancy, why is it not appearing on the homepage?
              </h6>
              <p className="text-sm text-muted-foreground">
                Once you have submitted a vacancy it will be processed by the
                team. Once approved it will appear on the home page of the app.
              </p>
            </div>
            <div>
              <h6 className="text-base font-semibold mb-2">
                How do I edit or delete a vacancy?
              </h6>
              <p className="text-sm text-muted-foreground">
                You can edit or delete a vacancy by contacting the team via{" "}
                <a href="mailto:contact@gmail.com"> email</a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
