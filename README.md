# clever-ts-utilities

This library is a set of typescript utilities to save time

## Release

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

## Install

run
`npm install clever-ts-utilities`

## Arrays

### paginate

returns an items paginated array from an array, index page and size page

```typescript
paginate(params: {data: Array<any>, indexPage: number, pageSize: number}): Array<any>
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
