(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},134:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n,r,c,i=a(0),l=a.n(i),o=a(25),s=a.n(o),u=(a(103),a(104),a(105),a(106),a(50)),m=a(71),d=a(72),v=a(96),f=a(73),E=a(97),p=a(74),h=a.n(p),b=l.a.createContext(),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var i=arguments.length,l=new Array(i),o=0;o<i;o++)l[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={timetable:void 0,datepickerDate:"",validateDestAndTimeWarning:!1,loadingData:!1,fetchError:!1,trackedTrainNumber:void 0,trackedTrainTime:void 0,trackTimerAmount:5,ticketsFound:!1,requestData:{dir:"0",tfl:"3",code0:"",code1:"",dt0:"",checkSeats:"0",withoutSeats:"y",version:"v.2018"}},a.getTimetable=function(){var e=new FormData,t=void 0,n={url:"/timetable/public/ru?layer_id=5827",method:"POST",data:e};Object.keys(a.state.requestData).forEach(function(t){e.set(t,a.state.requestData[t])}),a.setState({loadingData:!0}),h()(n).then(function(e){t=e.data.RID,setTimeout(function(){fetch("/timetable/public/ru?layer_id=5827",{credentials:"include",headers:{accept:"application/json, text/javascript, */*; q=0.01","accept-language":"en-US,en;q=0.9,ru;q=0.8,la;q=0.7,bg;q=0.6","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded; charset=UTF-8",pragma:"no-cache","x-requested-with":"XMLHttpRequest"},referrerPolicy:"no-referrer-when-downgrade",body:"dir=0&tfl=3&code0=".concat(a.state.requestData.code0,"&code1=").concat(a.state.requestData.code1,"&dt0=").concat(a.state.dt0,"&checkSeats=0&withoutSeats=y&version=v.2018&rid=").concat(t),method:"POST",mode:"cors"}).then(function(e){return e.json()}).then(function(e){e&&e.hasOwnProperty("tp")?a.setState({timetable:e.tp[0],fetchError:!1,loadingData:!1}):a.setState({fetchError:!0,loadingData:!1})}).catch(function(e){return console.log(e)})},1e3)})},a.changeDestination=function(e,t){return a.setState({validateDestAndTimeWarning:!1,requestData:Object(u.a)({},a.state.requestData,{code0:e,code1:t})})},a.depatureDateSelect=function(e){return a.setState(function(t){return{datepickerDate:e,validateDestAndTimeWarning:!1,requestData:Object(u.a)({},t.requestData,{dt0:e?e.toLocaleDateString("ru"):null})}})},a.onGetTimetable=function(){a.state.requestData.code0&&a.state.requestData.code1&&a.state.requestData.dt0?(a.setState({validateDestAndTimeWarning:!1}),a.getTimetable()):a.setState({validateDestAndTimeWarning:!0})},a.trackTicket=function(e){a.setState({trackedTrainNumber:e.number2,trackedTrainTime:e.time0},function(){return function t(){a.getTimetable(),a.state.timetable.list.filter(function(t){return t.number===e.number&&t.serviceCategories.length}).length>0?(a.setState({ticketsFound:!0}),r=setInterval(function(){document.title="************",c=setTimeout(function(){document.title="!!! \u0411\u0418\u041b\u0415\u0422 \u041d\u0410\u0419\u0414\u0415\u041d !!!"},400)},800)):a.setState({ticketsFound:!1}),n=setTimeout(function(){t()},1e3*a.state.trackTimerAmount)}()})},a.closeTracking=function(){a.setState({trackedTrainNumber:void 0,ticketsFound:!1}),clearTimeout(n),clearInterval(r),clearTimeout(c),setTimeout(function(){document.title="\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"},450)},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement(b.Provider,{value:Object(u.a)({},this.state,{onGetTimetable:this.onGetTimetable,changeDestination:this.changeDestination,depatureDateSelect:this.depatureDateSelect,trackTicket:this.trackTicket,closeTracking:this.closeTracking})},this.props.children)}}]),t}(l.a.Component);function k(e){return l.a.createElement(g,null,e.children)}a(124),a(125);function D(e){return l.a.createElement("div",{className:"delay-indicator"},l.a.createElement("div",{className:"delay-indicator__scale",style:{animationDuration:"".concat(e.trackTimerAmount,"s")}}))}function T(){return l.a.createElement(b.Consumer,null,function(e){return l.a.createElement("div",{className:"track-window section-wrapper"},l.a.createElement("span",{className:"close-btn",onClick:e.closeTracking},"\xd7"),l.a.createElement("h2",null,"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0435\u0437\u0434\u0430: ",e.trackedTrainNumber),l.a.createElement("h3",{className:"mb-5"},e.trackedTrainTime),l.a.createElement("div",{className:"mb-5"},l.a.createElement(D,{trackTimerAmount:e.trackTimerAmount})),e.ticketsFound?l.a.createElement("h1",null,"\u0411\u0438\u043b\u0435\u0442\u044b \u043d\u0430\u0439\u0434\u0435\u043d\u044b!!!"):l.a.createElement("h1",null,"\u0411\u0438\u043b\u0435\u0442\u043e\u0432 \u043d\u0435\u0442"))})}a(126);function w(){return l.a.createElement(b.Consumer,null,function(e){return l.a.createElement("div",{className:"data-view section-wrapper section-wrapper_sm mb-4"},l.a.createElement("div",{className:"data-view__directions"},l.a.createElement("span",{onClick:function(){return e.changeDestination("2000000","2000351")},className:" data-view__direction ".concat("2000000"===e.requestData.code0?"active":""," \n                              ").concat(e.validateDestAndTimeWarning?"validation":""," ")},"\u041c\u043e\u0441\u043a\u0432\u0430 ",l.a.createElement("span",{className:"single-right"},"\u203a")," \u041a\u0430\u043b\u0443\u0433\u0430"),l.a.createElement("span",{onClick:function(){return e.changeDestination("2000351","2000000")},className:"data-view__direction ".concat("2000351"===e.requestData.code0?"active":""," \n                              ").concat(e.validateDestAndTimeWarning?"validation":"")},"\u041a\u0430\u043b\u0443\u0433\u0430 ",l.a.createElement("span",{className:"single-right"},"\u203a")," \u041c\u043e\u0441\u043a\u0432\u0430")))})}var N=a(51),y=(a(133),a(134),a(95)),S=a.n(y),q=a(94),C=a.n(q);function _(){return l.a.createElement(b.Consumer,null,function(e){return l.a.createElement("div",{className:"section-wrapper section-wrapper_sm mb-4 text-left"},l.a.createElement("div",{className:"d-inline-block ".concat(e.validateDestAndTimeWarning?"validation":"")},l.a.createElement(N.a,{selected:e.datepickerDate,onChange:e.depatureDateSelect,locale:"ru",dateFormat:"dd.MM.yyyy",minDate:Date.now(),maxDate:S()(new Date(Date.now()),45)})))})}Object(N.b)("ru",C.a);a(146);var A=function(e){return l.a.createElement("button",{className:"btn-1",onClick:e.clickHandler},e.text)},x=function(e){return l.a.createElement("button",{className:"btn-1 btn-1_green",onClick:e.clickHandler},e.text)},O=(a(147),function(){return l.a.createElement("div",{className:"lds-ellipsis mx-3"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))});a(148);function j(){return l.a.createElement(b.Consumer,null,function(e){return l.a.createElement("div",{className:"timetable section-wrapper section-wrapper_sm"},e.timetable.list.map(function(t){return l.a.createElement("div",{key:t.number2,className:"timetable__row d-flex"},l.a.createElement("div",null,l.a.createElement("div",{className:"mb-3"},"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0435\u0437\u0434\u0430: ",t.number2),l.a.createElement("div",{className:"mb-3"},t.route0," \u2014 ",t.route1),l.a.createElement("div",{className:"mb-3"},t.station0," \u2014 ",t.station1),l.a.createElement("div",{className:"mb-3"},t.time0),t.serviceCategories&&t.serviceCategories.length?(a=t.serviceCategories,l.a.createElement("div",null,l.a.createElement("div",{className:"mb-1"},"\u041c\u0435\u0441\u0442\u0430:"),a.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",null,e.typeCarLoc," : ",e.freeSeats))}))):l.a.createElement("div",{className:"booked"},"\u041c\u0435\u0441\u0442 \u043d\u0435\u0442")),l.a.createElement("div",{className:"d-flex align-items-end"},!t.serviceCategories.length&&l.a.createElement("div",null,l.a.createElement(x,{text:"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435",clickHandler:function(){return e.trackTicket(t)}}))));var a}))})}function W(){return l.a.createElement(b.Consumer,null,function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement(_,null),l.a.createElement("div",{className:"text-left section-wrapper section-wrapper_sm position-relative"},e.fetchError&&l.a.createElement("span",{className:"fetch-error"},"\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0443\u043b \u043e\u0448\u0438\u0431\u043a\u0443"),l.a.createElement(A,{text:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435",clickHandler:e.onGetTimetable}),e.loadingData&&l.a.createElement("div",{className:"spinner-position"},l.a.createElement(O,null))),!e.loadingData&&e.timetable&&e.timetable.hasOwnProperty("list")&&l.a.createElement(j,null))})}var F=function(){return l.a.createElement(k,null,l.a.createElement(b.Consumer,null,function(e){return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"App-header"},e.trackedTrainNumber?l.a.createElement(T,null):l.a.createElement(W,null)))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(149)}},[[98,1,2]]]);
//# sourceMappingURL=main.e63af0f3.chunk.js.map