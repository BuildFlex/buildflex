export function sortByOrder(
  arr: { order: number }[],
  order: 'asc' | 'desc' = 'asc',
): any[] {
  return arr.slice().sort((a, b) => {
    if (order === 'asc') {
      if (a.order < b.order) return -1;
      if (a.order > b.order) return 1;
      return 0;
    } else {
      if (a.order < b.order) return 1;
      if (a.order > b.order) return -1;
      return 0;
    }
  });
}
