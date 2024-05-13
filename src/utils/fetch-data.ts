interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

async function fetchData<T>(url: string) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;

  const response = await fetch(`${baseUrl}${url}?key=${apiKey}`);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data: FetchDataResponse<T> = await response.json();

  return data.results;
}

export default fetchData;
