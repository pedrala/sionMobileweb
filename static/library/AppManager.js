var AppManager={SCREEN_ORIENTATION_LANDSCAPE:0,SCREEN_ORIENTATION_PORTRAIT:1,SCREEN_ORIENTATION_SENSOR:4,SCREEN_ORIENTATION_SENSOR_LANDSCAPE:6,SCREEN_ORIENTATION_REVERSE_LANDSCAPE:8,SCREEN_ORIENTATION_REVERSE_PORTRAIT:9,PROGRESS_SHOW:1,PROGRESS_HIDE:0,IS_PROGRESS_SHOW:!1,isHidePatchView:!1,isShowProgress:!1};AppManager.loadWebView=function(n,e){var p=$(document).width(),a=$(document).height(),o=[parseInt(n.offset().left)/p,parseInt(n.offset().top)/a,n.width()/p,n.height()/a,n[0].id,e];cordova.exec(null,null,"AppPlugin","loadWebView",o)},AppManager.bringToFront=function(n){n?theApp.frmPage.view.show(AComponent.INVISIBLE):theApp.frmPage.view.show(AComponent.VISIBLE),cordova.exec(null,null,"AppPlugin","bringToFront",[n])},AppManager.destroyWebView=function(n){cordova.exec(null,null,"AppPlugin","destroyWebView",[n[0].id])},AppManager.sendEmail=function(n,e,p){cordova.exec(null,null,"AppPlugin","sendEmail",[n,e,p])},AppManager.setPortrait=function(n){n?cordova.exec(null,null,"AppPlugin","setOrientation",[AppManager.SCREEN_ORIENTATION_PORTRAIT]):cordova.exec(null,null,"AppPlugin","setOrientation",[AppManager.SCREEN_ORIENTATION_LANDSCAPE])},AppManager.setOrientation=function(n){cordova.exec(null,null,"AppPlugin","setOrientation",[n])},AppManager.deleteFile=function(n){cordova.exec(null,null,"AppPlugin","deleteFile",[n])},AppManager.kakaoLogin=function(n){},AppManager.screenShoot=function(n,e){cordova.exec(function(e){n(e)},null,"AppPlugin","screenShoot",[e])},AppManager.callApp=function(n,e){cordova.exec(null,null,"AppPlugin","callApp",[n,e])},AppManager.goDeepLink=function(n,e){cordova.exec(null,null,"AppPlugin","goDeepLink",[n,e])},AppManager.addLog=function(n){afc.isAndroid&&cordova.exec(null,null,"AppPlugin","addLog",[n])},AppManager.appAlert=function(n,e){cordova.exec(function(n){e(parseInt(n,10))},null,"AppPlugin","appAlert",n)},AppManager.closeAppAlert=function(n){afc.isAndroid&&cordova.exec(null,null,"AppPlugin","closeAppAlert",[n])},AppManager.callApplication=function(){afc.isAndroid&&cordova.exec(null,null,"AppPlugin","callApplication",[])},AppManager.vibrator=function(){cordova.exec(null,null,"AppPlugin","vibrator",[])},AppManager.beep=function(n){cordova.exec(null,null,"AppPlugin","beep",[n])},AppManager.applyPref=function(){cordova.exec(null,null,"AppPlugin","applyPref",[])},AppManager.hidePatchView=function(){AppManager.isHidePatchView=!0,cordova.exec(null,null,"AppPlugin","hidePatchView",[])},AppManager.setPref=function(n,e){cordova.exec(null,null,"AppPlugin","setPref",[n,e])},AppManager.getPref=function(n,e){cordova.exec(function(n){e(n)},null,"AppPlugin","getPref",[n])},AppManager.clearPref=function(n){cordova.exec(null,null,"AppPlugin","clearPref",[n])},AppManager.getSystemInfo=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getSystemInfo",[])},AppManager.getAppName=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getAppName",[])},AppManager.getVersion=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getVersion",[])},AppManager.goUrl=function(n,e){cordova.exec(null,null,"AppPlugin","goUrl",[n,e])},AppManager.goUrlWebView=function(n){cordova.exec(null,null,"AppPlugin","goUrlWebView",[n])},AppManager.showNotification=function(n){cordova.exec(null,null,"AppPlugin","showNotification",[n])},AppManager.openPdf=function(n){cordova.exec(null,null,"AppPlugin","openPdf",[n])},AppManager.sendSMS=function(n,e){cordova.exec(null,null,"AppPlugin","sendSMS",[n,e])},AppManager.exitApp=function(){cordova.exec(null,null,"AppPlugin","exitApp",[])},AppManager.enableApp=function(n){window.cordova&&cordova.exec(null,null,"AppPlugin","enableApp",[n])},AppManager.screenshoot=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","screenshoot",[])},AppManager.getModelName=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getModelName",[])},AppManager.getAppId=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getAppId",[])},AppManager.playAudio=function(n){cordova.exec(null,null,"AppPlugin","playAudio",[n])},AppManager.getPhoneInfo=function(n){cordova.exec(function(e){var p=e.split("/");(e={}).noCode=p[0],e.noName=p[1],e.phoneNm=p[2],n(e)},null,"AppPlugin","getPhoneInfo",[])},AppManager.getUuid=function(n){cordova.exec(function(e){n(e)},null,"AppPlugin","getUuid",[])},AppManager.getIpAddress=function(n){cordova.exec(function(e){var p=e[0],a=e[1];n(p,a)},null,"AppPlugin","getIpAddress",[])},AppManager.consoleLog=function(n){window.cordova&&cordova.exec(null,null,"AppPlugin","consoleLog",[n])},AppManager.downloadFile=function(n){cordova.exec(null,null,"AppPlugin","download",[n])},AppManager.getImageBase64=function(n,e){cordova.exec(function(n){e(n)},null,"AppPlugin","getImageBase64",[n])},AppManager.getResponseText=function(n,e){cordova.exec(function(n){e(n)},null,"AppPlugin","getResponseText",[n])},AppManager.prgRefCount=0,AppManager.isOltp=!1,AppManager.prgTimer=null,AppManager.showProgress=function(n){AppManager.isHidePatchView&&(AppManager.isOltp||++AppManager.prgRefCount>1||(n||(n=60),AppManager.isShowProgress=!0,AIndicator.show(),AppManager.prgTimer&&(clearTimeout(AppManager.prgTimer),AppManager.prgTimer=null),n>0&&(AppManager.prgTimer=setTimeout(function(){AppManager.prgTimer=null,AppManager.endOltp()},1e3*n))))},AppManager.hideProgress=function(){AppManager.isOltp||0==AppManager.prgRefCount||--AppManager.prgRefCount>0||(AppManager.prgTimer&&(clearTimeout(AppManager.prgTimer),AppManager.prgTimer=null),AIndicator.hide(),AppManager.isShowProgress=!1)},AppManager.beginOltp=function(n){AppManager.isOltp||(AppManager.prgRefCount>0&&AppManager.endOltp(),AppManager.prgRefCount=0,AppManager.showProgress(n),AppManager.isOltp=!0)},AppManager.endOltp=function(){AppManager.isOltp=!1,AppManager.prgRefCount=1,AppManager.hideProgress()};