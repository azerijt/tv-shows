export function clean(summary: string): string | undefined {
  if (summary !== null) {
    return summary
      .replaceAll("<p>", "")
      .replaceAll("</p>", "")
      .replaceAll("<b>", "")
      .replaceAll("</b>", "");
  }
}
