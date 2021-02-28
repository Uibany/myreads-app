(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/background.f89ff9d7.jpeg"},21:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),r=a(19),s=a.n(r),c=a(9),l=a(2),i=a(3),u=a(5),m=a(4),h=a(6),k=a(0),b=a(16),d="https://reactnd-books-api.udacity.com",p=localStorage.token;p||(p=localStorage.token=Math.random().toString(36).substr(-8));var g={Accept:"application/json",Authorization:p},f=function(){return fetch("".concat(d,"/books"),{headers:g}).then(function(e){return e.json()}).then(function(e){return e.books})},v=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},y=function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(b.a)({},g,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateBook",value:function(e){this.props.onMoveBook(this.props.book,e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.key,o=t.book,r=(t.onMoveBook,t.toggleBookDetails),s=t.setCurrentBook;return n.a.createElement("li",{key:a},n.a.createElement("div",{className:"book card"},n.a.createElement("div",{className:"book-top"},n.a.createElement("img",{className:"book-cover",src:o.imageLinks&&o.imageLinks.thumbnail})),n.a.createElement("div",{className:"book-title"},o.title),n.a.createElement("div",{className:"book-authors"},o.authors&&o.authors.join(", ")),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("p",null,"Move to..."),n.a.createElement("select",{value:o.shelf,onChange:function(t){return e.updateBook(t.target.value)}},n.a.createElement("option",{disabled:!0,selected:!0,value:!0}," - select an option - "),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"Remove from shelf"))),n.a.createElement("div",{className:"book-shelf-changer book-details",onClick:function(){r(),s(o)}},n.a.createElement("p",null,"Details"))))}}]),t}(o.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksOnShelf,a=e.onMoveBook,o=e.toggleBookDetails,r=e.setCurrentBook,s=["I'm currently reading...","I want to read...","I have read..."];return n.a.createElement("div",null,["currentlyReading","wantToRead","read"].map(function(e,c){return n.a.createElement("div",{key:c,className:"list-books-content"},n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},s[c]),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},t.filter(function(t){return t.shelf===e}).map(function(e){return n.a.createElement(E,{key:e.id,book:e,onMoveBook:a,toggleBookDetails:o,setCurrentBook:r})})))))}))}}]),t}(o.Component),O=a(12),j=a.n(O),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"header-container"},n.a.createElement("img",{src:j.a,alt:"picture of books",class:"header-image"}),n.a.createElement("h1",{className:"header-title"},"MyReads"),n.a.createElement("p",{className:"header-quote"},"\u201cThat\u2019s the thing about books. They let you travel without moving your feet.\u201d",n.a.createElement("br",null),n.a.createElement("i",null,"\u2013 Jhumpa Lahiri")),n.a.createElement(c.c,{to:"/search",className:"header-button"},"EXPLORE BOOKS"))}}]),t}(o.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchTerm,a=e.setQuery,o=e.setActiveTerm,r=e.termStyle;return n.a.createElement("ol",{className:"search-term",style:r,onClick:function(){a(t),o(t)}},t)}}]),t}(o.Component),T=["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"],N={color:"white",backgroundColor:"#ca9b34"},w={backgroundColor:"white",color:"#ca9b34"},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showSearchTerms:-1,searchTerms:[],activeTerm:null,toggleButtonText:"Show suggested search terms",toggleButtonStyle:{color:"white",backgroundColor:"#ca9b34"}},a.toggleSearchTerms=function(){a.state.showSearchTerms*=-1,console.log(a.state.showSearchTerms),1==a.state.showSearchTerms?a.setState({searchTerms:T,toggleButtonText:"Hide suggested search terms",toggleButtonStyle:{color:"#ca9b34",backgroundColor:"#f5f3f3"}}):a.setState({searchTerms:[],toggleButtonText:"Show suggested search terms",toggleButtonStyle:{color:"white",backgroundColor:"#ca9b34"}})},a.setActiveTerm=function(e){a.setState({activeTerm:e})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.searchTerms,o=t.activeTerm,r=t.toggleButtonText,s=t.toggleButtonStyle,c=this.props.setQuery;return n.a.createElement("div",{className:"search-terms-collection"},n.a.createElement("button",{className:"search-terms-toggle",onClick:this.toggleSearchTerms,style:s},r),n.a.createElement("li",{className:"search-terms-list"},a.map(function(t){return o===t?n.a.createElement(C,{searchTerm:t,setQuery:c,setActiveTerm:e.setActiveTerm,termStyle:N}):n.a.createElement(C,{searchTerm:t,setQuery:c,setActiveTerm:e.setActiveTerm,termStyle:w})})))}}]),t}(o.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={query:"",searchResult:[]},a.updateQuery=function(e){a.setState(function(){return{query:e.trim()}})},a.search=function(e){""!=e&&y(e).then(function(e){e.error?a.setState({searchResult:[]}):a.setState({searchResult:e})})},a.setQuery=function(e){a.setState({query:e}),a.search(e)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then(function(t){e.setState({searchResult:t})})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.allBooks,t.onMoveBook),o=this.state,r=o.query,s=o.searchResult;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(c.c,{to:"/",className:"close-search"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){e.updateQuery(t.target.value),e.search(r)}}))),n.a.createElement(D,{setQuery:this.setQuery}),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},s.map(function(e){return n.a.createElement(E,{key:e.id,book:e,onMoveBook:a})}))))}}]),t}(o.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){a.props.toggleBookDetails()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.currentBook;return n.a.createElement("div",{className:"book-detail-window"},n.a.createElement("div",{className:"book-detail-popup"},n.a.createElement("span",{className:"close",onClick:this.handleClick},"\xd7"),n.a.createElement("img",{className:"book-detail-cover",src:e.imageLinks&&e.imageLinks.thumbnail}),n.a.createElement("div",{className:"book-detail-content"},n.a.createElement("h2",null,e.title),n.a.createElement("h4",null,e.subtitle),n.a.createElement("h5",null,e.authors&&e.authors.join(", ")),n.a.createElement("div",null,n.a.createElement("b",null,"Publisher:")," ",e.publisher,"\xa0\xa0",n.a.createElement("b",null,"Date: "),e.publishedDate),n.a.createElement("br",null),n.a.createElement("p",null,e.description))))}}]),t}(o.Component),A=(a(31),function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={books:[],searchResult:[],showBookDetails:!1,currentBook:null},a.moveBook=function(e,t){a.state.books&&v(e,t).then(function(){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat([e])}})})},a.toggleBookDetails=function(){a.setState({showBookDetails:!a.state.showBookDetails}),console.log(a.state.showBookDetails)},a.setCurrentBook=function(e){a.setState({currentBook:e})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then(function(t){e.setState({books:t,searchResult:t,showBookDetails:!1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,o=t.searchResult,r=t.showBookDetails,s=t.currentBook;return n.a.createElement(c.b,{basename:"/myreads-app"},n.a.createElement("div",{className:"app"},n.a.createElement(k.a,{exact:!0,path:"/search",render:function(){return n.a.createElement(R,{allBooks:o,onMoveBook:e.moveBook})}}),n.a.createElement(k.a,{exact:!0,path:"/",render:function(){return n.a.createElement("div",null,r?n.a.createElement(M,{toggleBookDetails:e.toggleBookDetails,currentBook:s}):null,n.a.createElement(S,null),n.a.createElement("div",null,n.a.createElement(B,{booksOnShelf:a,onMoveBook:e.moveBook,toggleBookDetails:e.toggleBookDetails,setCurrentBook:e.setCurrentBook})),n.a.createElement(c.c,{to:"/search",className:"open-search"},"ADD BOOKS"))}})))}}]),t}(o.Component));a(34),a(36);s.a.render(n.a.createElement(c.a,null,n.a.createElement(A,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.d7ea12ad.chunk.js.map