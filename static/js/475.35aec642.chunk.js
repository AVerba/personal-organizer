"use strict";(self.webpackChunkpersonal_organizer=self.webpackChunkpersonal_organizer||[]).push([[475],{4475:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(885),r={title:"CalendarView_title__r2cKD"},s=n(1614),l=n(2791),d=n(2645),c=n(184),o=["indigo","gray","green","blue","red","purple"],i=function(){var e=(0,l.useContext)(d.Z),t=e.setShowEventModal,n=e.daySelected,r=e.dispatchCalEvent,s=e.selectedEvent,i=(0,l.useState)(s?s.title:""),u=(0,a.Z)(i,2),x=u[0],m=u[1],h=(0,l.useState)(s?s.description:""),f=(0,a.Z)(h,2),A=f[0],p=f[1],j=(0,l.useState)(s?o.find((function(e){return e===s.label})):o[0]),g=(0,a.Z)(j,2),b=g[0],v=g[1];return(0,c.jsx)("div",{className:"h-screen w-full fixed left-0 top-0 flex justify-center items-center",children:(0,c.jsxs)("form",{className:"bg-white rounded-lg shadow-2xl w-1/4",children:[(0,c.jsxs)("header",{className:"bg-gray-100 px-4 py-2 flex justify-between items-center",children:[(0,c.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"drag_handle"}),(0,c.jsxs)("div",{children:[s&&(0,c.jsx)("span",{onClick:function(){r({type:"delete",payload:s}),t(!1)},className:"material-icons-outlined text-gray-400 cursor-pointer",children:"delete"}),(0,c.jsx)("button",{onClick:function(){return t(!1)},children:(0,c.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"close"})})]})]}),(0,c.jsx)("div",{className:"p-3",children:(0,c.jsxs)("div",{className:"grid grid-cols-1/5 items-end gap-y-7",children:[(0,c.jsx)("div",{}),(0,c.jsx)("input",{type:"text",name:"title",placeholder:"Add title",value:x,required:!0,className:"pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500",onChange:function(e){return m(e.target.value)}}),(0,c.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"schedule"}),(0,c.jsx)("p",{children:n.format("dddd, MMMM DD")}),(0,c.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"segment"}),(0,c.jsx)("input",{type:"text",name:"description",placeholder:"Add a description",value:A,required:!0,className:"pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500",onChange:function(e){return p(e.target.value)}}),(0,c.jsx)("span",{className:"material-icons-outlined text-gray-400",children:"bookmark_border"}),(0,c.jsx)("div",{className:"flex gap-x-2",children:o.map((function(e,t){return(0,c.jsx)("span",{onClick:function(){return v(e)},className:"bg-".concat(e,"-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"),children:b===e&&(0,c.jsx)("span",{className:"material-icons-outlined text-white text-sm",children:"check"})},t)}))})]})}),(0,c.jsx)("footer",{className:"flex justify-end border-t p-3 mt-5",children:(0,c.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault();var a={title:x,description:A,label:b,day:n.valueOf(),id:s?s.id:Date.now()};r(s?{type:"update",payload:a}:{type:"push",payload:a}),t(!1)},className:"bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white",children:"Save"})})]})})},u="CalendarHeader_header__dSXAH",x="CalendarHeader_logo__niCGA",m="CalendarHeader_title__ngfUg",h="CalendarHeader_todayBtn__uzJfZ",f="CalendarHeader_navBtn__qGePn",A="CalendarHeader_monthLabel__Ps4n8",p=n(1009),j=n(8996),g=n(7892),b=n.n(g),v=function(){var e=(0,l.useContext)(d.Z),t=e.monthIndex,n=e.setMonthIndex;return(0,c.jsxs)("header",{className:u,children:[(0,c.jsx)("div",{className:x,children:(0,c.jsx)("img",{className:x,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACrklEQVR4Ae3YA4wkURAG4GOMCZbRWcFZ0dk24mQVn23btm3bwdm2N1pjXNu16H2LUdcknc78f1LLeS8zX6paVRAEQRAEQRAkUDrOz+7YeWHubitViyn/d8envAqq4pJfrolLejUw/HCL02t1Wphzu/PCHLJatZiWSnHJr0Ks189jU57XChug9kaeWwNMDqjU7bDgdZmfNdCSeHJAik153VEM2Gl+9ppIBeRjohxwQdaeiO3A5Fe7AQhAAAIQgAAEIAABaLUCIACXnrfTlZcuU+vczSt0aMcgQ7Vn2whzAfkDmB3v373kulHDULlv1IwwQAACEIAABCAAed3M43YatSGXEnfk8c/B7AXAz6keGr0h1+d+/L//6V4AVhaG6b/CB55S/Vfm0hcNGoDlonYej+6LH27KzvfqI81/UztRCQD5dSre/4yKY8p/Uzv0wUd9bwDOPJavrznxyEm+sueeQ73PBmBJxu4vBeTR9ZUHH/RO1dbkAVDtQJ9rABg4G67ZFZh88pXE7Xn66zZcxwjr4bFV1+255yQlfDbWkB3qa3gNANXsveeocNHMdyBLz9krXB+OwmVM5dl4zS7ZF4AcXsMniH7FXcc/czf6vnwBoPgiG4C+74+5+wzuB0C+pDE4ugDkSxmDowtAHl3BPgAUnXUBqDz/E4wujoEMx4/4OQA0LQAEoKkBIAAB2Gz+4T0t5p8kIzXn+hU6/+22qfXo5jRyLrQZq2W2NWLA2Dnt9mhFRqrJ1l7U6sgQU2vm1M6U36R+yGVvXP851aplYwMAivAAKMQDoBAPgEI8AArxACjEA6AQD4BCPAAK8QAoxJMDdrQ6oBxPjnjbyoByPDlgrZg57Z9bFFDBMznRc9oM1CDXaDi7g6lGW3rubn1kiKk1b2LH3eHGQxAEQRAEQZAC4ENFnIADmtMAAAAASUVORK5CYII=",alt:"calendar"})}),(0,c.jsx)("h1",{className:m,children:"Calendar"}),(0,c.jsx)("button",{className:h,onClick:function(){n(t===b()().month()?t+Math.random():b()().month())},children:"Today"}),(0,c.jsx)("button",{className:f,onClick:function(){n(t-1)},children:(0,c.jsx)(p.Z,{})}),(0,c.jsx)("button",{className:f,onClick:function(){n(t+1)},children:(0,c.jsx)(j.Z,{})}),(0,c.jsx)("h2",{className:A,children:b()(new Date(b()().year(),t)).format("MMMM YYYY")})]})},y="CalendarMonth_month__l7ntv",C="CalendarDay_day__ywL-T",N=function(e){var t=e.day,n=e.rowIdx,r=(0,l.useState)([]),s=(0,a.Z)(r,2),o=s[0],i=s[1],u=(0,l.useContext)(d.Z),x=u.setDaySelected,m=u.setShowEventModal,h=u.filteredEvents,f=u.setSelectedEvent;return(0,l.useEffect)((function(){var e=h.filter((function(e){return b()(e.day).format("DD-MM-YY")===t.format("DD-MM-YY")}));i(e)}),[h,t]),(0,c.jsxs)("div",{className:"border border-gray-200 flex flex-col",children:[(0,c.jsxs)("header",{className:C,children:[0===n&&(0,c.jsx)("p",{className:"text-sm mt-1",children:t.format("ddd").toUpperCase()}),(0,c.jsx)("p",{className:"text-sm p-1 my-1 text-center  ".concat(t.format("DD-MM-YY")===b()().format("DD-MM-YY")?"bg-blue-600 text-white rounded-full w-7":""),children:t.format("DD")})]}),(0,c.jsx)("div",{className:"flex-1 cursor-pointer",onClick:function(){x(t),m(!0)},children:o.map((function(e,t){return(0,c.jsx)("div",{onClick:function(){return f(e)},className:"bg-".concat(e.label,"-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate"),children:e.title},t)}))})]})},w=function(e){var t=e.month;return(0,c.jsx)("div",{className:y,children:t.map((function(e,t){return(0,c.jsx)(l.Fragment,{children:e.map((function(e,n){return(0,c.jsx)(N,{day:e,rowIdx:t},n)}))},t)}))})};n.p;var D=n(2405),M=function(){var e=(0,l.useState)((0,D.j)()),t=(0,a.Z)(e,2),n=t[0],o=t[1];console.log("cur",n);var u=(0,l.useContext)(d.Z),x=u.monthIndex,m=u.showEventModal;return(0,l.useEffect)((function(){o((0,D.j)(x))}),[x]),(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)(s.Z,{children:(0,c.jsx)("h4",{className:r.title,children:"We are sorry, but page at the moment under construction"})}),m&&(0,c.jsx)(i,{}),(0,c.jsxs)("div",{className:"h-screen flex flex-col",children:[(0,c.jsx)(v,{}),(0,c.jsx)("div",{className:r.calendar,children:(0,c.jsx)(w,{month:n})})]})]})}},1009:function(e,t,n){var a=n(5318);t.Z=void 0;var r=a(n(5649)),s=n(184),l=(0,r.default)((0,s.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.Z=l},8996:function(e,t,n){var a=n(5318);t.Z=void 0;var r=a(n(5649)),s=n(184),l=(0,r.default)((0,s.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.Z=l}}]);
//# sourceMappingURL=475.35aec642.chunk.js.map