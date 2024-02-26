import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrochip,  faChessBoard, faHardDrive , faFan, faMemory,faCarBattery } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export const Categories = () => {
    
    return (
        <>
                        <li className="nav-item" ><Link to={'/category/cpu'}><FontAwesomeIcon icon={faMicrochip} /></Link></li>
                        <li className="nav-item" ><Link to={'/category/motherboard'}><FontAwesomeIcon icon={faChessBoard} /></Link></li>
                        <li className="nav-item" ><Link to={'/category/gpu'}><FontAwesomeIcon icon={faHardDrive} /> </Link> </li>
                        <li className="nav-item" ><Link to={'/category/cooler'}><FontAwesomeIcon icon={faFan} /></Link></li>
                        <li className="nav-item" ><Link to={'/category/ram'}><FontAwesomeIcon icon={faMemory} /></Link></li>
                        <li className="nav-item" ><Link to={'/category/psu'}><FontAwesomeIcon icon={faCarBattery} /></Link></li>
        </>
    );
}

