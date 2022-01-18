import './mainbody.css';
import sword from '/Users/agnesshutrick/Documents/GitHub/meta_craft_webapp/src/resources/img/swordgif.gif'

function MainBody() {
    return (
        <div className="MainBody">
            <div className="buttonContainer">
                <button className="MainBodyButton"  onClick={()=>{console.log("You clicked Join whiteList BUTTON")}}>
                    Join whitelist
                </button>
            </div>
            <div className="RenderSpace">
                <img src={sword} className="sword" alt="This will display an animated GIF" />
                {/* <canvas id="threeCanvas"/> */}
            </div>
            <div className="buttonContainer">
                <button className="MainBodyButton" onClick={()=>{console.log("You clicked DYNMAP BUTTON")}}>
                    Go to Dynmap
                </button>
            </div>

        </div>
    );
}

export default MainBody;
