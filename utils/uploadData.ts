import * as contentfulManagement from "contentful-management";
import { VacancyFormValues } from "../types";

export default async function uploadData(
  values: VacancyFormValues
): Promise<void> {
  const accessToken = process.env.PERSONAL_ACCESS_TOKEN;
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const ENVIRONMENTID = "master"; // this can be in .env or here if you want to change on the fly

  if (!accessToken || !spaceId) {
    throw new Error("Missing Contentful credentials");
  }

  const client = contentfulManagement.createClient({ accessToken });
  console.log("Theses are the values: ", values);

  try {
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment(ENVIRONMENTID);
    const entry = await environment.createEntry("requestType", {
      fields: {
        masjid: {
          "en-US": `${values.masjid}`,
        },
        city: {
          "en-US": `${values.city}`,
        },
        address: {
          "en-US": `${values.address}`,
        },
        requirements: {
          "en-US": `${values.requirements}`,
        },
        contactName: {
          "en-US": `${values.contactName}`,
        },
        contactMobileNumber: {
          "en-US": `${values.contactNumber}`,
        },
        details: {
          "en-US": `${values.details}`,
        },
      },
    });
    console.log("Entry created successfully:", entry);
  } catch (error) {
    console.error("Error uploading data:", error);
    throw error;
  }
}
