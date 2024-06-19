import './PIAdd.css'
import { useNavigate } from 'react-router-dom';

const PIAdd = () => {
    const navigate = useNavigate();

    const clickedBack = () => {
        navigate('/dashboard');
    }

    return (
        <div className="PIAddBorder">
        <div className ="Backk">
            <button className="BackButton" onClick={clickedBack}>Back</button>
        </div>
            <form className="PIAddForm">

                <label htmlFor="piName">PI Name:</label>
                <input type="text" id="piName" name="piName" required></input>
                <label htmlFor="piLocation">PI Location:</label>
                <input type="text" id="piLocation" name="piLocation" required></input>
                <label htmlFor="piType">PI Type:</label>
                <input type="text" id="piType" name="piType" required></input>
                <label htmlFor="piOwner">PI IP Address:</label>
                <input type="text" id="piOwner" name="piOwner" required></input>
                <button type="submit">Add</button>
               
            </form>
        </div>
    )
}

export default PIAdd;