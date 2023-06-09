## :rocket: Best practices

1. dynamic import

2. useMemo, useCallback, React.memo() - memoization

3. debouncing(use effect cleanup function), throttling

4. method override to hide all console logs in production

5. implement Error Boundaries and React.Suspense (providing a fallback ui)

6. practices like - code splitting, composition, lazy loading, state lifting

7. use console.table() for objects to show in tabular form

8. component optimization techniques like: 
    * passing child component as props in parent component
    * Moving the state down (separating component along with their states in chunks rather than one single big component)

9. css module, styled components for styling

10. instead of using eventhandlers over an array of element for each element, use event delegation

11. use of SVG, use of Symbol

- - - -
## :memo: Important notes

1. First component render > after that side effect run && some further state changes being made > component re-renders > useeffect compares the value in dependency array, if they are different, side effect runs again.

2. Causes of re-render: 
   - if state of the component is updated changes
   * if parent component re-renders (child also re-renders) 
   + if the reference of the prop changes can cause the child component to rerender

3. According to react a prop is immutable. Hence updating the value of prop donot cause re-render.

4. DOM is directly manipulated using useRef. Hence no state is updated > so, no re-render of component > thus, the side-effects are not executed while ref is provided as dependency.

5. React don't render Boolean, null, undefined.

- - - -
## :building_construction: Project Setup Commands

*for vite setup - npx create vite@latest .*

*for CRA setup - npx create-react-app app*

- - - -
## ⌨️ Cli Commands

```
1. cd dir_name - prodeed to directory

2. cd .. - comeback to previous directory

3. mkdir dir_name - create directory

4. rmdir dir_name - delete empty directory

5. rm -rf - delete any directory

6. touch file_name - create file

7. rm file_name - delete file

8. ls - list all contents in the directory

9. pwd - print working directory path

10. code . + enter - to open vs code

11. mv oldFileName newFileName - rename file or folder
```

- - - -
## :arrow_down: Package Installation

*npm i @reduxjs/toolkit react-redux axios react-router-dom styled-components sass concurrently react-error-boundary moment lodash formik*

- - - -
## :alien: Typescript

```Javascript
import React, { ReactNode, useRef } from 'react'

type DemoProps = {
    name: string, age: number, isMale: boolean,
    func: () => void, //function that returns nothing
    funcRet: () => string, //function which returns something 
    hobbies?: [], //optional prop
    children: ReactNode, //component as prop
    handleClick: (event: React.MouseEvent) => void //onclick event || mouse event
    handleChange: (event: React.ChangeEvent) => void //onchange event || keyboard event
}

const Demo = (props: DemoProps) => {
    const [state, setState] = React.useState<number>(0)
    const [arr1, setArr1] = React.useState<string[]>(['apple', 'ball'])
    const [arr2, setArr2] = React.useState<Array<string>>(['cat', 'doll']) //array of single type element || alias
    const [myObj, setMyObj] = React.useState<Object>({ num: 1, val: 'you' })

    const someRef = useRef<HTMLElement | null>(null) //type of ref

    const object1: { Name: string, Age: number, isMale: boolean, } //object prop
        = {
        Name: props.name,
        Age: props.age,
        isMale: props.isMale,
    }

    const Arr: number[] | null = true ? [1, 2, 3, 4, 5] : null //multiple possibility of type || union

    const Value: any = [1, 'apple', { key: "data" }] //any - when we dont know what the exact type is

    return (
        <>
            <input type="text" onChange={props.handleChange} />
            <button onClick={props.handleClick}>Click</button>
        </>
    )
}

export default Demo
```

- - - -
## :pushpin: Must knows by a frontend(react) developer

1. Npm:
   - Semantic versioning [ major.minor.patch ]
   - package.json [for the current version] vs package-lock.json [locks the installed version]
   - caret(^) [keep major fix and update minor & patch to latest - 2.x.x] vs tilde(~) [keep major & minor fix and update patch to latest - 2.13.x] symbol in package.json 
   - when to use --legacy-peer-deps flag
   - dependency vs dev-dependency vs peer-dependency
   - npm script

2. Git:
    + [Commands](https://www.youtube.com/watch?v=USjZcfj8yxE)
    + [Github_Workflow](https://www.youtube.com/watch?v=nhNq2kIvi9s)
    + [Git_Conventional_Commits](https://www.conventionalcommits.org/en/v1.0.0/)

3. React:
    * Components:
        - Fragment - wraps a component without creating an additional div node
        - StrictMode - runs additional checks to find error in app
        - Suspense - provide a fallback ui while componennt is loading. used for loaders
        - Portal(createPortal) - for working out of mainDom. used for modals, tooltip, popup, etc
        - React.forwardRef - to pass a ref from parent to child as prop
        - React.memo - memoizes a component

    * Hooks:
        - useState
        - useEffect
        - useRef
        - useTransition
        - useDeferredValue
        - useId
        - useCallback
        - useMemo
        - useContext

    * Code optimization practices:
        - code splitting - lazy-loading and dynamic imports
        - memoization - use of React.memo, useCallback, useMemo
        - composition - use of higher-order-components, container-components, reusable-components
        - debouncing - use of cleanup function in useEffect
        - lifting the state up - childs state managed in parent
        - sub components - break a big component into multiple sub-components
        - set error boundaries by providing a falback ui

    * Concepts:   
        * Reconcillation
        * Rendering
        * Virtual DOM
        * Working of useState | useEffect | useRef
        * Component Lifecycle
        * JSX Feature
        * Automatic batching

- - - -
## :zap: Important Links

   + [MarkDown_CheatSheet](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)
   + [React in depth](https://www.developerway.com/?filter=react)
   + [Bible of Javascript](https://javascript.info/)
   + [7 sins of a developer](https://www.youtube.com/watch?v=q1qKv5TBaOA)

- - - -
While initial npm install, first delete package-lock.json file then npm install[^1]
