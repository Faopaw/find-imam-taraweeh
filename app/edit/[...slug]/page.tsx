// import { getVacancyById, getVacancyIds } from "@/lib/contentful/api";
// TODO : import vacancies by ID from Neon DB
"use client";
import { Suspense, useState } from "react";
import ManageVacancyCard from "@/components/ui/manage-vacancy-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function EditPage({ params }: PageProps) {
  const { slug } = await params;
  const id = slug?.[0];

  if (!id) {
    notFound();
  }

  // Placeholder for fetching vacancy data
  interface Vacancy {
    contactName: string;
    contactNumber: string;
    // Add other properties as needed
  }

  const vacancy: Vacancy = {
    contactName: "John Doe",
    contactNumber: "1234567890",
    // Provide mock data or fetch real data here
  };
  if (!vacancy) {
    notFound();
  }

  // Delete handler
  const handleDelete = async (
    contactName: string,
    contactNumber: string,
    pinCode: string
  ) => {
    try {
      const response = await fetch("/api/delete-vacancy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contactName, contactNumber, pinCode }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Optionally, redirect or refresh the page after deletion
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error deleting vacancy:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:py-4">
      <div className="flex min-h-svh w-full justify-center md:p-10">
        <div className="w-full max-w-3xl">
          <Card>
            <div className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Edit Vacancy
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  Update the details of your vacancy below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className="mb-8">
                    <ManageVacancyCard item={vacancy} index={0} />
                  </div>

                  <div className="border-t border-gray-200 my-6"></div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-black-600">
                      Delete Vacancy
                    </h3>
                    <p className="text-sm text-red-600 mb-4">
                      Enter your contact details and pin code to delete this vacancy.
                    </p>
                    <DeleteVacancyForm
                      contactName={vacancy.contactName}
                      contactNumber={vacancy.contactNumber}
                      onDelete={handleDelete}
                    />
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

// DeleteVacancyForm Component
function DeleteVacancyForm({
  contactName,
  contactNumber,
  onDelete,
}: {
  contactName: string;
  contactNumber: string;
  onDelete: (
    contactName: string,
    contactNumber: string,
    pinCode: string
  ) => void;
}) {
  const [pinCode, setPinCode] = useState("");
  const [inputContactName, setInputContactName] = useState(contactName);
  const [inputContactNumber, setInputContactNumber] = useState(contactNumber);

  const handleSubmit = () => {
    onDelete(inputContactName, inputContactNumber, pinCode);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Contact Name"
        value={inputContactName}
        onChange={(e) => setInputContactName(e.target.value)}
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Contact Number"
        value={inputContactNumber}
        onChange={(e) => setInputContactNumber(e.target.value)}
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Pin Code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
        className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete Vacancy
      </button>
    </div>
  );
}
