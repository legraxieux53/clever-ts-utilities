import { FileModel } from "./file.model";

export function fileModelToBlob(fileModel: FileModel): Blob {
  return new Blob([atob(<string>fileModel.data)], { type: fileModel.type });
}
