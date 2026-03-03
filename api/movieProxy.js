// api/movieProxy.js
export default async function handler(req, res) {
  // Extract 'path' and any other params (like 'page' or 'query')
  const { path, ...queryParams } = req.query;
  const apiKey = process.env.TMDB_API_KEY; // We'll set this in Vercel settings

  if (!path) {
    return res.status(400).json({ error: "API path is required" });
  }

  // Build the TMDB URL with your hidden API key
  const queryString = new URLSearchParams({
    api_key: apiKey,
    ...queryParams,
  }).toString();

  const url = `https://api.themoviedb.org/3/${path}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Send data back to your React app
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from TMDB" });
  }
}