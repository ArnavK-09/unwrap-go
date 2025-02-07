
<h1 align="center">🗣️ unwrap-go 🗣️</h1>
<h2 align="center">Go-like Error Handling for TypeScript/JavaScript</h2><p align="center">
    <img alt="hero" width="450" src="https://emoji-route.deno.dev/gif/🗣️" />
</p> 

> [!NOTE]
>
> unwrap-go brings Go-style error handling to TypeScript and JavaScript, allowing you to handle synchronous and asynchronous operations with a clear, type-safe Result pattern.



## 🌟 Features

> unwrap-go simplifies error handling by providing clear, concise patterns:



- **Go-like Error Handling** – Use tuples to manage success and error states without exceptions.

- **Full Type Safety** – Provides strong typings for both synchronous and asynchronous operations.

- **Minimalistic & Lightweight** – No dependencies, just plug and play.


## 💻 Installation

> You can add unwrap-go with one command via:



###### terminal

```bash
# Install via npm
npm i unwrap-go

# Or using bun
bun add unwrap-go
``

## 📚 API Reference


---

unwrapPromise

Handles asynchronous functions and returns a tuple of [result, error].

import { unwrapPromise } from 'unwrap-go';

const [data, err] = await unwrapPromise(fetchData());

if (err) {
  console.error('Error:', err);
} else {
  console.log('Success:', data);
}


---

unwrapSync

Handles synchronous functions and returns a tuple of [result, error].

import { unwrapSync } from 'unwrap-go';

const [result, err] = unwrapSync(() => JSON.parse('{invalid json}'));

if (err) {
  console.error('Parsing failed:', err);
} else {
  console.log('Parsed data:', result);
}


---

## 💻 Contributing

> [!TIP]
We welcome contributions to improve unwrap-go! If you have suggestions, bug fixes, or new feature ideas, follow these steps:



1. Fork the Repository
Click the Fork button at the top-right of the repo page.


2. Clone Your Fork
Clone the repo locally:


git clone https://github.com/ArnavK-09/unwrap-go.git


3. Create a Branch
Create a new branch for your changes:

git checkout -b your-feature-branch


4. Make Changes
Implement your changes (bug fixes, features, etc.).


5. Commit and Push
Commit your changes and push the branch:

git commit -m "feat(scope): description"
git push origin your-feature-branch


6. Open a Pull Request
Open a PR with a detailed description of your changes.


7. Collaborate and Merge
The maintainers will review your PR, request changes if needed, and merge it once approved.




---

🙋‍♂️ Issues

Found a bug or need help? Please create an issue on the GitHub repository with a detailed description.


---

👤 Author

<table>
  <tbody>
    <tr>
        <td align="center" valign="top" width="14.28%">
          <a href="https://github.com/ArnavK-09">
            <img src="https://github.com/ArnavK-09.png?s=100" width="130px;" alt="Arnav K"/>
          </a><br />
          <a href="https://github.com/ArnavK-09"><h4><b>Arnav K</b></h4></a>
        </td>
    </tr>
  </tbody>
</table>
---

🛣️ Roadmap


---

<h2 align="center">📄 License</h2><p align="center">
<strong>unwrap-go</strong> is licensed under the <code>Unlicense</code> License. See the <a href="https://github.com/ArnavK-09/unwrap-go/blob/main/LICENSE">LICENSE</a> file for more details.
</p>
---

<p align="center">
    <strong>🌟 If you find this project helpful, please give it a star on GitHub! 🌟</strong>
</p>
---

Let me know if you'd like any changes!

