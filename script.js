var issues = ['issue1','issue2','issue3'];

function addIssue(issue){
    issues.push(issue);
    displayIssue();
}

function displayIssue(){
    console.log('Current issues are :',issues);
}

function changeIssue(position, newIssue){
    issues[position] = newIssue;
    displayIssue();
}

function deleteIssue(position){
    issues.splice(position,1);
    displayIssue();
}