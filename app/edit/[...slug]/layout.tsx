import { Footer } from "@/components/Footer";

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
