/*!
* TableSorter 2.13.3 min - Client-side table sorting with ease!
* Copyright (c) 2007 Christian Bach
*/
!(function(f){f.extend({tablesorter:new function(){function c(){var a=1<arguments.length?Array.prototype.slice.call(arguments):arguments[0];"undefined"!==typeof console&&"undefined"!==typeof console.log?console.log(a):alert(a)}function n(a,b){c(a+" ("+((new Date).getTime()-b.getTime())+"ms)")}function l(a){for(var b in a)return!1;return!0}function p(a,b,d){if(!b)return"";var h=a.config,c=h.textExtraction,g="",g="simple"===c?h.supportsTextContent?b.textContent:f(b).text():"function"===typeof c?c(b, a,d):"object"===typeof c&&c.hasOwnProperty(d)?c[d](b,a,d):h.supportsTextContent?b.textContent:f(b).text();return f.trim(g)}function w(a){var b=a.config,d=b.$tbodies=b.$table.children("tbody:not(."+b.cssInfoBlock+")"),h,x,g,k,q,f,m,A="";if(0===d.length)return b.debug?c("*Empty table!* Not building a parser cache"):"";b.debug&&(m=new Date,c("Detecting parsers for each column"));d=d[0].rows;if(d[0])for(h=[],x=d[0].cells.length,g=0;g<x;g++){k=b.$headers.filter(":not([colspan])");k=k.add(b.$headers.filter('[colspan="1"]')).filter('[data-column="'+ g+'"]:last');q=b.headers[g];f=e.getParserById(e.getData(k,q,"sorter"));b.empties[g]=e.getData(k,q,"empty")||b.emptyTo||(b.emptyToBottom?"bottom":"top");b.strings[g]=e.getData(k,q,"string")||b.stringTo||"max";if(!f)a:{k=a;q=d;f=-1;for(var l=g,t=void 0,y=e.parsers.length,v=!1,s="",t=!0;""===s&&t;)f++,q[f]?(v=q[f].cells[l],s=p(k,v,l),k.config.debug&&c("Checking if value was empty on row "+f+", column: "+l+': "'+s+'"')):t=!1;for(;0<=--y;)if((t=e.parsers[y])&&"text"!==t.id&&t.is&&t.is(s,k,v)){f=t;break a}f= e.getParserById("text")}b.debug&&(A+="column:"+g+"; parser:"+f.id+"; string:"+b.strings[g]+"; empty: "+b.empties[g]+"\n");h.push(f)}b.debug&&(c(A),n("Completed detecting parsers",m));b.parsers=h}function z(a){var b=a.tBodies,d=a.config,h,x,g=d.parsers,k,q,r,m,A,l,t,y=[];d.cache={};if(!g)return d.debug?c("*Empty table!* Not building a cache"):"";d.debug&&(t=new Date);d.showProcessing&&e.isProcessing(a,!0);for(m=0;m<b.length;m++)if(d.cache[m]={row:[],normalized:[]},!f(b[m]).hasClass(d.cssInfoBlock)){h= b[m]&&b[m].rows.length||0;x=b[m].rows[0]&&b[m].rows[0].cells.length||0;for(q=0;q<h;++q)if(A=f(b[m].rows[q]),l=[],A.hasClass(d.cssChildRow))d.cache[m].row[d.cache[m].row.length-1]=d.cache[m].row[d.cache[m].row.length-1].add(A);else{d.cache[m].row.push(A);for(r=0;r<x;++r)k=p(a,A[0].cells[r],r),k=g[r].format(k,a,A[0].cells[r],r),l.push(k),"numeric"===(g[r].type||"").toLowerCase()&&(y[r]=Math.max(Math.abs(k)||0,y[r]||0));l.push(d.cache[m].normalized.length);d.cache[m].normalized.push(l)}d.cache[m].colMax= y}d.showProcessing&&e.isProcessing(a);d.debug&&n("Building cache for "+h+" rows",t)}function B(a,b){var d=a.config,h=d.widgetOptions,c=a.tBodies,g=[],k=d.cache,q,r,m,A,p,t,y,v,s,u,w;if(!l(k)){d.debug&&(w=new Date);for(v=0;v<c.length;v++)if(q=f(c[v]),q.length&&!q.hasClass(d.cssInfoBlock)){p=e.processTbody(a,q,!0);q=k[v].row;r=k[v].normalized;A=(m=r.length)?r[0].length-1:0;for(t=0;t<m;t++)if(u=r[t][A],g.push(q[u]),!d.appender||d.pager&&!(d.pager.removeRows&&h.pager_removeRows||d.pager.ajax))for(s=q[u].length, y=0;y<s;y++)p.append(q[u][y]);e.processTbody(a,p,!1)}d.appender&&d.appender(a,g);d.debug&&n("Rebuilt table",w);b||d.appender||e.applyWidget(a);f(a).trigger("sortEnd",a);f(a).trigger("updateComplete",a)}}function E(a){var b=[],d={},h=0,c=f(a).find("thead:eq(0), tfoot").children("tr"),g,k,e,r,m,l,n,p,u,v;for(g=0;g<c.length;g++)for(m=c[g].cells,k=0;k<m.length;k++){r=m[k];l=r.parentNode.rowIndex;n=l+"-"+r.cellIndex;p=r.rowSpan||1;u=r.colSpan||1;"undefined"===typeof b[l]&&(b[l]=[]);for(e=0;e<b[l].length+ 1;e++)if("undefined"===typeof b[l][e]){v=e;break}d[n]=v;h=Math.max(v,h);f(r).attr({"data-column":v});for(e=l;e<l+p;e++)for("undefined"===typeof b[e]&&(b[e]=[]),n=b[e],r=v;r<v+u;r++)n[r]="x"}a.config.columns=h+1;return d}function C(a){var b=E(a),d,h,x,g,k,q,r,m=a.config;m.headerList=[];m.headerContent=[];m.debug&&(r=new Date);g=m.cssIcon?'<i class="'+m.cssIcon+" "+e.css.icon+'"></i>':"";m.$headers=f(a).find(m.selectorHeaders).each(function(a){h=f(this);d=m.headers[a];m.headerContent[a]=f(this).html(); k=m.headerTemplate.replace(/\{content\}/g,f(this).html()).replace(/\{icon\}/g,g);m.onRenderTemplate&&(x=m.onRenderTemplate.apply(h,[a,k]))&&"string"===typeof x&&(k=x);f(this).html('<div class="tablesorter-header-inner">'+k+"</div>");m.onRenderHeader&&m.onRenderHeader.apply(h,[a]);this.column=b[this.parentNode.rowIndex+"-"+this.cellIndex];var c=e.getData(h,d,"sortInitialOrder")||m.sortInitialOrder;this.order=/^d/i.test(c)||1===c?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=!1;q=e.getData(h,d,"lockedOrder")|| !1;"undefined"!==typeof q&&!1!==q&&(this.order=this.lockedOrder=/^d/i.test(q)||1===q?[1,1,1]:[0,0,0]);h.addClass(e.css.header+" "+m.cssHeader);m.headerList[a]=this;h.parent().addClass(e.css.headerRow+" "+m.cssHeaderRow);h.attr("tabindex",0)});D(a);m.debug&&(n("Built headers:",r),c(m.$headers))}function F(a,b,d){var h=a.config;h.$table.find(h.selectorRemove).remove();w(a);z(a);G(h.$table,b,d)}function D(a){var b,d=a.config;d.$headers.each(function(a,c){b="false"===e.getData(c,d.headers[a],"sorter"); c.sortDisabled=b;f(c)[b?"addClass":"removeClass"]("sorter-false")})}function H(a){var b,d,h,c=a.config,g=c.sortList,k=[e.css.sortAsc+" "+c.cssAsc,e.css.sortDesc+" "+c.cssDesc],q=f(a).find("tfoot tr").children().removeClass(k.join(" "));c.$headers.removeClass(k.join(" "));h=g.length;for(b=0;b<h;b++)if(2!==g[b][1]&&(a=c.$headers.not(".sorter-false").filter('[data-column="'+g[b][0]+'"]'+(1===h?":last":"")),a.length))for(d=0;d<a.length;d++)a[d].sortDisabled||(a.eq(d).addClass(k[g[b][1]]),q.length&&q.filter('[data-column="'+ g[b][0]+'"]').eq(d).addClass(k[g[b][1]]))}function L(a){if(a.config.widthFixed&&0===f(a).find("colgroup").length){var b=f("<colgroup>"),d=f(a).width();f(a.tBodies[0]).find("tr:first").children("td:visible").each(function(){b.append(f("<col>").css("width",parseInt(f(this).width()/d*1E3,10)/10+"%"))});f(a).prepend(b)}}function M(a,b){var d,h,c,g=a.config,k=b||g.sortList;g.sortList=[];f.each(k,function(a,b){d=[parseInt(b[0],10),parseInt(b[1],10)];if(c=g.$headers[d[0]])g.sortList.push(d),h=f.inArray(d[1], c.order),c.count=0<=h?h:d[1]%(g.sortReset?3:2)})}function N(a,b,d){var h,c,g,k=a.config,q=!d[k.sortMultiSortKey],l=f(a);l.trigger("sortStart",a);b.count=d[k.sortResetKey]?2:(b.count+1)%(k.sortReset?3:2);k.sortRestart&&(c=b,k.$headers.each(function(){this===c||!q&&f(this).is("."+e.css.sortDesc+",."+e.css.sortAsc)||(this.count=-1)}));c=b.column;if(q){k.sortList=[];if(null!==k.sortForce)for(h=k.sortForce,d=0;d<h.length;d++)h[d][0]!==c&&k.sortList.push(h[d]);h=b.order[b.count];if(2>h&&(k.sortList.push([c, h]),1<b.colSpan))for(d=1;d<b.colSpan;d++)k.sortList.push([c+d,h])}else if(k.sortAppend&&1<k.sortList.length&&e.isValueInArray(k.sortAppend[0][0],k.sortList)&&k.sortList.pop(),e.isValueInArray(c,k.sortList))for(d=0;d<k.sortList.length;d++)g=k.sortList[d],h=k.$headers[g[0]],g[0]===c&&(g[1]=h.order[b.count],2===g[1]&&(k.sortList.splice(d,1),h.count=-1));else if(h=b.order[b.count],2>h&&(k.sortList.push([c,h]),1<b.colSpan))for(d=1;d<b.colSpan;d++)k.sortList.push([c+d,h]);if(null!==k.sortAppend)for(h=k.sortAppend, d=0;d<h.length;d++)h[d][0]!==c&&k.sortList.push(h[d]);l.trigger("sortBegin",a);setTimeout(function(){H(a);I(a);B(a)},1)}function I(a){var b,d,h,c,g,k,f,r,m,p,u,t,y,v=0,s=a.config,w=s.textSorter||"",z=s.sortList,B=z.length,C=a.tBodies.length;if(!s.serverSideSorting&&!l(s.cache)){s.debug&&(p=new Date);for(d=0;d<C;d++)k=s.cache[d].colMax,m=(f=s.cache[d].normalized)&&f[0]?f[0].length-1:0,f.sort(function(d,f){for(b=0;b<B;b++){g=z[b][0];r=z[b][1];t=(v=0===r)?d:f;y=v?f:d;h=s.string[s.empties[g]||s.emptyTo]; if(""===t[g]&&0!==h)return("boolean"===typeof h?h?-1:1:h||1)*(v?1:-1);if(""===y[g]&&0!==h)return("boolean"===typeof h?h?1:-1:-h||-1)*(v?1:-1);(c=/n/i.test(s.parsers&&s.parsers[g]?s.parsers[g].type||"":""))&&s.strings[g]?(c="boolean"===typeof s.string[s.strings[g]]?(v?1:-1)*(s.string[s.strings[g]]?-1:1):s.strings[g]?s.string[s.strings[g]]||0:0,u=s.numberSorter?s.numberSorter(t[g],y[g],v,k[g],a):e.sortNumeric(t[g],y[g],c,k[g])):u="function"===typeof w?w(t[g],y[g],v,g,a):"object"===typeof w&&w.hasOwnProperty(g)? w[g](t[g],y[g],v,g,a):e.sortNatural(t[g],y[g]);if(u)return u}return d[m]-f[m]});s.debug&&n("Sorting on "+z.toString()+" and dir "+r+" time",p)}}function J(a,b){var d=a[0].config;d.pager&&!d.pager.ajax&&a.trigger("updateComplete");"function"===typeof b&&b(a[0])}function G(a,b,d){!1===b||a[0].isProcessing?J(a,d):a.trigger("sorton",[a[0].config.sortList,function(){J(a,d)}])}function K(a){var b=a.config,d=b.$table,c,x;b.$headers.find(b.selectorSort).add(b.$headers.filter(b.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter", function(d,c){if(!(1!==(d.which||d.button)&&!/sort|keypress/.test(d.type)||"keypress"===d.type&&13!==d.which||"mouseup"===d.type&&!0!==c&&250<(new Date).getTime()-x)){if("mousedown"===d.type)return x=(new Date).getTime(),"INPUT"===d.target.tagName?"":!b.cancelSelection;b.delayInit&&l(b.cache)&&z(a);var h=(/TH|TD/.test(this.tagName)?f(this):f(this).parents("th, td").filter(":first"))[0];h.sortDisabled||N(a,h,d)}});b.cancelSelection&&b.$headers.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none", MozUserSelect:"none"});d.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function(d){d.stopPropagation();b.sortList=[];H(a);I(a);B(a)}).bind("updateAll.tablesorter",function(b,d,c){b.stopPropagation();e.refreshWidgets(a,!0,!0);e.restoreHeaders(a);C(a);K(a);F(a,d,c)}).bind("update.tablesorter updateRows.tablesorter",function(b,d,c){b.stopPropagation(); D(a);F(a,d,c)}).bind("updateCell.tablesorter",function(c,h,e,l){c.stopPropagation();d.find(b.selectorRemove).remove();var m,x,n;m=d.find("tbody");c=m.index(f(h).parents("tbody").filter(":first"));var t=f(h).parents("tr").filter(":first");h=f(h)[0];m.length&&0<=c&&(x=m.eq(c).find("tr").index(t),n=h.cellIndex,m=b.cache[c].normalized[x].length-1,b.cache[c].row[a.config.cache[c].normalized[x][m]]=t,b.cache[c].normalized[x][n]=b.parsers[n].format(p(a,h,n),a,h,n),G(d,e,l))}).bind("addRows.tablesorter", function(g,e,f,x){g.stopPropagation();var m=e.filter("tr").length,l=[],n=e[0].cells.length,t=d.find("tbody").index(e.parents("tbody").filter(":first"));b.parsers||w(a);for(g=0;g<m;g++){for(c=0;c<n;c++)l[c]=b.parsers[c].format(p(a,e[g].cells[c],c),a,e[g].cells[c],c);l.push(b.cache[t].row.length);b.cache[t].row.push([e[g]]);b.cache[t].normalized.push(l);l=[]}G(d,f,x)}).bind("sorton.tablesorter",function(b,c,h,e){var f=a.config;b.stopPropagation();d.trigger("sortStart",this);M(a,c);H(a);f.delayInit&& l(f.cache)&&z(a);d.trigger("sortBegin",this);I(a);B(a,e);"function"===typeof h&&h(a)}).bind("appendCache.tablesorter",function(b,d,c){b.stopPropagation();B(a,c);"function"===typeof d&&d(a)}).bind("applyWidgetId.tablesorter",function(d,c){d.stopPropagation();e.getWidgetById(c).format(a,b,b.widgetOptions)}).bind("applyWidgets.tablesorter",function(b,d){b.stopPropagation();e.applyWidget(a,d)}).bind("refreshWidgets.tablesorter",function(b,d,c){b.stopPropagation();e.refreshWidgets(a,d,c)}).bind("destroy.tablesorter", function(b,d,c){b.stopPropagation();e.destroy(a,d,c)})}var e=this;e.version="2.13.3";e.parsers=[];e.widgets=[];e.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1, sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]}; e.css={table:"tablesorter",childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc"};e.log=c;e.benchmark=n;e.construct=function(a){return this.each(function(){var b=f.extend(!0,{},e.defaults,a);!this.hasInitialized&&e.buildTable&&"TABLE"!==this.tagName&&e.buildTable(this,b);e.setup(this,b)})};e.setup=function(a, b){if(!a||!a.tHead||0===a.tBodies.length||!0===a.hasInitialized)return b.debug?c("stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var d="",h=f(a),l=f.metadata;a.hasInitialized=!1;a.isProcessing=!0;a.config=b;f.data(a,"tablesorter",b);b.debug&&f.data(a,"startoveralltimer",new Date);b.supportsTextContent="x"===f("<span>x</span>")[0].textContent;b.supportsDataObject=function(a){a[0]=parseInt(a[0],10);return 1<a[0]||1===a[0]&&4<=parseInt(a[1],10)}(f.fn.jquery.split(".")); b.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(h.attr("class"))||(d=""!==b.theme?" tablesorter-"+b.theme:"");b.$table=h.addClass(e.css.table+" "+b.tableClass+d);b.$tbodies=h.children("tbody:not(."+b.cssInfoBlock+")");b.widgetInit={};C(a);L(a);w(a);b.delayInit||z(a);K(a);b.supportsDataObject&&"undefined"!==typeof h.data().sortlist?b.sortList=h.data().sortlist:l&&h.metadata()&&h.metadata().sortlist&&(b.sortList=h.metadata().sortlist);e.applyWidget(a, !0);0<b.sortList.length?h.trigger("sorton",[b.sortList,{},!b.initWidgets]):b.initWidgets&&e.applyWidget(a);b.showProcessing&&h.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",function(b){e.isProcessing(a,"sortBegin"===b.type)});a.hasInitialized=!0;a.isProcessing=!1;b.debug&&e.benchmark("Overall initialization time",f.data(a,"startoveralltimer"));h.trigger("tablesorter-initialized",a);"function"===typeof b.initialized&&b.initialized(a)};e.isProcessing= function(a,b,d){a=f(a);var c=a[0].config;a=d||a.find("."+e.css.header);b?(0<c.sortList.length&&(a=a.filter(function(){return this.sortDisabled?!1:e.isValueInArray(parseFloat(f(this).attr("data-column")),c.sortList)})),a.addClass(e.css.processing+" "+c.cssProcessing)):a.removeClass(e.css.processing+" "+c.cssProcessing)};e.processTbody=function(a,b,d){if(d)return a.isProcessing=!0,b.before('<span class="tablesorter-savemyplace"/>'),d=f.fn.detach?b.detach():b.remove();d=f(a).find("span.tablesorter-savemyplace"); b.insertAfter(d);d.remove();a.isProcessing=!1};e.clearTableBody=function(a){f(a)[0].config.$tbodies.empty()};e.restoreHeaders=function(a){var b=a.config;b.$table.find(b.selectorHeaders).each(function(a){f(this).find(".tablesorter-header-inner").length&&f(this).html(b.headerContent[a])})};e.destroy=function(a,b,d){a=f(a)[0];if(a.hasInitialized){e.refreshWidgets(a,!0,!0);var c=f(a),l=a.config,g=c.find("thead:first"),k=g.find("tr."+e.css.headerRow).removeClass(e.css.headerRow+" "+l.cssHeaderRow),n=c.find("tfoot:first > tr").children("th, td"); g.find("tr").not(k).remove();c.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));l.$headers.add(n).removeClass([e.css.header,l.cssHeader,l.cssAsc,l.cssDesc,e.css.sortAsc,e.css.sortDesc].join(" ")).removeAttr("data-column");k.find(l.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter"); e.restoreHeaders(a);!1!==b&&c.removeClass(e.css.table+" "+l.tableClass+" tablesorter-"+l.theme);a.hasInitialized=!1;"function"===typeof d&&d(a)}};e.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,hex:/^0x[0-9a-f]+$/i};e.sortNatural=function(a,b){if(a===b)return 0;var d,c,f,g,k,l;c=e.regex;if(c.hex.test(b)){d=parseInt(a.match(c.hex),16);f=parseInt(b.match(c.hex),16);if(d<f)return-1;if(d>f)return 1}d=a.replace(c.chunk,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/, "").split("\\0");c=b.replace(c.chunk,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");l=Math.max(d.length,c.length);for(k=0;k<l;k++){f=isNaN(d[k])?d[k]||0:parseFloat(d[k])||0;g=isNaN(c[k])?c[k]||0:parseFloat(c[k])||0;if(isNaN(f)!==isNaN(g))return isNaN(f)?1:-1;typeof f!==typeof g&&(f+="",g+="");if(f<g)return-1;if(f>g)return 1}return 0};e.sortText=function(a,b){return a>b?1:a<b?-1:0};e.getTextValue=function(a,b,d){if(d){var c=a?a.length:0,e=d+b;for(d=0;d<c;d++)e+=a.charCodeAt(d);return b* e}return 0};e.sortNumeric=function(a,b,d,c){if(a===b)return 0;isNaN(a)&&(a=e.getTextValue(a,d,c));isNaN(b)&&(b=e.getTextValue(b,d,c));return a-b};e.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6", O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};e.replaceAccents=function(a){var b,d="[",c=e.characterEquivalents;if(!e.characterRegex){e.characterRegexArray={};for(b in c)"string"===typeof b&&(d+=c[b],e.characterRegexArray[b]=RegExp("["+c[b]+"]","g"));e.characterRegex=RegExp(d+"]")}if(e.characterRegex.test(a))for(b in c)"string"===typeof b&&(a=a.replace(e.characterRegexArray[b],b));return a};e.isValueInArray=function(a, b){var d,c=b.length;for(d=0;d<c;d++)if(b[d][0]===a)return!0;return!1};e.addParser=function(a){var b,d=e.parsers.length,c=!0;for(b=0;b<d;b++)e.parsers[b].id.toLowerCase()===a.id.toLowerCase()&&(c=!1);c&&e.parsers.push(a)};e.getParserById=function(a){var b,d=e.parsers.length;for(b=0;b<d;b++)if(e.parsers[b].id.toLowerCase()===a.toString().toLowerCase())return e.parsers[b];return!1};e.addWidget=function(a){e.widgets.push(a)};e.getWidgetById=function(a){var b,d,c=e.widgets.length;for(b=0;b<c;b++)if((d= e.widgets[b])&&d.hasOwnProperty("id")&&d.id.toLowerCase()===a.toLowerCase())return d};e.applyWidget=function(a,b){a=f(a)[0];var d=a.config,c=d.widgetOptions,l=[],g,k,q;d.debug&&(g=new Date);d.widgets.length&&(d.widgets=f.grep(d.widgets,function(a,b){return f.inArray(a,d.widgets)===b}),f.each(d.widgets||[],function(a,b){(q=e.getWidgetById(b))&&q.id&&(q.priority||(q.priority=10),l[a]=q)}),l.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),f.each(l,function(e,g){if(g){if(b|| !d.widgetInit[g.id])g.hasOwnProperty("options")&&(c=a.config.widgetOptions=f.extend(!0,{},g.options,c),d.widgetInit[g.id]=!0),g.hasOwnProperty("init")&&g.init(a,g,d,c);!b&&g.hasOwnProperty("format")&&g.format(a,d,c,!1)}}));d.debug&&(k=d.widgets.length,n("Completed "+(!0===b?"initializing ":"applying ")+k+" widget"+(1!==k?"s":""),g))};e.refreshWidgets=function(a,b,d){a=f(a)[0];var h,l=a.config,g=l.widgets,k=e.widgets,n=k.length;for(h=0;h<n;h++)k[h]&&k[h].id&&(b||0>f.inArray(k[h].id,g))&&(l.debug&& c("Refeshing widgets: Removing "+k[h].id),k[h].hasOwnProperty("remove")&&(k[h].remove(a,l,l.widgetOptions),l.widgetInit[k[h].id]=!1));!0!==d&&e.applyWidget(a,b)};e.getData=function(a,b,c){var e="";a=f(a);var l,g;if(!a.length)return"";l=f.metadata?a.metadata():!1;g=" "+(a.attr("class")||"");"undefined"!==typeof a.data(c)||"undefined"!==typeof a.data(c.toLowerCase())?e+=a.data(c)||a.data(c.toLowerCase()):l&&"undefined"!==typeof l[c]?e+=l[c]:b&&"undefined"!==typeof b[c]?e+=b[c]:" "!==g&&g.match(" "+ c+"-")&&(e=g.match(RegExp("\\s"+c+"-([\\w-]+)"))[1]||"");return f.trim(e)};e.formatFloat=function(a,b){if("string"!==typeof a||""===a)return a;var c;a=(b&&b.config?!1!==b.config.usNumberFormat:"undefined"!==typeof b?b:1)?a.replace(/,/g,""):a.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(a)&&(a=a.replace(/^\s*\(([.\d]+)\)/,"-$1"));c=parseFloat(a);return isNaN(c)?f.trim(a):c};e.isDigit=function(a){return isNaN(a)?/^[\-+(]?\d+[)]?$/.test(a.toString().replace(/[,.'"\s]/g,"")):!0}}}); var p=f.tablesorter;f.fn.extend({tablesorter:p.construct});p.addParser({id:"text",is:function(){return!0},format:function(c,n){var l=n.config;c&&(c=f.trim(l.ignoreCase?c.toLocaleLowerCase():c),c=l.sortLocaleCompare?p.replaceAccents(c):c);return c},type:"text"});p.addParser({id:"digit",is:function(c){return p.isDigit(c)},format:function(c,n){var l=p.formatFloat((c||"").replace(/[^\w,. \-()]/g,""),n);return c&&"number"===typeof l?l:c?f.trim(c&&n.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}); p.addParser({id:"currency",is:function(c){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((c||"").replace(/[,. ]/g,""))},format:function(c,n){var l=p.formatFloat((c||"").replace(/[^\w,. \-()]/g,""),n);return c&&"number"===typeof l?l:c?f.trim(c&&n.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"});p.addParser({id:"ipAddress",is:function(c){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(c)},format:function(c,f){var l,u=c?c.split("."): "",w="",z=u.length;for(l=0;l<z;l++)w+=("00"+u[l]).slice(-3);return c?p.formatFloat(w,f):c},type:"numeric"});p.addParser({id:"url",is:function(c){return/^(https?|ftp|file):\/\.test(c)},format:function(c){return c?f.trim(c.replace(/(https?|ftp|file):\/\//,"")):c},type:"text"});p.addParser({id:"isoDate",is:function(c){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(c)},format:function(c,f){return c?p.formatFloat(""!==c?(new Date(c.replace(/-/g,"/"))).getTime()||"":"",f):c},type:"numeric"});p.addParser({id:"percent", is:function(c){return/(\d\s*?%|%\s*?\d)/.test(c)&&15>c.length},format:function(c,f){return c?p.formatFloat(c.replace(/%/g,""),f):c},type:"numeric"});p.addParser({id:"usLongDate",is:function(c){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(c)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(c)},format:function(c,f){return c?p.formatFloat((new Date(c.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f):c},type:"numeric"});p.addParser({id:"shortDate",is:function(c){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((c|| "").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(c,f,l,u){if(c){l=f.config;var w=l.headerList[u];u=w.dateFormat||p.getData(w,l.headers[u],"dateFormat")||l.dateFormat;c=c.replace(/\s+/g," ").replace(/[\-.,]/g,"/");"mmddyyyy"===u?c=c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===u?c=c.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===u&&(c=c.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"))}return c?p.formatFloat((new Date(c)).getTime()|| "",f):c},type:"numeric"});p.addParser({id:"time",is:function(c){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(c)},format:function(c,f){return c?p.formatFloat((new Date("2000/01/01 "+c.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",f):c},type:"numeric"});p.addParser({id:"metadata",is:function(){return!1},format:function(c,n,l){c=n.config;c=c.parserMetadataName?c.parserMetadataName:"sortValue";return f(l).metadata()[c]},type:"numeric"});p.addWidget({id:"zebra",priority:90,format:function(c, n,l){var u,w,z,B,E,C,F=RegExp(n.cssChildRow,"i"),D=n.$tbodies;n.debug&&(E=new Date);for(c=0;c<D.length;c++)u=D.eq(c),C=u.children("tr").length,1<C&&(z=0,u=u.children("tr:visible"),u.each(function(){w=f(this);F.test(this.className)||z++;B=0===z%2;w.removeClass(l.zebra[B?1:0]).addClass(l.zebra[B?0:1])}));n.debug&&p.benchmark("Applying Zebra widget",E)},remove:function(c,n,l){var p;n=n.$tbodies;var w=(l.zebra||["even","odd"]).join(" ");for(l=0;l<n.length;l++)p=f.tablesorter.processTbody(c,n.eq(l),!0), p.children().removeClass(w),f.tablesorter.processTbody(c,p,!1)}})})