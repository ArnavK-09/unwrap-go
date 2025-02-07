type Result<T, E = Error> = [T, null] | [null, E] 
  
export async function unwrapPromise<T>(promise: Promise<T>): Promise<Result<T>> { 
   return promise 
     .then<[T, null]>((data) => [data, null]) 
     .catch<[null, Error]>((err) => [null, err]) 
 } 
  
export function unwrapSync<T>(fn: () => T): Result<T> { 
   try { 
     return [fn(), null] 
   } catch (err) { 
     return [null, err as Error] 
   } 
 }