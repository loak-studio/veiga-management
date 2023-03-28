export const sortLinks = (arr: string[], rels: Object[]) => {
  const sorted = rels
    .filter((rel) => arr.includes(rel.uuid))
    .sort((a: any, b: any) => {
      const index1 = arr.indexOf(a.uuid);
      const index2 = arr.indexOf(b.uuid);
      return index1 - index2;
    });
  return sorted;
};
