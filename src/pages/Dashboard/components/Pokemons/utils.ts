


export const getPokeId = (url:string):string => {
    const match = url.match(/\/pokemon\/(\d+)\//);

    if (match) {
      const id = match[1]
    return id
    } else {
        return ""
    }
}
