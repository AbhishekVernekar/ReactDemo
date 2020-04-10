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
    displayProject: function () {
        console.log('Current project status is :', this.projectList);
    },

    addProject: function (project) {
        this.projectList.push(project);
        this.displayProject();
    },

    UpdateProject: function (id) {
        const projectToUpdate = this.projectList.find(project => {
            return project.pid === id;
        });
        if (projectToUpdate) {
            projectToUpdate.status = 'Done!';
            console.log('Updated succesfully')
        } else {
            console.log('please provide proper id');
        }
    },

    deleteProject: function (id) {
        const projectToDelete = this.projectList.forEach((project, index) => {
            if (project.pid === id) {
                this.projectList.splice(index, 1);
            }
        });
        this.displayProject();
    }
}