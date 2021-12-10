import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const Home = () => {


    const [projects, setProjects] = useState( null );

    const handleDelete = (id) => {
        const newProject = projects.filter(project => project.id !== id);
        setProjects(newProject);
    }

    useEffect( () => {
        fetch('http://localhost:8000/projects')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProjects(data);
            })
    }, [] );

    return (
        <div className="home">
        
            { projects && <ProjectList projects = {projects} title ="All Projects!" handleDelete = {handleDelete} />}   
        
        </div>
     );
}

export default Home;