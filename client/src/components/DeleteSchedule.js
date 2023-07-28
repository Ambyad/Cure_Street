import {useSelector} from 'react-redux'
import '../styles/Navbar.css'
import { bookingSchedule } from '../actions/auth';
import { toast } from 'react-toastify';
import '../styles/Footer.css'
import axios from 'axios';

const EditScheduleCard =({day,list,uuid,tname,customList}) =>{
       

  

    const {user} = useSelector((state) =>({...state}));
    
    const puid = user.user._id;
    const pname = user.user.name;

    const daylist = ["monday","tuesday","wednesday","thrusday","friday","saturday","sunday"];

   
    let flag = new Date(Date.now()).getDay() - 1; 

    const handleClick = async (e)=>{


    
    }


    return (<>
    
        <div className="col-sm-4 p-3 text-center  gridalign">
   <div className="card background-cadet" style={{width: '18rem',height:'23rem'}}>

   {daylist[flag] == day ?<h2 className='pt-3 tophead text-sans text-success'>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>:<h2 className='pt-3 text-sans tophead'>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>}

  <ul className="list-group list-group-flush">

  {list != null && list.map((list) => list.avail ? <li className="list-group-item cursor" onClick={handleClick}>{(list.time[0] >= '1' && list.time[1] >= '2') || (list.time[0] >= 2) ? list.time + " PM" : list.time + " AM"}</li> : <li className = "list-group-item bg-danger cursor"  > {(list.time[0] >= '1' && list.time[1] >= '2') || (list.time[0] >= 2) ? list.time + " PM" : list.time + " AM"}</li>)}

  </ul>
  </div>
  </div>

    </>)
}

export default EditScheduleCard;