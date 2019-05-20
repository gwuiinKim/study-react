## react - For review

## To Do List..

### Detail Page

- [ ] Video ( youtube video) -- cors problem
- [x] IMDb (internet mobie database button. link)
- [x] Production_components (logo, name)
- [x] Spoken languages
- [ ] Collection ( make route of collection)

- [ ] On TV Show -> season

### Screen

- [x] Home
- [x] TV shows
- [x] Search
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

### react helmet

can change title.

## container / presenter

container 에는 state가 있고,
presenter는 functional component로서 그냥 Return만 하는 녀석.

presenter 에서는 return할 요소가 존재하는지 아닌지를 확인해주는 것이 중요.

```js
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? null : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 ? (
        <Section title="Now Playing">
          {nowPlaying.map(movie => movie.title)}
        </Section>
      ) : null}
      {upcoming && upcoming.length > 0 ? (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => movie.title)}
        </Section>
      ) : null}
      {popular && popular.length > 0 ? (
        <Section title="Popular Movies">
          {popular.map(movie => movie.title)}
        </Section>
      ) : null}
    </Container>
  );
```

### Default state with props

props 를 사용하여 default state를 설정할 수 있다.

```js
export class App extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }
}
```

## React router

exact -> 정확하게 그 route 일때에만
Redirect

- Switch : 한 번에 하나의 route만 Render.
- withRouter : Component 내부의 Route 정보에 접근할 수 있다.
  You can get access to the history object's properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
- route 컴포넌트는 route에 대한 정보를 props로 전달받는다.(withRouter가 없어도.)
- props안에 있는 history를 통해서 redirect등의 여러 기능을 수행할 수 있다.

## styled components

```js
   yarn add styled-components
   yarn add styled-reset



const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
```

### \${}

- styled css 안에 Component 를 넣기 위해.
- styled css 안에 javascript를 적기 위해.

- css를 각 component 마다 지정하는 개념이라서
  local하게 css를 적용시킬 수 있다.
  component에 css 를 주려면 styled(component)이런식으로 하면 됨.

- flex.. 자기 자신을 정렬할 때에도 사용할 수 있는 것 같다.
  자신을 그 element내에서 중앙정렬할 때,
  display:flex;
  align-items:center;

## axios

- axios instance는 configure이 가능 --> fetch보다 훨씬 깔끔

  Create a base instance
  Axios offer the possibility to create a base instance, that is useful to share a common base URL and configuration in an instance. In our example, we won't need to repeat the URL. In another case, you can use a base instance to pass a token.

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
```

## Fundamental javascript

- arrow function
  => implicit return

- template literal
  `${}`

- object destructing {}

```js
const { body } = req;
const { movie } = this.state;
const {
  name,
  lastName,
  favFood: { dinner }
} = human;
```

let과도 함께 사용할 수 있다.

```js
  let result = null;
  try {
    if (isMovie) {
      ({ data: result } = await moviesApi.movieDetail(parsedId));
      // const request = await moviesApi.movieDetail(parsedId);
      // result = request.data;
    } else {
      ({ data: result } = await tvApi.tvDetail(parsedId));
    }

```

- spread operator: ... -> 내용물을 unpack해주는 개념.
  array나 object들을 합칠 수 있게 된다.

- class

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
    console.log("waa");
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const myBaby = new Baby("mini", "me");
myBaby.cry();
```

Human으로부터 inherit하고
Baby만의 것을 추가하기도 함.

- Array.map(function)
  function 에 있는 함수를 실행시키며 새로운 array를 반환한다.

- Array.filter()
  -> The filter() method creates a new array with all elements that pass the test implemented by the provided function.

- Array.forEach()
  array를 return하는 것이 아니라,
  각 요소에 대해서 무엇인가를 수행하는 것.

- push / includes / reverse
  -- push -> new element를 array 마지막 인덱스 다음에 새로 추가

  -- include는 array안에 어떤 element가 있는지를 확인해주는 것.
  혹은 string에서도 가능

  -- reverse -> array 순서 반대로

## npx

module을 설치하지 않고도
실행할 수 있는 방법

## .env

NODE_PATH = src
-->이렇게 함으로써 파일을 다른 폴더에도 옮겨도 작동함
-->안해도 작동되는 것 같음..

---

---
