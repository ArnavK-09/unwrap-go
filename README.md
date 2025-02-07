<h1 align="center">🫧 unwrap-go 🫧</h1>
<h2 align="center">Go-like Error Handling for TypeScript/JavaScript</h2>

<p align="center">
    <img alt="hero" width="450" src="https://emoji-route.deno.dev/gif/🫧" />
</p>

> [!NOTE]
> 
> unwrap-go brings Go-style error handling to TypeScript and JavaScript, offering a clean and predictable way to handle errors using Result tuples. This approach eliminates the need for try-catch blocks and provides a more functional approach to error management.

## 🌟 Features

> **unwrap-go** features intro:

- **Go-Style Error Handling** – Uses tuple returns ([data, error]) similar to Go's approach, making error handling more explicit and predictable
- **Promise Support** – Built-in support for handling asynchronous operations with the same elegant syntax
- **Type Safety** – Full TypeScript support with generic types for both success and error cases
- **Zero Dependencies** – Lightweight implementation with no external dependencies
- **Synchronous Support** – Handle both async and sync operations with consistent patterns

## 💻 Installation

> You can add **unwrap-go** with one command via:

###### terminal

```bash
npm install --save-dev unwrap-go
bun add -D unwrap-go
deno add npm:unwrap-go
```

## 🚀 Usage

```typescript
import { unwrapPromise, unwrapSync } from 'unwrap-go';

// Async example
async function fetchData() {
  const [data, err] = await unwrapPromise(fetch('https://api.example.com/data'));
  if (err) {
    console.error('Failed to fetch:', err);
    return;
  }
  console.log('Data:', data);
}

// Sync example
function divide(a: number, b: number) {
  const [result, err] = unwrapSync(() => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  });
  if (err) {
    console.error('Division failed:', err);
    return;
  }
  console.log('Result:', result);
}
```

## 📚 API Reference

| Function | Description | Parameters | Return Type |
|----------|-------------|------------|-------------|
| `unwrapPromise<T, E>` | Wraps a promise to return a Result tuple | `promise: Promise<T>` | `Promise<Result<T, E>>` |
| `unwrapSync<T, E>` | Executes a synchronous function and returns a Result tuple | `fn: () => T` | `Result<T, E>` |
| `Result<T, E>` | Type representing either success (T) or error (E) | `T`: Success type<br>`E`: Error type | `[T, null] \| [null, E]` |

## 🛣️ Roadmap

|Task | Status |
| :---: | :---: |
|🧪 Add tests | 🔴 |
|🧪 Publish To JSR| 🟢 | 

## 💻 Contributing

> [!TIP]  
> We welcome contributions to improve **unwrap-go**! If you have suggestions, bug fixes, or new feature ideas, follow these steps:

1. **Fork the Repository**  you 
   Click the **Fork** button at the top-right of the repo page.

2. **Clone Your Fork**  
   Clone the repo locally: YOU

   ```bash
   git clone https://github.com/ArnavK-09/unwrap-go.git
   ```

3. **Create a Branch**  
   Create a new branch for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Changes**  
   Implement your changes (bug fixes, features, etc.).

5. **Commit and Push**  
   Commit your changes and push the branch:

   ```bash
   git commit -m "feat(scope): description"
   git push origin your-feature-branch
   ```

6. **Open a Pull Request**  
   Open a PR with a detailed description of your changes.

7. **Collaborate and Merge**  
   The maintainers will review your PR, request changes if needed, and merge it once approved.

## 🙋‍♂️ Issues

Found a bug or need help? Please create an issue on the [GitHub repository](https://github.com/ArnavK-09/unwrap-go/issues) with a detailed description.

## 👤 Author

<table>
  <tbody>
    <tr>
        <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArnavK-09"><img src="https://github.com/ArnavK-09.png?s=100" width="130px;" alt="Arnav K"/></a><br /><a href="https://github.com/ArnavK-09"<h4><b>Arnav K</b></h3></a></td>
    </tr>
  </tbody>
</table>

---

<h2 align="center">📄 License</h2>

<p align="center">
<strong>unwrap-go</strong> is licensed under the <code>Unlicense</code> License. See the <a href="https://github.com/ArnavK-09/unwrap-go/blob/main/LICENSE">LICENSE</a> file for more details.
</p>

---

<p align="center">
    <strong>🌟 If you find this project helpful, please give it a star on GitHub! 🌟</strong>
</p>