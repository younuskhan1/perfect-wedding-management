import "./BottomSideAdd.css";

import meril from "../../add-images/maril.png";
import maggi from "../../add-images/maggi.png";
import mollSalt from "../../add-images/moll-salt.png";
import jibon from "../../add-images/jibon-pani.png";

const BottomSideAdd = () => {
    return (
        <div className="bottom-add-container">
            <div><img src={meril} alt="" /></div>
            <div><img src={maggi} alt="" /></div>
            <div><img src={mollSalt} alt="" /></div>
            <div><img src={jibon} alt="" /></div>
        </div>
    );
};

export default BottomSideAdd;