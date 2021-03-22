export class FileModel {
  type: string;
  file: File;
  name: string;
  size: number;
  extension: string;
  lastModified: number;
  downloadUrl: string;
  data: string | ArrayBuffer;
  content: string;
  fullDataUrl: string;
}
