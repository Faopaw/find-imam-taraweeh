import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 sm:py-4 ">
      <div className="flex min-h-svh w-full justify-center md:p-10">
        <div className="w-full max-w-3xl">
          <Card>
            <div className="p-6">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Contact us for any questions or feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  We can be reached via email. Click the button below to send us
                  an email
                </p>
                <Button variant="secondary" asChild>
                  <a href="mailto:contact@findtaraweehimam.com">
                    <Mail size={16} />
                    <span>Email Us</span>
                  </a>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
