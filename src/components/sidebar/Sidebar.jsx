import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Intellibiz</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/delivery" style={{ textDecoration: "none" }}>
              <LocalShippingIcon className="icon" />
              <span>Delivery</span>
            </Link>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Link to="/stats" style={{ textDecoration: "none" }}>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications" style={{ textDecoration: "none" }}>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </Link>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <Link to="/system-health" style={{ textDecoration: "none" }}>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </Link>
          </li>
          <li>
            <Link to="/logs" style={{ textDecoration: "none" }}>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" style={{ textDecoration: "none" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

// import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

// const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
//   return (
//     <div className="sidebar">
//       <div className="top">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span className="logo">Intellibiz</span>
//         </Link>
//       </div>
//       <hr />
//       <div className="center">
//         <ul>
//           <p className="title">MAIN</p>
//           <li>
//             <DashboardIcon className="icon" />
//             <span>Dashboard</span>
//           </li>
//           <p className="title">LISTS</p>
//           <Link to="/users" style={{ textDecoration: "none" }}>
//             <li>
//               <PersonOutlineIcon className="icon" />
//               <span>Users</span>
//             </li>
//           </Link>
//           <Link to="/products" style={{ textDecoration: "none" }}>
//             <li>
//               <StoreIcon className="icon" />
//               <span>Products</span>
//             </li>
//           </Link>
//           <li>
//             <CreditCardIcon className="icon" />
//             <span>Orders</span>
//           </li>
//           <li>
//             <LocalShippingIcon className="icon" />
//             <span>Delivery</span>
//           </li>
//           <p className="title">USEFUL</p>
//           <li>
//             <InsertChartIcon className="icon" />
//             <span>Stats</span>
//           </li>
//           <li>
//             <NotificationsNoneIcon className="icon" />
//             <span>Notifications</span>
//           </li>
//           <p className="title">SERVICE</p>
//           <li>
//             <SettingsSystemDaydreamOutlinedIcon className="icon" />
//             <span>System Health</span>
//           </li>
//           <li>
//             <PsychologyOutlinedIcon className="icon" />
//             <span>Logs</span>
//           </li>
//           <li>
//             <SettingsApplicationsIcon className="icon" />
//             <span>Settings</span>
//           </li>
//           <p className="title">USER</p>
//           <li>
//             <AccountCircleOutlinedIcon className="icon" />
//             <span>Profile</span>
//           </li>
//           <li>
//             <ExitToAppIcon className="icon" />
//             <span>Logout</span>
//           </li>
//         </ul>
//       </div>
//       <div className="bottom">
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "LIGHT" })}
//         ></div>
//         <div
//           className="colorOption"
//           onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
