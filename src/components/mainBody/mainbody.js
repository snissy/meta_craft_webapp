import './mainbody.css';
import sword from '../../resources/img/swordgif.gif'

function MainBody() {
    return (
        <div className="MainBody animate__animated animate__fadeIn">
            <div className="buttonContainer">
                <button className="MainBodyButton"  onClick={()=>{window.open("https://docs.google.com/forms/d/e/1FAIpQLSfHzxLJlmAUbI-i0ImYj8vd7kElPndkqhYznQYZLa2dWMrI1g/viewform?usp=sf_link", '_blank').focus();}}>
                    Join whitelist
                </button>
            </div>
            <div className="RenderSpace">
                <img src={sword} className="sword" alt="This will display an animated GIF" />
                {/* <canvas id="threeCanvas"/> */}
            </div>
            <div className="buttonContainer">
                <button className="MainBodyButton" onClick={()=>{window.open("http://mc.datasektionen.se:5555", '_blank').focus();}}>
                    Go to Dynmap
                </button>
            </div>

        </div>
    );
}

export default MainBody;
