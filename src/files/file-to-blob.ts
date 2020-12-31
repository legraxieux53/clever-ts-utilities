export function fileToBlob(file: File): Promise<Blob | any> {
    return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => resolve(new Blob([reader.result]));
            reader.onerror = error => reject(error);
        });
}
