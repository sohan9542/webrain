import { createClient } from 'next-sanity';
import groq from 'groq';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-03-04",

});

export async function get__all__post() {
  const allPosts = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      "mainImage": mainImage.asset->url,
      title,
      slug,
      "author": *[_type == 'author' && _id == ^.author._ref][0] {
        // Fetch specific author fields you need
        name, // Example: Fetching the author's name
        // Add other author fields as needed
      },
      "categories": *[_type == 'category' && _id in ^.categories[]._ref] {
        // Fetch specific category fields
        title, // Example: Fetching the category name
        // Add other category fields as needed
      },
      publishedAt,
      content,
      meta
    }`
  );

  // Process the fetched data to include full author and image data


  return allPosts;
}