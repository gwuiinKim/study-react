## react - For review

## To Do List..

### Screen

- [ ] Home
- [ ] TV shows
- [ ] Search
- [ ] Detail

### API

- [x] Now playing ( Movie )
- [x] Top Rated ( TV, Movie)
- [x] Popular ( TV, Movie )
- [x] Upcoming ( Movie )
- [x] Airing Today ( TV )
- [x] TV Show Detail
- [x] Movie Detail
- [x] Search (Movie, TV)

## React router

exact -> 정확하게 그 route 일때에만
Redirect

### Switch

-> 한 번에 하나의 route만 Render

### withRouter

->You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

## container / presenter

container 에는 state가 있고,
presenter는 functional component로서 그냥 Return만 하는 녀석.

## styled components

```js
   yarn add styled-components
   yarn add styled-reset
```

### \${}

- styled css 안에 Component 를 넣기 위해.
- styled css 안에 javascript를 적기 위해.

css를 각 component 마다 지정하는 개념이라서
local하게 css를 적용시킬 수 있다.
component에 css 를 주려면 styled(component)이런식으로 하면 됨.

flex.. 자기 자신을 정렬할 때에도 사용할 수 있는 것 같다.
자신을 그 element내에서 중앙정렬할 때,
display:flex;
align-items:center;

## axios

axios instance 를 configure 할 수 있다.
fetch보다 훨씬 깔끔한 방식으로 할 수 있다.

Create a base instance
Axios offer the possibility to create a base instance, that is useful to share a common base URL and configuration in an instance. In our example, we won't need to repeat the URL. In another case, you can use a base instance to pass a token.

/없이 해야 relative

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

## npx

module을 설치하지 않고도
실행할 수 있는 방법

## .env

NODE_PATH = src
-->이렇게 함으로써 파일을 다른 폴더에도 옮겨도 작동함
-->안해도 작동되는 것 같음..

---

---
