import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const Home = () => {


    const [projects, setProjects] = useState( null );
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newProject = projects.filter(project => project.id !== id);
        setProjects(newProject);
    }

    useEffect( () => {
        setTimeout(() => {
            fetch('http://localhost:8000/projects')
            .then(res => { 
                // console.log(res);
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
        }, 1000);
    }, [] );

    return (
        <div className="home">
            { isPending && <div>Loading... </div> }
            { projects && <ProjectList projects = {projects} title ="All Projects!" handleDelete = {handleDelete} />}
        </div>
     );
}

export default Home;