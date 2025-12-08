import { Button } from "@/components/ui/button";
import ManageVacancyCard from "@/components/ui/manage-vacancy-card";
import loadData from "@/utils/loadData";
import { Suspense } from "react";

export default async function ManageVacancies() {
  const res = await loadData();

  return (
    <div>
      <h1>Manage Vacancies</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {res.map((item: any, index: number) => (
            <ManageVacancyCard key={index} item={item} index={index} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
