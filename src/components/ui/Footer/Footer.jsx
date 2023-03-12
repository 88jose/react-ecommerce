import iconFace from '../../../assets/icons/face.png';
import iconYou from '../../../assets/icons/you.png';
import iconInsta from '../../../assets/icons/insta.png';
import arrowTop from '../../../assets/icons/arrow-top.png';
import './Footer.css';

export const Footer = () => {
    return (
        <>
            <div className='ancla-menu'>
                <a href="#top">
                    <img src={ arrowTop } alt="arrow icon" width='30'/>
                </a>
            </div>
            <div className='section-footer'>
                <p> Follow us </p>
                <div className='social-icon'>
                    <img src={ iconFace } alt="icon facebook" />
                    <img src={ iconYou } alt="icon youtube" />
                    <img src={ iconInsta } alt="icon instagram" />
                </div>
            </div>
            <div className='bar-footer'>
                <p> &copy; 2023 Created by Jose Torres </p>
            </div>
        </>
    )
}
