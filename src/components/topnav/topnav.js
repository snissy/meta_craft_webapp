import './topnav.css';
import MetacraftLogo from "../../resources/img/metacraft.png"
import ZombieHead  from "../../resources/img/Zombie_Head 1.png"
import PlayerHead  from "../../resources/img/Player_Head 1.png"
import SkeletonSkull  from "../../resources/img/Skeleton_Skull 1.png"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import OnlinePlayerList from "./playerLister/onlinePlayerList";

function TopNav() {
    return (
        <div className="TopNav">
            <div className="logoDiv">
                <img className="metaLogoImg" src={MetacraftLogo} alt={"metacraft logo"}/>
            </div>
            <div className="playerListDiv">
                <OnlinePlayerList/>
            </div>
            <div className="TopNavButtonRow">
                <button className="TopNavButton" onClick={()=>{console.log("You clicked the Zombie Head")}}>
                    <Link to="/home">
                        <img className="buttonImg" src={ZombieHead} alt={"zombieHead"}/>
                        <p className="p-nav">Home</p>
                    </Link>
                </button>

                <button className="TopNavButton" onClick={()=>{console.log("You clicked the Player Head")}}>
                    <Link to="/updates">
                        <img className="buttonImg" src={PlayerHead} alt={"playerHead"}/>
                        <p className="p-nav">Updates</p>
                    </Link>
                </button>
                
                <button className="TopNavButton" onClick={()=>{console.log("You clicked the Skeleton Skull")}}>
                <Link to="/rules">
                    <img className="buttonImg" src={SkeletonSkull} alt={"skeletonSkull"}/>
                    <p className="p-nav">Rules</p>
                </Link>
                </button>
            </div>
        </div>
    );
}

export default TopNav;
