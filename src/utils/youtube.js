// utils/youtube.js
export function getYouTubeId(url) {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}
