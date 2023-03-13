import { NavLink } from "react-router-dom";
import iconArrow from "../../../assets/icons/arrow.png";
import "./Button.css";

export const Button = ({ tittleLink, subtittleLink, newClassName, newToLinkButton }) => {
    return (
        <div className={ "button " + newClassName } >
            <NavLink className="button-link" to={ newToLinkButton }>
                <span className="span-button-subtittle">{ subtittleLink }</span>
                <span className="span-button-tittle">{ tittleLink }</span>
                <img className="icon-button-arrow" src={ iconArrow } alt="" />
            </NavLink>
        </div>
    )

}
