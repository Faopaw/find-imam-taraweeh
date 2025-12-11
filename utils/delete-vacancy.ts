import * as contentfulManagement from "contentful-management";

export default async function deleteVacancy(id: string): Promise<void> {
  const client = contentfulManagement.createClient({
    accessToken: process.env.PERSONAL_ACCESS_TOKEN as string,
  });

  try {
    const space = await client.getSpace(
      process.env.CONTENTFUL_SPACE_ID as string
    );
    const environment = await space.getEnvironment("master");

    const entry = await environment
      .getEntry(id)
      .then((entry) => entry.unpublish())
      .then(() => console.log("Entry unpublished."));
    console.log("Vacancy unpublished successfully:", entry);
    return entry;
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    throw error;
  }
}
