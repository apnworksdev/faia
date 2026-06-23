/** Extract a Vimeo video ID from a URL or bare ID string. */
export function getVimeoId(url?: string): string | null {
  if (!url) return null;

  const trimmed = url.trim();
  const bareId = trimmed.match(/^\d+$/)?.[0];
  if (bareId) return bareId;

  const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match?.[1] ?? null;
}

export function getVimeoEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    badge: "0",
    autopause: "0",
    player_id: "0",
    app_id: "58479",
  });

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
}
