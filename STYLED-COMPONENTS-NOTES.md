# 🎨 Styled Components - Complete Guide

### _Your First Journey into Styled Components_ ✨

---

## 📚 Table of Contents

- [What are Styled Components?](#-what-are-styled-components)
- [Installation](#-installation)
- [Basic Syntax](#-basic-syntax)
- [Creating Your First Styled Component](#-creating-your-first-styled-component)
- [Props & Children](#-props--children)
- [Common Errors & Solutions](#-common-errors--solutions)
- [Best Practices](#-best-practices)
- [React Fragments](#-react-fragments)
- [Advanced Concepts](#-advanced-concepts)
  - [Extending Styled Components](#-extending-styled-components)
  - [Conditional Rendering with Children](#-conditional-rendering-with-children)

---

## 🌟 What are Styled Components?

**Styled Components** is a library that allows you to write CSS directly in your JavaScript/React files using **tagged template literals**.

### ✅ Benefits:

- 🎯 **Component-scoped CSS** - No more class name conflicts!
- 💡 **Dynamic styling** - Use props to change styles
- 🧹 **Automatic cleanup** - Unused styles are removed
- 📦 **No separate CSS files** - Everything in one place

---

## 📦 Installation

### ⚠️ IMPORTANT: Install in the CORRECT Directory!

```bash
# ✅ CORRECT - Install inside your React app folder
cd my-app
npm install styled-components
```

```bash
# ❌ WRONG - Don't install in parent directory
cd "Styled components React"
npm install styled-components  # This causes "Invalid hook call" errors!
```

### 🔍 How to Verify Correct Installation:

Check your `package.json` inside the React app folder:

```json
{
  "dependencies": {
    "styled-components": "^6.1.19",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

---

## ✍️ Basic Syntax

### The Template Literal Pattern

```javascript
import styled from "styled-components";

const ComponentName = styled.htmlElement`
  css-property: value;
  another-property: value;
`;
```

### 🎯 Key Points:

- Use **backticks** `` ` `` (not quotes)
- Write **normal CSS** inside (not camelCase!)
- Add **semicolon after closing backtick**: `` `; ``

---

## 🚀 Creating Your First Styled Component

### Step 1: Import styled-components

```javascript
import styled from "styled-components";
```

### Step 2: Create a Styled Component

```javascript
const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: #b19cd9;
`;
```

### Step 3: Use It Like a Regular Component

```javascript
function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
    </>
  );
}
```

### 🎨 Result:

Your `<Title>` component is now an `<h1>` with built-in styles!

---

## 🎁 Props & Children

### Using `children` Prop (Recommended! ⭐)

```javascript
// ✅ Component Definition
const Section = styled.section`
  background-color: #ffffff;
  border: solid 3px grey;
`;

function CustomSection({ children }) {
  return (
    <Section>
      <div>{children}</div>
    </Section>
  );
}

// ✅ Usage
<CustomSection>M</CustomSection>
<CustomSection>T</CustomSection>
```

### Why `children` is Better than a `text` Prop:

- ✅ More intuitive and React-idiomatic
- ✅ More flexible (can pass any JSX, not just text)
- ✅ Cleaner syntax
- ✅ Follows natural HTML pattern

---

## 🔥 Common Errors & Solutions

### ❌ Error 1: "Invalid hook call"

```
Error: Invalid hook call. Hooks can only be called inside of
the body of a function component.
```

**🔧 Solution:**

- ✅ Install `styled-components` **inside your React app folder**
- ❌ Don't install in the parent directory

```bash
# Navigate to the correct folder first!
cd my-app
npm install styled-components
```

---

### ❌ Error 2: "Missing semicolon"

```
Parsing error: Missing semicolon. (7:8)
```

**🔧 Solution:**
Don't add extra spaces or characters between the backtick and semicolon!

```javascript
// ❌ WRONG - Extra space after backtick
const Title = styled.h1`
  color: #aac9f0;
`; // <-- Extra spaces here!

// ✅ CORRECT
const Title = styled.h1`
  color: #aac9f0;
`;
```

---

### ❌ Error 3: "Identifier 'styled' has already been declared"

```
Identifier 'styled' has already been declared. (3:6)
```

**🔧 Solution:**
You accidentally declared a variable with the same name as your import!

```javascript
// ❌ WRONG
import styled from "styled-components"
const styled = // something else

// ✅ CORRECT - Don't redeclare 'styled'
import styled from "styled-components"
const Title = styled.h1`...`
```

---

## 💎 Best Practices

### ✨ Naming Convention

```javascript
// ✅ Use PascalCase for styled components
const MainTitle = styled.h1`...`;
const PrimaryButton = styled.button`...`;
const CardContainer = styled.div`...`;
```

### 📂 File Organization

```
src/
├── App.js
├── components/
│   ├── Section.jsx         // Component file
│   └── StyledComponents.js // Optional: Separate styled components
```

### 🎯 When to Create Separate Component Files:

- ✅ Component is reusable
- ✅ Component has its own logic
- ✅ Component includes multiple styled elements
- ✅ Keeps your main App.js clean

---

## 🧩 React Fragments

### What are Fragments?

**Fragments** (`<>` `</>`) are React components that render their children **without adding extra DOM elements**.

### Why Use Them?

React components must return **ONE parent element**:

```javascript
// ❌ ERROR - Multiple root elements
return (
  <Title>Hello</Title>
  <Section>World</Section>
);

// ✅ SOLUTION 1 - Fragment (no extra div in DOM)
return (
  <>
    <Title>Hello</Title>
    <Section>World</Section>
  </>
);

// ✅ SOLUTION 2 - Div wrapper (adds extra div to DOM)
return (
  <div>
    <Title>Hello</Title>
    <Section>World</Section>
  </div>
);
```

### 🎯 Fragment Benefits:

- 🚫 No extra DOM elements
- 🎨 Doesn't affect CSS layouts
- ✨ Cleaner HTML output

### Full Fragment Syntax (when you need a key):

```javascript
import { Fragment } from "react";

<Fragment key="unique-id">
  <Title>Hello</Title>
</Fragment>;
```

---

## 🎓 Complete Example

```javascript
// ========================================
// App.js - Main Component
// ========================================
import styled from "styled-components";
import Section from "./components/Section";

// ⭐ Styled Component
const Title = styled.h1`
  text-align: center;
  font-family: sans-serif;
  color: #b19cd9;
`;

export default function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      <Section>M</Section>
      <Section>T</Section>
      <Section>W</Section>
      <Section>T</Section>
      <Section>F</Section>
      <Section>S</Section>
      <Section>S</Section>
    </>
  );
}
```

```javascript
// ========================================
// components/Section.jsx - Reusable Component
// ========================================
import styled from "styled-components";

// ⭐ Base Styled Component
const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`;

// ⭐⭐ EXTENDING Styled Components!
// WeekendTitle inherits ALL styles from WeekdayTitle
const WeekendTitle = styled(WeekdayTitle)`
  background: linear-gradient(to right, #859398, #283048);
`;

const StyledSection = styled.section`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

// ⭐ Using children prop with conditional rendering
export default function Section({ children }) {
  return (
    <StyledSection>
      {children === "S" ? (
        <WeekendTitle>{children}</WeekendTitle>
      ) : (
        <WeekdayTitle>{children}</WeekdayTitle>
      )}
    </StyledSection>
  );
}
```

---

## 🔥 Advanced Concepts

### 🎨 Extending Styled Components

You can create a new styled component that **inherits** all the styles from another component:

```javascript
// Base component
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
`;

// Extended component - inherits ALL Button styles + adds more
const PrimaryButton = styled(Button)`
  background-color: blue;
  color: white;
`;

const DangerButton = styled(Button)`
  background-color: red;
  color: white;
`;
```

**Syntax:** `styled(ComponentName)` instead of `styled.element`

---

### 🧠 Conditional Rendering with Children

#### Understanding `children` Type

When you pass content to a component, `children` can be:

```jsx
// ✅ String
<Section>S</Section>
// children = "S" (string)

// ✅ Number
<Section>{42}</Section>
// children = 42 (number)

// ✅ JSX Element
<Section><span>Text</span></Section>
// children = React element (object)

// ✅ Multiple children
<Section>
  <span>S</span>
  <div>Text</div>
</Section>
// children = Array of React elements
```

#### String Methods on `children`

When `children` is a **string**, you can use string methods:

```javascript
// ⚠️ .includes() - checks if string CONTAINS character
children.includes("S"); // true for: "S", "Saturday", "Class", "Test"

// ✅ === - checks EXACT match (better for single letters!)
children === "S"; // true ONLY for: "S"
```

**Example comparison:**

```javascript
// Using .includes()
"S".includes("S"); // ✅ true
"Saturday".includes("S"); // ⚠️ true (might not want this!)
"Class".includes("S"); // ⚠️ true (has "S" in it!)

// Using === (exact match)
"S" === "S"; // ✅ true
"Saturday" === "S"; // ✅ false
"Class" === "S"; // ✅ false
```

#### Best Practice for Single Character Checks:

```javascript
// ✅ BEST - Exact match
{
  children === "S" ? (
    <WeekendTitle>{children}</WeekendTitle>
  ) : (
    <WeekdayTitle>{children}</WeekdayTitle>
  );
}

// ✅ GOOD - Trim first (handles extra spaces)
{
  children.trim() === "S" ? (
    <WeekendTitle>{children}</WeekendTitle>
  ) : (
    <WeekdayTitle>{children}</WeekdayTitle>
  );
}

// ⚠️ OKAY - But less precise
{
  children.includes("S") ? (
    <WeekendTitle>{children}</WeekendTitle>
  ) : (
    <WeekdayTitle>{children}</WeekdayTitle>
  );
}
```

---

## 🎯 Quick Reference

| Concept      | Syntax                                   | Example                                     |
| ------------ | ---------------------------------------- | ------------------------------------------- |
| **Import**   | `import styled from "styled-components"` | -                                           |
| **Create**   | `` styled.element`css` ``                | `` const Title = styled.h1`color: blue;` `` |
| **Use**      | `<ComponentName>content</ComponentName>` | `<Title>Hello</Title>`                      |
| **Fragment** | `<>...</>`                               | `<><Title/><Section/></>`                   |
| **Children** | `{ children }`                           | `function Comp({ children }) {...}`         |

---

## 🚦 Starting Your Server

```bash
# Navigate to your React app
cd my-app

# Start development server
npm start
```

**Server runs at:** `http://localhost:3000` 🌐

---

## 📝 Summary Checklist

- ✅ Install styled-components in the **correct directory**
- ✅ Use **backticks** for template literals
- ✅ Write **normal CSS** (not camelCase)
- ✅ Add **semicolon after closing backtick**
- ✅ Use **PascalCase** for component names
- ✅ Prefer **children prop** over text prop
- ✅ Use **Fragments** to avoid extra divs
- ✅ Keep components **organized in separate files**

---

## 🎉 Congratulations!

You've completed your first styled-components journey! Keep practicing and building beautiful React applications!

**Happy Coding!** 💻✨

---

---

## 🚀 Dynamic Styling with Props

### 💫 Props = Magic Variables Inside Styles!

```javascript
// 🎯 Extract props using destructuring
const Box = styled.div`
  width: ${({ size }) => size};
  color: ${({ color }) => color};
`;

// Use it!
<Box size="100px" color="red" />;
```

**Think of it:** Props travel from JSX → into your CSS! 🎪

---

### 🎨 HSL Colors - The Creative Way!

```javascript
// 🌈 HSL = Hue, Saturation, Lightness
background: hsl(349, 100%, 50%);  // 🍒 Cherry red!
//          ^^^  ^^^^  ^^^
//          |    |     └─ How bright? (0-100%)
//          |    └─────── How vibrant? (0-100%)
//          └──────────── Color angle (0-360°)
```

**Pro tip:** Change hue for rainbow effects!

- 0° = Red 🔴
- 120° = Green 🟢
- 240° = Blue 🔵
- 343° = Cherry 🍒

---

### 🎭 Dynamic HSL with Props

```javascript
// 🎪 Make color change based on value!
background-color: ${({ value }) => `hsl(${value}, 81%, 58%)`};
```

**Magic formula:** Higher value = Different color on the wheel! 🌈

---

### 📦 Spreading Props Like Butter

```javascript
// 🧈 ...rest = "give me everything else"
export default function ProgressBar({ ...rest }) {
  return <ProgressBarEl {...rest}></ProgressBarEl>;
}
```

**What happens:**

1. Collect ALL props in `...rest`
2. Spread them into styled component with `{...rest}`
3. Styled component can now access them! ✨

---

### 🎯 Conditional Values with OR

```javascript
// 🎲 If no Barwidth, use "0%" instead
width: ${({ Barwidth }) => Barwidth || "0%"};
//                                   ^^ fallback value
```

**Read as:** "Use Barwidth OR default to 0%" 🎪

---

### 🧩 Nesting Components = Composition

```javascript
// 🪆 Put one component inside another!
<StyledSection>
  <WeekdayTitle>{children}</WeekdayTitle>
  <ProgressBarSection>
    <ProgressBar Barwidth={Barwidth} />
  </ProgressBarSection>
</StyledSection>
```

**Like Russian dolls!** Each layer adds meaning 🎎

---

### 🎨 Quick Color Reference

```javascript
// 🍒 Cherry colors in HSL
hsl(349, 100%, 50%)  // Bright cherry
hsl(343, 81%, 58%)   // Cute cerise
hsl(350, 100%, 42%)  // Classic cherry
hsl(2, 100%, 50%)    // Candy apple
```

---

## 💡 Pro Tips & Tricks

### ⚡ Template Literal Inside Template Literal

```javascript
// 🎪 Nested backticks = Dynamic CSS!
`hsl(${value}, 50%, 50%)`;
//   ^^ interpolation inside CSS function
```

### 🎯 Props Don't Need to Match HTML Attributes

```javascript
// ✨ Create your OWN prop names!
<ProgressBar Barwidth="50%" customColor="red" />
```

### 🧠 Remember the Pattern

```javascript
${({ propName }) => propName}
//^             ^    ^
//|             |    └─ Use it
//|             └────── Extract it
//└──────────────────── Interpolate it
```

---

_Created: November 17, 2025_  
_Course: Scrimba - Learn Styled Components in React_
