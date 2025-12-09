import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";

const faq = [
  {
    question: "Do I have to sign up to register a vacancy?",
    answer:
      "No, you may register a vacancy by simply filling out the registration form. Signing up is optional.",
  },
  {
    question:
      "I registered a vacancy, why is it not appearing on the homepage?",
    answer:
      "Once you have submitted a vacancy it will be processed by the team. Once approved it will appear on the home page of the app.",
  },
  {
    question: "How do I edit or delete a vacancy?",
    answer:
      "You can edit or delete a vacancy by contacting the team via email.",
  },
];

export default function FAQ() {
  return (
    <>
      <Hero title="FAQ" description="Frequently asked questions" />
      <div className="flex w-full justify-center md:p-10">
        <div className="w-full max-w-3xl">
          <Card>
            <CardContent>
              <div className="my-4 grid grid-cols-1 gap-6">
                {faq.map((item) => (
                  <div key={item.question}>
                    <h6 className="text-base font-semibold">{item.question}</h6>
                    <p className="text-sm text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
