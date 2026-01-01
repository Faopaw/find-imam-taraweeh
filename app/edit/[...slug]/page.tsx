// import { getVacancyById, getVacancyIds } from "@/lib/contentful/api";
// TODO : import vacancies by ID from Neon DB
import { Suspense } from "react";
import ManageVacancyCard from "@/components/ui/manage-vacancy-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const ids = await getVacancyIds();
  return ids.map((id) => ({ slug: [id] }));
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function EditPage({ params }: PageProps) {
  const { slug } = await params;
  const id = slug?.[0];
  
  if (!id) {
    notFound();
  }
  
  const vacancy = await getVacancyById(id);
  if (!vacancy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 sm:py-4 ">
      <div className="flex min-h-svh w-full justify-center md:p-10">
        <div className="w-full max-w-3xl">
          <Card>
            <div className="p-6">
              <CardHeader>
                <CardTitle>Edit Vacancy</CardTitle>
                <CardDescription>
                  Your unique pincode is required to remove this vacancy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading...</div>}>
                  <div>
                    <ManageVacancyCard item={vacancy} index={0} />
                  </div>
                </Suspense>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
