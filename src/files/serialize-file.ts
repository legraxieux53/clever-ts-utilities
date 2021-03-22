import { jsType } from "../common";
import { fileToString } from "./file-to-string";
import { FileModel } from "./file.model";

export async function serializeFile(file: File): Promise<FileModel> {
  const fileBs4 = (await fileToString(file)) as string;
  if (jsType(fileBs4) !== "string") {
    throw new Error("File not retrieived");
  }
  const fileModel = new FileModel();
  fileModel.name = file.name;
  fileModel.type = file.type;
  fileModel.size = file.size;
  fileModel.file = file;
  fileModel.extension =
    "." + file.name.split(".")[file.name.split(".").length - 1];
  fileModel.lastModified = file.lastModified;
  fileModel.data = fileBs4.split("base64,")[1];
  fileModel.content = atob(fileModel.data);
  fileModel.fullDataUrl = fileBs4;
  const blob = new Blob([atob(fileModel.data)], { type: file.type });
  fileModel.downloadUrl = window.URL.createObjectURL(blob);
  return fileModel;
}
