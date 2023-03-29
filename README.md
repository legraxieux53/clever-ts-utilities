# clever-ts-utilities

This library is a set of typescript utilities to save time

## Summary

### [Install](#Install)

### [Arrays](#Arrays)

- [paginate](#paginate)
- [strRemoveBeginingCommonChars](#strRemoveBeginingCommonChars)
- [getDictionnaryValues](#getDictionnaryValues)
- [isAllEqual](#isAllEqual)
- [enumarableFromListEqual](#enumarableFromListEqual)
- [deleteFromArray](#deleteFromArray)
- [objectSort](#objectSort)

### [Common](#Common)

- [copy](#copy)
- [isUndefinedOrNull](#isUndefinedOrNull)
- [jsType](#jsType)
- [getObjectByFieldValue](#getObjectByFieldValue)
- [objectsEquals](#objectsEquals)
- [allObjectsEquals](#allObjectsEquals)
- [arrayObjectContain](#arrayObjectContain)
- [setObjectsEquals](#setObjectsEquals)

### [Dates](#Dates)

- [dateOperation](#dateOperation)
- [dateCompare](#dateCompare)
- [dateMonthPeriod](#dateMonthPeriod)
- [dateYearPeriod](#dateYearPeriod)

### [Strings](#Strings)

- [cleanSpace](#cleanSpace)
- [thousandSeparator](#thousandSeparator)
- [isStringUndefinedOrNull](#isStringUndefinedOrNull)
- [getCharsAt](#getCharsAt)
- [insertString](#insertString)
- [CharsCollection & CharsIteration](#CharsCollection_&_CharsIteration)
- [Trim Object](#Trim_Object)

### [Files](#Files)

- [fileToBase64](#fileToBase64)
- [fileToBlob](#fileToBlob)
- [fileToString](#fileToString)
- [serializeFile](#serializeFile)
- [fileModelToBlob](#fileModelToBlob)
- [buildDownloadFileUrl](#buildDownloadFileUrl)

### [HttpRequestPendingFacade](#HttpRequestPendingFacade)

- [getInstance](#getInstance)
- [incrementUrl](#incrementUrl)
- [decrementUrl](#decrementUrl)
- [isPending](#isPending)
- [addObserver](#addObserver)
- [removeObserver](#removeObserver)

### [CleanArchitectureBase](#CleanArchitectureBase)

- [BaseModelWithout-props](#BaseModelWithout-props)
- [BaseModel](#BaseModel)
- [ICommandHandler](#ICommandHandler)
- [IQueryHandler](#IQueryHandler)
- [IUsecase](#IUsecase)
- [IMapper](#IMapper)

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

Checks that all string values in an array are equal

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

### objectSort

Sort array by property.

```typescript
objectSort(arr: Array<any>, prop: string, isAscendent: boolean = true): Array<any>
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

### objectsEquals

Match two objects.

```typescript
objectsEquals(obj1: any, obj2: any, ignoreProps?: string[]): boolean
```

### allObjectsEquals

Match an object list.

```typescript
allObjectsEquals(objs: any[], ignoreProps?: string[]): boolean
```

### arrayObjectContain

Check if an array contain object

```typescript
arrayObjectContain(array: any[], obj: any, ignoreProps?: string[]): boolean
```

### setObjectsEquals

Execute a Set Javascript in scope of object

```typescript
setObjectsEquals(objs: any[], ignoreProps?: string[]): any[]
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

### dateMonthPeriod

Takes date and return first and last date of the current month

```typescript
dateMonthPeriod(date: Date): Array<Date>
```

### dateYearPeriod

Takes date and return first and last date of the current year

```typescript
dateYearPeriod(date: Date): Array<Date>
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

### CharsCollection\_&_CharsIteration

Manage iterations on chars in string

```typescript
const charCollection = new CharsCollection("alphabet");
const charIteration = charCollection.createIterator();
while (charIteration.hasMore()) {
  console.log(charIteration.getNext());
}
console.log(charIteration.toList());
```

### Trim_Object

Apply trim on all properties of an object

```typescript
trimObject(obj: any): any;

------------------------------------
// Example:

const obj: any = {
    alpha: '   dfg  dfg     ',
    beta: '     ddgdg    ',
    qs: [
        {
            al: ' dfgdf ',
            df: 2,
            azq: false
        },
        {
            al: ' dfgdf ',
            df: 2,
            azq: false
        },
    ],
    az: {
        alpha2: '   dgfgd dfgdfg  ',
        beta2: {
            alpha3: '   dfgdfg   dfg',
            sd: 12,
            xd: true,
        }
    }
}

console.log(trimObject(obj));

// Output:
// {
//   "alpha": "dfg  dfg",
//   "beta": "ddgdg",
//   "qs": [
//     {
//       "al": "dfgdf",
//       "df": 2,
//       "azq": false
//     },
//     {
//       "al": "dfgdf",
//       "df": 2,
//       "azq": false
//     }
//   ],
//   "az": {
//     "alpha2": "dgfgd dfgdfg",
//     "beta2": {
//       "alpha3": "dfgdfg   dfg",
//       "sd": 12,
//       "xd": true
//     }
//   }
// }
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

## HttpRequestPendingFacade

Class that manage http request pendings

### getInstance

Get instance of the class

### incrementUrl

Increment the url collection

### decrementUrl

Decrement the url collection

### isPending

Check if request is pending. It must be used in Observer class.

### addObserver

Register observer

### removeObserver

Unregister observer

## CleanArchitectureUtils
This is a set of utilities for clean architecture project.

### BaseModelWithout-props
This class maybe extended by models and define an update method to model

```Typescript
export class User extends BaseModelWithoutProps<User> {
  login: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

// Initialize a new instance of the User class:
const user: User = new User(); // option 1

const user: User = new User({  // option 2
  login: 'admin',
  email: 'admin@mail.com',
});

// Update the user instance:
user.update({
  login: 'admin 2',
});
```

### BaseModel

This class work like <code>BaseModelWithoutProps</code>. But add <code>id</code>, <code>createdAt</code>
and <code>updatedAt</code> properties to model

### ICommandHandler

This is a command handler interface for CQRS approach
```Typescript
interface ICommandHandler<C>
```

### IQueryHandler

This is a query handler interface for CQRS approach
```Typescript
interface IQueryHandler<Q, R>
```

### IUsecase

This is a usecase interface for hexagonal and approach
```Typescript
interface IUsecase<C, T>
```
### IMapper

This is a mapper interface for mapping between domain and data layer
```Typescript
interface IMapper<I, O>
```