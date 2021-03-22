# clever-ts-utilities

This library is a set of typescript utilities to save time

## Release

### v1.6.0

- Addition of fileToString
- Addition of serializeFile
- Addition of fileModelToBlob
- Addition of buildDownloadFileUrl
- Addition of insertString
- Addition of enumarableFromListEqual
- Addition of deleteFromArray

### v1.5.0

- Addition of strRemoveBeginingCommonChars
- Addition of getCharsAt
- Addition of getValuesFromDictionnary
- Addition of isAllEqual

### v1.4.0

- Addition of fileToBase64 function
- Addition of fileToBlob function

### v1.3.0

- Addition of isUndefinedOrNull function
- Addition of isStringUndefinedOrNullOrEmpty function

### v1.2.0

- Addition of dateCompare function

### v1.0.1

- addition of documentation
- Change the paginate pageIndex property to indexPage
- Management of the undefined type in the copy function

### v1.0.0

- library deplyment

## Summary

### [Install](#Install)

### [Arrays](#Arrays)

- [paginate](#paginate)
- [strRemoveBeginingCommonChars](#strRemoveBeginingCommonChars)
- [getDictionnaryValues](#getDictionnaryValues)
- [isAllEqual](#isAllEqual)
- [enumarableFromListEqual](#enumarableFromListEqual)
- [deleteFromArray](#deleteFromArray)

### [Common](#Common)

- [copy](#copy)
- [isUndefinedOrNull](#isUndefinedOrNull)
- [jsType](#jsType)
- [getObjectByFieldValue](#getObjectByFieldValue)

### [Dates](#Dates)

- [dateOperation](#dateOperation)
- [dateCompare](#dateCompare)

### [Strings](#Strings)

- [cleanSpace](#cleanSpace)
- [thousandSeparator](#thousandSeparator)
- [isStringUndefinedOrNull](#isStringUndefinedOrNull)
- [getCharsAt](#getCharsAt)
- [insertString](#insertString)

### [Files](#Files)

- [fileToBase64](#fileToBase64)
- [fileToBlob](#fileToBlob)
- [fileToString](#fileToString)
- [serializeFile](#serializeFile)
- [fileModelToBlob](#fileModelToBlob)
- [buildDownloadFileUrl](#buildDownloadFileUrl)

## Install

run
`npm install clever-ts-utilities`. And then, use functions like this: `let clone = copy(data);`

## Arrays

### paginate

returns an items paginated array from an array, index page and size page

```typescript
paginate(params: {data: Array<any>, indexPage: number, pageSize: number}): Array<any>
```

### strRemoveBeginingCommonChars

Remove begening common chars of two strings

```typescript
strRemoveBeginingCommonChars(params: {[key: string]: string}): {[key: string]: string}
```

### getDictionnaryValues

Get values from a dictionary

```typescript
getValuesFromDictionnary(dic: {[key: string]: any}): any[]
```

### isAllEqual

Checks that all values in an array are equal

```typescript
isAllEqual(chars: any[]): boolean
```

### enumarableFromListEqual

Return a sublist from a list that has column that contain a certain value.

```typescript
enumarableFromListEqual(list: any[], column: string, value: any): any[]
```

### deleteFromArray

Delete items from an array.

```typescript
deleteFromArray(array: any[], item: any): any[] | boolean
```

## Common

### copy

By default javacript when assigning one variable to another, refers to the same memory address. This method allows you to copy the passed element whatever its type.

```typescript
copy(obj: any): any
```

### isUndefinedOrNull

deternine if data is undefined or null.

```typescript
isUndefinedOrNull(data: string): boolean
```

### jsType

Used to literally determine the type of the passed object (including the array type)

```typescript
jsType(obj: any): string
```

### getObjectByFieldValue

Get an object in a list by value of one field, like id.

```typescript
getObjectByFieldValue(obj: any[], fieldname: string, fieldvalue: any): any
```

## Dates

### dateOperation

Allows you to perform arithmetic operations on dates

```typescript
dateOperation(params: {date: Date, amount: number, operation: DateOperationEnum}): Date
```

### dateCompare

Allow you to quickly compare dates

```typescript
dateCompare(first: Date, operator: DateCompareOperator, second: Date): boolean
```

## Strings

### cleanSpace

Erase spaces in a character chain

```typescript
cleanSpace(str: string): string
```

### thousandSeparator

Adds thousands separators in a string

```typescript
thousandSeparator(nombre: string | number, args: ThousandSeparatorArg = {decimal: true, pres: 2, arround: false}): string
```

### isStringUndefinedOrNull

deternine if a string is undefined or null or empty.

```typescript
isStringUndefinedOrNullOrEmpty(data: string): boolean
```

### getCharsAt

Reduce string dictionnary to chars at specified position

```typescript
getCharsAt(paramList: {[key: string]: string}, ofs: number): {[key: string]: string}
```

### insertString

Insert string into another by refering an anchor around it string can be added.

```typescript
insertString(params: {
  str: string;
  toAdd: string;
  anchor: string;
  position: "before" | "after";
}): string
```

## Files

### fileToBase64

Convert file to base 64

```typescript
fileToBase64(file: File): Promise<string | any>
```

### fileToBlob

Convert file to blob

```typescript
fileToBlob(file: File): Promise<Blob | any>
```

### fileToString

Convert file to string

```typescript
fileToString(file: File): Promise<string | ArrayBuffer>
```

### serializeFile

Convert File objet to FileModel

```typescript
serializeFile(file: File): Promise<FileModel>
```

### fileModelToBlob

Convert FileModel objet to Blob

```typescript
fileModelToBlob(fileModel: FileModel): Blob
```

### buildDownloadFileUrl

Return the download url of a file

```typescript
buildDownloadFileUrl(file: FileModel): string
```
