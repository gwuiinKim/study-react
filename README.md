## react - For review

## npx

module을 설치하지 않고도
실행할 수 있는 방법

## Fundamental javascript

arrow function
=>
template literal
`${}`
object destructing

```js
const { body } = req;
const { movie } = this.state;
const {
  name,
  lastName,
  favFood: { dinner }
} = human;
```

spread operator
...
내용물을 unpack해주는 개념.
array나 object들을 합칠 수 있게 된다.

class

```js
class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}
const person = new Human("sunkist", "lemonade");


class Baby extends Human {
    cry() {
        console.log("waa")
    }
    sayName() {
        console.log(`My name is ${this.name}`)
    }
}

const myBaby = new Baby("mini", "me")
myBaby.cry();

--> Human으로부터 inherit하고
    Baby만의 것을 추가하기도 함.
```

Array.map(function)
function 에 있는 함수를 실행시키며 새로운 array를 반환한다.

Array.filter()
-> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

Array.forEach()
array를 return하는 것이 아니라,
각 요소에 대해서 무엇인가를 수행하는 것.

push / includes / reverse
push -> new element를 array 마지막 인덱스 다음에 새로 추가

include는 array안에 어떤 element가 있는지를 확인해주는 것.

reverse -> array 순서 반대로

---

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Array.filter

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
