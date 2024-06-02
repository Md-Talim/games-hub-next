import Query from "@/types/Query";

interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

async function fetchData<T>(url: string, query?: Query) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;

  const params = new URLSearchParams();
  params.set("key", apiKey || "");

  if (url !== "genres") {
    if (query?.genres) {
      params.set("genres", query.genres);
    }
    if (query?.ordering) {
      params.set("ordering", query.ordering);
    }
    if (query?.parent_platforms)
      params.set("parent_platforms", query.parent_platforms);
  }

  const response = await fetch(`${baseUrl}${url}?${params.toString()}`);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data: FetchDataResponse<T> = await response.json();

  return data.results;
}

export default fetchData;
