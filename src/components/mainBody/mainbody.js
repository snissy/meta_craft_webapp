import './mainbody.css';
import sword from '../../resources/img/swordgif.gif'

function MainBody() {
    return (
        <div className="MainBody animate__animated animate__fadeIn">
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
