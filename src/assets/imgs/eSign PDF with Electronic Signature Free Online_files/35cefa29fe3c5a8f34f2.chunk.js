(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{163:function(t,n,e){"use strict";var o=e(1),c=e(187),i=Object(o.default)(c.a).withConfig({componentId:"uf6yyf-0"})(["width:48px;height:48px;"]);n.a=i},229:function(t,n,e){"use strict";var o=e(35).a("container");n.a=o},238:function(t,n,e){"use strict";e.d(n,"a",function(){return V});var o=e(62),c=e.n(o),i=e(63),a=e.n(i),r=e(37),h=e.n(r),l=e(76),s=e.n(l),v=e(52),d=e.n(v),u=e(77),p=e.n(u),f=e(7),m=e.n(f),g=e(0),z=e(67),w=e.n(z),b=e(58),C=e(169),x=e(379),H=e.n(x);function _(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,o=d()(t);if(n){var c=d()(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return s()(this,e)}}var V=function(t){p()(e,t);var n=_(e);function e(){var t;c()(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i)),m()(h()(t),"state",{loadedContent:void 0}),t}return a()(e,[{key:"componentDidMount",value:function(){var t=this,n=this.props.src;n&&C.e(n).then(function(n){t.setState(function(){return{loadedContent:n.responseBody}})}).catch(function(t){return Object(b.trackObject)(t)})}},{key:"render",value:function(){var t,n=this.props,e=n.className,o=n.style,c=n.content,i=n.stretchHorizontally,a=n.stretchVertically,r=n.tint,h=w()(e,H.a.svg,(t={},m()(t,H.a.svg_stretchHorizontally,i),m()(t,H.a.svg_stretchVertically,a),m()(t,H.a.svg_tint,r),t)),l=this.state.loadedContent,s=void 0===l?c:l;return g.createElement("div",{className:h,style:o,dangerouslySetInnerHTML:{__html:s}})}}]),e}(g.Component);m()(V,"defaultProps",{stretchHorizontally:!1,stretchVertically:!1,tint:!1})},324:function(t,n,e){t.exports={fileIcon:"__2GsMt",fileIcon_stretchHorizontally:"__6XqXs",fileIcon_stretchVertically:"__2uov_",fileIcon_nofold:"__IiJr5",fileIcon_tint:"__1cvAj",fileIcon_backgroundAgnostic:"__3qt7C",fileIcon_pdf:"__X8TxU","fileIcon_pdf-small":"__1raaE",fileIcon_pdfs:"__2o7ng",fileIcon_doc:"__1OxWL","fileIcon_doc-small":"__BJlkA",fileIcon_ppt:"__30kc6","fileIcon_ppt-small":"__1ccj8",fileIcon_xls:"__ecwB_","fileIcon_xls-small":"__yonVV",fileIcon_img:"__1xbXw","fileIcon_img-small":"__W9Slz",fileIcon_imgs:"__2fU38",fileIcon_zip:"__-ghRO","fileIcon_zip-small":"__2UfIu"}},362:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 11v5l-9-6 9-6v5c9.389 0 17 7.611 17 17s-7.611 17-17 17S7 35.389 7 26a16.93 16.93 0 0 1 3.34-10.122l1.607 1.192A14.922 14.922 0 0 0 9 26c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"></path></svg>'},379:function(t,n,e){t.exports={svg:"__lGdS3",svg_tint:"__1r2qf",svg_stretchHorizontally:"__39Xp0",svg_stretchVertically:"__1DFhL"}},383:function(t,n,e){"use strict";e.d(n,"a",function(){return d});var o=e(7),c=e.n(o),i=e(0),a=e(67),r=e.n(a),h=e(83),l=e(391),s=e(324),v=e.n(s);function d(t){var n,e=t.className,o=t.color,a=t.type,s=t.iconSvg,d=t.tint,u=void 0!==d&&d,p=t.backgroundAgnostic,f=void 0!==p&&p,m=t.noFold,g=void 0!==m&&m,z=t.stretchHorizontally,w=void 0!==z&&z,b=t.stretchVertically,C=void 0!==b&&b,x=a&&Object(h.h)(a),H=r()(e,v.a.fileIcon,(n={},c()(n,v.a["fileIcon_".concat(x)],!f&&!u&&!o&&x),c()(n,v.a.fileIcon_nofold,g),c()(n,v.a.fileIcon_tint,o||u),c()(n,v.a.fileIcon_backgroundAgnostic,f),c()(n,v.a.fileIcon_stretchHorizontally,w),c()(n,v.a.fileIcon_stretchVertically,C),n)),_={color:o};return i.createElement(l.a,{className:H,style:_,contents:s})}},390:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg4709" viewBox="0 0 50 62"><g id="pdf"><path fill="none" d="M7.002 2C5.882 2 5 2.883 5 3.996V37h21c1.662 0 3 1.338 3 3v10c0 1.662-1.338 3-3 3H5v5.004C5 59.122 5.884 60 7.006 60h38.988c1.12 0 2.006-.884 2.006-1.992V15.654c-.047-.935-.164-1.748-.469-2.293C47.087 12.567 46.318 12 44 12h-6V5.996c0-1.917-.273-2.865-.709-3.303-.122-.122-.4-.195-.611-.289a6.656 6.656 0 0 0-1.135-.279c-.45-.06-.867-.13-1.537-.125zm32.842 2.258c.068.553.156 1.077.156 1.738V10h4c.793 0 1.34.22 1.96.375zM12 23h28v2H12zm0 7h28v2H12zm20.742 7H40v2h-7.258zm0 7H40v2h-7.258zm-24.972.564a1.433 1.433 0 0 1 0 .002zM32.742 51H40v2h-7.258z" id="icon-background"></path><path d="M7.002 0C4.804 0 3 1.8 3 3.996V37c-1.662 0-3 1.338-3 3v10c0 1.662 1.338 3 3 3v5.004C3 60.204 4.81 62 7.006 62h38.988C48.191 62 50 60.203 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.038 0 34.998 0zm0 2h27.996c1.277 0 3.513.925 4.416 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.986 1.986 0 0 1 45.994 60H7.006A1.982 1.982 0 0 1 5 58.004V53h21c1.662 0 3-1.338 3-3V40c0-1.662-1.338-3-3-3H5V3.996C5 2.883 5.882 2 7.002 2zM4 41h2.51c1.767 0 3.084.611 3.084 2.47 0 .222-.021.43-.06.622a2.28 2.28 0 0 1-.448.978c-.537.673-1.454.994-2.527.994H5.414V49H4zm7.629 0h2.133c1.827 0 3.092.742 3.611 2.229.086.247.153.515.197.804.045.29.067.599.067.93 0 .332-.023.644-.067.935-.044.292-.11.563-.195.815-.43 1.258-1.37 2.008-2.7 2.223a5.268 5.268 0 0 1-.841.064h-2.205zm8.152 0h4.815v1.2h-3.4v2.26h2.9v1.2h-2.9V49H19.78zM5.414 42.137v2.789H6.45c.148 0 .286-.007.414-.022.13-.015.25-.038.36-.068.22-.06.401-.15.547-.272.145-.12.254-.27.326-.453.072-.182.107-.396.107-.64 0-.503-.155-.835-.459-1.043a1.259 1.259 0 0 0-.254-.133c-.282-.111-.646-.158-1.09-.158zm7.629.013v5.7h.621c.201 0 .391-.014.57-.043.896-.145 1.507-.654 1.784-1.563a4.4 4.4 0 0 0 .168-1.281c0-.49-.058-.91-.168-1.266-.333-1.066-1.148-1.547-2.354-1.547z" id="icon-outlines"></path><path d="M34.008 2c.67-.005 1.086.065 1.537.125.352.046.731.15 1.135.28.211.093.489.166.611.288.436.438.709 1.386.709 3.303V12h6c2.318 0 3.087.567 3.531 1.361.305.545.422 1.358.469 2.293v-.662c0-1.273-.926-3.504-1.828-4.406l-.211-.211C45.34 10.22 44.793 10 44 10h-4V5.996c0-.66-.088-1.185-.156-1.738l-.43-.43C38.511 2.925 36.275 2 34.998 2z" id="icon-fold"></path><path fill="#fff" d="M4 49h1.413v-2.936H6.56c1.718 0 3.034-.82 3.034-2.593C9.593 41.61 8.277 41 6.51 41H4zm1.413-4.073v-2.79H6.4c1.182 0 1.804.33 1.804 1.334 0 .979-.573 1.456-1.755 1.456zM11.63 49h2.206c2.363 0 3.801-1.382 3.801-4.037 0-2.642-1.438-3.963-3.875-3.963H11.63zm1.414-1.15v-5.7h.62c1.61 0 2.523.856 2.523 2.813 0 1.97-.914 2.887-2.522 2.887zm6.74 1.15h1.413v-3.34h2.9v-1.198h-2.9v-2.263h3.4V41h-4.814z" id="icon-label"></path><path d="M12 23v2h28v-2H13zm0 7v2h28v-2H13zm20.742 7v2H40v-2h-6.258zm0 7v2H40v-2h-6.258zm0 7v2H40v-2h-6.258z" id="icon-content"></path></g></svg>'},393:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg5461" viewBox="0 0 50 62"><g id="doc"><path fill="none" d="M3.996 2C2.878 2 2 2.88 2 3.996v54.008A1.98 1.98 0 0 0 4.002 60h41.996A1.971 1.971 0 0 0 48 58.008V15.654c-.047-.935-.164-1.748-.469-2.293C47.087 12.567 46.318 12 44 12h-6V5.996c0-1.917-.273-2.865-.709-3.303-.122-.122-.4-.195-.611-.289a6.656 6.656 0 0 0-1.135-.279c-.45-.06-.867-.13-1.537-.125zm35.848 2.258c.068.553.156 1.077.156 1.738V10h4c.793 0 1.34.22 1.96.375zM10 23h30v2H10zm0 7h30v2H10zm0 7h30v2H10zm0 7h30v2H10zm0 7h30v2H10z" id="icon-background"></path><path d="M3.996 0A4.01 4.01 0 0 0 0 3.996v54.008C0 60.203 1.806 62 4.002 62h41.996C48.202 62 50 60.198 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.04 0 35.004 0zm0 2h31.008c1.273 0 3.506.924 4.41 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.971 1.971 0 0 1 45.998 60H4.002A1.98 1.98 0 0 1 2 58.004V3.996C2 2.881 2.878 2 3.996 2z" id="icon-outlines"></path><path d="M34.008 2c.67-.005 1.086.065 1.537.125.352.046.731.15 1.135.28.211.093.489.166.611.288.436.438.709 1.386.709 3.303V12h6c2.318 0 3.087.567 3.531 1.361.305.545.422 1.358.469 2.293v-.662c0-1.273-.926-3.504-1.828-4.406l-.211-.211C45.34 10.22 44.793 10 44 10h-4V5.996c0-.66-.088-1.185-.156-1.738l-.43-.43C38.51 2.924 36.277 2 35.004 2z" id="icon-fold"></path><path d="M10 23v2h30v-2H11zm0 7v2h30v-2H11zm0 7v2h30v-2H11zm0 7v2h30v-2H11zm0 7v2h30v-2H11z" id="icon-content"></path></g></svg>'},410:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg7692" viewBox="0 0 50 62"><g id="ppt"><path fill="none" d="M3.996 2C2.878 2 2 2.88 2 3.996v54.008A1.98 1.98 0 0 0 4.002 60h41.996A1.971 1.971 0 0 0 48 58.008V15.654c-.047-.935-.164-1.748-.469-2.293C47.087 12.567 46.318 12 44 12h-6V5.996c0-1.917-.273-2.865-.709-3.303-.122-.122-.4-.195-.611-.289a6.656 6.656 0 0 0-1.135-.279c-.45-.06-.867-.13-1.537-.125zm35.848 2.258c.068.553.156 1.077.156 1.738V10h4c.793 0 1.34.22 1.96.375zM25 24c8.272 0 15 6.728 15 15s-6.728 15-15 15-15-6.728-15-15 6.728-15 15-15zm-1 2.05c-6.721.511-12 6.096-12 12.95 0 7.192 5.808 13 13 13 6.854 0 12.439-5.279 12.95-12H24zm2 .05V38h11.9A12.903 12.903 0 0 0 26 26.1z" id="icon-background"></path><path d="M3.996 0A4.01 4.01 0 0 0 0 3.996v54.008C0 60.203 1.806 62 4.002 62h41.996C48.202 62 50 60.198 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.04 0 35.004 0zm0 2h31.008c1.273 0 3.506.924 4.41 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.971 1.971 0 0 1 45.998 60H4.002A1.98 1.98 0 0 1 2 58.004V3.996C2 2.881 2.878 2 3.996 2z" id="icon-outlines"></path><path d="M34.008 2c.67-.005 1.086.065 1.537.125.352.046.731.15 1.135.28.211.093.489.166.611.288.436.438.709 1.386.709 3.303V12h6c2.318 0 3.087.567 3.531 1.361.305.545.422 1.358.469 2.293v-.662c0-1.273-.926-3.504-1.828-4.406l-.211-.211C45.34 10.22 44.793 10 44 10h-4V5.996c0-.66-.088-1.185-.156-1.738l-.43-.43C38.51 2.924 36.277 2 35.004 2z" id="icon-fold"></path><path d="M25 24c-8.272 0-15 6.728-15 15s6.728 15 15 15 15-6.728 15-15-6.728-15-15-15zm-1 2.05V40h13.95c-.511 6.721-6.096 12-12.95 12-7.192 0-13-5.808-13-13 0-6.854 5.279-12.439 12-12.95zm2 .05A12.903 12.903 0 0 1 37.9 38H26z" id="icon-content"></path></g></svg>'},411:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg8415" viewBox="0 0 50 62"><g id="xls"><path fill="none" d="M3.996 2C2.878 2 2 2.88 2 3.996v54.008A1.98 1.98 0 0 0 4.002 60h41.996A1.971 1.971 0 0 0 48 58.008V15.654c-.047-.935-.164-1.748-.469-2.293C47.087 12.567 46.318 12 44 12h-6V5.996c0-1.917-.273-2.865-.709-3.303-.122-.122-.4-.195-.611-.289a6.656 6.656 0 0 0-1.135-.279c-.45-.06-.867-.13-1.537-.125zm35.848 2.258c.068.553.156 1.077.156 1.738V10h4c.793 0 1.34.22 1.96.375zM9 21h32v32H9V22zm2 2v6h13v-6zm15 0v6h13v-6zm-15 8v5h13v-5H11.691zm15 0v5h13v-5h-.273zm-15 7v5h13v-5H11.371zm15 0v5h13v-5h-.486zm-15 7v6h13v-6H11.375zm15 0v6h13v-6h-.352z" id="icon-background"></path><path d="M3.996 0A4.01 4.01 0 0 0 0 3.996v54.008C0 60.203 1.806 62 4.002 62h41.996C48.202 62 50 60.198 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.04 0 35.004 0zm0 2h31.008c1.273 0 3.506.924 4.41 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.971 1.971 0 0 1 45.998 60H4.002A1.98 1.98 0 0 1 2 58.004V3.996C2 2.881 2.878 2 3.996 2z" id="icon-outlines"></path><path d="M34.008 2c.67-.005 1.086.065 1.537.125.352.046.731.15 1.135.28.211.093.489.166.611.288.436.438.709 1.386.709 3.303V12h6c2.318 0 3.087.567 3.531 1.361.305.545.422 1.358.469 2.293v-.662c0-1.273-.926-3.504-1.828-4.406l-.211-.211C45.34 10.22 44.793 10 44 10h-4V5.996c0-.66-.088-1.185-.156-1.738l-.43-.43C38.51 2.924 36.277 2 35.004 2z" id="icon-fold"></path><path d="M9 21v32h32V21zm2 2h13v6H11zm15 0h13v6H26v-5.426zm-15 8h13v5H11zm15 0h13v5H26zm-15 7h13v5H11zm15 0h13v5H26zm-15 7h13v6H11zm15 0h13v6H26v-.016z" id="icon-content"></path></g></svg>'},418:function(t,n){t.exports='<svg viewBox="0 0 24 24" fill="#0061FF" xmlns="http://www.w3.org/2000/svg"><path id="icon" d="M12.0146 6.57367L6.50732 10.1473L12.0146 13.721L6.50732 17.2947L1 13.6912L6.50732 10.1176L1 6.57367L6.50732 3L12.0146 6.57367ZM6.47803 18.4263L11.9854 14.8527L17.4927 18.4263L11.9854 22L6.47803 18.4263ZM12.0146 13.6912L17.522 10.1176L12.0146 6.57367L17.4927 3L23 6.57367L17.4927 10.1473L23 13.721L17.4927 17.2947L12.0146 13.6912Z"></path></svg>'},419:function(t,n){t.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="Path" d="M8.33331 3H15.6666L23 15H15.6666L8.33331 3Z" fill="#FFC107"></path><path id="Path_2" d="M4.6012 21L8.30086 15H23L19.3333 21H4.6012Z" fill="#1976D2"></path><path id="Path_3" d="M1 15.0625L4.60119 21L12 9L8.33333 3L1 15.0625Z" fill="#4CAF50"></path></svg>'},420:function(t,n,e){"use strict";e.d(n,"a",function(){return k});var o=e(17),c=e.n(o),i=e(0),a=e(1),r=e(2),h=e(12),l=e(28),s=e(113),v=e(451),d=e(54),u=e(27),p=e(430),f=e.n(p),m=e(431),g=e.n(m),z=function(t){switch(t.size){case"large":return Object(a.css)(["padding:15px 24px;height:54px;"]);case"medium":return Object(a.css)(["padding:9px 18px;height:42px;"]);case"small":return Object(a.css)(["padding:3px 12px;height:30px;"]);default:return}},w=function(t){var n=t.active,e=t.buttonColor,o=t.inverted?r.ab:e;return Object(a.css)(["&:hover{color:inherit;}"," ",""],n&&Object(a.css)(["background-color:",";"],String(r.c(o,r.f))),!n&&Object(a.css)(["&:hover{background-color:",";}&:active{background-color:",";}"],String(r.c(o,r.j)),String(r.c(o,r.f))))},b=a.default.button.withConfig({componentId:"l3tlg0-0"})([""," "," "," "," position:relative;border-radius:4px 0 0 4px;text-transform:uppercase;"],r.ib(),l.c,function(t){var n=t.size;return z({size:n})},function(t){var n=t.active,e=t.buttonColor,o=t.inverted;return w({active:n,buttonColor:e,inverted:o})}),C=Object(a.default)(d.a).withConfig({componentId:"l3tlg0-1"})([""," "," "," position:relative;border-radius:4px 0 0 4px;text-transform:uppercase;",";"],l.c,function(t){var n=t.size;return z({size:n})},function(t){var n=t.active,e=t.buttonColor,o=t.inverted;return w({active:n,buttonColor:e,inverted:o})},function(t){return t.isDisabled&&Object(a.css)(["opacity:0.8;"])}),x=a.default.button.withConfig({componentId:"l3tlg0-2"})([""," "," "," justify-content:center;border-radius:0 4px 4px 0;"],r.ib(),function(t){var n=t.active,e=t.buttonColor,o=t.inverted;return w({active:n,buttonColor:e,inverted:o})},function(t){switch(t.size){case"large":return Object(a.css)(["width:54px;"]);case"medium":return Object(a.css)(["width:42px;"]);case"small":return Object(a.css)(["width:30px;"]);default:return}}),H=a.default.div.withConfig({componentId:"l3tlg0-3"})(["position:absolute;left:0;top:calc(100% + 6px);z-index:",";"," border-radius:4px;",""],r.oc,s.c,function(t){return t.expandDropdown?Object(a.css)(["min-width:100%;"]):Object(a.css)(["width:100%;"])}),_=Object(a.css)(["color:",";&:hover{color:",";}background-color:",";width:100%;position:relative;transition:background-color ",";&:hover{background-color:",";}&:active{background-color:",";}&:first-child{border-top-left-radius:4px;border-top-right-radius:4px;}&:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;}"],String(h.n),String(h.n),String(h.H),r.Cb,String(h.t),String(h.o)),V=Object(a.default)(d.a).withConfig({componentId:"l3tlg0-4"})([""," "," ",""],l.d,function(t){var n=t.size;return z({size:n})},_),M=a.default.button.withConfig({componentId:"l3tlg0-5"})([""," "," "," ",""],r.ib(),l.d,function(t){var n=t.size;return z({size:n})},_),y=a.default.div.withConfig({componentId:"l3tlg0-6"})(["position:relative;display:flex;border-radius:4px;",""],function(t){var n=t.inverted,e=t.buttonColor;return n?Object(a.css)(["color:",";&:hover{color:",";}background-color:",";"],String(r.w),String(r.w),String(r.ab)):Object(a.css)(["color:",";&:hover{color:",";}background-color:",";"],String(r.ab),String(r.ab),String(e))}),L=a.default.div.withConfig({componentId:"l3tlg0-7"})(["width:1px;background-color:",";"],String(r.g)),k=function(t){var n=t.children,e=t.dropdownItems,o=t.buttonColor,a=void 0===o?r.x:o,h=t.size,l=t.title,s=t.inverted,d=void 0!==s&&s,p=t.onClick,m=t.type,z=t.href,w=t.behavior,_=t.onDropdownOpen,k=t.expandDropdown,A=t.isDisabled,I=void 0!==A&&A,j=i.useState(!1),O=c()(j,2),S=O[0],F=O[1],B=i.useRef(null);return Object(v.a)(B,function(){S&&F(!1)}),i.createElement(y,{ref:B,inverted:d,buttonColor:a},z&&w?i.createElement(C,{title:l,inverted:d,buttonColor:a,size:h,onClick:p,href:z,behavior:w,active:!1,isDisabled:I},n):i.createElement(b,{title:l,inverted:d,buttonColor:a,size:h,onClick:p,type:m,active:!1,disabled:I},n),i.createElement(L,null),i.createElement(x,{type:"button",title:"Expand menu",inverted:d,buttonColor:a,size:h,active:S,onClick:function(t){F(!S),_&&_(),t.preventDefault()}},i.createElement(u.f,{size:16,content:S?g.a:f.a})),S&&i.createElement(H,{"aria-haspopup":"menu",expandDropdown:Boolean(k)},e.map(function(t){return t.href&&t.behavior?i.createElement(V,{size:h,key:t.key,title:t.title,href:t.href,behavior:t.behavior,onClick:function(n){F(!1),t.onClick&&t.onClick(n)}},t.children):i.createElement(M,{size:h,key:t.key,title:t.title,type:t.type,onClick:function(n){F(!1),t.onClick&&t.onClick(n)}},t.children)})))}},430:function(t,n){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.3333 4L14.6666 5.33333L7.99992 12L1.33325 5.33333L2.66659 4L7.99992 9.5L13.3333 4Z"></path></svg>'},431:function(t,n){t.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.3333 12L7.99992 6.5L2.66659 12L1.33325 10.6667L7.99992 4L14.6666 10.6667L13.3333 12Z"></path></svg>'},450:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg6179" viewBox="0 0 50 62"><g id="img"><path fill="none" d="M3.996 2C2.878 2 2 2.88 2 3.996v54.008A1.98 1.98 0 0 0 4.002 60h41.996A1.971 1.971 0 0 0 48 58.008V15.654c-.047-.935-.164-1.748-.469-2.293C47.087 12.567 46.318 12 44 12h-6V5.996c0-1.917-.273-2.865-.709-3.303-.122-.122-.4-.195-.611-.289a6.656 6.656 0 0 0-1.135-.279c-.45-.06-.867-.13-1.537-.125zm35.848 2.258c.068.553.156 1.077.156 1.738V10h4c.793 0 1.34.22 1.96.375zM9 23h32v32H9V24zm2 2v28h28V25zm8.5 4c2.473 0 4.5 2.027 4.5 4.5S21.973 38 19.5 38a4.515 4.515 0 0 1-4.5-4.5c0-2.473 2.027-4.5 4.5-4.5zm0 2a2.485 2.485 0 0 0-2.5 2.5c0 1.393 1.107 2.5 2.5 2.5s2.5-1.107 2.5-2.5-1.107-2.5-2.5-2.5zm8.055 5.313l8.006 11.103L36.703 49H14.221l5.914-9.723 2.969 2.971zm-.034 3.374l-4.2 5.604-2.801-2.799L17.777 47h15.02z" id="icon-background"></path><path d="M3.996 0A4.01 4.01 0 0 0 0 3.996v54.008C0 60.203 1.806 62 4.002 62h41.996C48.202 62 50 60.198 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.04 0 35.004 0zm0 2h31.008c1.273 0 3.506.924 4.41 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.971 1.971 0 0 1 45.998 60H4.002A1.98 1.98 0 0 1 2 58.004V3.996C2 2.881 2.878 2 3.996 2z" id="icon-outlines"></path><path d="M34.008 2c.67-.005 1.086.065 1.537.125.352.046.731.15 1.135.28.211.093.489.166.611.288.436.438.709 1.386.709 3.303V12h6c2.318 0 3.087.567 3.531 1.361.305.545.422 1.358.469 2.293v-.662c0-1.273-.926-3.504-1.828-4.406l-.211-.211C45.34 10.22 44.793 10 44 10h-4V5.996c0-.66-.088-1.185-.156-1.738l-.43-.43C38.51 2.924 36.277 2 35.004 2z" id="icon-fold"></path><path d="M9 23v32h32V23zm2 2h28v28H11zm8.5 4a4.515 4.515 0 0 0-4.5 4.5c0 2.473 2.027 4.5 4.5 4.5s4.5-2.027 4.5-4.5-2.027-4.5-4.5-4.5zm0 2c1.393 0 2.5 1.107 2.5 2.5S20.893 36 19.5 36a2.485 2.485 0 0 1-2.5-2.5c0-1.393 1.107-2.5 2.5-2.5zm8.055 5.313l-4.451 5.935-2.97-2.97L14.222 49h22.482l-1.142-1.584zm-.034 3.374L32.797 47h-15.02l2.743-4.508 2.8 2.799z" id="icon-content"></path></g></svg>'},455:function(t,n){t.exports='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15H21V21H15V15Z" fill="#FF46FB"></path><path d="M9 15H15V21H9V15Z" fill="#CA41FC"></path><path d="M3 15H9V21H3V15Z" fill="#8B48FE"></path><path d="M21 9H15V15H21V9Z" fill="#81E650"></path><path d="M15 9H9V15H15V9Z" fill="#00D267"></path><path d="M9 9H3V15H9V9Z" fill="#00C0FF"></path><path d="M15 3H21V9H15V3Z" fill="#FFD200"></path><path d="M9 3H15V9H9V3Z" fill="#FF8E00"></path><path d="M3 3H9V9H3V3Z" fill="#FF5400"></path></svg>'},460:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var o={};e.r(o),e.d(o,"renderGoogleDriveSaver",function(){return d});var c=e(3),i=e.n(c),a=e(14),r=e.n(a),h=e(30),l=e(41),s=e(343),v=e(509);function d(t,n,e,o){window.gapi.savetodrive.render(t,{src:n,filename:e,sitename:o})}var u=Object(l.f)("GoogleDrivePicker",function(){var t=r()(i.a.mark(function t(n,e){var c,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadUnitImmediately(n,s.a);case 2:return c=t.sent,t.next=5,e.loadUnitImmediately(n,v.a);case 5:return a=t.sent,t.next=8,a.loadGoogleClientPlugin(n,"drive","v3");case 8:return t.next=10,c.loadGooglePlugin(n,"savetodrive");case 10:return t.abrupt("return",o);case 11:case"end":return t.stop()}},t)}));return function(n,e){return t.apply(this,arguments)}}(),function(t){switch(t.name){case l.b:return h.a.Warning;default:return h.a.Unexpected}})},461:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" id="svg6898" viewBox="0 0 50 62"><g id="zip"><path fill="none" d="M3.996 2C2.878 2 2 2.88 2 3.996v54.008A1.98 1.98 0 0 0 4.002 60h41.996A1.971 1.971 0 0 0 48 58.008V14.992c0-1.273-.926-3.504-1.828-4.406l-6.758-6.758C38.51 2.924 36.277 2 35.004 2H28.33v5.508c0 1.184-.71 2.207-1.719 2.691A1 1 0 0 1 26 12h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0-2h-2a1 1 0 1 1 0-2h1.992a1 1 0 0 1-.87-1.5h-1.118A3.022 3.022 0 0 1 19 7.49V2zM21 2v5.49c0 .57.443 1.01 1.004 1.01h3.322a.985.985 0 0 0 1.004-.992V2z" id="icon-background"></path><path d="M3.996 0A4.01 4.01 0 0 0 0 3.996v54.008C0 60.203 1.806 62 4.002 62h41.996C48.202 62 50 60.198 50 58.008V14.992c0-2.038-.974-4.38-2.414-5.82l-6.758-6.758C39.385.971 37.04 0 35.004 0zm0 2H19v5.49c0 1.65 1.356 3.01 3.004 3.01h1.117A1 1 0 0 0 24 12h2a1 1 0 0 0 .611-1.8c1.01-.485 1.72-1.508 1.72-2.692V2h6.673c1.273 0 3.506.924 4.41 1.828l6.758 6.758c.902.902 1.828 3.133 1.828 4.406v43.016A1.971 1.971 0 0 1 45.998 60H4.002A1.98 1.98 0 0 1 2 58.004V3.996C2 2.881 2.878 2 3.996 2zM24 12h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 2h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM21 2h5.33v5.508a.985.985 0 0 1-1.004.992h-3.322A.995.995 0 0 1 21 7.49z" id="icon-outlines"></path></g></svg>'},477:function(t,n,e){"use strict";var o=e(17),c=e.n(o),i=e(0),a=e(41),r=e(26),h=e(460);n.a=i.memo(function(t){var n=t.downloadURL,e=t.filename,o=t.onError,l=Object(r.h)(null),s=c()(l,2),v=s[0],d=s[1],u=Object(a.m)(h.a,"immediate"),p=c()(u,1)[0];return Object(r.c)(function(){if(p&&v&&n&&e)try{p.renderGoogleDriveSaver(v,n,e,"smallpdf.com")}catch(t){o(t)}},[p,v,n,e,o]),i.createElement("div",{ref:function(t){return d(t)}})})}}]);