const project = {
    projectList: [{
            pid: 101,
            pname: 'RMS',
            status: 'In Progress'
        },
        {
            pid: 102,
            pname: 'DBMS',
            status: 'In Progress'
        }
    ],
    displayProject: function (id) {
        this.projectList.forEach((project) => {
            if (project.pid === id) {
                for(const proj in project) {
                    console.log(`${proj}: ${project[proj]}`);
                }
            }
        });
    }
}