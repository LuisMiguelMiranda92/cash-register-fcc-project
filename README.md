# 💸 Cash Register App (FreeCodeCamp Certification)

A fully functional, responsive cash register application built as part of the FreeCodeCamp JavaScript Algorithms and Data Structures curriculum. This project demonstrates complex logic handling, DOM manipulation, and precise mathematical calculations using TypeScript.

## 🚀 Live Demo

[View Live Project](https://LuisMiguelMiranda92.github.io/cash-register-fcc-project/) 

## 🧠 The Logic: The Greedy Algorithm

The core of this application is a **Greedy Algorithm**. When change is due, the program:
1.  **Converts all values to Cents:** To avoid JavaScript's infamous floating-point math errors (e.g., `0.1 + 0.2 !== 0.3`), all calculations are performed using `Math.round(value * 100)`.
2.  **Iterates High-to-Low:** It checks the largest denominations first (Hundreds, then Twenties, etc.) to ensure the customer receives the fewest bills/coins possible.
3.  **Monitors Inventory:** It cross-references the required change with the actual cash-in-drawer (`cid`) to determine if a transaction is possible.

## 🛠️ Built With

* **TypeScript** - For type-safe, scalable logic.
* **Vite** - Modern frontend tooling for a fast development experience.
* **HTML5** - Semantic structure.
* **CSS3** - Custom styling with a "Retro LED" aesthetic.

> [!NOTE]
> **Aesthetic Attribution:** The visual design and CSS layout for this project were refined using AI assistance to achieve a "Retro POS Terminal" look while maintaining modern responsiveness.

## 📋 Features & Requirements

-   **Real-time Status Updates:** Displays `OPEN`, `CLOSED`, or `INSUFFICIENT_FUNDS` based on the drawer state.
-   **Validation:** Prevents transactions if the customer provides less than the item price.
-   **Precision:** Handles currency calculations down to the penny without rounding errors.
-   **Dynamic UI:** Responds instantly to user input via event listeners.
