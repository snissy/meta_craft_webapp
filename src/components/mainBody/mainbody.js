import './mainbody.css';

function MainBody() {
    return (
        <div className="MainBody">
            <div className="buttonContainer">
                <button className="MainBodyButton"  onClick={()=>{console.log("You clicked Join whiteList BUTTON")}}>
                    Join whitelist
                </button>
            </div>
            <div className="RenderSpace">
                <canvas id="threeCanvas"/>
            </div>
            <div className="buttonContainer">
                <button className="MainBodyButton" onClick={()=>{console.log("You clicked DYNMAP BUTTON")}}>
                    DYNMAP
                </button>
            </div>

        </div>
    );
}

export default MainBody;
