import { Button } from "@/components/ui/button";
import ManageVacancyCard from "@/components/ui/manage-vacancy-card";
import {fetchAllData , fetchDataById} from '../utils/fetchDataNeon'
// import { getAllVacancies } from "@/lib/contentful/api";
// TODO : import vacancies from Neon DB
import { Suspense } from "react";

// Enable static generation with ISR - regenerate every hour
export const revalidate = 3600;

export default async function ManageVacancies() {
  const res = await fetchAllData("vacancies");

  return (
    <div>
      <h1>Manage Vacancies</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {res.map((item, index: number) => (
            <ManageVacancyCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
