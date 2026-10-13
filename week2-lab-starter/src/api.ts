export async function fetchTodo(id: number): Promise<unknown | null> {
  console.log("starting fetch...");
  console.log("This line runs before the server answers");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );

    if (!response.ok) {
      console.log("Status:", response.status);
      return null;
    }

    const data: unknown = await response.json();

    console.log("Got data:", data);

    return data;
  } catch (err) {
    console.error("Fetch failed due to network error:", err);
    return null;
  }
}
await fetchTodo(1);
