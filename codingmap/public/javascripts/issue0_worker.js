var lastIssueList = [];
function issueRequest(){
    var url = 'https://redmine.tidesquare.com/issues.json?assigned_to_id=188&jsonp=callbackFunc'
    importScripts(url);
}

function callbackFunc(res){
    //console.log(res)
    postMessage(res);
    lastIssueList = res.issues;
    setTimeout('issueRequest()',10000) //10sec refesh
}

issueRequest();