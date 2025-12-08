"use client";
import { Button } from "./button";

export default function ManageVacancyCard({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  const onClickDelete = async (item: any, index: number) => {
    try {
      const response = await fetch("/api/remove-vacancy", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: item.sys.id }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete vacancy");
      }

      // Refresh the page to show updated list
      window.location.reload();
    } catch (error) {
      console.error("Error deleting vacancy:", error);
      alert(error instanceof Error ? error.message : "Failed to delete vacancy");
    }
  };
  return (
    <div
      key={index}
      className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 shadow-md max-w-sm"
    >
      <h2>{item.fields.masjid?.["en-US"]}</h2>
      <p>{item.fields.city?.["en-US"]}</p>

      <Button variant="outline" onClick={() => onClickDelete(item, index)}>
        Delete Vacancy
      </Button>
    </div>
  );
}
