export type Result<T, E = Error> = [T, null] | [null, E];

/**
 * Wraps a promise to return a Result tuple, handling both success and failure cases.
 * 
 * @param promise - The promise to unwrap.
 * @returns A Promise resolving to a Result tuple with either data or an error.
 */
export async function unwrapPromise<T, E = Error>(promise: Promise<T>): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err as E];
  }
}

/**
 * Executes a synchronous function and returns a Result tuple.
 * 
 * @param fn - The function to execute.
 * @returns A Result tuple with either the function result or an error.
 */
export function unwrapSync<T, E = Error>(fn: () => T): Result<T, E> {
  try {
    return [fn(), null];
  } catch (err) {
    return [null, err as E];
  }
}