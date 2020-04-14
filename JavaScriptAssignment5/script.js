var projectList={
    projects:[],
    
    addNewProject:function(pId,pName,pStatus,pDesc){
        this.projects.push({
            pId:pId,
            pName:pName,
            pStatus:pStatus,
            pDesc:pDesc
        });
        console.log(this.projects);
    }
};


var projectCount={
    checkProjectCount:function(){
        var trCount=parseInt(document.getElementsByTagName('tr').length);
        var output=document.getElementById('assign5js');
        if(trCount==projectList.projects.length+1){
            output.textContent="Number of rows(entries) in project table matches the project list size : "+projectList.projects.length;
            output.setAttribute('style','color:green');
        }
        else{
            output.innerHTML="Number of rows(entries) and project list size are not the same "
            output.setAttribute('style','color:red');
        }
    }
};

var projects= {
    addNewProject:function(){
        var pId= document.getElementById("pid").value;
        var pName= document.getElementById("pname").value;
        var pStatus= document.getElementById("pstatus").value;
        var pDesc= document.getElementById("pdesc").value;
        var output = document.getElementById('assign5js');
        if(pId==""||pName==""||pStatus==""||pDesc==""){
            output.textContent ="Please fill all the fields!";
        }
        else{
            output.textContent ="";
            var isPresent=false;
            projectList.projects.forEach(project=>{
                if(project.pId==pId||project.pName==pName){
                    isPresent=true;
                    output.textContent ="Project must have unique ID and Name!"
                }
            });
            if(!isPresent){
            projectList.addNewProject(pId,pName,pStatus,pDesc);
            document.getElementById("pid").value="";
            document.getElementById("pname").value="";
            document.getElementById("pstatus").value="inProgress";
            document.getElementById("pdesc").value="";
            }
        }
    },
    createStatusDropdown: function (status) {
        var statusSelect;
        statusSelect =  document.createElement('select');
        statusSelect.id="selectedStatus";
        var option= document.createElement('option');
        option.value="inProgress";
        option.textContent="In Progress"
        statusSelect.appendChild(option);
        option= document.createElement('option')
        option.value="completed";
        option.textContent="Completed"
        statusSelect.appendChild(option);
        statusSelect.value=status;
        return statusSelect;
    },
    displayProjects :  function(){
        var projectTable = document.querySelector('table');
        if(document.getElementsByTagName('tr').length>1){
            projectTable.innerHTML=document.getElementsByTagName('tbody')[0].innerHTML;
        }
        for(var i=0; i<projectList.projects.length;i++){
            var projectTr = document.createElement('tr');
            projectTr.id=i;
            var project = projectList.projects[i];
            var projectTd = document.createElement('td');
            projectTd.innerHTML=project.pId;
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            projectTd.innerHTML=project.pName;
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            if(project.pStatus=="completed")
            projectTd.innerHTML="Completed";
            else
            projectTd.innerHTML="In Progress";
            projectTr.appendChild(projectTd);
            projectTd = document.createElement('td');
            projectTd.innerHTML=project.pDesc;
            projectTr.appendChild(projectTd);
            projectTable.appendChild(projectTr);
         }
        },
        
}