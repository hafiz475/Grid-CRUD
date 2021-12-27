import { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

const Home = () => {


    const [projects, setProjects] = useState( null );
    const [isPending, setIsPending] = useState(true);
    const [error, SetError] = useState(null);


    useEffect( () => {
        setTimeout(() => {
            fetch('http://localhost:8000/projects')
            .then(res => { 
                if(!res.ok){
                    throw Error('could find the data for that resourse');
                }
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setIsPending(false);
                SetError(null);
            })
            .catch(err => {
                SetError(err.message);
                setIsPending(false);
            })
        },  1000);
    }, [] );

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading... </div> }
            { projects && <ProjectList projects = {projects} title ="All Projects!" />}
        </div>
     );
}

export default Home;