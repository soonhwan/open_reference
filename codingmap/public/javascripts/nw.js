var projectRouter,projectName;

// Load library
var gui = require('nw.gui');
gui.Window.get().show();

// Reference to window and tray
var win = gui.Window.get();
win.isMaximized = false;
var tray;

// Get the minimize event
win.on('minimize', function() {
  // Hide window
  this.hide();

  // Show tray
  tray = new gui.Tray({ icon: 'images/logo_1.png' });

  // Show window and remove tray when clicked
  tray.on('click', function() {
    win.show();
    this.remove();
    tray = null;
  });
});
window.onload = function(){
    // Min
    document.getElementById('windowControlMinimize').onclick = function()
    {
        win.minimize();
    };

    // Close
    document.getElementById('windowControlClose').onclick = function()
    {
        win.close();
    };

    // Max
    document.getElementById('windowControlMaximize').onclick = function()
    {
        if (win.isMaximized){
            win.unmaximize();
        }
        else
            win.maximize();
    };
    document.onkeypress = function(e){
        alert(e.keyCode)
        if(e.keyCode == 123){
            require('nw.gui').Window.get().showDevTools()
        }
    }
    
    //document.getElementById('back').style.display="none"
}




win.on('maximize', function(){
    win.isMaximized = true;
    document.getElementById('windowControlMaximize').className = 'unmax'
    document.getElementById('windowControlMaximize').blur()
});

win.on('unmaximize', function(){
    win.isMaximized = false;
    document.getElementById('windowControlMaximize').className = '';
    document.getElementById('windowControlMaximize').blur();
});

function checkResult(){
    var iframe = parent.document.getElementById("contFrame");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    /*
    var currentFrame = innerDoc.location.href;    
    if(currentFrame.indexOf('codingmap')>-1){
        document.getElementById('back').style.display="none"
    } else{
        document.getElementById('back').style.display="block"
    }
    */
}

window.onmessage = function(e) {     
    if(e.data.indexOf('http')==-1){
        var pjt       = JSON.parse(e.data);
        projectName   = pjt.pjtName;
        projectRouter = pjt.pjtRouter;
        document.getElementById('projectName').innerHTML = '현대카드 PRIVIA - '+projectName;
    } else {        
        var url = e.data;        
        if(url=='http'){
            document.getElementById('projectName').innerHTML = '';            
        } else {
            var new_win = gui.Shell.openExternal(url);           
            new_win.focus();
        }
    }
    
}

/*
// Create a new window and get it
var new_win = gui.Shell.openExternal('https://github.com');

// And listen to new window's focus event
new_win.on('focus', function() {
  console.log('New window is focused');
});
*/




