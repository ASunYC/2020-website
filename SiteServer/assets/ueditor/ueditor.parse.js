!function(){UE=window.UE||{};var e=!!window.ActiveXObject,t={removeLastbs:function(e){return e.replace(/\/$/,"")},extend:function(e,t){for(var n=arguments,i=!!this.isBoolean(n[n.length-1])&&n[n.length-1],r=this.isBoolean(n[n.length-1])?n.length-1:n.length,a=1;a<r;a++){var s=n[a];for(var l in s)i&&e.hasOwnProperty(l)||(e[l]=s[l])}return e},isIE:e,cssRule:e?function(e,t,n){var i,r,a;if((i=(n=n||document).indexList?n.indexList:n.indexList={})[e])a=n.styleSheets[i[e]];else{if(void 0===t)return"";a=n.createStyleSheet("",r=n.styleSheets.length),i[e]=r}if(void 0===t)return a.cssText;a.cssText=a.cssText+"\n"+(t||"")}:function(e,t,n){var i,r=(n=n||document).getElementsByTagName("head")[0];if(!(i=n.getElementById(e))){if(void 0===t)return"";(i=n.createElement("style")).id=e,r.appendChild(i)}if(void 0===t)return i.innerHTML;""!==t?i.innerHTML=i.innerHTML+"\n"+t:r.removeChild(i)},domReady:function(t){var n=window.document;"complete"===n.readyState?t():e?(function(){if(!n.isReady){try{n.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}t()}}(),window.attachEvent("onload",function(){t()})):(n.addEventListener("DOMContentLoaded",function(){n.removeEventListener("DOMContentLoaded",arguments.callee,!1),t()},!1),window.addEventListener("load",function(){t()},!1))},each:function(e,t,n){if(null!=e)if(e.length===+e.length){for(var i=0,r=e.length;i<r;i++)if(!1===t.call(n,e[i],i,e))return!1}else for(var a in e)if(e.hasOwnProperty(a)&&!1===t.call(n,e[a],a,e))return!1},inArray:function(e,t){var n=-1;return this.each(e,function(e,i){if(e===t)return n=i,!1}),n},pushItem:function(e,t){-1==this.inArray(e,t)&&e.push(t)},trim:function(e){return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},indexOf:function(e,t,n){var i=-1;return n=this.isNumber(n)?n:0,this.each(e,function(e,r){if(r>=n&&e===t)return i=r,!1}),i},hasClass:function(e,t){t=t.replace(/(^[ ]+)|([ ]+$)/g,"").replace(/[ ]{2,}/g," ").split(" ");for(var n,i=0,r=e.className;n=t[i++];)if(!new RegExp("\\b"+n+"\\b","i").test(r))return!1;return i-1==t.length},addClass:function(e,n){if(e){n=this.trim(n).replace(/[ ]{2,}/g," ").split(" ");for(var i,r=0,a=e.className;i=n[r++];)new RegExp("\\b"+i+"\\b").test(a)||(a+=" "+i);e.className=t.trim(a)}},removeClass:function(e,t){t=this.isArray(t)?t:this.trim(t).replace(/[ ]{2,}/g," ").split(" ");for(var n,i=0,r=e.className;n=t[i++];)r=r.replace(new RegExp("\\b"+n+"\\b"),"");r=this.trim(r).replace(/[ ]{2,}/g," "),e.className=r,!r&&e.removeAttribute("className")},on:function(e,n,i){var r=this.isArray(n)?n:n.split(/\s+/),a=r.length;if(a)for(;a--;)if(n=r[a],e.addEventListener)e.addEventListener(n,i,!1);else{i._d||(i._d={els:[]});var s=n+i.toString(),l=t.indexOf(i._d.els,e);i._d[s]&&-1!=l||(-1==l&&i._d.els.push(e),i._d[s]||(i._d[s]=function(e){return i.call(e.srcElement,e||window.event)}),e.attachEvent("on"+n,i._d[s]))}e=null},off:function(e,n,i){var r=this.isArray(n)?n:n.split(/\s+/),a=r.length;if(a)for(;a--;)if(n=r[a],e.removeEventListener)e.removeEventListener(n,i,!1);else{var s=n+i.toString();try{e.detachEvent("on"+n,i._d?i._d[s]:i)}catch(e){}if(i._d&&i._d[s]){var l=t.indexOf(i._d.els,e);-1!=l&&i._d.els.splice(l,1),0==i._d.els.length&&delete i._d[s]}}},loadFile:function(){var e=[];function t(t,n){try{for(var i,r=0;i=e[r++];)if(i.doc===t&&i.url==(n.src||n.href))return i}catch(e){return null}}return function(n,i,r){var a=t(n,i);if(a)a.ready?r&&r():a.funs.push(r);else if(e.push({doc:n,url:i.src||i.href,funs:[r]}),n.body){if(!i.id||!n.getElementById(i.id)){var s=n.createElement(i.tag);for(var l in delete i.tag,i)s.setAttribute(l,i[l]);s.onload=s.onreadystatechange=function(){if(!this.readyState||/loaded|complete/.test(this.readyState)){if((a=t(n,i)).funs.length>0){a.ready=1;for(var e;e=a.funs.pop();)e()}s.onload=s.onreadystatechange=null}},s.onerror=function(){throw Error("The load "+(i.href||i.src)+" fails,check the url")},n.getElementsByTagName("head")[0].appendChild(s)}}else{var o=[];for(var l in i)"tag"!=l&&o.push(l+'="'+i[l]+'"');n.write("<"+i.tag+" "+o.join(" ")+" ></"+i.tag+">")}}}()};t.each(["String","Function","Array","Number","RegExp","Object","Boolean"],function(e){t["is"+e]=function(t){return Object.prototype.toString.apply(t)=="[object "+e+"]"}});var n={};UE.parse={register:function(e,t){n[e]=t},load:function(e){t.each(n,function(n){n.call(e,t)})}},uParse=function(e,n){t.domReady(function(){if(document.querySelectorAll)i=document.querySelectorAll(e);else if(/^#/.test(e))i=[document.getElementById(e.replace(/^#/,""))];else if(/^\./.test(e)){var i=[];t.each(document.getElementsByTagName("*"),function(t){t.className&&new RegExp("\\b"+e.replace(/^\./,"")+"\\b","i").test(t.className)&&i.push(t)})}else i=document.getElementsByTagName(e);t.each(i,function(i){UE.parse.load(t.extend({root:i,selector:e},n))})})}}(),UE.parse.register("insertcode",function(e){var t,n,i=this.root.getElementsByTagName("pre");i.length&&("undefined"==typeof XRegExp?(void 0!==this.rootPath?(t=e.removeLastbs(this.rootPath)+"/third-party/SyntaxHighlighter/shCore.js",n=e.removeLastbs(this.rootPath)+"/third-party/SyntaxHighlighter/shCoreDefault.css"):(t=this.highlightJsUrl,n=this.highlightCssUrl),e.loadFile(document,{id:"syntaxhighlighter_css",tag:"link",rel:"stylesheet",type:"text/css",href:n}),e.loadFile(document,{id:"syntaxhighlighter_js",src:t,tag:"script",type:"text/javascript",defer:"defer"},function(){e.each(i,function(e){e&&/brush/i.test(e.className)&&SyntaxHighlighter.highlight(e)})})):e.each(i,function(e){e&&/brush/i.test(e.className)&&SyntaxHighlighter.highlight(e)}))}),UE.parse.register("table",function(e){var t=this,n=this.root;if((r=n.getElementsByTagName("table")).length){var i=this.selector;e.cssRule("table",i+" table.noBorderTable td,"+i+" table.noBorderTable th,"+i+" table.noBorderTable caption{border:1px dashed #ddd !important}"+i+" table.sortEnabled tr.firstRow th,"+i+" table.sortEnabled tr.firstRow td{padding-right:20px; background-repeat: no-repeat;background-position: center right; background-image:url("+this.rootPath+"themes/default/images/sortable.png);}"+i+" table.sortEnabled tr.firstRow th:hover,"+i+" table.sortEnabled tr.firstRow td:hover{background-color: #EEE;}"+i+" table{margin-bottom:10px;border-collapse:collapse;display:table;}"+i+" td,"+i+" th{ background:white; padding: 5px 10px;border: 1px solid #DDD;}"+i+" caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}"+i+" th{border-top:1px solid #BBB;background:#F7F7F7;}"+i+" table tr.firstRow th{border-top:2px solid #BBB;background:#F7F7F7;}"+i+" tr.ue-table-interlace-color-single td{ background: #fcfcfc; }"+i+" tr.ue-table-interlace-color-double td{ background: #f7faff; }"+i+" td p{margin:0;padding:0;}",document),e.each("td th caption".split(" "),function(t){var i=n.getElementsByTagName(t);i.length&&e.each(i,function(e){e.firstChild||(e.innerHTML="&nbsp;")})});var r=n.getElementsByTagName("table");function a(t,n){var i,r=t;for(n=e.isArray(n)?n:[n];r;){for(i=0;i<n.length;i++)if(r.tagName==n[i].toUpperCase())return r;r=r.parentNode}return null}e.each(r,function(n){/\bsortEnabled\b/.test(n.className)&&e.on(n,"click",function(n){var i=n.target||n.srcElement,r=a(i,["td","th"]),s=a(i,"table"),l=e.indexOf(s.rows[0].cells,r),o=s.getAttribute("data-sort-type");-1!=l&&(function(t,n,i){for(var r=t.rows,a=[],s="TH"===r[0].cells[0].tagName,l=0,o=r.length;l<o;l++)a[l]=r[l];var d={reversecurrent:function(e,t){return 1},orderbyasc:function(e,t){var n=e.innerText||e.textContent,i=t.innerText||t.textContent;return n.localeCompare(i)},reversebyasc:function(e,t){var n=e.innerHTML,i=t.innerHTML;return i.localeCompare(n)},orderbynum:function(t,n){var i=t[e.isIE?"innerText":"textContent"].match(/\d+/),r=n[e.isIE?"innerText":"textContent"].match(/\d+/);return i&&(i=+i[0]),r&&(r=+r[0]),(i||0)-(r||0)},reversebynum:function(t,n){var i=t[e.isIE?"innerText":"textContent"].match(/\d+/),r=n[e.isIE?"innerText":"textContent"].match(/\d+/);return i&&(i=+i[0]),r&&(r=+r[0]),(r||0)-(i||0)}};t.setAttribute("data-sort-type",i&&"string"==typeof i&&d[i]?i:""),s&&a.splice(0,1),a=function(e,t){t=t||function(e,t){return e.localeCompare(t)};for(var n=0,i=e.length;n<i;n++)for(var r=n,a=e.length;r<a;r++)if(t(e[n],e[r])>0){var s=e[n];e[n]=e[r],e[r]=s}return e}(a,function(e,t){return i&&"function"==typeof i?i.call(this,e.cells[n],t.cells[n]):i&&"number"==typeof i?1:i&&"string"==typeof i&&d[i]?d[i].call(this,e.cells[n],t.cells[n]):d.orderbyasc.call(this,e.cells[n],t.cells[n])});for(var c=t.ownerDocument.createDocumentFragment(),u=0,o=a.length;u<o;u++)c.appendChild(a[u]);var h=t.getElementsByTagName("tbody")[0];h.appendChild(c)}(s,l,t.tableSortCompareFn||o),function(t){if(!e.hasClass(t.rows[0],"firstRow")){for(var n=1;n<t.rows.length;n++)e.removeClass(t.rows[n],"firstRow");e.addClass(t.rows[0],"firstRow")}}(s))})})}}),UE.parse.register("charts",function(e){e.cssRule("chartsContainerHeight",".edui-chart-container { height:"+(this.chartContainerHeight||300)+"px}");var t=this.rootPath,n=this.root,i=null;function r(e){for(var t,n=e.getAttribute("data-chart"),i={},r=[],a=0;t=e.rows[a];a++){for(var s,l=[],o=0;s=t.cells[o];o++){var d=s.innerText||s.textContent||"";l.push("TH"==s.tagName?d:0|d)}r.push(l)}var c;for(n=n.split(";"),a=0;c=n[a];a++)i[(c=c.split(":"))[0]]=c[1];return{table:e,meta:i,data:r}}function a(){window.Highcharts?s():e.loadFile(document,{src:t+"/third-party/highcharts/highcharts.js",tag:"script",type:"text/javascript",defer:"defer"},function(){s()})}function s(){e.loadFile(document,{src:t+"/dialogs/charts/chart.config.js",tag:"script",type:"text/javascript",defer:"defer"},function(){!function(){for(var e=null,t=null,n=0,r=i.length;n<r;n++)e=i[n],t=d(e),l(o(e.table),typeConfig[e.meta.chartType],t)}()})}function l(e,t,n){$(e).highcharts($.extend({},t,{credits:{enabled:!1},exporting:{enabled:!1},title:{text:n.title,x:-20},subtitle:{text:n.subTitle,x:-20},xAxis:{title:{text:n.xTitle},categories:n.categories},yAxis:{title:{text:n.yTitle},plotLines:[{value:0,width:1,color:"#808080"}]},tooltip:{enabled:!0,valueSuffix:n.suffix},legend:{layout:"vertical",align:"right",verticalAlign:"middle",borderWidth:1},series:n.series}))}function o(e){var t=document.createElement("div");return t.className="edui-chart-container",e.parentNode.replaceChild(t,e),t}function d(e){var t=[],n=[],i=[],r=e.data,a=e.meta;if("1"!=a.dataFormat){for(var s=0,l=r.length;s<l;s++)for(var o=0,d=r[s].length;o<d;o++)i[o]||(i[o]=[]),i[o][s]=r[s][o];r=i}if(i={},a.chartType!=typeConfig.length-1){for(n=r[0].slice(1),s=1;c=r[s];s++)t.push({name:c[0],data:c.slice(1)});i.series=t,i.categories=n,i.title=a.title,i.subTitle=a.subTitle,i.xTitle=a.xTitle,i.yTitle=a.yTitle,i.suffix=a.suffix}else{var c=[];for(s=1,l=r[0].length;s<l;s++)c.push([r[0][s],0|r[1][s]]);t[0]={type:"pie",name:a.tip,data:c},i.series=t,i.title=a.title,i.suffix=a.suffix}return i}t&&(i=n?function(e){for(var t,n=[],i=e.getElementsByTagName("table"),a=0;t=i[a];a++)null!==t.getAttribute("data-chart")&&n.push(r(t));return n.length?n:null}(n):null)&&(window.jQuery?a():e.loadFile(document,{src:t+"/third-party/jquery-1.10.2.min.js",tag:"script",type:"text/javascript",defer:"defer"},function(){a()}))}),UE.parse.register("background",function(e){for(var t,n,i=this.root.getElementsByTagName("p"),r=0;n=i[r++];)(t=n.getAttribute("data-background"))&&n.parentNode.removeChild(n);t&&e.cssRule("ueditor_background",this.selector+"{"+t+"}",document)}),UE.parse.register("list",function(e){var t=[],n={cn:"cn-1-",cn1:"cn-2-",cn2:"cn-3-",num:"num-1-",num1:"num-2-",num2:"num-3-",dash:"dash",dot:"dot"};e.extend(this,{liiconpath:"http://bs.baidu.com/listicon/",listDefaultPaddingLeft:"20"});var i=this.root,r=i.getElementsByTagName("ol"),a=i.getElementsByTagName("ul"),s=this.selector;function l(i){var r=this;e.each(i,function(i){if(i.className&&/custom_/i.test(i.className)){var a=i.className.match(/custom_(\w+)/)[1];if("dash"==a||"dot"==a)e.pushItem(t,s+" li.list-"+n[a]+"{background-image:url("+r.liiconpath+n[a]+".gif)}"),e.pushItem(t,s+" ul.custom_"+a+"{list-style:none;} "+s+" ul.custom_"+a+" li{background-position:0 3px;background-repeat:no-repeat}");else{var l=1;e.each(i.childNodes,function(i){"LI"==i.tagName&&(e.pushItem(t,s+" li.list-"+n[a]+l+"{background-image:url("+r.liiconpath+"list-"+n[a]+l+".gif)}"),l++)}),e.pushItem(t,s+" ol.custom_"+a+"{list-style:none;}"+s+" ol.custom_"+a+" li{background-position:0 3px;background-repeat:no-repeat}")}switch(a){case"cn":e.pushItem(t,s+" li.list-"+a+"-paddingleft-1{padding-left:25px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-2{padding-left:40px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-3{padding-left:55px}");break;case"cn1":e.pushItem(t,s+" li.list-"+a+"-paddingleft-1{padding-left:30px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-2{padding-left:40px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-3{padding-left:55px}");break;case"cn2":e.pushItem(t,s+" li.list-"+a+"-paddingleft-1{padding-left:40px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-2{padding-left:55px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-3{padding-left:68px}");break;case"num":case"num1":e.pushItem(t,s+" li.list-"+a+"-paddingleft-1{padding-left:25px}");break;case"num2":e.pushItem(t,s+" li.list-"+a+"-paddingleft-1{padding-left:35px}"),e.pushItem(t,s+" li.list-"+a+"-paddingleft-2{padding-left:40px}");break;case"dash":e.pushItem(t,s+" li.list-"+a+"-paddingleft{padding-left:35px}");break;case"dot":e.pushItem(t,s+" li.list-"+a+"-paddingleft{padding-left:20px}")}}})}r.length&&l.call(this,r),a.length&&l.call(this,a),(r.length||a.length)&&(t.push(s+" .list-paddingleft-1{padding-left:0}"),t.push(s+" .list-paddingleft-2{padding-left:"+this.listDefaultPaddingLeft+"px}"),t.push(s+" .list-paddingleft-3{padding-left:"+2*this.listDefaultPaddingLeft+"px}"),e.cssRule("list",s+" ol,"+s+" ul{margin:0;padding:0;}li{clear:both;}"+t.join("\n"),document))}),UE.parse.register("vedio",function(e){var t=this.root.getElementsByTagName("video"),n=this.root.getElementsByTagName("audio");if(document.createElement("video"),document.createElement("audio"),t.length||n.length){var i=e.removeLastbs(this.rootPath),r=i+"/third-party/video-js/video.js",a=i+"/third-party/video-js/video-js.min.css",s=i+"/third-party/video-js/video-js.swf";window.videojs?videojs.autoSetup():(e.loadFile(document,{id:"video_css",tag:"link",rel:"stylesheet",type:"text/css",href:a}),e.loadFile(document,{id:"video_js",src:r,tag:"script",type:"text/javascript"},function(){videojs.options.flash.swf=s,videojs.autoSetup()}))}});