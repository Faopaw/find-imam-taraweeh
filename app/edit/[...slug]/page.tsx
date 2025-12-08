import { PageProps } from "@/.next/types/app/edit/[...slug]/page";
import { getVacancyById, getVacancyIds } from "@/lib/contentful/api";
import { Suspense } from "react";

export async function generateStaticParams() {
  const ids = await getVacancyIds();
  return ids.map((id) => ({ id }));
}

export default async function EditPage({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug?.join("/") || "home";

  const vacancy = await getVacancyById(pageSlug);
  if (!vacancy) {
    return <div>Vacancy not found</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <p>{vacancy.fields.masjid}</p>
        <p>{vacancy.fields.city}</p>
      </div>
    </Suspense>
  );
}
