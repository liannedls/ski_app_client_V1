(this["webpackJsonpmern-tracker"]=this["webpackJsonpmern-tracker"]||[]).push([[0],{83:function(e,t,s){},86:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(1),a=s(19),c=s.n(a),r=s(48),l=s(9),o=s(10),h=s(12),d=s(11),j=(s(57),s(20)),b=s(5),u=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(i.jsx)("li",{className:"navbar-brand",children:"Ski Lesson Planner"}),Object(i.jsx)("div",{className:"collpase navbar-collapse",children:Object(i.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(i.jsx)("li",{className:"navbar-item",children:Object(i.jsx)(j.b,{to:"/",className:"nav-link",children:"Exercise Database"})}),Object(i.jsx)("li",{className:"navbar-item",children:Object(i.jsx)(j.b,{to:"/mylist",className:"nav-link",children:"My Lesson"})}),Object(i.jsx)("li",{className:"navbar-item",children:Object(i.jsx)(j.b,{to:"/firsttimer",className:"nav-link",children:"First Timer"})})]})})]})}}]),s}(n.Component),p=s(6),x=s(21),O=s.n(x),g=(s(25),s(92)),m=s(93),f=s(94),v=s(46),y=s(49),k=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).add=i.add.bind(Object(p.a)(i)),i.del=i.del.bind(Object(p.a)(i)),i.toggleOpen=i.toggleOpen.bind(Object(p.a)(i)),i.state={count:1,pointless:1,colorbutton:"green",opendesc:!1},i}return Object(o.a)(s,[{key:"add",value:function(e){e.preventDefault();var t=localStorage.getItem("id_list");if(t.includes(this.props.exercise._id))if(this.setState({colorbutton:"#343a40"}),null!==t&&""!==t&&null!==this.props.exercise&&""!==this.props.exercise){if(t.includes(JSON.stringify(this.props.exercise._id)+",")){var s=t.replace(JSON.stringify(this.props.exercise._id)+",","");localStorage.setItem("id_list",s)}else if(t.includes(","+JSON.stringify(this.props.exercise._id))){var i=t.replace(","+JSON.stringify(this.props.exercise._id),"");localStorage.setItem("id_list",i)}else if(t.includes(JSON.stringify(this.props.exercise._id))){var n=t.replace(JSON.stringify(this.props.exercise._id),"");localStorage.setItem("id_list",n)}}else console.log("error : list ID empty");else if(this.setState({colorbutton:"green"}),""===t||null===t){var a=JSON.stringify(this.props.exercise._id);localStorage.setItem("id_list",a)}else{var c=t+","+JSON.stringify(this.props.exercise._id);localStorage.setItem("id_list",c)}}},{key:"del",value:function(e){e.preventDefault();var t=localStorage.getItem("id_list");if(null!==t&&""!==t&&null!==this.props.exercise&&""!==this.props.exercise){if(t.includes(JSON.stringify(this.props.exercise._id)+",")){var s=t.replace(JSON.stringify(this.props.exercise._id)+",","");localStorage.setItem("id_list",s),this.handlerhere()}else if(t.includes(","+JSON.stringify(this.props.exercise._id))){var i=t.replace(","+JSON.stringify(this.props.exercise._id),"");localStorage.setItem("id_list",i),this.handlerhere()}else if(t.includes(JSON.stringify(this.props.exercise._id))){var n=t.replace(JSON.stringify(this.props.exercise._id),"");localStorage.setItem("id_list",n),this.handlerhere()}}else console.log("error : list ID empty")}},{key:"handlerhere",value:function(){this.props.handler()}},{key:"componentDidMount",value:function(){localStorage.getItem("id_list").includes(this.props.exercise._id)?this.setState({colorbutton:"green"}):this.setState({colorbutton:"#343a40"})}},{key:"toggleOpen",value:function(){this.setState({opendesc:!this.state.opendesc}),console.log(this.state.opendesc)}},{key:"render",value:function(){var e,t,s,n=this;if("Add"===this.props.val&&(e=Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:this.add,className:"btn add",style:{backgroundColor:this.state.colorbutton},children:"Add"})})),"Delete"===this.props.val){var a=localStorage.getItem("id_list");e=""!==this.props.exercise.name&&""!==a?Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:this.del,className:"btn btn-outline-dark",children:"Del"})}):Object(i.jsx)("td",{})}return t=null!=this.props.exercise.reference?Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:this.props.exercise.reference,children:"Go to video"})}):Object(i.jsx)("td",{}),s="Any"===this.props.exercise.age?Object(i.jsx)("td",{children:"Adult, Children"}):Object(i.jsx)("td",{children:this.props.exercise.age}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:this.props.exercise.name}),Object(i.jsxs)("td",{children:[Object(i.jsx)(y.a,{style:{},className:"btn desc",onClick:function(){return n.toggleOpen()},"aria-controls":"example-collapse-text","aria-expanded":this.state.opendesc,children:"Description"}),Object(i.jsx)(v.a,{in:this.state.opendesc,children:Object(i.jsx)("div",{id:"example-collapse-text",children:this.props.exercise.description})})]}),Object(i.jsx)("td",{children:this.props.exercise.skill}),s,t,e]},this.props.exercise._id)}}]),s}(n.Component),S=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"exerciseList",value:function(){var e=this;return this.props.exercises.map((function(t){return Object(i.jsx)(k,{exercise:t,val:e.props.val,handler:e.props.handler},t._id)}))}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{className:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"namecol",children:"Name"}),Object(i.jsx)("th",{children:"Description"}),Object(i.jsx)("th",{children:"Skill Level"}),Object(i.jsx)("th",{children:"Age"}),Object(i.jsx)("th",{children:"Video"}),Object(i.jsx)("th",{children:this.props.val})]})}),Object(i.jsx)("tbody",{children:this.exerciseList()})]})})}}]),s}(n.Component),N=s(23),w=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).onChangeSearch=function(e){i.setState({textVal:e.target.value})},i.handler=i.handler.bind(Object(p.a)(i)),i.onChangeGroup=i.onChangeGroup.bind(Object(p.a)(i)),i.onChangeSkill=i.onChangeSkill.bind(Object(p.a)(i)),i.onChangeAge=i.onChangeAge.bind(Object(p.a)(i)),i.onChangeExercisenum=i.onChangeExercisenum.bind(Object(p.a)(i)),i.onSubmit=i.onSubmit.bind(Object(p.a)(i)),i.loadAll=i.loadAll.bind(Object(p.a)(i)),i.loadSearch=i.loadSearch.bind(Object(p.a)(i)),i.state={groups:["Group","Private"],skills:["Beginner","Intermediate","Advanced"],ages:["Adult","Children","Any"],exercisenums:[1,2,3,4,5],exercises:[{name:"Loading",description:"Loading",group:"Loading",age:"Loading",skill:"Loading"}],group:"Group",skill:"Beginner",age:"Any",num:5,textVal:""},i}return Object(o.a)(s,[{key:"handler",value:function(){this.setState({someVar:"some value"}),this.componentDidMount()}},{key:"onChangeGroup",value:function(e){this.setState({group:e.target.value})}},{key:"onChangeSkill",value:function(e){this.setState({skill:e.target.value})}},{key:"onChangeAge",value:function(e){this.setState({age:e.target.value})}},{key:"onChangeExercisenum",value:function(e){this.setState({num:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),O.a.get("https://frozen-stream-11960.herokuapp.com/exercises/",{params:{group:this.state.group,age:this.state.age,skill:this.state.skill,num:this.state.num}}).then((function(e){t.setState({exercises:e.data})})).catch((function(e){console.log(e)})),this.setState({loadExercises:!0})}},{key:"loadAll",value:function(e){var t=this;e.preventDefault(),O.a.get("https://frozen-stream-11960.herokuapp.com/exercises/all").then((function(e){t.setState({exercises:e.data})})).catch((function(e){console.log(e)})),this.setState({loadExercises:!0})}},{key:"loadSearch",value:function(e){var t=this;e.preventDefault(),O.a.get("https://frozen-stream-11960.herokuapp.com/exercises/search",{params:{text:this.state.textVal}}).then((function(e){t.setState({exercises:e.data})})).catch((function(e){console.log(e)})),this.setState({loadExercises:!0})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.loadExercises;return N.a.pageview(window.location.pathname+window.location.search),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"justify-center",children:"Create a Ski Lesson Plan"}),Object(i.jsx)(g.a,{children:Object(i.jsxs)("form",{onSubmit:this.onSubmit,className:"",children:[Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(f.a,{className:"selectorbox",children:[Object(i.jsx)(m.a,{children:Object(i.jsx)("label",{children:"Skill Level"})}),Object(i.jsx)(m.a,{children:Object(i.jsx)("select",{ref:"skillInput",type:"text",className:"form-control",value:this.state.skill,onChange:this.onChangeSkill,children:this.state.skills.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})})]}),Object(i.jsxs)(f.a,{className:"selectorbox",children:[Object(i.jsx)(m.a,{children:Object(i.jsx)("label",{children:"Student Age "})}),Object(i.jsx)(m.a,{children:Object(i.jsx)("select",{ref:"userInput",className:"form-control",value:this.state.age,onChange:this.onChangeAge,children:this.state.ages.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})})]}),Object(i.jsxs)(f.a,{className:"selectorbox",children:[Object(i.jsx)(m.a,{children:Object(i.jsx)("label",{children:"# of Exercises"})}),Object(i.jsx)(m.a,{children:Object(i.jsx)("select",{ref:"exercisenumsInput",type:"int",className:"form-control",value:this.state.num,onChange:this.onChangeExercisenum,children:this.state.exercisenums.map((function(e){return Object(i.jsx)("option",{value:e,children:e},e)}))})})]}),Object(i.jsxs)(f.a,{className:"selectorbox",children:[Object(i.jsx)("label",{style:{color:"white"},children:"Find"}),Object(i.jsx)("button",{onClick:this.onSubmit,type:"primary",className:"btn btn-dark full-button",children:"Go"})]})]}),Object(i.jsx)("br",{}),Object(i.jsxs)(m.a,{children:[Object(i.jsxs)(f.a,{className:"searchfield",children:[Object(i.jsx)("input",{onChange:this.onChangeSearch,placeholder:"  Enter Search"}),Object(i.jsx)("button",{onClick:this.loadSearch,className:"btn btn-dark",children:"Search"})]}),Object(i.jsx)(f.a,{className:"justify-left seeall-button",children:Object(i.jsx)("button",{onClick:this.loadAll,className:"btn btn-dark full-button",children:"See All"})})]})]})}),e?Object(i.jsx)(S,{exercises:this.state.exercises,val:"Add",handler:this.handler},this.state.exercises._id):null]})}}]),s}(n.Component),C=s.p+"static/media/slidding.13472a96.jfif",_=s.p+"static/media/putonskis.b3cec969.jpg",D=s.p+"static/media/wedge.fd505bb5.png",A=s.p+"static/media/turn.89e31212.jpg",I=s.p+"static/media/bye.7bd7fd8f.jpg",L=s.p+"static/media/falling.7505d40b.jpg",T=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"firsttimer",children:[Object(i.jsx)("h1",{children:"First Timer Lesson Plan"}),Object(i.jsx)("h2",{children:"Meeting Your Students"}),Object(i.jsx)("p",{children:"First impressions are important. Start the lesson off right by getting to know your student."}),Object(i.jsx)("p",{className:"sub",children:"At the beginning of the lesson, ask yourself :"}),Object(i.jsxs)("ul",{className:"a",children:[Object(i.jsx)("li",{children:"Are they properly dressed and do they feel comfortable?"}),Object(i.jsx)("li",{children:"Are they familiar with their equipment?"}),Object(i.jsx)("li",{children:"Do they have any previous injuries?"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"First Steps"}),Object(i.jsx)("p",{children:"The first steps with your student are very important."}),Object(i.jsx)("p",{className:"sub",children:"While some things may seem second nature to you, many students will want some instruction on the basics :"}),Object(i.jsx)("div",{className:"firststep",children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)(f.a,{children:Object(i.jsx)("img",{src:_,alt:"Putting on a Ski boot",width:"100%",height:"100%"})}),Object(i.jsx)(f.a,{children:Object(i.jsxs)("ul",{className:"a",children:[Object(i.jsx)("li",{children:"Walking in boots"}),Object(i.jsx)("li",{children:"Carrying skis"}),Object(i.jsx)("li",{children:"Putting on skis"}),Object(i.jsx)("li",{children:"Taking skis off"}),Object(i.jsx)("li",{children:"Walking with skis on"}),Object(i.jsx)("li",{children:"Getting up from the ground while wearing skis"}),Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=AR7C5qWvuUc",className:"ref",children:"See More"})]})}),Object(i.jsx)(f.a,{children:Object(i.jsx)("img",{src:L,alt:"Putting on a Ski boot",width:"100%",height:"100%"})})]})}),Object(i.jsx)("br",{})]}),Object(i.jsx)("h2",{children:"Slidding"}),Object(i.jsxs)("p",{children:["Find flat terrain and use poles to slide forward. This will help your student experience sliding in a relaxed environment and learn to enjoy the feeling.",Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=_2zESNSSckA",children:" See More"})]}),Object(i.jsx)("img",{src:C,alt:"Slidding on Skis"}),Object(i.jsx)("h2",{children:"Learning to Snowplough"}),Object(i.jsxs)("p",{children:["Find a small incline to learn how to snowplough. Explain the snowplough, or wedge, shape and how it can control speed. Practice this until the student feels in control of their stopping. The game red light green light can be very useful for developing control.",Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=tXUbCPuc4nw",children:" See More"})]}),Object(i.jsx)("img",{src:D,alt:"Wedge Ski"}),Object(i.jsx)("h2",{children:"Learning to Turn"}),Object(i.jsxs)("p",{children:["Now that your student is comfortable stopping, they are ready to learn how to turn. Starting in the snowplough position with your body facing down the slope and your shins pushing into the front of your boots, begin sliding down the fall line. Gradually apply pressure into the inside edge of the left ski to start to turn the skis to the right The exercises Airplane can help students to make a turn.",Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=bEBIAfZ0iW4",children:" See More"})]}),Object(i.jsx)("img",{src:A,alt:"Learning to Turn with Skis"}),Object(i.jsx)("h2",{children:"Ending the Lesson"}),Object(i.jsxs)("ul",{className:"a",children:[Object(i.jsx)("li",{children:"Provide feedback"}),Object(i.jsx)("li",{children:"Did you enjoy the lesson?"}),Object(i.jsx)("li",{children:"Do you want to book another lesson?"}),Object(i.jsx)("li",{children:"Wish them the best!"})]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("img",{src:I,alt:"End of Lesson",width:"50%",height:"50%"})," "]})]})}}]),s}(n.Component),E=s(47),J=s(44),P=s(29),M=(s(82),s(95)),F=s(96),G=s(97),z=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).changeTitle=function(e){i.setState({title:e.target.value})},i.handler=i.handler.bind(Object(p.a)(i)),i.clearthis=i.clearthis.bind(Object(p.a)(i)),i.generatePDF=i.generatePDF.bind(Object(p.a)(i)),i.changeTitle=i.changeTitle.bind(Object(p.a)(i)),i.saveTitle=i.saveTitle.bind(Object(p.a)(i)),i.state={id_list:"",title:localStorage.getItem("title"),newTitle:"test",exercises:[{_id:"",name:"",description:"",group:"",age:"",skill:""}]},i}return Object(o.a)(s,[{key:"saveTitle",value:function(){localStorage.setItem("title",this.state.title)}},{key:"clearthis",value:function(){localStorage.setItem("id_list",""),this.componentDidMount()}},{key:"handler",value:function(){this.setState({someVar:"some value"}),this.componentDidMount()}},{key:"generatePDF",value:function(){var e,t=new P.default("p","pt");t.setFont("helvetica"),t.setFontSize(28),t.setTextColor(100),null!=this.state.title?t.text(this.state.title,300,40,"center"):t.text("Untitled",300,40,"center");var s=[];for(e=0;e<this.state.exercises.length;e++)s.push(Object.values(this.state.exercises[e]).splice(1,2));t.autoTable(["Exercise","Description"],s,{startY:60}),null!=this.state.title?t.save(this.state.title+".pdf"):t.save("untitled.pdf")}},{key:"componentDidMount",value:function(){var e=this;if(null===localStorage.getItem("id_list"))return!1;!function(){var t=localStorage.getItem("id_list").split(","),s="",i=1;if(t.length>=1){var n,a=Object(J.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;O.a.get("https://frozen-stream-11960.herokuapp.com/exercises/mylist",{params:{id:c.replace('"',"").replace('"',"")}}).then((function(n){e.setState({exercises:[].concat(Object(E.a)(e.state.exercises),[n.data])}),i===t.length?s+=JSON.stringify(n.data._id):(s=s+JSON.stringify(n.data._id)+",",i+=1)})).catch((function(e){console.log(e)}))}}catch(r){a.e(r)}finally{a.f()}e.setState({exercises:[]})}}()}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Mylist",children:[Object(i.jsx)(M.a,{className:"justify-center",children:Object(i.jsxs)(F.a,{children:[Object(i.jsx)(G.a,{className:"justify-center",children:Object(i.jsx)("h1",{children:this.state.title})}),Object(i.jsxs)(G.a,{className:"mylistcontrols",children:[Object(i.jsxs)(F.a,{className:"searchfield",children:[Object(i.jsx)("input",{onChange:this.changeTitle,placeholder:"  Enter name"}),Object(i.jsx)("button",{onClick:this.saveTitle,className:"btn btn-dark",children:"Save Title"})]}),Object(i.jsxs)(F.a,{className:"cleargenerate",children:[Object(i.jsx)("button",{onClick:this.clearthis,className:"btn btn-dark",children:"Clear List"}),Object(i.jsx)("button",{onClick:this.generatePDF,type:"primary",className:"btn btn-dark",children:"Generate PDF"})]})]})]})}),Object(i.jsx)(S,{exercises:this.state.exercises,val:"Delete",handler:this.handler},this.state.exercises._id)]})}}]),s}(n.Component),W=(s(83),s(45)),V=s.n(W);N.a.initialize("UA-188241761-1");var B=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={id_list:"",title:"My Lesson Plan #1"},i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){N.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)(V.a,{children:[Object(i.jsx)("meta",{name:"description",content:"Ski instructors; plan your ski lessons with the ski lesson planner."}),Object(i.jsx)("meta",{property:"og:title",content:"Ski Lesson Planner"}),Object(i.jsx)("meta",{property:"og:image",content:"components/images/ski.svg"})]}),Object(i.jsx)(u,{}),Object(i.jsx)("br",{}),Object(i.jsx)(b.a,{path:"/",exact:!0,component:w}),Object(i.jsx)(b.a,{path:"/mylist",exact:!0,component:function(e){return Object(i.jsx)(z,Object(r.a)({},e))}}),Object(i.jsx)(b.a,{path:"/firsttimer",exact:!0,component:T})]})})}}]),s}(n.Component);c.a.render(Object(i.jsx)(B,{}),document.getElementById("root"))}},[[86,1,3]]]);
//# sourceMappingURL=main.05ab6d0f.chunk.js.map