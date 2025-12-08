import { getContentfulClient, getPreviewClient } from "./client";
import type {
  ContentfulEntry,
  VacancyFields,
} from "@/types";
import type { Entry } from "contentful";

type FetchOptions = {
  preview?: boolean;
};

function getClient(options?: FetchOptions) {
  return options?.preview ? getPreviewClient() : getContentfulClient();
}

export function isContentfulConfigured(): boolean {
  return Boolean(
    process.env.CONTENTFUL_SPACE_ID &&
    process.env.CONTENTFUL_DELIVERY_TOKEN &&
    process.env.CONTENTFUL_PREVIEW_TOKEN
  );
}

export async function getAllVacancies(
  options?: FetchOptions & { limit?: number }
): Promise<Entry<VacancyFields>[]> {
  if (!isContentfulConfigured()) {
    return [];
  }

  try {
    const client = getClient(options);

    const response = await client.getEntries<VacancyFields>({
      content_type: "requestType",
      order: ["-sys.createdAt"],
      include: 3,
      limit: options?.limit,
    });

    return response.items;
  } catch (error) {
    console.error("[Contentful] Error fetching vacancies:", error);
    return [];
  }
}

export async function getVacancyBySlug(
  slug: string,
  options?: FetchOptions
): Promise<Entry<VacancyFields> | null> {
  if (!isContentfulConfigured()) {
    return null;
  }
  try {
    const client = getClient(options);

    const query: Record<string, unknown> = {
      content_type: "requestType",
      "fields.slug": slug,
      include: 3,
      limit: 2,
    };

    const response = await client.getEntries<VacancyFields>(query);

    return response.items[0] ?? null;
  } catch (error) {
    console.error("[Contentful] Error fetching vacancy:", error);
    return null;
  }
}

export async function getVacancySlugs(): Promise<string[]> {
  if (!isContentfulConfigured()) {
    return [];
  }

  try {
    const client = getContentfulClient();

    const response = await client.getEntries<ContentfulEntry>({
      content_type: "requestType",
      select: ["fields.slug"],
    });

    return response.items
      .map((item) => item.fields.slug)
      .filter((slug): slug is string => typeof slug === "string");
  } catch (error) {
    console.error("[Contentful] Error fetching vacancy slugs:", error);
    return [];
  }
}

export async function getVacancyById(
  id: string,
  options?: FetchOptions
): Promise<Entry<VacancyFields> | null> {
  if (!isContentfulConfigured()) {
    return null;
  }
  try {
    const client = getClient(options);

    const query: Record<string, unknown> = {
      content_type: "requestType",
      "sys.id": id,
      include: 3,
      limit: 2,
    };

    const response = await client.getEntries<VacancyFields>(query);

    return response.items[0] ?? null;
  } catch (error) {
    console.error("[Contentful] Error fetching vacancy:", error);
    return null;
  }
}

export async function getVacancyIds(): Promise<string[]> {
  if (!isContentfulConfigured()) {
    return [];
  }

  try {
    const client = getContentfulClient();

    const response = await client.getEntries<ContentfulEntry>({
      content_type: "requestType",
      select: ["sys.id"],
    });

    return response.items.map((item) => item.sys.id as string);
  } catch (error) {
    console.error("[Contentful] Error fetching vacancy slugs:", error);
    return [];
  }
}
