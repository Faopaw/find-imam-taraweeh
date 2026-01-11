"use client";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function ManageVacancyCard({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  const router = useRouter();
  
  const onClickDelete = async (item: any, index: number) => {
    const confirm = prompt("Are you sure you want to delete this vacancy?");
    if (confirm !== item.fields.pinCode) {
      alert("Incorrect pin code, please try again");
      return;
    }
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
      router.push("/");
    } catch (error) {
      console.error("Error deleting vacancy:", error);
      alert(
        error instanceof Error ? error.message : "Failed to delete vacancy"
      );
    }
  };
  return (
    <div
      key={index}
      className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 shadow-md max-w-sm"
    >
      <h2>{item.masjid}</h2>
      <p>{item.city}</p>

      <Button variant="outline" onClick={() => onClickDelete(item, index)}>
        Delete Vacancy
      </Button>
    </div>
  );
}
