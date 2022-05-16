import react from "react"
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from "react-icons/fa"



export const Sidebar = ()=>{
    return(
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar_generic">
                <li><span><FaInbox/> Inbox</span></li>
                <li><span><FaRegCalendar/></span>Today</li>
                <li><span><FaRegCalendarAlt/></span>7 days</li>
            </ul>  

            <div className="sidebar_middle">
              <span>
              <FaChevronDown/>
            </span>
            <h2>Workspaces</h2>
            </div>  
            <ul className="sidebar_projects">Projects will be here!</ul>
        </div>
    )
} 