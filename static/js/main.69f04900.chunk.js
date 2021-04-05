(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={table:"ContactList_table__21yBu"}},19:function(t,e,n){},20:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__2MOWn",label:"ContactForm_label__30KY-",input:"ContactForm_input__26f5x"}},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(12),s=n.n(o),i=(n(19),n(11)),l=n(10),u=n(2),b=n(5),d=n(6),j=n(8),h=n(7),m=(n(20),n(13)),f=n.n(m),p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("table",{className:f.a.table,children:Object(a.jsx)("tbody",{children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e}),Object(a.jsx)("td",{children:c}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{type:"button",onClick:function(){return n(r)},children:"del"})})]},r)}))})})},O=n(3),v=n.n(O),x=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.name.trim()&&""!==t.state.number.trim()?(t.props.onSubmit(t.state),t.setState({name:"",number:""})):alert("Fill all fields!")},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:v.a.label,children:["Name",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:this.handleInputChange,required:!0})]}),Object(a.jsxs)("label",{className:v.a.label,children:["Number",Object(a.jsx)("input",{className:v.a.input,type:"text",name:"number",value:n,onChange:this.handleInputChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),C=function(t){var e=t.value,n=t.onFilter;return Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})})},g=n(21),y=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleFilter=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){var n=t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));if(n)alert("".concat(n.name," is already in contacts."));else{var a=Object(l.a)(Object(l.a)({},e),{},{id:g.generate()});t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))}},t.getContactList=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.onDeleteContact=function(e){t.setState((function(t){var n=t.contacts.filter((function(t){return t.id!==e}));return{contacts:Object(i.a)(n)}}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.getContactList(),e=this.state.filter;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(x,{onSubmit:this.handleSubmit}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("p",{className:"App-find",children:"Find contacts by name"}),Object(a.jsx)(C,{value:e,onFilter:this.handleFilter}),Object(a.jsx)(p,{contacts:t,onDeleteContact:this.onDeleteContact})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.69f04900.chunk.js.map