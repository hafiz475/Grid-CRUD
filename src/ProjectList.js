const ProjectList = ( { projects, title, handleDelete } ) => {


    return ( 
        <div className="project-list">

            <h2>{ title }</h2>

            { projects.map((project) => (
                    
                    <div className="project-preview" key={projects.id} >

                        <h2> { project.location } </h2>
                        <p> InCharge : { project.Incharge } </p>

                        <button onClick={() => handleDelete(project.id)} >Delete project</button>
                    </div>

                )) }
        </div>
    );
}

export default ProjectList;