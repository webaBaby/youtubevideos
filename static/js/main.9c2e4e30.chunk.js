(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),s=a(8),o=a.n(s),l=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),h=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={searchTerm:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.searchTerm)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui field"},i.a.createElement("label",null,"Enter a Search Term"),i.a.createElement("input",{value:this.state.searchTerm,type:"text",onChange:function(t){return e.setState({searchTerm:t.target.value})}}))))}}]),t}(i.a.Component),f=(a(26),function(e){var t=e.video,a=e.onVideoSelected;return i.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header "},t.snippet.title)))}),b=function(e){var t=e.videos,a=e.onVideoSelected,n=t.map(function(e){return i.a.createElement(f,{key:e.id.videoId,video:e,onVideoSelected:a})});return i.a.createElement("div",{className:"ui relaxed  divided list"},n)},E=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"loading");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"youtubeVideo",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui hearder"},t.snippet.title),i.a.createElement("p",{className:"ui description"},t.snippet.description)))},S=a(17),w=a.n(S).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDAsDtrZnsK0E9PPNmU0Ieq9_WM4pFhupc"}}),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onSearchSubmit=function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelected=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onSearchSubmit("\u7eef\u591c")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},i.a.createElement(h,{onSubmit:this.onSearchSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(E,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(b,{videos:this.state.videos,onVideoSelected:this.onVideoSelected})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.9c2e4e30.chunk.js.map