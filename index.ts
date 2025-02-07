/**
 * A generic type representing the result of an operation, encapsulating either a success or an error.
 * 
 * The `Result` type is a tuple that follows the pattern:
 * - `[T, null]` for successful operations, where `T` is the type of the successful result.
 * - `[null, E]` for failed operations, where `E` is the error type (defaults to `Error`).
 * 
 * This structure allows for easy handling of both success and failure cases without using exceptions.
 * 
 * @template T - The type of the successful result.
 * @template E - The type of the error, defaulting to `Error`.
 * 
 * @example
 * const result: Result<number> = [42, null]; // Success case
 * const errorResult: Result<number> = [null, new Error('Something went wrong')]; // Error case
 */
export type Result<T, E = Error> = [T, null] | [null, E];


/**
 * Wraps a promise to return a Result tuple, handling both success and failure cases.
 * 
 * The `unwrapPromise` function is useful for simplifying error handling in asynchronous code.
 * Instead of using `try...catch` blocks, this function captures any error thrown by the promise
 * and returns it in a standardized `Result` tuple.
 * 
 * @template T - The type of the successful result returned by the promise.
 * @template E - The type of the error, defaulting to `Error`.
 * 
 * @param promise - The promise to unwrap.
 * @returns A Promise resolving to a `Result` tuple with either the resolved value or the caught error.
 * 
 * @example
 * async function fetchData(): Promise<string> {
 *   // Simulate an API call
 *   return "Data fetched successfully";
 * }
 * 
 * async function example() {
 *   const [data, error] = await unwrapPromise(fetchData());
 *   
 *   if (error) {
 *     console.error("Error fetching data:", error);
 *   } else {
 *     console.log("Fetched data:", data);
 *   }
 * }
 * 
 * example();
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
 * The `unwrapSync` function is designed to simplify error handling for synchronous operations.
 * It executes the provided function and captures any exceptions thrown, returning the result
 * or error in a standardized `Result` tuple.
 * 
 * @template T - The type of the successful result returned by the function.
 * @template E - The type of the error, defaulting to `Error`.
 * 
 * @param fn - The synchronous function to execute.
 * @returns A `Result` tuple containing either the function's return value or the caught error.
 * 
 * @example
 * function calculate(): number {
 *   return 10 + 5;
 * }
 * 
 * function errorProneOperation(): number {
 *   throw new Error("Calculation failed");
 * }
 * 
 * const [result, error] = unwrapSync(calculate);
 * if (error) {
 *   console.error("Error:", error);
 * } else {
 *   console.log("Calculation result:", result); // Output: Calculation result: 15
 * }
 * 
 * const [result2, error2] = unwrapSync(errorProneOperation);
 * if (error2) {
 *   console.error("Error:", error2.message); // Output: Error: Calculation failed
 * } else {
 *   console.log("Result:", result2);
 * }
 */
export function unwrapSync<T, E = Error>(fn: () => T): Result<T, E> {
  try {
    return [fn(), null];
  } catch (err) {
    return [null, err as E];
  }
}