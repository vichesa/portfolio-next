// Import required dependencies using ESM syntax
import fetch from "node-fetch";

export async function getGuestBookData() {
  try {
    // Use relative URL to the API route
    const res = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      // Handle non-successful HTTP responses
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    // Sort data if needed
    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return data;
  } catch (error) {
    // Handle errors and provide a more specific error message
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
}
