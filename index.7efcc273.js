var t=document.querySelector("table").tBodies[0],e=document.querySelector(".button"),r=document.querySelectorAll("td"),n=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),o=document.querySelector(".message-win"),a=document.querySelector(".game-score"),s=!1,i=0;function c(){var t=f();if(.1>=Math.random()){var e=d(t);e.textContent="4",e.classList.add("field-cell--4")}else{var r=d(t);r.textContent="2",r.classList.add("field-cell--2")}}function d(t){return t[Math.floor(Math.random()*t.length)]}function f(){var t=[],e=!0,n=!1,l=void 0;try{for(var o,a=r[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;s.classList.length<2&&t.push(s)}}catch(t){n=!0,l=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw l}}return t}function u(){var t=[],e=!0,n=!1,l=void 0;try{for(var o,a=r[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var s=o.value;s.classList.length>1&&t.push(s)}}catch(t){n=!0,l=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw l}}return t}function v(t,e){var r=t.classList[1],n=t.textContent;t.className="field-cell",t.textContent="",e.classList.add(r),e.textContent=n}function h(t,e){var r=+e.textContent;r*=2,i+=r,a.textContent=i,t.className="field-cell",t.textContent="",e.className="field-cell",e.textContent=r,e.classList.add("field-cell--".concat(r)),e.id="merged",2048===r&&o.classList.remove("hidden")}function m(){if(f().length>0)return!1;for(var e=0;e<4;e++)for(var r=0;r<3;r++)if(t.rows[e].cells[r].textContent===t.rows[e].cells[r+1].textContent)return!1;for(var n=0;n<3;n++)for(var l=0;l<4;l++)if(t.rows[n].cells[l].textContent===t.rows[n+1].cells[l].textContent)return!1;return!0}e.addEventListener("click",function(){n.classList.add("hidden"),o.classList.add("hidden"),l.classList.add("hidden"),e.classList.replace("start","restart"),e.textContent="Restart",i=0,a.textContent=0;var t=!0,d=!1,f=void 0;try{for(var u,v=r[Symbol.iterator]();!(t=(u=v.next()).done);t=!0){var h=u.value;h.classList.length<2||(h.className="field-cell",h.textContent="")}}catch(t){d=!0,f=t}finally{try{t||null==v.return||v.return()}finally{if(d)throw f}}c(),c(),s=!0}),document.addEventListener("keydown",function(e){switch(e.key){case"ArrowDown":e.preventDefault(),s&&function(){if(!m()){for(var e=u(),r=0,n=e.length-1;n>=0;n--){var l=e[n].cellIndex,o=+e[n].parentElement.id,a=[];if(3!==o){for(var s=o;s<t.rows.length;s++)a.push(t.rows[s].cells[l]);for(var i=1;i<a.length;i++){var d=a[i-1],f=a[i],x=d.textContent===f.textContent&&!d.id&&!f.id;f.classList.length<2?(v(d,f),r++):x&&(h(d,f),r++)}}}e.forEach(function(t){return t.removeAttribute("id")}),r>0&&c()}}();break;case"ArrowUp":e.preventDefault(),s&&function(){if(!m()){for(var e=u(),r=0,n=0;n<e.length;n++){var l=e[n].cellIndex,o=+e[n].parentElement.id,a=[];if(0!==o){for(var s=o;s>=0;s--)a.push(t.rows[s].cells[l]);for(var i=0;i<a.length-1;i++){var d=a[i],f=a[i+1],x=d.textContent===f.textContent&&!d.id&&!f.id;f.classList.length<2?(v(d,f),r++):x&&(h(d,f),r++)}}}e.forEach(function(t){return t.removeAttribute("id")}),r>0&&c()}}();break;case"ArrowLeft":e.preventDefault(),s&&function(){if(!m()){for(var e=u(),r=0,n=0;n<e.length;n++){var l=e[n].cellIndex,o=+e[n].parentElement.id,a=[];if(0!==l){for(var s=l;s>=0;s--)a.push(t.rows[o].cells[s]);for(var i=0;i<a.length-1;i++){var d=a[i],f=a[i+1],x=d.textContent===f.textContent&&!d.id&&!f.id;f.classList.length<2?(v(d,f),r++):x&&(h(d,f),r++)}}}e.forEach(function(t){return t.removeAttribute("id")}),r>0&&c()}}();break;case"ArrowRight":e.preventDefault(),s&&function(){if(!m()){for(var e=u(),r=0,n=e.length-1;n>=0;n--){var l=e[n].cellIndex,o=+e[n].parentElement.id,a=[];if(3!==l){for(var s=l;s<t.rows.length;s++)a.push(t.rows[o].cells[s]);for(var i=1;i<a.length;i++){var d=a[i-1],f=a[i],x=d.textContent===f.textContent&&!d.id&&!f.id;f.classList.length<2?(v(d,f),r++):x&&(h(d,f),r++)}}}e.forEach(function(t){return t.removeAttribute("id")}),r>0&&c()}}()}m()&&l.classList.remove("hidden")});
//# sourceMappingURL=index.7efcc273.js.map
