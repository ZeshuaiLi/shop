"use strict";
function init_sentry(version,env,appid,template){
    Raven.config('https://682b9e59540945e3a76acb99eee9977f@sentry.seezt.top/17',{
        release:version,
        environment:env,
        tags:{appid:appid,version:version,tempalte:template}
    }).install();
    window.onerror = function (message, url, line, col, error) {
        setTimeout(function() {
            if(error){
                Raven.captureException(error);
            }
        }, 0);
        return true;
    }
}