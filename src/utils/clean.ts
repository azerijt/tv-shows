export function clean(summary: string): string {
  return summary
    .replaceAll("<p>", "")
    .replaceAll("</p>", "")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "");
}
