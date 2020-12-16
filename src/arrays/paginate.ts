
export function paginate(params: {data: Array<any>, indexPage: number, pageSize: number}): Array<any> {
    if (!params.data) {
      return [];
    }
  
    const pages = params.data.slice(params.pageSize * params.indexPage, params.pageSize * params.indexPage + params.pageSize);
    return pages;
}

