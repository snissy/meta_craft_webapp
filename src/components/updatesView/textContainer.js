import react from "react";
import '../mainBody/mainbody.css';
import '../updatesView/updates.css';

function textContainer({headline, title, date, txt}) {
    return (
    <div className="">
        <div className="containerUpdates">
            <h1 className="updatesTitle">{title}</h1>
            <h1 className="updatesDate">{date}</h1>
            <p className="updatesText">{txt}</p>
        </div>

    </div>
    )
}

export default textContainer