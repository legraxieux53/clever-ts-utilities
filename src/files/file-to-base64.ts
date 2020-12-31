export function fileToBase64(file: File): Promise<string | any> {
    return new Promise(function (resolve: (arg0: string | ArrayBuffer) => any, reject: (arg0: ProgressEvent<FileReader>) => any) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
}
