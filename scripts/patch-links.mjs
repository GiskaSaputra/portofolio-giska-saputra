import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "euawkbtw",
  dataset: "production",
  token: "skRQZlKs2zL0DwL8Q8UBRr1z5zd7glghsyA8eAxi9z2UlMR7sMcVectvoduztug7AF3bB6NbTQtWlduo4jpDnm3b1Cq082zr0CMak5QJh93CFhTerNvfMBZmyCyTaL0TcvdiZPkIJ01OovH4pG5XDCiJQ4fSkPIgY9Bm5TquulFcj7HogLmI",
  useCdn: false,
  apiVersion: "2024-01-01"
});

async function run() {
  const profileId = await client.fetch('*[_type == "profile"][0]._id');
  if (profileId) {
    await client.patch(profileId).set({
      instagram: "https://www.instagram.com/syzdna_/",
      linkedin: "https://www.linkedin.com/in/sayyida-zidna-nadhifatul-ulya-348468331/"
    }).commit();
    console.log("✅ Links updated in Sanity!");
  }
}
run();
