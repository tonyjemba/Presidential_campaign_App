import React from "react";
import HomeHero from "./HomeHero";
import HomeBlueSection from "./HomeBlueSection";
import ShortNotes from "./ShortNotes";
import Panels from "./Panels";
import { Divider } from "antd";

const Home = () => {
    return (
      <div>
        <Divider orientation="left">Add Home Hero image</Divider>
        <HomeHero />
        <Divider orientation="left">Home Blue section</Divider>
        <HomeBlueSection />
        <Divider orientation="left">Short Notes</Divider>
        <ShortNotes />
            <Divider orientation="left">Panels</Divider>
            <Panels/>
      </div>
    );
}
export default Home;