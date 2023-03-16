## Best practices

1. dynamic import

2. useMemo, useCallback, React.memo() - memoization

3. debouncing(use effect cleanup function), throttling

4. method override to hide all console logs in production

5. implement Error Boundaries and React.Suspense (providing a fallback ui)

6. practices like - code splitting, composition, lazy loading, state lifting

7. use console.table() for objects to show in tabular form

8. component optimization techniques like: i. passing child component as props in parent component; ii. Moving the state down (separating component along with their states in chunks rather than one single big component)

9. css module, styled components for styling

## Important notes

1. First component render > after that side effect run && some further state changes being made > component re-renders > useeffect compares the value in dependency array, if they are different, side effect runs again.

2. Causes of re-render: i. if state of the component is updated changes; ii. if parent component re-renders (child also re-renders); iii. if the reference of the prop changes can cause the child component to rerender

3. According to react a prop is immutable. Hence updating the value of prop donot cause re-render.

4. DOM is directly manipulated using useRef. Hence no state is updated > so, no re-render of component > thus, the side-effects are not executed while ref is provided as dependency.

## Project Setup Commands

*for vite setup - npx create vite@latest .*

*for CRA setup - npx create-react-app app*

## Cli Commands

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
```

## Package Installation

*npm i @reduxjs/toolkit react-redux axios react-router-dom styled-components sass concurrently react-error-boundary moment lodash formik*

## Typescript

`
import React, { ReactElement } from 'react'

type DemoProps = { name: string, age: number, isMale: boolean, func: () => void, hobbies?: [], children: React.FC }

const Demo = (props: DemoProps) => {
    const [state, setState] = React.useState<number>(0)
    const [arr1, setArr1] = React.useState<string[]>(['apple', 'ball'])
    const [arr2, setArr2] = React.useState<Array<string>>(['cat', 'doll'])
    const [myObj, setMyObj] = React.useState<Object>({ num: 1, val: 'you' })

    const object1: Object = {
        Name: props.name,
        Age: props.age,
        isMale: props.isMale,
    }

    const Arr: number[] | null = true ? [1, 2, 3, 4, 5] : null

    return (
        <>
            <h1>Demo</h1>
        </>
    )
}

export default Demo
`
