webpackJsonp([1],{"78sb":function(t,e){},"7ThI":function(t,e){},DCST:function(t,e){},HA4g:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},a,!1,function(t){i("7ThI")},null,null).exports,r=i("/ocq"),o={name:"IndexHeader",data:function(){return{difficulty:"难度 :",levels:[{id:"0001",content:"初级"},{id:"0002",content:"中级"},{id:"0003",content:"高级"}],questionClassification:[{id:"0001",content:"思考题"},{id:"0001",content:"选择题"},{id:"0002",content:"综合题"},{id:"0003",content:"功能题"}]}},methods:{addEventListenerNavClick:function(t){console.log(t.content),"初级"===t.content?alert("您当前处于初级习题"):alert("此部分功能尚未扩展")}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-shadow"}),t._v(" "),i("header",{staticClass:"header"}),t._v(" "),i("div",{staticClass:"top-nav"},[i("ul",{staticClass:"top-nav-ul"},[i("div",[i("li",{staticClass:"top-nav-ul-li level0"},[t._v(t._s(t.difficulty))]),t._v(" "),t._l(t.levels,function(e,n){return i("li",{key:n.id,staticClass:"top-nav-ul-li level1",on:{click:function(i){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])})],2),t._v(" "),i("span",[i("a",{staticClass:"github",attrs:{title:"github",href:"https://github.com/LeeDeea/Online-website"}},[i("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])]),t._v(" "),i("div",t._l(t.questionClassification,function(e,n){return i("li",{key:n.id,staticClass:"top-nav-ul-li level4",on:{click:function(i){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.content))])}),0)])])])},staticRenderFns:[]};var c=i("VU/8")(o,l,!1,function(t){i("xoZ0")},"data-v-4c2202a9",null).exports,d={name:"IndexKnowledge",props:{levels:Array},data:function(){return{classification:"分类："}},methods:{addEventListenerNavClick:function(t){this.$emit("selectKnowleage",t.articleList)}},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"top-knowledge-ul"},[i("li",{staticClass:"top-knowledge-ul-li",staticStyle:{background:"darkgray",color:"white"}},[t._v(t._s(t.classification))]),t._v(" "),t._l(t.levels,function(e,n){return i("li",{key:n.id,staticClass:"top-knowledge-ul-li",on:{click:function(i){return t.addEventListenerNavClick(e)}}},[t._v(t._s(e.title))])})],2)])},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(t){i("ZI+8")},"data-v-b0becca0",null).exports,v={name:"IndexArticleList",props:{articleListData:Array},data:function(){return{hotArticle:"文章列表",show:"hidden",articleLists:!0,godColor:1e6,dataQuestion:"题目：请点击上方分类按钮,切换文章列表",dataAnswer:[{id:12,explanation:"这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999"}],dataImge:[{url:"nothing"}],articleList:[{id:1,titleList:"题目存放处",questions:{question:"题目：请点击上方分类按钮,切换文章列表",answer:[{answer:"这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999"}]}},{id:2,titleList:"点击切换题目",questions:{question:"题目：请点击上方分类按钮,切换文章列表",answer:[{answer:"这是一个简单的网站，会存放一些我整理的有关习题，不过个人时间精力有限,题目整理不当的地方或更新进度缓慢请给予谅解并及时反馈给我,十分感谢,联系方式：VX:VsevenV73999"}]}}]}},methods:{addEventListenerNavClick:function(t,e){for(var i=0;i<this.articleList.length;i++)this.articleList[i].id===t.id&&(this.dataQuestion=this.articleList[i].questions.question,this.dataAnswer=this.articleList[i].questions.answer);this.godColor=e},hideenArticleList:function(){"show"===this.show?(this.$refs.articleOl.style.display="block",this.show="hidden"):(this.$refs.articleOl.style.display="none",this.show="show")}},mounted:function(){},watch:{articleListData:function(){this.articleList=this.articleListData,this.godColor=1e6}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article-wrap"},[i("div",{staticClass:"article-size article-left-width"},[i("span",{staticClass:"hot-article"},[t._v("文章列表\n      "),i("span",{staticClass:"showArticle",on:{click:function(e){return t.hideenArticleList()}}},[t._v(t._s(t.show))])]),t._v(" "),i("div",{ref:"articleOl",staticClass:"articleListOl",attrs:{id:"articleOl"}},[i("ul",t._l(t.articleList,function(e,n){return i("li",{key:n,ref:"article",refInFor:!0,class:{articleList:t.articleLists,godColor:n==t.godColor},on:{click:function(i){return t.addEventListenerNavClick(e,n)}}},[t._v(t._s(n+1)+"."+t._s(e.titleList))])}),0)])]),t._v(" "),i("div",{staticClass:"article-size article-right-width"},[i("div",[i("div",{staticClass:"questions"},[t._v("Q:"+t._s(t.dataQuestion))]),t._v(" "),t._l(t.dataAnswer,function(e,n){return i("div",{key:n},[i("div",{staticClass:"answer"},[i("p",[t._v(t._s(e.answer))]),t._v(" "),i("br"),t._v(" "),i("p",{staticClass:"answerExplanation"},[t._v(t._s(e.explanation))]),t._v(" "),i("br"),t._v(" "),i("p",{staticClass:"questionImgWrap"},[i("img",{staticClass:"questionImg",attrs:{src:e.url,alt:""}})]),t._v(" "),i("p",{staticClass:"imgAnswe",domProps:{innerHTML:t._s(e.ImgExplanation)}},[t._v(t._s(e.ImgExplanation))])])])})],2)])])},staticRenderFns:[]};var g=i("VU/8")(v,f,!1,function(t){i("DCST")},"data-v-49818e89",null).exports,p={name:"canvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=this.$refs.canvas,e=t.getContext("2d"),i=document.body.clientWidth,n=document.body.clientHeight,a=80;i<675&&(a=30);var s=[];function r(t,i){e.save(),e.fillStyle="rgba(255, 255, 255, 0)",e.beginPath(),e.arc(t,i,1.2,0,2*Math.PI,!1),e.closePath(),e.fill(),e.restore()}function o(e,i,n,a){var s=t.getContext("2d"),r=s.createLinearGradient(e,i,n,a);r.addColorStop(0,"#bcbcbc"),r.addColorStop(1,"#f2f2f2"),s.save(),s.strokeStyle=r,s.beginPath(),s.moveTo(e,i),s.lineTo(n,a),s.lineCap="butt",s.closePath(),s.stroke(),s.restore()}!function(){t.width=i,t.height=n;for(var e=0;e<a;e++)s[e]={x:Math.random()*i,y:Math.random()*n,cx:1.2*(.6*Math.random()-.4),cy:1.2*(.6*Math.random()-.4)},r(s[e].x,s[e].y)}(),setInterval(function(){e.clearRect(0,0,i,n);for(var t=0;t<a;t++){s[t].x+=s[t].cx,s[t].y+=s[t].cy,r(s[t].x,s[t].y),s[t].x<0||s[t].x>i?s[t].cx=-s[t].cx:(s[t].y<0||s[t].y>n)&&(s[t].cy=-s[t].cy);for(var l=t+1;l<a;l++)Math.pow(s[t].x-s[l].x,2)+Math.pow(s[t].y-s[l].y,2)<3600&&o(s[t].x,s[t].y,s[l].x,s[l].y)}},25)}},mounted:function(){this.initCanvas()}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{ref:"canvas",staticClass:"canvasss",attrs:{id:"canvas"}})])},staticRenderFns:[]};var C=i("VU/8")(p,m,!1,function(t){i("gSWM")},"data-v-2ae03970",null).exports,_=i("mtWM"),w=i.n(_),x={name:"index",components:{IndexHeader:c,IndexKnowledge:h,IndexArticleList:g,IndexCanvasBg:C},data:function(){return{getJsonData:"primaryKnowledage.json",levels:[],articleList:[]}},methods:{getKnowleage:function(){w.a.get("./static/mock/"+this.getJsonData).then(this.handleGetKnowleageInfoSucc)},handleGetKnowleageInfoSucc:function(t){t=t.data,this.levels=t.data.knowledge},changeKnowleage:function(t){this.getJsonData=t,w.a.get("./static/mock/primaryKnowledage/"+this.getJsonData).then(this.changeArticleList)},changeArticleList:function(t){t=t.data.articleList,this.articleList=t}},mounted:function(){this.getKnowleage()}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bodySize"},[e("IndexCanvasBg"),this._v(" "),e("Index-Header"),this._v(" "),e("Index-Knowledge",{attrs:{levels:this.levels},on:{selectKnowleage:this.changeKnowleage}}),this._v(" "),e("Index-ArticleList",{attrs:{articleListData:this.articleList}})],1)},staticRenderFns:[]};var y=i("VU/8")(x,L,!1,function(t){i("ceIe")},null,null).exports,b={name:"LoginCanvasBg",data:function(){return{}},methods:{initCanvas:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),i=t.width=window.innerWidth,n=t.height=window.innerHeight,a=217,s=[],r=0,o=document.createElement("canvas"),l=o.getContext("2d");o.width=100,o.height=100;var c=o.width/2,d=l.createRadialGradient(c,c,0,c,c,c);function u(t,e){if(arguments.length<2&&(e=t,t=0),t>e){var i=e;e=t,t=i}return Math.floor(Math.random()*(e-t+1))+t}d.addColorStop(.025,"#CCC"),d.addColorStop(.1,"hsl("+a+", 61%, 33%)"),d.addColorStop(.25,"hsl("+a+", 64%, 6%)"),d.addColorStop(1,"transparent"),l.fillStyle=d,l.beginPath(),l.arc(c,c,c,0,2*Math.PI),l.fill();var h=function(){var t,e,a;this.orbitRadius=u((t=i,e=n,a=Math.max(t,e),Math.round(Math.sqrt(a*a+a*a))/2)),this.radius=u(60,this.orbitRadius)/8,this.orbitX=i/2,this.orbitY=n/2,this.timePassed=u(0,800),this.speed=-u(this.orbitRadius)/5e4,this.alpha=u(2,10)/10,s[++r]=this};h.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,i=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,n=u(10);1===n&&this.alpha>0?this.alpha-=.05:2===n&&this.alpha<1&&(this.alpha+=.05),e.globalAlpha=this.alpha,e.drawImage(o,t-this.radius/2,i-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var v=0;v<800;v++)new h;!function t(){e.globalCompositeOperation="source-over",e.globalAlpha=.5,e.fillStyle="hsla("+a+", 64%, 6%, 2)",e.fillRect(0,0,i,n),e.globalCompositeOperation="lighter";for(var r=1,o=s.length;r<o;r++)s[r].draw();window.requestAnimationFrame(t)}()}},mounted:function(){this.initCanvas()}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"canvasBg"}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvass",attrs:{id:"canvas"}})])},staticRenderFns:[]};var I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top_logo"}),t._v(" "),i("div",{staticClass:"nav"},[i("div",{staticClass:"introduce",attrs:{onselectstart:"return false"}},[t._v(t._s(t.say))]),t._v(" "),i("router-link",{attrs:{to:"/index"}},[i("div",{staticClass:"gv",attrs:{onselectstart:"return false",href:""}},[t._v(t._s(t.click))])])],1)])},staticRenderFns:[]};var A={name:"index",components:{LoginCanvasBg:i("VU/8")(b,k,!1,function(t){i("78sb")},"data-v-684e005b",null).exports,LoginImg:i("VU/8")({name:"LoginImg",data:function(){return{say:"来自一位刚毕业的前端学童的介绍：本网站内主要存放一些前端常用知识，有兴趣的同学可以收藏一下哟",click:"点击新世界"}}},I,!1,function(t){i("HA4g")},null,null).exports},data:function(){return{}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasSize"},[e("Login-Img"),this._v(" "),e("Login-CanvasBg")],1)},staticRenderFns:[]};var M=i("VU/8")(A,E,!1,function(t){i("qaCU")},null,null).exports;n.a.use(r.a);var S=new r.a({routes:[{path:"/index",name:"Index",component:y},{path:"/",name:"login",component:M}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:S,components:{App:s},template:"<App/>"})},"ZI+8":function(t,e){},ceIe:function(t,e){},gSWM:function(t,e){},qaCU:function(t,e){},xoZ0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a92cf2f1021500c84fb.js.map