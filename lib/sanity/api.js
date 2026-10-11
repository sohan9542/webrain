import { createClient } from "next-sanity";
import groq from "groq";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-03-04",
});

/** Shared GROQ projection for blog posts. */
const postFields = `
  _id,
  "mainImage": mainImage.asset->url,
  title,
  slug,
  "author": *[_type == 'author' && _id == ^.author._ref][0] {
    name
  },
  "categories": *[_type == 'category' && _id in ^.categories[]._ref] {
    title
  },
  publishedAt,
  content,
  meta,
  metadesc
`;

/**
 * Run a Sanity GROQ query and surface a consistent error when the request fails.
 * @template T
 * @param {string} query
 * @param {Record<string, unknown>} [params]
 * @returns {Promise<T>}
 */
async function fetchSanity(query, params = {}) {
  if (!projectId || !dataset) {
    throw new Error(
      "Missing Sanity configuration. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.",
    );
  }

  try {
    return await client.fetch(query, params);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Sanity error";
    throw new Error(`Sanity request failed: ${message}`);
  }
}

/** @returns {Promise<Array<Record<string, unknown>>>} */
export async function getAllPosts() {
  return fetchSanity(`*[_type == "post"]{ ${postFields} }`);
}

/** @returns {Promise<Array<Record<string, unknown>>>} */
export async function getLatestPosts() {
  return fetchSanity(
    `*[_type == "post"] | order(publishedAt desc) [0..2] { ${postFields} }`,
  );
}

/**
 * @param {string} slug
 * @returns {Promise<Record<string, unknown> | null>}
 */
export async function getPostBySlug(slug) {
  const posts = await fetchSanity(
    `*[_type == "post" && slug.current == $slug]{ ${postFields} }`,
    { slug },
  );
  return posts[0] || null;
}

/** @returns {Promise<Array<Record<string, unknown>>>} */
export async function getAllCategories() {
  return fetchSanity(`*[_type == "category"]`);
}

/** @returns {Promise<Array<Record<string, unknown>>>} */
export async function getProjects() {
  return fetchSanity(`*[_type == "projects"] | order(publishedAt desc) [0..5] {
    _id,
    "mainImage": mainImage.asset->url,
    name,
    publishedAt,
    view,
    desc,
    live
  }`);
}

/** @returns {Promise<Array<Record<string, unknown>>>} */
export async function getReviews() {
  return fetchSanity(`*[_type == "reviews"]{
    _id,
    "mainImage": mainImage.asset->url,
    name,
    position,
    review,
    link,
    "logo": logo.asset->url
  }`);
}
