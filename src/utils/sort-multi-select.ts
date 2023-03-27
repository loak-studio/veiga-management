export const sortLinks = (arr: string[], rels: Object[]) => {
    return rels.sort((a: any, b: any) => {
        const index1 = arr.indexOf(a.uuid);
        const index2 = arr.indexOf(b.uuid);
        return index1 - index2;
    });
};