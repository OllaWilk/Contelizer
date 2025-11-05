export function readTextFile(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read file."));
    reader.onload = (ev) => resolve((ev.target?.result as string) ?? "");
    reader.readAsText(file);
  });
}
