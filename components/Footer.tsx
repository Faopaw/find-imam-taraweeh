import Link from "next/link";
import { Mail } from "lucide-react";
import { siInstagram, siX, siYoutube } from "simple-icons";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-sans font-bold mb-4">
              Find Taraweeh Imam
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Assisting Imams and Masjids around the world to connect with each
              other to provide services to the community.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  View Vacancies
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-vacancy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Add Vacancy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pretentious. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
