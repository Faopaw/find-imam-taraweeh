import VacancyForm from "../../components/VacancyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Imam App - Register Vacancy",
  description: "Find an Imam to lead taraweeh salah",
};

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <VacancyForm />
    </div>
  );
}