(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,n,t){e.exports=t.p+"static/media/noPoster.06ea78e7.png"},45:function(e,n,t){e.exports=t(84)},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(21),o=t.n(i),l=t(7),c=t(18),u=t(4),s=t.n(u),p=t(11),d=t(12),m=t(13),g=t(15),f=t(14),v=t(16),h=t(2),b=t(1),x=t(5),E=t.n(x);function y(){var e=Object(h.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return y=function(){return e},e}function j(){var e=Object(h.a)(["\n  font-size: 14px;\n  font-weight: 600;\n"]);return j=function(){return e},e}function O(){var e=Object(h.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return O=function(){return e},e}var w=b.default.div(O()),_=b.default.span(j()),k=b.default.div(y()),S=function(e){var n=e.title,t=e.children;return r.a.createElement(w,null,r.a.createElement(_,null,n),r.a.createElement(k,null,t))};function z(){var e=Object(h.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 28px;\n  margin-top: 20px;\n"]);return z=function(){return e},e}var T=b.default.div(z()),I=function(){return r.a.createElement(T,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f2"))};function R(){var e=Object(h.a)(["\n  color: ",";\n"]);return R=function(){return e},e}function M(){var e=Object(h.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return M=function(){return e},e}var U=b.default.div(M()),C=b.default.span(R(),function(e){return e.color}),P=function(e){var n=e.text,t=e.color;return r.a.createElement(U,null,r.a.createElement(C,{color:t},n))};t(24);function D(){var e=Object(h.a)(["\n  font-size: 10px;\n  opacity: 0.5;\n"]);return D=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]);return F=function(){return e},e}function N(){var e=Object(h.a)(["\n  position: relative;\n  margin-bottom: 5px;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return N=function(){return e},e}function L(){var e=Object(h.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]);return L=function(){return e},e}function A(){var e=Object(h.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(h.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var V=b.default.div(B()),q=b.default.div(A(),function(e){return e.bgUrl}),J=b.default.span(L()),G=b.default.div(N(),q,J),H=b.default.span(F()),K=b.default.span(D()),Q=function(e){var n=e.id,a=e.imageUrl,i=e.title,o=e.rating,c=e.year,u=e.isMovie,s=void 0!==u&&u;return r.a.createElement(l.b,{to:s?"/movie/".concat(n):"/tv/".concat(n)},r.a.createElement(V,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):t(31)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ".concat(o,"/10"))),r.a.createElement(H,null,i.length>15?"".concat(i.substring(0,18),"..."):i),r.a.createElement(K,null,c)))};function W(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return W=function(){return e},e}var X=b.default.div(W()),Y=function(e){var n=e.nowPlaying,t=e.popular,a=e.upcoming,i=e.loading,o=e.error;return i?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Movies | Inflix")),r.a.createElement(I,null)):r.a.createElement(X,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Movies | Nomflix")),n&&n.length>0&&r.a.createElement(S,{title:"Now Playing"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),a&&a.length>0&&r.a.createElement(S,{title:"Upcoming Movies"},a.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),t&&t.length>0&&r.a.createElement(S,{title:"Popular Movies"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&r.a.createElement(P,{color:"#e74c3c",text:o}))},Z=t(41),$=t.n(Z).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"1fe53fe4097a26e2c1c1dec05bab62ae",language:"en-US"}}),ee={nowPlaying:function(){return $.get("movie/now_playing")},upcoming:function(){return $.get("movie/upcoming")},popular:function(){return $.get("movie/popular")},movieDetail:function(e){return $.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/movie",{params:{query:encodeURIComponent(e)}})},collection:function(e){return $.get("collection/".concat(e))}},ne={topRated:function(){return $.get("tv/top_rated")},popular:function(){return $.get("tv/popular")},airingToday:function(){return $.get("tv/airing_today")},tvDetail:function(e){return $.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return $.get("search/tv",{params:{query:encodeURIComponent(e)}})}},te=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},t.componentDidMount=Object(p.a)(s.a.mark(function e(){var n,a,r,i,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.nowPlaying();case 3:return n=e.sent,a=n.data.results,e.next=7,ee.upcoming();case 7:return r=e.sent,i=r.data.results,e.next=11,ee.popular();case 11:o=e.sent,l=o.data.results,t.setState({nowPlaying:a,upcoming:i,popular:l}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),t.setState({error:"can't find movie information"}),console.log(t.state.error);case 20:return e.prev=20,t.setState({loading:!1}),e.finish(20);case 23:case"end":return e.stop()}},e,null,[[0,16,20,23]])})),t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.nowPlaying,t=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(Y,{nowPlaying:n,upcoming:t,popular:a,error:i,loading:o})}}]),n}(a.Component);function ae(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var n=e.topRated,t=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"TV Shows | Inflix")),i?r.a.createElement(I,null):r.a.createElement(re,null,n&&n.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),t&&t.length>0&&r.a.createElement(S,{title:"Popular Shows"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(P,{color:"#e74c3c",text:o})))},oe=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,loading:!0,error:null},t.componentDidMount=Object(p.a)(s.a.mark(function e(){var n,a,r,i,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.topRated();case 3:return n=e.sent,a=n.data.results,e.next=7,ne.popular();case 7:return r=e.sent,i=r.data.results,e.next=11,ne.airingToday();case 11:o=e.sent,l=o.data.results,t.setState({topRated:a,popular:i,airingToday:l}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t.setState({error:"can't find tv information"});case 19:return e.prev=19,t.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}},e,null,[[0,16,19,22]])})),t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.topRated,t=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(ie,{topRated:n,popular:t,airingToday:a,loading:i,error:o})}}]),n}(a.Component);function le(){var e=Object(h.a)(["\n  width: 100%;\n  all: unset;\n  font-size: 28px;\n"]);return le=function(){return e},e}function ce(){var e=Object(h.a)(["\n  width: 100%;\n  margin-bottom: 50px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(h.a)(["\n  padding: 20px;\n"]);return ue=function(){return e},e}var se=b.default.div(ue()),pe=b.default.form(ce()),de=b.default.input(le()),me=function(e){var n=e.movieResults,t=e.tvResults,a=e.loading,i=e.searchTerm,o=e.handleSubmit,l=e.updateTerm,c=e.error;return r.a.createElement(se,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Search | Inflix")),r.a.createElement(pe,{onSubmit:o},r.a.createElement(de,{placeholder:"Search Movies or TV Shows...",value:i,onChange:l})),a?r.a.createElement(I,null):r.a.createElement(r.a.Fragment,null,n&&n.length>0?r.a.createElement(S,{title:"Movie Results"},n.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substr(0,4),isMovie:!0})})):null,t&&t.length>0?r.a.createElement(S,{title:"TV Show Results"},t.map(function(e){return r.a.createElement(Q,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substr(0,4)})})):null),c?r.a.createElement(P,{color:"#e74c3c",text:c}):null,t&&n&&0===t.length&&0===n.length?r.a.createElement(P,{color:"#95a5a6",text:"Nothing Found"}):null)},ge=function(e){function n(){var e,t;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},t.updateTerm=function(e){var n=e.target.value;console.log(n),t.setState({searchTerm:n})},t.searchByTerm=Object(p.a)(s.a.mark(function e(){var n,a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.searchTerm,t.setState({loading:!0}),e.prev=2,e.next=5,ee.search(n);case 5:return a=e.sent,r=a.data.results,e.next=9,ne.search(n);case 9:i=e.sent,o=i.data.results,t.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),t.setState({error:"can't find results."});case 17:return e.prev=17,t.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),t.handleSubmit=function(e){e.preventDefault(),""!==t.state.searchTerm&&t.searchByTerm()},t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.movieResults,t=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(me,{movieResults:n,tvResults:t,searchTerm:a,loading:i,error:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(a.Component);function fe(){var e=Object(h.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: rgba(20, 20, 20, 1);\n  z-index: 10;\n\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n"]);return fe=function(){return e},e}function ve(){var e=Object(h.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n  width: 80px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid\n    ",";\n  transition: border-bottom 0.4s ease-in-out;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n  display: flex;\n"]);return be=function(){return e},e}var xe=b.default.ul(be()),Ee=b.default.li(he(),function(e){return e.current?"#3498db":"transparent"}),ye=Object(b.default)(l.b)(ve()),je=b.default.header(fe()),Oe=Object(c.f)(function(e){var n=e.location.pathname;return r.a.createElement(je,null,r.a.createElement(xe,null,r.a.createElement(Ee,{current:"/"===n},r.a.createElement(ye,{to:"/"},"Movies")),r.a.createElement(Ee,{current:"/tv"===n},r.a.createElement(ye,{to:"/tv"},"TV")),r.a.createElement(Ee,{current:"/search"===n},r.a.createElement(ye,{to:"/search"},"Search"))))});function we(){var e=Object(h.a)(["\n  width: 80px;\n  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  opacity: 1;\n"]);return we=function(){return e},e}function _e(){var e=Object(h.a)(["\n  height: 100px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n"]);return _e=function(){return e},e}function ke(){var e=Object(h.a)(["\n  font-size: 14px;\n  text-align: center;\n  opacity: 0.5;\n  font-weight: 100;\n"]);return ke=function(){return e},e}function Se(){var e=Object(h.a)(["\n  margin-top: 10px;\n  width: 100%;\n  height: 200px;\n"]);return Se=function(){return e},e}var ze=b.default.div(Se()),Te=b.default.h3(ke()),Ie=b.default.div(_e()),Re=b.default.img(we()),Me=function(e){var n=e.logo,t=e.name;return r.a.createElement(ze,null,r.a.createElement(Ie,null,n&&r.a.createElement(Re,{src:"https://image.tmdb.org/t/p/original".concat(n)})),r.a.createElement(Te,null,t))},Ue=t(17),Ce=t.n(Ue);function Pe(){var e=Object(h.a)(["\n  all: unset;\n  background-color: #e8b708;\n  color: black;\n  font-weight: 600;\n  width: 30px;\n  height: 12px;\n  padding: 3px 5px;\n  border-radius: 2px;\n"]);return Pe=function(){return e},e}function De(){var e=Object(h.a)(["\n  margin: 0 10px;\n"]);return De=function(){return e},e}function Fe(){var e=Object(h.a)([""]);return Fe=function(){return e},e}var Ne=b.default.span(Fe()),Le=b.default.span(De()),Ae=b.default.button(Pe());Ne.propTypes={result:Ce.a.object};var Be=function(e){var n=e.result;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,null,n.release_date?n.release_date.substring(0,4):n.first_air_date&&n.first_air_date.substring(0,4)),r.a.createElement(Le,null,"\u2022"),r.a.createElement(Ne,null,n.runtime?n.runtime:n.episode_run_time[0]," min"),r.a.createElement(Le,null,"\u2022"),r.a.createElement(Ne,null,n.genres&&n.genres.map(function(e,t){return t===n.genres.length-1?e.name:"".concat(e.name," / ")})),r.a.createElement(Le,null,"\u2022"),r.a.createElement(Ne,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.imdb.com/title/".concat(n.imdb_id)},r.a.createElement(Ae,null," IMDb"))))};function Ve(){var e=Object(h.a)(["\n  text-align: center;\n  margin-top: 5px;\n"]);return Ve=function(){return e},e}function qe(){var e=Object(h.a)(["\n  width: 100px;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"]);return qe=function(){return e},e}function Je(){var e=Object(h.a)(["\n  width: 100px;\n  height: 120px;\n  margin-right: 20px;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return Je=function(){return e},e}function Ge(){var e=Object(h.a)(["\n  width: 100%;\n  height: 120px;\n  margin-top: 80px;\n  display: flex;\n  z-index: 2;\n"]);return Ge=function(){return e},e}var He=b.default.div(Ge()),Ke=b.default.div(Je()),Qe=b.default.div(qe(),function(e){return e.bgImage}),We=b.default.h3(Ve()),Xe=function(e){var n=e.result;return r.a.createElement(He,null,n.seasons.map(function(e){return r.a.createElement(l.b,{to:"/tv/".concat(e.id)},r.a.createElement(Ke,{key:e.id},r.a.createElement(Qe,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.poster_path)}),r.a.createElement(We,null,e.name)))}))};function Ye(){var e=Object(h.a)(["\n  width: 100px;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(h.a)([""]);return Ze=function(){return e},e}function $e(){var e=Object(h.a)(["\n  width: 120px;\n  height: 120px;\n  margin-top: 15px;\n  & :hover {\n    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  }\n"]);return $e=function(){return e},e}function en(){var e=Object(h.a)(["\n  width: 100%;\n  height: 100px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 80px);\n  grid-gap: 40px;\n  margin-top: 30px;\n"]);return en=function(){return e},e}function nn(){var e=Object(h.a)(["\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  & :hover {\n    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n  }\n"]);return nn=function(){return e},e}function tn(){var e=Object(h.a)(["\n  width: 100%;\n  height: 50px;\n  margin-top: 15px;\n  font-size: 15px;\n  color: #e67e22;\n"]);return tn=function(){return e},e}function an(){var e=Object(h.a)(["\n  margin-top: 10px;\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.5;\n  width: 50%;\n"]);return an=function(){return e},e}function rn(){var e=Object(h.a)(["\n  margin-right: 5px;\n  background-color: #3498db;\n  padding: 3px;\n  border-radius: 4px;\n  text-align: center;\n  font-weight: 600;\n  color: white;\n"]);return rn=function(){return e},e}function on(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]);return on=function(){return e},e}function ln(){var e=Object(h.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]);return ln=function(){return e},e}function cn(){var e=Object(h.a)(["\n  margin-left: 20px;\n  width: 70%;\n"]);return cn=function(){return e},e}function un(){var e=Object(h.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n  margin-right: 20px;\n"]);return un=function(){return e},e}function sn(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n\n  z-index: 1;\n  height: 100%;\n"]);return sn=function(){return e},e}function pn(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.2;\n  z-index: -1;\n"]);return pn=function(){return e},e}function dn(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  padding: 50px;\n"]);return dn=function(){return e},e}var mn=b.default.div(dn()),gn=b.default.div(pn(),function(e){return e.bgImage}),fn=b.default.div(sn()),vn=b.default.div(un(),function(e){return e.bgImage}),hn=b.default.div(cn()),bn=b.default.h3(ln()),xn=b.default.div(on()),En=b.default.span(rn()),yn=b.default.p(an()),jn=b.default.div(tn()),On=b.default.span(nn()),wn=b.default.div(en()),_n=b.default.div($e()),kn=b.default.div(Ze()),Sn=b.default.img(Ye()),zn=function(e){var n=e.result,a=e.loading;e.error;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Loading | Inflix")),r.a.createElement(I,null)):r.a.createElement(mn,null,r.a.createElement(E.a,null,r.a.createElement("title",null,n.original_title?n.original_title:n.original_name," ","| Inflix")),r.a.createElement(gn,{bgImage:"https://image.tmdb.org/t/p/original".concat(n.backdrop_path)}),r.a.createElement(fn,null,r.a.createElement(vn,{bgImage:n.poster_path?"https://image.tmdb.org/t/p/original".concat(n.poster_path):t(31)}),r.a.createElement(hn,null,r.a.createElement(bn,null,n.original_title?n.original_title:n.original_name),r.a.createElement(xn,null,r.a.createElement(Be,{result:n})),n.spoken_languages&&n.spoken_languages.length>0?n.spoken_languages.map(function(e){return r.a.createElement(En,null," ",e.name," ")}):n.languages&&n.languages.map(function(e){return r.a.createElement(En,null," ",e," ")}),r.a.createElement(yn,null,n.overview),r.a.createElement(jn,null,n.videos.results&&n.videos.results.length>0&&n.videos.results.map(function(e,n){return n<2&&r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=".concat(e.key)},r.a.createElement(On,{key:e.id},e.name))})),n.belongs_to_collection&&n.belongs_to_collection.id&&r.a.createElement(_n,null,r.a.createElement(l.b,{to:"/collection/".concat(n.belongs_to_collection.id)},r.a.createElement(Sn,{src:"https://image.tmdb.org/t/p/original".concat(n.belongs_to_collection.poster_path)}),r.a.createElement(kn,null,n.belongs_to_collection.name," "))),n.production_companies&&n.production_companies.length>0&&r.a.createElement(wn,null,n.production_companies.map(function(e){return r.a.createElement(Me,{logo:e.logo_path,name:e.name})})),n.seasons&&n.seasons.length>0&&r.a.createElement(Xe,{result:n}))))},Tn=function(e){function n(e){var t;Object(d.a)(this,n),(t=Object(g.a)(this,Object(f.a)(n).call(this,e))).componentDidMount=Object(p.a)(s.a.mark(function e(){var n,a,r,i,o,l,c,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.props,a=n.match.params.id,r=n.history.push,i=t.state.isMovie,o=parseInt(a),!isNaN(o)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(l=null,e.prev=6,!i()){e.next=14;break}return e.next=10,ee.movieDetail(o);case 10:c=e.sent,l=c.data,e.next=18;break;case 14:return e.next=16,ne.tvDetail(o);case 16:u=e.sent,l=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),t.setState({error:"Can't find anything."});case 23:return e.prev=23,t.setState({loading:!1,result:l}),e.finish(23);case 26:case"end":return e.stop()}},e,null,[[6,20,23,26]])}));var a=e.location.pathname;return t.state={result:null,error:null,loading:!0,isMovie:function(){return a.includes("/movie/")}},t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.result,t=e.error,a=e.loading;return r.a.createElement(zn,{result:n,error:t,loading:a})}}]),n}(a.Component),In=t(42),Rn=t.n(In);function Mn(){var e=Object(h.a)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]);return Mn=function(){return e},e}function Un(){var e=Object(h.a)(["\n  width: 70%;\n  margin-left: 10px;\n  padding: 10px;\n"]);return Un=function(){return e},e}function Cn(){var e=Object(h.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  width: 120px;\n  height: 200px;\n  border-radius: 5px;\n"]);return Cn=function(){return e},e}function Pn(){var e=Object(h.a)(["\n  height: 200px;\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex;\n  & :hover {\n    opacity: 0.7;\n  }\n"]);return Pn=function(){return e},e}function Dn(){var e=Object(h.a)(["\n  width: 100%;\n  height: 200px;\n  z-index: 1;\n"]);return Dn=function(){return e},e}function Fn(){var e=Object(h.a)(["\n  margin-left: 20px;\n  width: 60%;\n  height: 100%;\n"]);return Fn=function(){return e},e}function Nn(){var e=Object(h.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n  margin-right: 20px;\n"]);return Nn=function(){return e},e}function Ln(){var e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  z-index: 2;\n  height: 100%;\n"]);return Ln=function(){return e},e}function An(){var e=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(4px);\n  opacity: 0.15;\n  z-index: -1;\n"]);return An=function(){return e},e}function Bn(){var e=Object(h.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  padding: 50px;\n  z-index: 1;\n"]);return Bn=function(){return e},e}var Vn=b.default.div(Bn()),qn=b.default.div(An(),function(e){return e.bgImage}),Jn=b.default.div(Ln()),Gn=b.default.div(Nn(),function(e){return e.bgImage}),Hn=b.default.div(Fn()),Kn=Object(b.default)(l.b)(Dn()),Qn=b.default.div(Pn()),Wn=b.default.div(Cn(),function(e){return e.bgImage}),Xn=b.default.div(Un()),Yn=b.default.h3(Mn()),Zn=function(e){var n=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null," Loading | Inflix")),r.a.createElement(I,null)):r.a.createElement(Vn,null,r.a.createElement(E.a,null,r.a.createElement("title",null,n.name," | Inflix")),r.a.createElement(qn,{bgImage:"https://image.tmdb.org/t/p/original".concat(n.backdrop_path)}),r.a.createElement(Jn,null,r.a.createElement(Gn,{bgImage:"https://image.tmdb.org/t/p/original".concat(n.poster_path)}),r.a.createElement(Hn,null,n.parts&&n.parts.length>0&&n.parts.map(function(e){return r.a.createElement(Kn,{to:"/movie/".concat(e.id),key:e.id},r.a.createElement(Qn,null,r.a.createElement(Wn,{bgImage:"https://image.tmdb.org/t/p/original".concat(e.poster_path)}),r.a.createElement(Xn,null,r.a.createElement(Yn,null,e.title),r.a.createElement(Rn.a,{text:e.overview,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}))))},$n=function(e){function n(e){var t;Object(d.a)(this,n),(t=Object(g.a)(this,Object(f.a)(n).call(this,e))).componentDidMount=Object(p.a)(s.a.mark(function e(){var n,a,r,i,o,l,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.props,a=n.match.params.id,r=n.history.push,i=t.state.isCollection,o=parseInt(a),!isNaN(o)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(l=null,e.prev=6,!i){e.next=12;break}return e.next=10,ee.collection(o);case 10:c=e.sent,l=c.data;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),t.setState({error:"Can't find anything."});case 17:return e.prev=17,t.setState({loading:!1,result:l}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[6,14,17,20]])}));var a=e.location.pathname;return t.state={result:null,error:null,loading:!0,isCollection:a.includes("/collection/")},t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state,n=e.result,t=e.error,a=e.loading;return console.log(n),r.a.createElement(Zn,{result:n,error:t,loading:a})}}]),n}(a.Component),et=function(){return r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0,component:te}),r.a.createElement(c.b,{path:"/tv",exact:!0,component:oe}),r.a.createElement(c.b,{path:"/search",exact:!0,component:ge}),r.a.createElement(c.b,{path:"/movie/:id",component:Tn}),r.a.createElement(c.b,{path:"/tv/:id",component:Tn}),r.a.createElement(c.b,{path:"/collection/:id",component:$n}),r.a.createElement(c.a,{from:"*",to:"/"}))))},nt=t(43),tt=t.n(nt);function at(){var e=Object(h.a)(["\n    ",";\n    a {\n        text-decoration:none;\n        color:inherit;\n    }\n\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body {\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20,20,20,1);\n        color:white;\n        padding-top:50px;\n\n    };\n    \n"]);return at=function(){return e},e}var rt=Object(b.createGlobalStyle)(at(),tt.a);var it=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(rt,null),r.a.createElement(et,null))};o.a.render(r.a.createElement(it,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.31ae0f59.chunk.js.map