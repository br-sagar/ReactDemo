(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{21:function(e,t,a){e.exports={title:"styleSheet_title__4gcpJ"}},23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(2),r=a(4),c=a(3),s=a(0),o=a.n(s),i=a(19),m=a.n(i),u=(a(28),a(29),a(13)),d=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).addItems=function(){var e=l.state.textval,t=l.state.items;t.push({key:t.length+1,value:e}),l.setState({items:t,textval:""})},l.removeItems=function(){var e=l.state,t=e.textval,a=e.items.filter((function(e){return e.value!==t}));l.setState({items:a,textval:""})},l.handleChange=function(e){l.setState({textval:e.target.value})},l.state={date:new Date,items:[{key:1,value:"ReactJS"},{key:2,value:"AngularJS"},{key:3,value:"VueJS"}],cnt:0,toggle:!0,textval:""},l}return Object(l.a)(a,[{key:"toggleBackground",value:function(){this.setState({toggle:!this.state.toggle})}},{key:"increament",value:function(){this.setState({cnt:this.state.cnt+Number.parseInt(this.props.inc)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.inc,l=t.onDelete,r=t.id;return o.a.createElement("div",{className:"col-lg-3 m-4  shadow"},o.a.createElement("h1",null,"This is from class Component"),o.a.createElement("h4",{className:"badge badge-primary p-1",style:{fontSize:20}},"Current Time :",this.state.date.toLocaleTimeString()),o.a.createElement("h4",{className:"badge badge-success p-1",style:{fontSize:20}}," ",a," #",n," --\x3e ",this.state.cnt),o.a.createElement("ul",null,this.state.items.map((function(e){return o.a.createElement("li",{key:e.key},e.value)}))),o.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,value:this.state.textval}),o.a.createElement("button",{className:"btn btn-primary m-2 shadow",onClick:this.addItems},"Add Item"),o.a.createElement("button",{className:"btn btn-primary m-2 shadow",onClick:this.removeItems},"Remove Item"),o.a.createElement("button",{className:"btn btn-warning m-2 shadow",onClick:function(){return e.increament()}},"Counter"),o.a.createElement("button",{className:"btn btn-dark m-2",onClick:function(){return e.toggleBackground()}},this.state.toggle?"ON":"OFF"),o.a.createElement("button",{className:"btn btn-danger m-2 ",onClick:function(){return l(r)}},"Delete"))}},{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.tick()}),1e3),fetch("https://covid19.mathdro.id/api/").then((function(e){return e.json()})).then((function(e){return console.log(e.confirmed)}))}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}}]),a}(s.Component),h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={counters:[{key:1,value:1,id:1},{key:2,value:2,id:2},{key:3,value:3,id:3}]},l.deleteCounter=function(e){var t=l.state.counters.filter((function(t){return t.id!=e}));l.setState({counters:t})},l.deleteCounter.bind(Object(u.a)(l)),l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row justify-content-center bg-white"},this.state.counters.map((function(t){return o.a.createElement(d,{id:t.key,key:t.key,inc:t.value,onDelete:e.deleteCounter},"Increament By")})))}}]),a}(s.Component),b=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("td",null,this.props.items.fname),o.a.createElement("td",null,this.props.items.gen),o.a.createElement("td",null,this.props.items.city),o.a.createElement("td",null,this.props.items.dob),o.a.createElement("td",null,this.props.items.address),o.a.createElement("td",null,this.props.items.hobbies.map((function(e){return o.a.createElement("span",{className:"badge badge-danger"},e)}))))}}]),a}(s.Component),p=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("table",{className:"table table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{width:100}},"Full Name"),o.a.createElement("th",{style:{width:60}},"Gender"),o.a.createElement("th",{style:{width:80}}," City"),o.a.createElement("th",{style:{width:80}},"D.O.B."),o.a.createElement("th",{style:{width:120}},"Address"),o.a.createElement("th",{style:{width:40}},"Hobbies"))),o.a.createElement("tbody",null,this.props.user.map((function(t){return o.a.createElement("tr",{key:e.props.user.indexOf(t)},o.a.createElement(b,{items:t}))}))))}}]),a}(s.Component),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleChangeName=function(t){e.setState({uname:t.target.value})},e.handleChangeSurname=function(t){e.setState({sname:t.target.value})},e.handleChangeCity=function(t){document.getElementById("");var a=t.target.options[t.target.selectedIndex].text;e.setState({city:a})},e.handleChangeGender=function(t){var a=t.target.value;e.setState({gen:a}),console.log(a)},e.handleAddressChange=function(t){e.setState({address:t.target.value})},e.handleDOB=function(t){e.setState({dob:t.target.value})},e.handleHobbies=function(t){var a=t.target.name,n=t.target.checked;e.setState((function(e){return{prevState:e.hobbies.set(a,n)}})),console.log(e.state.hobbies)},e.handleSubmit=function(t){var a=e.state,n=a.isSubmitted,l=a.uname,r=a.sname,c=a.gen,s=a.city,o=a.dob,i=a.address,m=[];e.state.hobbies.forEach((function(e,t,a){1==e&&m.push(t)})),n?(t.preventDefault(),e.setState((function(e){return{isSubmitted:!n,prevState:e.user.push({fname:"".concat(l," ").concat(r),address:i,city:s,hobbies:m,gen:c,dob:o})}}))):(t.preventDefault(),e.setState({isSubmitted:!n,uname:"",sname:"",gen:"",dob:"",address:"",hobbies:new Map,city:""}))},e.state={cityList:[{value:0,text:"Select City"},{value:1,text:"Vapi"},{value:2,text:"Anand"},{value:3,text:"Vadodara"},{value:4,text:"Ahemdabad"},{value:5,text:"Surat"}],isSubmitted:!0,uname:"",city:"",gen:"",sname:"",address:"",dob:"",hobbies:new Map,user:new Array},e}return Object(l.a)(a,[{key:"render",value:function(){var e="";return e=this.state.isSubmitted?o.a.createElement("div",{className:"col-lg-4 shadow m-4 bg-white",id:"form"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{id:"formdata"},o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"name",className:"heading col-sm-2 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.handleChangeName,id:"name"}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"surname",className:"heading col-sm-2 col-form-label"},"Surname"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("input",{type:"text",className:"form-control",value:this.state.sname,onChange:this.handleChangeSurname,id:"surname"}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{className:"heading col-sm-2 col-form-label",htmlFor:"city"},"City"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("select",{onChange:this.handleChangeCity,className:"form-control",id:"city",multiple:!1},this.state.cityList.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.text)}))))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{className:"col-form-label heading col-sm-2"},"Gender"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"radio",name:"gender",onClick:this.handleChangeGender,className:"form-check-input",id:"male",value:"male"}),o.a.createElement("label",{htmlFor:"male"},"Male")),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"radio",name:"gender",onClick:this.handleChangeGender,className:"form-check-input",id:"female",value:"female"}),o.a.createElement("label",{htmlFor:"female"},"Female")),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"radio",name:"gender",onClick:this.handleChangeGender,className:"form-check-input",id:"other",value:"other"}),o.a.createElement("label",{htmlFor:"other"},"Other")))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"address",className:" heading col-sm-2 col-form-label"},"Address"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("textarea",{className:"form-control",value:this.state.address,id:"address",onChange:this.handleAddressChange}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"dob",className:"heading col-sm-2 col-form-label"},"DOB"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("input",{type:"date",id:"dob",className:"form-control",onChange:this.handleDOB,value:this.state.dob}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{className:"heading col-form-label col-sm-2"},"Hobbies"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"checkbox",name:"Games",className:"hobbies form-check-input",id:"games",onChange:this.handleHobbies}),o.a.createElement("label",{className:"",htmlFor:"games"},"Games")),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"checkbox",name:"Music",className:"hobbies form-check-input",id:"music",onChange:this.handleHobbies}),o.a.createElement("label",{htmlFor:"music"},"Music")),o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{type:"checkbox",name:"Dance",className:"hobbies form-check-input",id:"dance",onChange:this.handleHobbies}),o.a.createElement("label",{htmlFor:"dance"},"Dance"))))),o.a.createElement("div",{className:"form-group col-lg-4 pt-2"},o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))):o.a.createElement("div",{className:"shadow bg-white mt-3"},o.a.createElement("button",{onClick:this.handleSubmit,className:"btn btn-primary m-3"},"Add New"),o.a.createElement(p,{user:this.state.user})),o.a.createElement(o.a.Fragment,null,e)}}]),a}(s.Component);function g(e){return o.a.createElement("div",{style:{borderRadius:"20px 0px 0px 20px",backgroundColor:"blue"}},e.children)}function f(e){return o.a.createElement("ul",{className:"socialLinks"},o.a.createElement("li",null,o.a.createElement("span",{className:"badge badge-pill badge-light mt-2",style:{fontSize:13}},e.likes," ",0===e.likes?"Like":"Likes")),o.a.createElement("li",null,o.a.createElement("button",{onClick:e.handleLikes,className:"btn btn-link btn-sm socialButtonn"},o.a.createElement("img",{className:"mr-3 ",src:"https://img.icons8.com/cute-clipart/64/000000/facebook-like.png",style:{height:32,width:32},alt:"likes"}))),o.a.createElement("li",null,o.a.createElement("button",{className:"btn btn-link btn-sm socialButtonn"},o.a.createElement("img",{className:"mr-3 ",src:"https://img.icons8.com/color/48/000000/comments.png",style:{height:32,width:32},alt:"comment"}))),o.a.createElement("li",null,o.a.createElement("button",{className:"btn btn-link btn-sm socialButtonn"},o.a.createElement("img",{src:"https://img.icons8.com/flat_round/64/000000/share--v1.png",style:{height:32,width:32},alt:"share"}))))}function v(e){return o.a.createElement("div",{className:"col-lg-7",style:{borderRadius:"0px 20px 20px 0px",backgroundColor:"#e3f2fd",fontSize:13}},e.children)}var y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).likeIncreament=function(){l.setState({likes:l.state.likes+1})},l.state={likes:0},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"row justify-content-center m-3 clearfix"},o.a.createElement(g,null,o.a.createElement("div",null,o.a.createElement("img",{src:this.props.image,className:"thumbnail"}))),o.a.createElement(v,null,o.a.createElement("div",null,o.a.createElement("section",null,this.props.children),o.a.createElement(f,{handleLikes:this.likeIncreament,likes:this.state.likes}))))}}]),a}(s.Component),N=a(5),k=a(7),w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleDelete=function(e){window.confirm("Are you sure to delete this post?")?fetch("http://localhost:3004/posts/"+e.target.value,{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){alert("Successfully Deleted"),window.location.reload()})):alert("You Selected No")},e.handleEditPost=function(e){e.target.value;var t=Object(N.f)();console.log(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.posts,a=e.postNo;return o.a.createElement("div",{className:"col-lg-7  mb-3 rounded",style:{backgroundColor:"#009688",fontSize:13,color:"white"}},o.a.createElement("section",null,o.a.createElement("header",null,o.a.createElement("h4",{className:"text-uppercase"},t.title),o.a.createElement("p",null,o.a.createElement("em",null,"Written By: ",t.userId)),o.a.createElement("p",null,"Post No: ",a+1," ")),o.a.createElement("article",null,o.a.createElement("p",{className:"paragraph"},t.body),o.a.createElement(k.b,{className:"btn btn-primary btn-sm m-2",to:{pathname:"/blogs/"+t.id,state:{id:t.id}}},"Edit"),o.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger m-2 ",value:t.id,onClick:this.handleDelete},"Delete"))))}}]),a}(s.Component);var C=a(21),x=a.n(C),j=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handlePage=function(t){e.setState({pageIndex:t.target.value})},e.state={posts:new Array,pageIndex:1,size:10,pageStart:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h1",{className:"".concat(x.a.title," col-lg-7 mt-3 mb--3")},"BLOG POSTS"),this.state.posts.map((function(t){return o.a.createElement(w,{key:t.id,posts:t,postNo:e.state.posts.findIndex((function(e){return e.id===t.id}))})})))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3004/posts",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({posts:t})}))}}]),a}(s.Component),O=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"mt-3 mb-3 bg-secondary"},o.a.createElement(h,null),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement(E,null)),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(y,{image:"https://image.shutterstock.com/image-illustration/covid19-coronavirus-outbreak-virus-floating-600w-1662701254.jpg"},o.a.createElement("article",null,o.a.createElement("h4",{className:"text-uppercase"},"COVID-19"),o.a.createElement("p",{className:"paragraph"},"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."))),o.a.createElement(y,{image:"https://i.pinimg.com/736x/55/3c/50/553c50be9b34f7c4d04fb2445091a280.jpg"},o.a.createElement("article",null,o.a.createElement("h4",{className:"text-uppercase"},"ELON MUSK"),o.a.createElement("p",{className:"paragraph"},"Elon Reeve Musk FRS is an engineer, industrial designer, technology entrepreneur, scientist and philanthropist. He is a citizen of South Africa, the United States, and Canada"))),o.a.createElement(y,{image:"https://wallpapertag.com/wallpaper/full/2/2/8/990628-free-vintage-desktop-wallpapers-1920x1080.jpg"},o.a.createElement("article",null,o.a.createElement("h4",{className:"text-uppercase"},"The Eiffel Tower"),o.a.createElement("p",{className:"paragraph"},"The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower")))))}}]),a}(s.Component),S=a(22),I=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleTextbox=function(t){e.setState(Object(S.a)({},t.target.name,t.target.value))},e.handlePost=function(){"Post New Blog"===e.state.btnText?fetch("http://localhost:3004/posts/",{method:"POST",body:JSON.stringify({title:e.state.title,body:e.state.body,userId:e.state.userId}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.props.history.push("/blogs/")})):fetch("http://localhost:3004/posts/"+e.state.postid,{method:"PUT",body:JSON.stringify({title:e.state.title,body:e.state.body,userId:e.state.userId}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.props.history.push("/blogs/")}))},e.state={title:"",body:"",userId:"",btnText:"Post New Blog",postid:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history.location,a=t.state?t.state.id:null;null!==a&&fetch("http://localhost:3004/posts/"+a,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body,userId:t.userId,btnText:"Update Post",postid:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"row mt-3 justify-content-center"},o.a.createElement("div",{className:"col-lg-6 mt-4 bg-light"},o.a.createElement("h4",{className:"text-center"},"Post New Blog"),o.a.createElement("div",{className:"form-group row mt-5"},o.a.createElement("label",{htmlFor:"name",className:"heading col-sm-4 col-form-label"},"User Id"),o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("input",{type:"text",className:"form-control",name:"userId",onChange:this.handleTextbox,value:this.state.userId}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"name",className:"heading col-sm-4 col-form-label"},"Post Title"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("input",{type:"text",className:"form-control",name:"title",onChange:this.handleTextbox,value:this.state.title}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"name",className:"heading col-sm-4 col-form-label"},"Body of Blog"),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("textarea",{className:"form-control",value:this.state.body,name:"body",onChange:this.handleTextbox}))),o.a.createElement("div",{className:"form-group row mt-2"},o.a.createElement("label",{htmlFor:"name",className:"heading col-sm-4 col-form-label"}),o.a.createElement("div",{className:"col-lg-8"},o.a.createElement("button",{type:"submit",onClick:this.handlePost,className:"btn btn-success"},this.state.btnText)))))}}]),a}(s.Component),F=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"row mt-3 justify-content-center"},o.a.createElement("h4",{style:{textAlign:"center"},className:"col-lg-12"},"Error 404"),o.a.createElement("p",{className:"col-lg-12",style:{textAlign:"center"}},"The page you are looking for is might be not available or you are using invalid url."),o.a.createElement("br",null),o.a.createElement(k.b,{to:"/"},"Back to homepage."))}}]),a}(s.Component);function D(){var e=Object(N.g)().cat;return o.a.createElement("h4",null,e)}var T=function(){var e=Object(N.h)(),t=e.path,a=e.url;return console.log(t),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(k.b,{to:"".concat(a,"/edu")},"Education")),o.a.createElement("li",null,o.a.createElement(k.b,{to:"".concat(a,"/bollywood")},"Bollywood")))},B=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,null,o.a.createElement("div",null,o.a.createElement("header",{className:"navbar navbar-light bg-light navbar-expand-lg sticky-top"},o.a.createElement(k.b,{to:"/",className:"navbar-brand"},"ReactJS"),o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.c,{activeStyle:{color:"tomato"},to:"/demo",className:"nav-link"},"Demo")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.c,{activeStyle:{color:"tomato"},to:"/blogs",className:"nav-link"},"Blogs")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(k.c,{activeStyle:{color:"tomato"},to:"/category",className:"nav-link"},"Category"))))),o.a.createElement(N.c,null,o.a.createElement(N.a,{path:"/",exact:!0,component:I}),o.a.createElement(N.a,{path:"/blogs",exact:!0,component:j}),o.a.createElement(N.a,{path:"/blogs/:id",exact:!0,component:I}),o.a.createElement(N.a,{path:"/demo",exact:!0,component:O}),o.a.createElement(N.a,{path:"/category",exact:!0},o.a.createElement(T,null)),o.a.createElement(N.a,{path:"/category/:cat",exact:!0},o.a.createElement(D,null)),o.a.createElement(N.a,{component:F}))))}}]),a}(s.Component);m.a.render(o.a.createElement(B,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.78b0a3bc.chunk.js.map