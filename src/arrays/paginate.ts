
export function paginate(params: {data: Array<any>, pageIndex: number, pageSize: number}): Array<any> {
    if (!params.data) {
      return [];
    }
  
    const pages = params.data.slice(params.pageSize * params.pageIndex, params.pageSize * params.pageIndex + params.pageSize);
    return pages;
}

