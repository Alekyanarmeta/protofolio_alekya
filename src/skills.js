import "./App.css"
function Skill() {
    return (
        <div className="containers justify-content-center" style={{ backgroundColor: "#D1003E" }} id="skills">
            <h1 className="text-center">Skills</h1>
            <div className="contain3">
                <div className="container1">
                    <h3>Programming</h3>
                    <ul>
                        <li><img src="/python.png" className="d-block" alt="Project 1" /></li>
                        <li><img src="/java.png" className="d-block " alt="Project 1" /></li>
                    </ul>
                </div>
                <div className="container1">
                    <div><h3>Development</h3></div>
                    <div>
                    <ul>
                        <li><img src="/html.png" className="d-block w-20" alt="Project 1"/></li>
                        <li ><img src="/css.png" className="d-block" alt="Project 1"/></li>
                        <li><img src="/javascript.png" className="d-block" alt="Project 1"/></li>
                        <li><img src="/react.png" className="d-block" alt="Project 1"/></li>
                        <li><img src="/express.png" className="d-block" alt="Project 1"/></li>
                    </ul>
                    </div>
                </div>
                <div className="container1">
                <h3>Database</h3>
                <ul>
                    <li><img src="/sql.png" className="d-block w-20" alt="Project 1"/></li>
                    <li><img src="/mongodb.png" className="d-block w-20" alt="Project 1"/></li>
                </ul>
                </div>
                <div className="container1">
                <h3>Frameworks and tools</h3>
                <ul>
                    <li><img src="/bootstrap.png" className="d-block w-20" alt="Project 1"/></li>
                    <li><img src="/visualstudio.png" className="d-block w-20" alt="Project 1"/></li>
                </ul>
                </div>
            </div>
            
                
        </div>
    )
}
export default Skill