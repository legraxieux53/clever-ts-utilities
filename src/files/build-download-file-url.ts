import { FileModel } from "./file.model";

export function buildDownloadFileUrl(file: FileModel): string {
  const blob = new Blob([atob(<string>file.data)], { type: file.type });
  return window.URL.createObjectURL(blob);
}
