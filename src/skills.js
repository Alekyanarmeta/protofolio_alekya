import "./App.css"
function Skill() {
    return (
        <div className="containers" style={{ backgroundColor: "#D1003E" }} id="skills">
            <h1 className="text-center">Skills</h1>
            <div className="d-flex justify-content-center">
                <div className="ms-5 me-5">
                    <h3>Programming</h3>
                    <ol>
                        <li>Python</li>
                        <li>java</li>
                    </ol>
                </div>
                <div className="ms-5 me-5">
                    <h3>Development</h3>
                    <ol>
                        <li>Html</li>
                        <li>css</li>
                        <li>javascript</li>
                        <li>Reactjs</li>
                        <li>Express</li>
                    </ol>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="ms-5 me-5">
                <h3>Database</h3>
                <ol>
                    <li>sql</li>
                    <li>Mongodb</li>
                </ol>
                </div>
                <div className="ms-5 me-5">
                <h3>Frameworks and tools</h3>
                <ol>
                    <li>bootstrap</li>
                    <li>visualstudio</li>
                </ol>
                </div>
            </div>
        </div>
    )
}
export default Skill