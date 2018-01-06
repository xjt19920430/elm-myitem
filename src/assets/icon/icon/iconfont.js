(function(window){var svgSprite='<svg><symbol id="icon-jia" viewBox="0 0 1024 1024"><path d="M511.58528 57.50272C260.54656 57.50272 56.32 261.72928 56.32 512.73728c0 251.03872 204.22656 455.26528 455.26528 455.26528s455.26528-204.22656 455.26528-455.26528c0-251.008-204.22656-455.23456-455.26528-455.23456z m171.70944 486.49728H544v140.48256c0 13.25056-18.74944 24.00256-32 24.00256-13.24544 0-32-10.752-32-24.00256V544H339.87072c-13.24544 0-24.00256-18.74944-24.00256-32 0-13.24544 10.752-32 24.00256-32H480V341.02272c0-13.25056 18.75456-24.00256 32-24.00256 13.25056 0 32 10.752 32 24.00256V480h139.29472c13.28128 0 24.00256 18.75456 24.00256 32 0 13.25056-10.752 32-24.00256 32z"  ></path></symbol><symbol id="icon-jian" viewBox="0 0 1024 1024"><path d="M737.792 481.28H289.792c-17.92 0-32.256 14.336-32.256 32.256s14.336 32.256 32.256 32.256h448c17.92 0 32.256-14.336 32.256-31.744s-14.336-32.768-32.256-32.768z" fill="#333333" ></path><path d="M830.464 197.632c-84.48-83.968-197.12-130.56-316.928-130.56-119.296 0-231.936 46.592-316.416 130.56C112.64 282.112 66.048 393.728 66.048 513.024c0 119.296 46.592 231.424 131.072 315.392s197.12 130.56 316.928 130.56 231.936-46.592 316.928-130.56c84.48-83.968 131.072-196.096 131.072-315.392-0.512-119.296-47.104-230.912-131.584-315.392zM785.408 783.36c-72.704 72.192-168.96 112.128-271.36 112.128s-199.168-39.936-271.36-112.128c-72.704-72.192-112.64-167.936-112.64-269.824s39.936-198.144 112.64-270.336c72.704-72.192 168.96-112.128 271.36-112.128s199.168 39.936 271.36 112.128c72.704 72.192 112.128 167.936 112.128 269.824 0 101.888-39.936 198.144-112.128 270.336z" fill="#333333" ></path></symbol><symbol id="icon-gouwuche1" viewBox="0 0 1024 1024"><path d="M347.136 783.36q19.456 0 36.864 7.168t30.72 19.968 20.48 30.208 7.168 36.864-7.168 36.864-20.48 30.208-30.72 20.48-36.864 7.68q-20.48 0-37.376-7.68t-30.208-20.48-20.48-30.208-7.168-36.864 7.168-36.864 20.48-30.208 30.208-19.968 37.376-7.168zM773.12 785.408q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM945.152 203.776q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-12.8 37.888-22.016 62.976-24.064 68.096-17.92 53.248q-13.312 40.96-33.792 56.832t-50.176 15.872l-34.816 0-66.56 0-87.04 0-95.232 0-253.952 0 15.36 92.16 516.096 0q49.152 0 49.152 41.984 0 20.48-9.728 35.328t-38.4 14.848l-49.152 0-95.232 0-117.76 0-119.808 0-98.304 0-56.32 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-13.312l22.528 0 20.48 0 25.6 0 34.816 0q20.48 0 32.768 6.144t19.456 15.36 10.24 19.456 5.12 17.408q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)