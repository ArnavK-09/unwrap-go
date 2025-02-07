type Result<T, E = Error> = [T, null] | [null, E] 
  
 async function unwrapPromise<T>(promise: Promise<T>): Promise<Result<T>> { 
   return promise 
     .then<[T, null]>((data) => [data, null]) 
     .catch<[null, Error]>((err) => [null, err]) 
 } 
  
 function unwrapSyncError<T>(fn: () => T): Result<T> { 
   try { 
     return [fn(), null] 
   } catch (err) { 
     return [null, err as Error] 
   } 
 }