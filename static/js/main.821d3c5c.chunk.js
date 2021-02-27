(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/background.f89ff9d7.jpeg"},21:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),c=a.n(r),s=a(9),l=a(3),i=a(4),u=a(6),h=a(5),m=a(7),b=a(0),d=a(16),f="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:p},g=function(){return fetch("".concat(f,"/books"),{headers:k}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},y=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(d.a)({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateBook",value:function(e){this.props.onMoveBook(this.props.book,e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.key,n=t.book;t.onMoveBook;return o.a.createElement("li",{key:a},o.a.createElement("div",{className:"book card"},o.a.createElement("div",{className:"book-top"},o.a.createElement("img",{className:"book-cover",src:n.imageLinks&&n.imageLinks.thumbnail})),o.a.createElement("div",{className:"book-title"},n.title),o.a.createElement("div",{className:"book-authors"},n.authors&&n.authors.join(", ")),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("p",null,"Move to..."),o.a.createElement("select",{value:n.shelf,onChange:function(t){return e.updateBook(t.target.value)}},o.a.createElement("option",{disabled:!0,selected:!0,value:!0}," - select an option - "),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"Remove from shelf")))))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksOnShelf,a=e.onMoveBook,n=["I'm currently reading...","I want to read...","I have read..."];return o.a.createElement("div",null,["currentlyReading","wantToRead","read"].map(function(e,r){return o.a.createElement("div",{key:r,className:"list-books-content"},o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},n[r]),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},t.filter(function(t){return t.shelf===e}).map(function(e){return o.a.createElement(E,{key:e.id,book:e,onMoveBook:a})})))))}))}}]),t}(n.Component),j=a(12),S=a.n(j),B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header-container"},o.a.createElement("img",{src:S.a,alt:"picture of books",class:"header-image"}),o.a.createElement("h1",{className:"header-title"},"MyReads"),o.a.createElement("p",{className:"header-quote"},"\u201cThat\u2019s the thing about books. They let you travel without moving your feet.\u201d",o.a.createElement("br",null),o.a.createElement("i",null,"\u2013 Jhumpa Lahiri")),o.a.createElement(s.b,{to:"/search",className:"header-button"},"EXPLORE BOOKS"))}}]),t}(n.Component),N=["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"],T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={showSearchTerms:-1,searchTerms:[],activeTermIndex:0,toggleButtonText:"Show suggested search terms",toggleButtonStyle:{color:"white",backgroundColor:"#ca9b34"}},a.toggleSearchTerms=function(){a.state.showSearchTerms*=-1,console.log(a.state.showSearchTerms),1==a.state.showSearchTerms?a.setState({searchTerms:N,toggleButtonText:"Hide suggested search terms",toggleButtonStyle:{color:"#ca9b34",backgroundColor:"#f5f3f3"}}):a.setState({searchTerms:[],toggleButtonText:"Show suggested search terms",toggleButtonStyle:{color:"white",backgroundColor:"#ca9b34"}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.showSearchTerms,e.searchTerms),a=(e.activeTermIndex,e.toggleButtonText),n=e.toggleButtonStyle;return o.a.createElement("div",{className:"search-terms-collection"},o.a.createElement("button",{className:"search-terms-toggle",onClick:this.toggleSearchTerms,style:n},a),o.a.createElement("li",{className:"search-terms-list"},t.map(function(e){return o.a.createElement("ol",{className:"search-term"},e)})))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",searchResult:[]},a.updateQuery=function(e){a.setState(function(){return{query:e.trim()}})},a.search=function(e){""!=e&&y(e).then(function(e){e.error?a.setState({searchResult:[]}):a.setState({searchResult:e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then(function(t){e.setState({searchResult:t})})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.allBooks,t.onMoveBook),n=this.state,r=n.query,c=n.searchResult;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(s.b,{to:"/",className:"close-search"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){e.updateQuery(t.target.value),e.search(r)}}))),o.a.createElement(T,null),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},c.map(function(e){return o.a.createElement(E,{key:e.id,book:e,onMoveBook:a})}))))}}]),t}(n.Component),C=(a(31),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],searchResult:[]},a.moveBook=function(e,t){a.state.books&&v(e,t).then(function(){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g().then(function(t){e.setState({books:t,searchResult:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,n=t.searchResult;return o.a.createElement("div",{className:"app"},o.a.createElement(b.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(w,{allBooks:n,onMoveBook:e.moveBook})}}),o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",null,o.a.createElement(B,null),o.a.createElement("div",null,o.a.createElement(O,{booksOnShelf:a,onMoveBook:e.moveBook})),o.a.createElement(s.b,{to:"/search",className:"open-search"},"ADD BOOKS"))}}))}}]),t}(n.Component));a(34),a(36);c.a.render(o.a.createElement(s.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.821d3c5c.chunk.js.map