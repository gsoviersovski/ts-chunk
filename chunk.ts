//TODO: Convert this into an extended array module with chunk, count (with and without filter), reject, last, groupBy, pluck, none

declare global {
  interface Array<T> {
    chunk(chunkSize: number): Array<Array<T>>;
  }
}

Array.prototype.chunk = function<T>(chunkSize: number) {
  const array = this as T[];
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
