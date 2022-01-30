import '../mainBody/mainbody.css';
import './rules.css';
import TextContainer from '../updatesView/textContainer';

function RulesView() {
    return (
        <div className="RulesBody animate__animated animate__fadeIn">
            <div className="containerText">
            <h1 className="updatesH1">Server rules</h1>
            <TextContainer 
            title="Global Rules"
            txt={<General/>}
            />
            <TextContainer 
            title="The Civilization"
            txt={<Civilization/>}
            />
            <TextContainer 
            title="META-borg"
            txt={<METAborg/>}
            />
            <TextContainer 
            title="The Wilderness"
            txt={<Wilderness/>}
            />
            <TextContainer 
            title="Lag prevention guidelines"
            txt={<Lag/>}
            />
        </div>
        </div>
    );
}

const General = () => {
    return (
        <div>
            Intentionally crashing the server or creating lag is strictly prohibited. While some client side mods are allowed (ask if you are unsure), cheat-clients and botting are strictly forbidden. Any forms of duping are forbidden (with the sole exception of TNT-duping). Other than that, basically, all is permitted - if the game allows it, it is allowed. If you are unsure if a glitch or bug is allowed to be exploited, ask a moderator or the Borgarråd. 
            <br/><br/>
Always respect the rulings of the moderators and the Borgarråd.If you are bringing in a '+1' you are responisble for this person. The world will be divided into three zones with differing rules. These zones are: 
        <br/><br/>
            <b>1. The Civilization</b><br/>
            <b>2. META-borg</b><br/>
            <b>3. The Wilderness</b><br/>
        </div>
    )
}

const Civilization = () => {
    return (
                <div>
                The Civilization is located at the positive z-coords. Therein, normal, common-sense survival multiplayer (SMP) rules will be upheld.
                <br/><br/>
        While sneaking into peoples bases and looking into their chests is absolutely allowed, it must be done at one’s own risk. Trap installation is also permitted and killing someone sneaking around your base with a trap is certainly legit.
        <br/><br/>
        Pranks are allowed, but griefing, stealing or using someone else’s farms without permission is forbidden.
        <br/><br/>
        You are also expected to follow good Minecraft etiquette. Never leave floating blocks around or otherwise such ugly occurrences. If a creeper destroys someone else's stuff because of you, you ought to repair it. Good Minecraft etiquette is especially important close to spawn or close to someone’s base.
                </div>
    )
}

const METAborg = () => {
    return (
            <div>
                META-borg is the capital city of the Civilization and the final outpost before the Wilderness. It contains the spawn (0, 0). Within the city, griefing and stealing is strictly prohibited and larger build projects will require permits. The city will be ruled by a council (Borgarrådet), and thus its rules might change over time. Repeatedly breaking the rules of the server will lead to exile into the Wilderness. 
            </div>
    )
}

const Wilderness = () => {
    return (
            <div>

In the Wilderness Chaos rules. It is located at the negative z-coords and the Great Wall separates it from the Civilization.  Here, PvP is encouraged, so wander into the Wilderness at your own risk. 
<br/><br/>
As long as you aren't affecting the Civilization or META-borg, ANYTHING is permitted. The killing of exiles will be rewarded and brave adventurers will be able to form bands and head out in search of power and glory.
            </div>
    )
}

const Lag = () => {
    return (
<div>
1. Don't leave entities out when possible!
All farms should be equipped with an overflow valve where stuff is destroyed with lava. Don't keep unnecessarily large animal stocks and don't leave excessive amounts of boats out in the open. 
<br/><br/>
2. Block updates
Redstone wires causes block updates all around them. Put redstone on slabs or other blocks that doesn't pass through signals when possible.
<br/><br/>
3. Light level updates
Every repeater/comparator/torch that gets turned on/off causes lots of light level updates. Always light up your redstone contraptions fully and enclose when possible!
</div>
    )
}

export default RulesView;
