import{q as u1}from"./chunk-74DKCDGC.js";import{$b as h2,Ba as i1,H as v2,Hb as z1,I as l1,M as I,Ta as g2,Ua as s1,Va as n1,W as e1,cb as f1,cc as c2,dc as b,ea as r1,sb as o1,yb as t1,zb as m1}from"./chunk-MEL4RCWO.js";import{a as c1,b as a1}from"./chunk-2GETZQDO.js";function y2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function n3(c){if(Array.isArray(c))return c}function f3(c){if(Array.isArray(c))return y2(c)}function o3(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function p1(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,$1(e.key),e)}}function t3(c,l,a){return l&&p1(c.prototype,l),a&&p1(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function i2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=O2(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var f=a.next();return s=f.done,f},e:function(f){n=!0,i=f},f:function(){try{s||a.return==null||a.return()}finally{if(n)throw i}}}}function p(c,l,a){return(l=$1(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function m3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function z3(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,i,s,n=[],f=!0,t=!1;try{if(i=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;f=!1}else for(;!(f=(e=i.call(a)).done)&&(n.push(e.value),n.length!==l);f=!0);}catch(z){t=!0,r=z}finally{try{if(!f&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(t)throw r}}return n}}function u3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d1(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function o(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?d1(Object(a),!0).forEach(function(e){p(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):d1(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function m2(c,l){return n3(c)||z3(c,l)||O2(c,l)||u3()}function k(c){return f3(c)||m3(c)||O2(c)||p3()}function d3(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function $1(c){var l=d3(c,"string");return typeof l=="symbol"?l:l+""}function f2(c){"@babel/helpers - typeof";return f2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},f2(c)}function O2(c,l){if(c){if(typeof c=="string")return y2(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y2(c,l):void 0}}var M1=function(){},q2={},_1={},X1=null,Y1={mark:M1,measure:M1};try{typeof window<"u"&&(q2=window),typeof document<"u"&&(_1=document),typeof MutationObserver<"u"&&(X1=MutationObserver),typeof performance<"u"&&(Y1=performance)}catch{}var M3=q2.navigator||{},L1=M3.userAgent,v1=L1===void 0?"":L1,H=q2,L=_1,g1=X1,a2=Y1,Q8=!!H.document,D=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",K1=~v1.indexOf("MSIE")||~v1.indexOf("Trident/"),l2,L3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,v3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Q1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},g3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},J1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",Q="duotone",Z1="sharp",c4="sharp-duotone",a4="chisel",l4="etch",e4="graphite",r4="jelly",i4="jelly-duo",s4="jelly-fill",n4="mosaic",f4="notdog",o4="notdog-duo",t4="pixel",m4="slab",z4="slab-duo",u4="slab-press",p4="slab-press-duo",d4="thumbprint",M4="utility",L4="utility-duo",v4="utility-fill",g4="vellum",h4="whiteboard",h3="Classic",C3="Duotone",x3="Sharp",b3="Sharp Duotone",S3="Chisel",N3="Etch",y3="Graphite",w3="Jelly",k3="Jelly Duo",A3="Jelly Fill",P3="Mosaic",F3="Notdog",T3="Notdog Duo",D3="Pixel",B3="Slab",H3="Slab Duo",R3="Slab Press",E3="Slab Press Duo",I3="Thumbprint",U3="Utility",W3="Utility Duo",O3="Utility Fill",q3="Vellum",G3="Whiteboard",C4=[C,Q,Z1,c4,a4,l4,e4,r4,i4,s4,n4,f4,o4,t4,m4,z4,u4,p4,d4,M4,L4,v4,g4,h4],J8=(l2={},p(p(p(p(p(p(p(p(p(p(l2,C,h3),Q,C3),Z1,x3),c4,b3),a4,S3),l4,N3),e4,y3),r4,w3),i4,k3),s4,A3),p(p(p(p(p(p(p(p(p(p(l2,n4,P3),f4,F3),o4,T3),t4,D3),m4,B3),z4,H3),u4,R3),p4,E3),d4,I3),M4,U3),p(p(p(p(l2,L4,W3),v4,O3),g4,q3),h4,G3)),j3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},V3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},$3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),_3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},x4=["fak","fa-kit","fakd","fa-kit-duotone"],h1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},X3=["kit"],Y3="kit",K3="kit-duotone",Q3="Kit",J3="Kit Duotone",Z8=p(p({},Y3,Q3),K3,J3),Z3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},c0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},a0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},C1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},e2,r2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],e0="classic",r0="duotone",i0="sharp",s0="sharp-duotone",n0="chisel",f0="etch",o0="graphite",t0="jelly",m0="jelly-duo",z0="jelly-fill",u0="mosaic",p0="notdog",d0="notdog-duo",M0="pixel",L0="slab",v0="slab-duo",g0="slab-press",h0="slab-press-duo",C0="thumbprint",x0="utility",b0="utility-duo",S0="utility-fill",N0="vellum",y0="whiteboard",w0="Classic",k0="Duotone",A0="Sharp",P0="Sharp Duotone",F0="Chisel",T0="Etch",D0="Graphite",B0="Jelly",H0="Jelly Duo",R0="Jelly Fill",E0="Mosaic",I0="Notdog",U0="Notdog Duo",W0="Pixel",O0="Slab",q0="Slab Duo",G0="Slab Press",j0="Slab Press Duo",V0="Thumbprint",$0="Utility",_0="Utility Duo",X0="Utility Fill",Y0="Vellum",K0="Whiteboard",c5=(e2={},p(p(p(p(p(p(p(p(p(p(e2,e0,w0),r0,k0),i0,A0),s0,P0),n0,F0),f0,T0),o0,D0),t0,B0),m0,H0),z0,R0),p(p(p(p(p(p(p(p(p(p(e2,u0,E0),p0,I0),d0,U0),M0,W0),L0,O0),v0,q0),g0,G0),h0,j0),C0,V0),x0,$0),p(p(p(p(e2,b0,_0),S0,X0),N0,Y0),y0,K0)),Q0="kit",J0="kit-duotone",Z0="Kit",c6="Kit Duotone",a5=p(p({},Q0,Z0),J0,c6),a6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},l6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},w2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},e6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],b4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(l0,e6),r6=["solid","regular","light","thin","duotone","brands","semibold"],S4=[1,2,3,4,5,6,7,8,9,10],i6=S4.concat([11,12,13,14,15,16,17,18,19,20]),s6=["aw","fw","pull-left","pull-right"],n6=[].concat(k(Object.keys(l6)),r6,s6,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",r2.GROUP,r2.SWAP_OPACITY,r2.PRIMARY,r2.SECONDARY]).concat(S4.map(function(c){return"".concat(c,"x")})).concat(i6.map(function(c){return"w-".concat(c)})),f6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},F="___FONT_AWESOME___",k2=16,N4="fa",y4="svg-inline--fa",W="data-fa-i2svg",A2="data-fa-pseudo-element",o6="data-fa-pseudo-element-pending",G2="data-prefix",j2="data-icon",x1="fontawesome-i2svg",t6="async",m6=["HTML","HEAD","STYLE","SCRIPT"],w4=["::before","::after",":before",":after"],k4=(function(){try{return!0}catch{return!1}})();function J(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[C]}})}var A4=o({},Q1);A4[C]=o(o(o(o({},{"fa-duotone":"duotone"}),Q1[C]),h1.kit),h1["kit-duotone"]);var z6=J(A4),P2=o({},_3);P2[C]=o(o(o(o({},{duotone:"fad"}),P2[C]),C1.kit),C1["kit-duotone"]);var b1=J(P2),F2=o({},w2);F2[C]=o(o({},F2[C]),a0.kit);var V2=J(F2),T2=o({},a6);T2[C]=o(o({},T2[C]),Z3.kit);var l5=J(T2),u6=L3,P4="fa-layers-text",p6=v3,d6=o({},j3),e5=J(d6),M6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],C2=g3,L6=[].concat(k(X3),k(n6)),X=H.FontAwesomeConfig||{};function v6(c){var l=L.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function g6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(S1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],S1.forEach(function(c){var l=m2(c,2),a=l[0],e=l[1],r=g6(v6(a));r!=null&&(X[e]=r)}));var S1,F4={styleDefault:"solid",familyDefault:C,cssPrefix:N4,replacementClass:y4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var V=o(o({},F4),X);V.autoReplaceSvg||(V.observeMutations=!1);var u={};Object.keys(F4).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){V[c]=a,Y.forEach(function(e){return e(u)})},get:function(){return V[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(l){V.cssPrefix=l,Y.forEach(function(a){return a(u)})},get:function(){return V.cssPrefix}});H.FontAwesomeConfig=u;var Y=[];function h6(c){return Y.push(c),function(){Y.splice(Y.indexOf(c),1)}}var B=k2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function C6(c){if(!(!c||!D)){var l=L.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=L.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=i)}return L.head.insertBefore(l,e),c}}var x6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N1(){for(var c=12,l="";c-- >0;)l+=x6[Math.random()*62|0];return l}function $(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function $2(c){return c.classList?$(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function T4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b6(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat(T4(c[a]),'" ')},"").trim()}function z2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function _2(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function S6(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),n="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(n)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:t}}function N6(c){var l=c.transform,a=c.width,e=a===void 0?k2:a,r=c.height,i=r===void 0?k2:r,s=c.startCentered,n=s===void 0?!1:s,f="";return n&&K1?f+="translate(".concat(l.x/B-e/2,"em, ").concat(l.y/B-i/2,"em) "):n?f+="translate(calc(-50% + ".concat(l.x/B,"em), calc(-50% + ").concat(l.y/B,"em)) "):f+="translate(".concat(l.x/B,"em, ").concat(l.y/B,"em) "),f+="scale(".concat(l.size/B*(l.flipX?-1:1),", ").concat(l.size/B*(l.flipY?-1:1),") "),f+="rotate(".concat(l.rotate,"deg) "),f}var y6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function D4(){var c=N4,l=y4,a=u.cssPrefix,e=u.replacementClass,r=y6;if(a!==c||e!==l){var i=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(l),"g");r=r.replace(i,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(n,".".concat(e))}return r}var y1=!1;function x2(){u.autoAddCss&&!y1&&(C6(D4()),y1=!0)}var w6={mixout:function(){return{dom:{css:D4,insertCss:x2}}},hooks:function(){return{beforeDOMElementCreation:function(){x2()},beforeI2svg:function(){x2()}}}},T=H||{};T[F]||(T[F]={});T[F].styles||(T[F].styles={});T[F].hooks||(T[F].hooks={});T[F].shims||(T[F].shims=[]);var w=T[F],B4=[],H4=function(){L.removeEventListener("DOMContentLoaded",H4),o2=1,B4.map(function(l){return l()})},o2=!1;D&&(o2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),o2||L.addEventListener("DOMContentLoaded",H4));function k6(c){D&&(o2?setTimeout(c,0):B4.push(c))}function Z(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?T4(c):"<".concat(l," ").concat(b6(e),">").concat(i.map(Z).join(""),"</").concat(l,">")}function w1(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var A6=function(l,a){return function(e,r,i,s){return l.call(a,e,r,i,s)}},b2=function(l,a,e,r){var i=Object.keys(l),s=i.length,n=r!==void 0?A6(a,r):a,f,t,z;for(e===void 0?(f=1,z=l[i[0]]):(f=0,z=e);f<s;f++)t=i[f],z=n(z,l[t],t,l);return z};function R4(c){return k(c).length!==1?null:c.codePointAt(0).toString(16)}function k1(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function D2(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=k1(l);typeof w.hooks.addPack=="function"&&!r?w.hooks.addPack(c,k1(l)):w.styles[c]=o(o({},w.styles[c]||{}),i),c==="fas"&&D2("fa",l)}var K=w.styles,P6=w.shims,E4=Object.keys(V2),F6=E4.reduce(function(c,l){return c[l]=Object.keys(V2[l]),c},{}),X2=null,I4={},U4={},W4={},O4={},q4={};function T6(c){return~L6.indexOf(c)}function D6(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!T6(r)?r:null}var G4=function(){var l=function(i){return b2(K,function(s,n,f){return s[f]=b2(n,i,{}),s},{})};I4=l(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var n=i[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){r[f.toString(16)]=s})}return r}),U4=l(function(r,i,s){if(r[s]=s,i[2]){var n=i[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){r[f]=s})}return r}),q4=l(function(r,i,s){var n=i[2];return r[s]=s,n.forEach(function(f){r[f]=s}),r});var a="far"in K||u.autoFetchSvg,e=b2(P6,function(r,i){var s=i[0],n=i[1],f=i[2];return n==="far"&&!a&&(n="fas"),typeof s=="string"&&(r.names[s]={prefix:n,iconName:f}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:n,iconName:f}),r},{names:{},unicodes:{}});W4=e.names,O4=e.unicodes,X2=u2(u.styleDefault,{family:u.familyDefault})};h6(function(c){X2=u2(c.styleDefault,{family:u.familyDefault})});G4();function Y2(c,l){return(I4[c]||{})[l]}function B6(c,l){return(U4[c]||{})[l]}function U(c,l){return(q4[c]||{})[l]}function j4(c){return W4[c]||{prefix:null,iconName:null}}function H6(c){var l=O4[c],a=Y2("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function R(){return X2}var V4=function(){return{prefix:null,iconName:null,rest:[]}};function R6(c){var l=C,a=E4.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return C4.forEach(function(e){(c.includes(a[e])||c.some(function(r){return F6[e].includes(r)}))&&(l=e)}),l}function u2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?C:a,r=z6[e][c];if(e===Q&&!c)return"fad";var i=b1[e][c]||b1[e][r],s=c in w.styles?c:null,n=i||s||null;return n}function E6(c){var l=[],a=null;return c.forEach(function(e){var r=D6(u.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function A1(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var P1=b4.concat(x4);function p2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,i=A1(c.filter(function(d){return P1.includes(d)})),s=A1(c.filter(function(d){return!P1.includes(d)})),n=i.filter(function(d){return r=d,!J1.includes(d)}),f=m2(n,1),t=f[0],z=t===void 0?null:t,m=R6(i),M=o(o({},E6(s)),{},{prefix:u2(z,{family:m})});return o(o(o({},M),O6({values:c,family:m,styles:K,config:u,canonical:M,givenPrefix:r})),I6(e,r,M))}function I6(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=l==="fa"?j4(r):{},s=U(e,r);return r=i.iconName||s||r,e=i.prefix||e,e==="far"&&!K.far&&K.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var U6=C4.filter(function(c){return c!==C||c!==Q}),W6=Object.keys(w2).filter(function(c){return c!==C}).map(function(c){return Object.keys(w2[c])}).flat();function O6(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,s=c.styles,n=s===void 0?{}:s,f=c.config,t=f===void 0?{}:f,z=a===Q,m=l.includes("fa-duotone")||l.includes("fad"),M=t.familyDefault==="duotone",d=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||M||d)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&U6.includes(a)){var g=Object.keys(n).find(function(x){return W6.includes(x)});if(g||t.autoFetchSvg){var v=$3.get(a).defaultShortPrefixId;e.prefix=v,e.iconName=U(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=R()||"fas"),e}var q6=(function(){function c(){o3(this,c),this.definitions={}}return t3(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(n){a.definitions[n]=o(o({},a.definitions[n]||{}),s[n]),D2(n,s[n]);var f=V2[C][n];f&&D2(f,s[n]),G4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var s=r[i],n=s.prefix,f=s.iconName,t=s.icon,z=t[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[n][m]=t)}),a[n][f]=t}),a}}])})(),F1=[],G={},j={},G6=Object.keys(j);function j6(c,l){var a=l.mixoutsTo;return F1=c,G={},Object.keys(j).forEach(function(e){G6.indexOf(e)===-1&&delete j[e]}),F1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(a[s]=r[s]),f2(r[s])==="object"&&Object.keys(r[s]).forEach(function(n){a[s]||(a[s]={}),a[s][n]=r[s][n]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(s){G[s]||(G[s]=[]),G[s].push(i[s])})}e.provides&&e.provides(j)}),a}function B2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=G[c]||[];return i.forEach(function(s){l=s.apply(null,[l].concat(e))}),l}function O(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=G[c]||[];r.forEach(function(i){i.apply(null,a)})}function E(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,l):void 0}function H2(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||R();if(l)return l=U(a,l)||l,w1($4.definitions,a,l)||w1(w.styles,a,l)}var $4=new q6,V6=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,O("noAuto")},$6={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(O("beforeI2svg",l),E("pseudoElements2svg",l),E("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,k6(function(){X6({autoReplaceSvgRoot:a}),O("watch",l)})}},_6={icon:function(l){if(l===null)return null;if(f2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:U(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=u2(l[0]);return{prefix:e,iconName:U(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(u.cssPrefix,"-"))>-1||l.match(u6))){var r=p2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var i=R();return{prefix:i,iconName:U(i,l)||l}}}},N={noAuto:V6,config:u,dom:$6,parse:_6,library:$4,findIconDefinition:H2,toHtml:Z},X6=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?L:a;(Object.keys(w.styles).length>0||u.autoFetchSvg)&&D&&u.autoReplaceSvg&&N.dom.i2svg({node:e})};function d2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return Z(e)})}}),Object.defineProperty(c,"node",{get:function(){if(D){var e=L.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function Y6(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,i=c.styles,s=c.transform;if(_2(s)&&a.found&&!e.found){var n=a.width,f=a.height,t={x:n/f/2,y:.5};r.style=z2(o(o({},i),{},{"transform-origin":"".concat(t.x+s.x/16,"em ").concat(t.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function K6(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,i=c.symbol,s=i===!0?"".concat(l,"-").concat(u.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:s}),children:e}]}]}function Q6(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function K2(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,i=c.iconName,s=c.transform,n=c.symbol,f=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,M=e.found?e:a,d=M.width,g=M.height,v=[u.replacementClass,i?"".concat(u.cssPrefix,"-").concat(i):""].filter(function(P){return t.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(d," ").concat(g)})};!Q6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[W]="");var h=o(o({},x),{},{prefix:r,iconName:i,main:a,mask:e,maskId:f,transform:s,symbol:n,styles:o({},t.styles)}),S=e.found&&a.found?E("generateAbstractMask",h)||{children:[],attributes:{}}:E("generateAbstractIcon",h)||{children:[],attributes:{}},y=S.children,q=S.attributes;return h.children=y,h.attributes=q,n?K6(h):Y6(h)}function T1(c){var l=c.content,a=c.width,e=c.height,r=c.transform,i=c.extra,s=c.watchable,n=s===void 0?!1:s,f=o(o({},i.attributes),{},{class:i.classes.join(" ")});n&&(f[W]="");var t=o({},i.styles);_2(r)&&(t.transform=N6({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var z=z2(t);z.length>0&&(f.style=z);var m=[];return m.push({tag:"span",attributes:f,children:[l]}),m}function J6(c){var l=c.content,a=c.extra,e=o(o({},a.attributes),{},{class:a.classes.join(" ")}),r=z2(a.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[l]}),i}var S2=w.styles;function R2(c){var l=c[0],a=c[1],e=c.slice(4),r=m2(e,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(C2.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:l,height:a,icon:s}}var Z6={found:!1,width:512,height:512};function c8(c,l){!k4&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function E2(c,l){var a=l;return l==="fa"&&u.styleDefault!==null&&(l=R()),new Promise(function(e,r){if(a==="fa"){var i=j4(c)||{};c=i.iconName||c,l=i.prefix||l}if(c&&l&&S2[l]&&S2[l][c]){var s=S2[l][c];return e(R2(s))}c8(c,l),e(o(o({},Z6),{},{icon:u.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}var D1=function(){},I2=u.measurePerformance&&a2&&a2.mark&&a2.measure?a2:{mark:D1,measure:D1},_='FA "7.3.0"',a8=function(l){return I2.mark("".concat(_," ").concat(l," begins")),function(){return _4(l)}},_4=function(l){I2.mark("".concat(_," ").concat(l," ends")),I2.measure("".concat(_," ").concat(l),"".concat(_," ").concat(l," begins"),"".concat(_," ").concat(l," ends"))},Q2={begin:a8,end:_4},s2=function(){};function B1(c){var l=c.getAttribute?c.getAttribute(W):null;return typeof l=="string"}function l8(c){var l=c.getAttribute?c.getAttribute(G2):null,a=c.getAttribute?c.getAttribute(j2):null;return l&&a}function e8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function r8(){if(u.autoReplaceSvg===!0)return n2.replace;var c=n2[u.autoReplaceSvg];return c||n2.replace}function i8(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function s8(c){return L.createElement(c)}function X4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?i8:s8:a;if(typeof c=="string")return L.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var i=c.children||[];return i.forEach(function(s){r.appendChild(X4(s,{ceFn:e}))}),r}function n8(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var n2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(X4(r),a)}),a.getAttribute(W)===null&&u.keepOriginalSource){var e=L.createComment(n8(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~$2(a).indexOf(u.replacementClass))return n2.replace(l);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(n,f){return f===u.replacementClass||f.match(r)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var s=e.map(function(n){return Z(n)}).join(`
`);a.setAttribute(W,""),a.innerHTML=s}};function H1(c){c()}function Y4(c,l){var a=typeof l=="function"?l:s2;if(c.length===0)a();else{var e=H1;u.mutateApproach===t6&&(e=H.requestAnimationFrame||H1),e(function(){var r=r8(),i=Q2.begin("mutate");c.map(r),i(),a()})}}var J2=!1;function K4(){J2=!0}function U2(){J2=!1}var t2=null;function R1(c){if(g1&&u.observeMutations){var l=c.treeCallback,a=l===void 0?s2:l,e=c.nodeCallback,r=e===void 0?s2:e,i=c.pseudoElementsCallback,s=i===void 0?s2:i,n=c.observeMutationsRoot,f=n===void 0?L:n;t2=new g1(function(t){if(!J2){var z=R();$(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!B1(m.addedNodes[0])&&(u.searchPseudoElements&&s(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&s([m.target],!0),m.type==="attributes"&&B1(m.target)&&~M6.indexOf(m.attributeName))if(m.attributeName==="class"&&l8(m.target)){var M=p2($2(m.target)),d=M.prefix,g=M.iconName;m.target.setAttribute(G2,d||z),g&&m.target.setAttribute(j2,g)}else e8(m.target)&&r(m.target)})}}),D&&t2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function f8(){t2&&t2.disconnect()}function o8(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var i=r.split(":"),s=i[0],n=i.slice(1);return s&&n.length>0&&(e[s]=n.join(":").trim()),e},{})),a}function t8(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=p2($2(c));return r.prefix||(r.prefix=R()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=B6(r.prefix,c.innerText)||Y2(r.prefix,R4(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function m8(c){var l=$(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function z8(){return{iconName:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function E1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=t8(c),e=a.iconName,r=a.prefix,i=a.rest,s=m8(c),n=B2("parseNodeAttributes",{},c),f=l.styleParser?o8(c):[];return o({iconName:e,prefix:r,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:s}},n)}var u8=w.styles;function Q4(c){var l=u.autoReplaceSvg==="nest"?E1(c,{styleParser:!1}):E1(c);return~l.extra.classes.indexOf(P4)?E("generateLayersText",c,l):E("generateSvgReplacementMutation",c,l)}function p8(){return[].concat(k(x4),k(b4))}function I1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var a=L.documentElement.classList,e=function(m){return a.add("".concat(x1,"-").concat(m))},r=function(m){return a.remove("".concat(x1,"-").concat(m))},i=u.autoFetchSvg?p8():J1.concat(Object.keys(u8));i.includes("fa")||i.push("fa");var s=[".".concat(P4,":not([").concat(W,"])")].concat(i.map(function(z){return".".concat(z,":not([").concat(W,"])")})).join(", ");if(s.length===0)return Promise.resolve();var n=[];try{n=$(c.querySelectorAll(s))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var f=Q2.begin("onTree"),t=n.reduce(function(z,m){try{var M=Q4(m);M&&z.push(M)}catch(d){k4||d.name==="MissingIcon"&&console.error(d)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(M){Y4(M,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),f(),z()})}).catch(function(M){f(),m(M)})})}function d8(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Q4(c).then(function(a){a&&Y4([a],l)})}function M8(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:H2(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:H2(r||{})),c(e,o(o({},a),{},{mask:r}))}}var L8=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?A:e,i=a.symbol,s=i===void 0?!1:i,n=a.mask,f=n===void 0?null:n,t=a.maskId,z=t===void 0?null:t,m=a.classes,M=m===void 0?[]:m,d=a.attributes,g=d===void 0?{}:d,v=a.styles,x=v===void 0?{}:v;if(l){var h=l.prefix,S=l.iconName,y=l.icon;return d2(o({type:"icon"},l),function(){return O("beforeDOMElementCreation",{iconDefinition:l,params:a}),K2({icons:{main:R2(y),mask:f?R2(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:S,transform:o(o({},A),r),symbol:s,maskId:z,extra:{attributes:g,styles:x,classes:M}})})}},v8={mixout:function(){return{icon:M8(L8)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=I1,a.nodeCallback=d8,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?L:e,i=a.callback,s=i===void 0?function(){}:i;return I1(r,s)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.prefix,s=e.transform,n=e.symbol,f=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,M){Promise.all([E2(r,i),f.iconName?E2(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var g=m2(d,2),v=g[0],x=g[1];m([a,K2({icons:{main:v,mask:x},prefix:i,iconName:r,transform:s,symbol:n,maskId:t,extra:z,watchable:!0})])}).catch(M)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.transform,n=a.styles,f=z2(n);f.length>0&&(r.style=f);var t;return _2(s)&&(t=E("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},g8={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return d2({type:"layer"},function(){O("beforeDOMElementCreation",{assembler:a,params:e});var s=[];return a(function(n){Array.isArray(n)?n.map(function(f){s=s.concat(f.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(k(i)).join(" ")},children:s}]})}}}},h8={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,s=e.classes,n=s===void 0?[]:s,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return d2({type:"counter",content:a},function(){return O("beforeDOMElementCreation",{content:a,params:e}),J6({content:a.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(k(n))}})})}}}},C8={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?A:r,s=e.classes,n=s===void 0?[]:s,f=e.attributes,t=f===void 0?{}:f,z=e.styles,m=z===void 0?{}:z;return d2({type:"text",content:a},function(){return O("beforeDOMElementCreation",{content:a,params:e}),T1({content:a,transform:o(o({},A),i),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(k(n))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,i=e.extra,s=null,n=null;if(K1){var f=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();s=t.width/f,n=t.height/f}return Promise.resolve([a,T1({content:a.innerHTML,width:s,height:n,transform:r,extra:i,watchable:!0})])}}},J4=new RegExp('"',"ug"),U1=[1105920,1112319],W1=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),V3),f6),c0),W2=Object.keys(W1).reduce(function(c,l){return c[l.toLowerCase()]=W1[l],c},{}),x8=Object.keys(W2).reduce(function(c,l){var a=W2[l];return c[l]=a[900]||k(Object.entries(a))[0][1],c},{});function b8(c){var l=c.replace(J4,"");return R4(k(l)[0]||"")}function S8(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(J4,""),r=e.codePointAt(0),i=r>=U1[0]&&r<=U1[1],s=e.length===2?e[0]===e[1]:!1;return i||s||l}function N8(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return(W2[a]||{})[r]||x8[a]}function O1(c,l){var a="".concat(o6).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var i=$(c.children),s=i.filter(function(M2){return M2.getAttribute(A2)===l})[0],n=H.getComputedStyle(c,l),f=n.getPropertyValue("font-family"),t=f.match(p6),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(s&&!t)return c.removeChild(s),e();if(t&&m!=="none"&&m!==""){var M=n.getPropertyValue("content"),d=N8(f,z),g=b8(M),v=t[0].startsWith("FontAwesome"),x=S8(n),h=Y2(d,g),S=h;if(v){var y=H6(g);y.iconName&&y.prefix&&(h=y.iconName,d=y.prefix)}if(h&&!x&&(!s||s.getAttribute(G2)!==d||s.getAttribute(j2)!==S)){c.setAttribute(a,S),s&&c.removeChild(s);var q=z8(),P=q.extra;P.attributes[A2]=l,E2(h,d).then(function(M2){var i3=K2(o(o({},q),{},{icons:{main:M2,mask:V4()},prefix:d,iconName:S,extra:P,watchable:!0})),L2=L.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(L2,c.firstChild):c.appendChild(L2),L2.outerHTML=i3.map(function(s3){return Z(s3)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function y8(c){return Promise.all([O1(c,"::before"),O1(c,"::after")])}function w8(c){return c.parentNode!==document.head&&!~m6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(A2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var k8=function(l){return!!l&&w4.some(function(a){return l.includes(a)})},A8=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(f){return f.trim()});e=e.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(t){return t.trim()})});var r=i2(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(k8(s)){var n=w4.reduce(function(f,t){return f.replace(t,"")},s);n!==""&&n!=="*"&&a.add(n)}}}catch(f){r.e(f)}finally{r.f()}return a};function q1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(D){var a;if(l)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=i2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;try{var n=i2(s.cssRules),f;try{for(n.s();!(f=n.n()).done;){var t=f.value,z=A8(t.selectorText),m=i2(z),M;try{for(m.s();!(M=m.n()).done;){var d=M.value;e.add(d)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var g=Array.from(e).join(", ");try{a=c.querySelectorAll(g)}catch{}}return new Promise(function(v,x){var h=$(a).filter(w8).map(y8),S=Q2.begin("searchPseudoElements");K4(),Promise.all(h).then(function(){S(),U2(),v()}).catch(function(){S(),U2(),x()})})}}var P8={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=q1,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?L:e;u.searchPseudoElements&&q1(r)}}},G1=!1,F8={mixout:function(){return{dom:{unwatch:function(){K4(),G1=!0}}}},hooks:function(){return{bootstrap:function(){R1(B2("mutationObserverCallbacks",{}))},noAuto:function(){f8()},watch:function(a){var e=a.observeMutationsRoot;G1?U2():R1(B2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},j1=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),s=i[0],n=i.slice(1).join("-");if(s&&n==="h")return e.flipX=!0,e;if(s&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(s){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},a)},T8={mixout:function(){return{parse:{transform:function(a){return j1(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=j1(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,s=a.iconWidth,n={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(t," ").concat(z)},M={transform:"translate(".concat(s/2*-1," -256)")},d={outer:n,inner:m,path:M};return{tag:"g",attributes:o({},d.outer),children:[{tag:"g",attributes:o({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),d.path)}]}]}}}},N2={x:0,y:0,width:"100%",height:"100%"};function V1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function D8(c){return c.tag==="g"?c.children:[c]}var B8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?p2(r.split(" ").map(function(s){return s.trim()})):V4();return i.prefix||(i.prefix=R()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.mask,n=a.maskId,f=a.transform,t=i.width,z=i.icon,m=s.width,M=s.icon,d=S6({transform:f,containerWidth:m,iconWidth:t}),g={tag:"rect",attributes:o(o({},N2),{},{fill:"white"})},v=z.children?{children:z.children.map(V1)}:{},x={tag:"g",attributes:o({},d.inner),children:[V1(o({tag:z.tag,attributes:o(o({},z.attributes),d.path)},v))]},h={tag:"g",attributes:o({},d.outer),children:[x]},S="mask-".concat(n||N1()),y="clip-".concat(n||N1()),q={tag:"mask",attributes:o(o({},N2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,h]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:D8(M)},q]};return e.push(P,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")")},N2)}),{children:e,attributes:r}}}},H8={provides:function(l){var a=!1;H.matchMedia&&(a=H.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=o(o({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:o(o({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:o(o({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},R8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},E8=[w6,v8,g8,h8,C8,P8,F8,T8,B8,H8,R8];j6(E8,{mixoutsTo:N});var r5=N.noAuto,Z4=N.config,i5=N.library,c3=N.dom,a3=N.parse,s5=N.findIconDefinition,n5=N.toHtml,l3=N.icon,f5=N.layer,I8=N.text,U8=N.counter;var W8=["*"],O8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){Z4.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=v2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),q8=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(i=>e[i]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=v2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),G8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},j8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},r3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),V8=c=>{let l=r3(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)},Z2=new WeakSet,e3="fa-auto-css";function $8(c,l){if(!l.autoAddCss||Z2.has(c))return;if(c.getElementById(e3)!=null){l.autoAddCss=!1,Z2.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",e3),a.innerHTML=c3.css();let e=c.head.childNodes,r=null;for(let i=e.length-1;i>-1;i--){let s=e[i],n=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}c.head.insertBefore(a,r),l.autoAddCss=!1,Z2.add(c)}var _8=c=>c.prefix!==void 0&&c.iconName!==void 0,X8=(c,l)=>_8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},Y8=(()=>{class c{stackItemSize=c2("1x");size=c2();_effect=r1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=n1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),K8=(()=>{class c{size=c2();classes=h2(()=>{let a=this.size(),e=a?{[`fa-${a}`]:!0}:{};return a1(c1({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&z1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:W8,decls:1,vars:0,template:function(e,r){e&1&&(t1(),m1(0))},encapsulation:2,changeDetection:0})}return c})(),C5=(()=>{class c{icon=b();title=b();animation=b();mask=b();flip=b();size=b();pull=b();border=b();inverse=b();symbol=b();rotate=b();fixedWidth=b();transform=b();a11yRole=b();renderedIconHTML=h2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return j8(),"";let e=this.findIconDefinition(a);if(!e)return"";let r=this.buildParams();$8(this.document,this.config);let i=l3(e,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=I(e1);sanitizer=I(u1);config=I(O8);iconLibrary=I(q8);stackItem=I(Y8,{optional:!0});stack=I(K8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let e=X8(a,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(G8(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r=="string"?a3.transform(r):r,s=this.mask(),n=s!=null?this.findIconDefinition(s):null,f={},t=this.a11yRole();t!=null&&(f.role=t);let z={};return e.rotate!=null&&!r3(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:i,classes:V8(e),mask:n??void 0,symbol:this.symbol(),attributes:f,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=g2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(o1("innerHTML",r.renderedIconHTML(),i1),f1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var x5=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=s1({type:c});static \u0275inj=l1({})}return c})();var N5={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"]};var y5={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]};var w5={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]};var k5={prefix:"fas",iconName:"file-circle-exclamation",icon:[576,512,[],"e4eb","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l180 0c-22.7-31.5-36-70.2-36-112 0-100.6 77.4-183.2 176-191.3l0-38.1c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40zm0-140c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16z"]};var A5={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-32c0-17.7 14.3-32 32-32zM64 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]};var P5={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var F5={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]};var T5={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]};var D5={prefix:"fas",iconName:"folder-open",icon:[576,512,[128194,128449,61717],"f07c","M56 225.6L32.4 296.2 32.4 96c0-35.3 28.7-64 64-64l138.7 0c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4l117.3 0c35.3 0 64 28.7 64 64l0 16-365.4 0c-41.3 0-78 26.4-91.1 65.6zM477.8 448L99 448c-32.8 0-55.9-32.1-45.5-63.2l48-144C108 221.2 126.4 208 147 208l378.8 0c32.8 0 55.9 32.1 45.5 63.2l-48 144c-6.5 19.6-24.9 32.8-45.5 32.8z"]};var B5={prefix:"fas",iconName:"flask",icon:[448,512,[],"f0c3","M288 0L128 0C110.3 0 96 14.3 96 32s14.3 32 32 32L128 215.5 7.5 426.3C2.6 435 0 444.7 0 454.7 0 486.4 25.6 512 57.3 512l333.4 0c31.6 0 57.3-25.6 57.3-57.3 0-10-2.6-19.8-7.5-28.4L320 215.5 320 64c17.7 0 32-14.3 32-32S337.7 0 320 0L288 0zM192 215.5l0-151.5 64 0 0 151.5c0 11.1 2.9 22.1 8.4 31.8l41.6 72.7-164 0 41.6-72.7c5.5-9.7 8.4-20.6 8.4-31.8z"]};var H5={prefix:"fas",iconName:"hospital",icon:[576,512,[127973,62589,"hospital-alt","hospital-wide"],"f0f8","M128 64c0-35.3 28.7-64 64-64L384 0c35.3 0 64 28.7 64 64l0 64 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l64 0 0-64zM272 352c-17.7 0-32 14.3-32 32l0 80 96 0 0-80c0-17.7-14.3-32-32-32l-32 0zM128 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM112 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM512 368l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16zM496 256c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0zM264 104l0 32-32 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-32 0 0-32c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"]};var R5={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 132.5-114.6 240-256 240-37.1 0-72.3-7.4-104.1-20.7L33.5 510.1c-9.4 4-20.2 1.7-27.1-5.8S-2 485.8 2.8 476.8l48.8-92.2C19.2 344.3 0 294.3 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240z"]};var E5={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]};var I5={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]};var U5={prefix:"fas",iconName:"user-doctor",icon:[448,512,["user-md"],"f0f0","M224 8a120 120 0 1 0 0 240 120 120 0 1 0 0-240zm60 312.8c-5.4-.5-11-.8-16.6-.8l-86.9 0c-5.6 0-11.1 .3-16.6 .8l0 67.5c16.5 7.6 28 24.3 28 43.6 0 26.5-21.5 48-48 48s-48-21.5-48-48c0-19.4 11.5-36.1 28-43.6l0-58.4C61 353 16 413.6 16 484.6 16 499.7 28.3 512 43.4 512l361.1 0c15.1 0 27.4-12.3 27.4-27.4 0-71-45-131.5-108-154.6l0 37.4c23.3 8.2 40 30.5 40 56.6l0 32c0 11-9 20-20 20s-20-9-20-20l0-32c0-11-9-20-20-20s-20 9-20 20l0 32c0 11-9 20-20 20s-20-9-20-20l0-32c0-26.1 16.7-48.3 40-56.6l0-46.6z"]};var W5={prefix:"fas",iconName:"gauge-high",icon:[512,512,[62461,"tachometer-alt","tachometer-alt-fast"],"f625","M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64 0-16.2-6-31.1-16-42.3l69.5-138.9c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7L261.1 288.2c-1.7-.1-3.4-.2-5.1-.2-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var O5={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var q5={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]};var G5={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M488 192l-144 0c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l46.7-46.7c-75.3-58.6-184.3-53.3-253.5 15.9-75 75-75 196.5 0 271.5s196.5 75 271.5 0c8.2-8.2 15.5-16.9 21.9-26.1 10.1-14.5 30.1-18 44.6-7.9s18 30.1 7.9 44.6c-8.5 12.2-18.2 23.8-29.1 34.7-100 100-262.1 100-362 0S-25 175 75 75c94.3-94.3 243.7-99.6 344.3-16.2L471 7c6.9-6.9 17.2-8.9 26.2-5.2S512 14.3 512 24l0 144c0 13.3-10.7 24-24 24z"]};var j5={prefix:"fas",iconName:"clock-rotate-left",icon:[576,512,["history"],"f1da","M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z"]};var V5={prefix:"fas",iconName:"chart-column",icon:[512,512,[],"e0e3","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM144 224c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm144-64l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32s32 14.3 32 32zm80 32c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zM512 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32s32 14.3 32 32z"]};var $5={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var _5={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0zM502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]};var X5={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]};var Y5={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]};var K5={prefix:"fas",iconName:"users-gear",icon:[640,512,["users-cog"],"f509","M320 224a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM96 232a72 72 0 1 0 0-144 72 72 0 1 0 0 144zM0 416l0 32c0 17.7 14.3 32 32 32l86.7 0c-4.3-9.8-6.7-20.6-6.7-32l0-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4-70.7 0-128 57.3-128 128zM616 160a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zM160 432l0 16c0 17.7 14.3 32 32 32l156.8 0c-7.1-21.6-6.3-44.4 10.7-64-14-16.2-20.5-39.7-11.4-63.3 6.6-17.1 15.9-33.1 27.4-47.3 5.4-6.6 11.6-11.7 18.3-15.4-22.1-11.5-47.2-18-73.8-18-88.4 0-160 71.6-160 160zm464.6-44.1c6.3-3.6 9.5-11.1 6.8-18-4.8-12.4-11.5-24.1-19.9-34.4-4.6-5.7-12.7-6.7-19-3-21.8 12.6-48.6-2.8-48.6-28.1 0-7.3-4.9-13.8-12.1-14.9-12.9-2-26.8-2-39.7 0-7.2 1.1-12.1 7.6-12.1 14.9 0 25.2-26.8 40.7-48.6 28.1-6.3-3.6-14.4-2.6-19 3-8.4 10.3-15.1 22-19.9 34.4-2.6 6.8 .5 14.3 6.8 17.9 21.9 12.6 21.9 43.5 0 56.2-6.3 3.6-9.5 11.1-6.8 17.9 4.8 12.4 11.5 24.1 19.9 34.4 4.6 5.7 12.7 6.7 19 3 21.8-12.6 48.6 2.9 48.6 28.1 0 7.3 4.9 13.8 12.1 14.9 12.9 2 26.8 2 39.7 0 7.2-1.1 12.1-7.6 12.1-14.9 0-25.2 26.8-40.7 48.6-28.1 6.3 3.6 14.4 2.6 19-3 8.4-10.3 15.1-22 19.9-34.4 2.6-6.8-.5-14.3-6.8-17.9-21.9-12.6-21.9-43.5 0-56.2zM472 416a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"]};var Q5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var J5={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M96.5 0c-35.3 0-64 28.7-64 64l0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-96 78.1 0-31 31c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9l-72-72c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l31 31-78.1 0 0-133.5c0-17-6.7-33.3-18.7-45.3L291.2 18.7C279.2 6.7 263 0 246 0L96.5 0zM358 176l-93.5 0c-13.3 0-24-10.7-24-24L240.5 58.5 358 176zM224.5 328c0-13.3 10.7-24 24-24l104 0 0 48-104 0c-13.3 0-24-10.7-24-24z"]};export{C5 as a,x5 as b,N5 as c,y5 as d,w5 as e,k5 as f,A5 as g,P5 as h,F5 as i,T5 as j,D5 as k,B5 as l,H5 as m,R5 as n,E5 as o,I5 as p,U5 as q,W5 as r,O5 as s,q5 as t,G5 as u,j5 as v,V5 as w,$5 as x,_5 as y,X5 as z,Y5 as A,K5 as B,Q5 as C,J5 as D};
