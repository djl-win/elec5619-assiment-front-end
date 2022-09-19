import { motion } from "framer-motion";
import {

  ApartmentRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
  PeopleAltRounded,
  HistoryRounded,
  CommentRounded,
  MuseumRounded,
  ComputerRounded,
} from "@material-ui/icons";
import Item from "./Item";
import { useState } from "react";

function MySidebar() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {
      width: "15rem",
    },
    false: {
      width: "5rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: "center",
      width: "4rem",
    },
    false: {
      alignSelf: "flex-start",
      marginTop: "2rem",
      width: "3rem",
    },
  };
  return (
    <motion.div
      data-={open}
      variants={sideContainerVariants}
      initial={`${open}`}
      animate={`${open}`}
      className="sidebar_container"
    >
      {/* sidebar div */}
      <motion.div
        className="sidebar"
        initial={`${open}`}
        animate={`${open}`}
        variants={sidebarVariants}
      >
        {/* lines_icon */}
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: 180,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(3.5px)",
            WebkitBackdropFilter: "blur(3.5px)",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            transition: {
              delay: 0.2,
              duration: 0.4,
            },
          }}
          onClick={handleToggle}
          className="lines_icon"
        >
          <TocRounded />
        </motion.div>
        {/* profile */}
        <motion.div
          layout
          initial={`${open}`}
          animate={`${open}`}
          variants={profileVariants}
          className="profile"
          transition={{ duration: 0.4 }}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(5.5px)",
            WebkitBackdropFilter: "blur(5.5px)",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            cursor: "pointer",
          }}
        >
          <img
            src="https://api.multiavatar.com/GC.png"
            alt="profile_img"
          />
        </motion.div>
        {/* groups */}
        <div className="groups">
          {/* group 1 */}
          <div className="group">
            <motion.h3
              animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
            >
              Home
            </motion.h3>
            <Item icon={<DashboardRounded />} name="Dashboard" address="/Dashboard"/>
            {/* <Item icon={<BarChartRounded />} name="Performance" /> */}
          </div>
        </div>
        {/* group 2 */}
        <div className="group">
          <motion.h3
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
          >
            Museum
          </motion.h3>
          <Item icon={<MuseumRounded />} name="Venue 1" address="/Venue1" />
          <Item icon={<ApartmentRounded />} name="Venue 2" address="/Venue2"/>{" "}
          <Item icon={<ComputerRounded />} name="Venue 3" address="/Venue3"/>
        </div>
        {/* group 3 */}
        <div className="group">
          <motion.h3
            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
          >
            Analytics
          </motion.h3>
          <Item icon={<PeopleAltRounded />} name="Portraits" address="/Portraits"/>
          <Item icon={<HistoryRounded />} name="History" address="/History" />
          <Item icon={<CommentRounded />} name="Comments" address="/Comments"/>
          <Item icon={<SettingsRemoteRounded />} name="Visitors" address="/Visitors"/>
          <Item icon={<ColorLensRounded />} name="Setting" address="/Setting"/>
        </div>
      </motion.div>
    </motion.div>

  );
}

export default MySidebar;
