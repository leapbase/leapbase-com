import React from "react";
import Box from '@mui/material/Box';
import BasicAccordion from "../components/BasicAccordion";
import BasicAppBarTop from "../components/BasicAppBarTop";
import BasicAppBarBottom from "../components/BasicAppBarBottom";
import BasicBanner from "../components/BasicBanner";
import BasicBottomNav from "../components/BasicBottomNav";
import BasicBox from "../components/BasicBox";
import BasicCalendar from "../components/BasicCalendar";
import BasicCard from "../components/BasicCard";
import BasicDatePicker from "../components/BasicDatePicker";
import BasicLineChart from "../components/BasicLineChart";
import BasicListBox from "../components/BasicListBox";
import BasicRegistrationForm from "../components/BasicRegistrationForm";
import BasicTable from "../components/BasicTable";
import BasicTreeview from "../components/BasicTreeview";
import CurrentTime from "../components/CurrentTime";
import NavDrawer from "../components/NavDrawer";
import Scouter from "../components/Scouter";
import StarRating from "../components/StarRating";

const Components = {
  BasicAccordion: BasicAccordion,
  BasicAppBarTop: BasicAppBarTop,
  BasicAppBarBottom: BasicAppBarBottom,
  BasicBanner: BasicBanner,
  BasicBottomNav: BasicBottomNav,
  BasicBox: BasicBox,
  BasicCalendar: BasicCalendar,
  BasicCard: BasicCard,
  BasicDatePicker: BasicDatePicker,
  BasicLineChart: BasicLineChart, 
  BasicListBox: BasicListBox,
  BasicRegistrationForm: BasicRegistrationForm,
  BasicTable: BasicTable,
  BasicTreeview: BasicTreeview,
  CurrentTime: CurrentTime,
  Scouter: Scouter,
  StarRating: StarRating,
  NavDrawer: NavDrawer,
};

export default block => {
  const Component = Components[block.component];
  return Component ? (
    React.createElement(Component, {
      key: block.uid,
      config: block
    })
  ) : (
    <Box key={block.uid}>{block.component} not found</Box>
  );
};

