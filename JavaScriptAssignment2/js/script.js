const project = {
    projectList: [{
        pid: 101,
        pname: 'RMS',
        description: 'Training Assignment JavaScript',
        sttus: 'complete'
    }, ],
    checkProject: function () {
        this.projectList.forEach((project) => {
                if (project.status === 'complete') {
                    //this is for test commit.
                    console.log('true');

                } else
                console.log('false');
            });
        }
    }
