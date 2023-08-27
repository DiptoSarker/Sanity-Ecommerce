import { createClient } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "v3vmw53j",
  dataset: "production",
  apiVersion: "2023-05-25",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
