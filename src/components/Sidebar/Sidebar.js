import React, { useState, useEffect } from "react";
import {
  Add,
  Apps,
  BookmarkBorder,
  Create as CreateIcon,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord as FiberManualRecordIcon,
  FileCopy,
  Inbox,
  InsertComment as InsertCommentIcon,
  PeopleAlt,
} from "@material-ui/icons";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./Sidebar.css";
import db from "../../firebase";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snap) =>
      setChannels(
        snap.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever</h2>
          <h3>
            <FiberManualRecordIcon />
            Galo Sandoval
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add channel" />
      {/* Connect to dB and list all the channels */}
      {/* Hella <SidebarOption> */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
