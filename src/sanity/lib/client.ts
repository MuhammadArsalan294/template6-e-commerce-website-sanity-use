{/*
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
*/}

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "kbp3arwz", // Ensure env variables exist
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // Default to production
  apiVersion: "2023-01-01",
  useCdn: true,
});
