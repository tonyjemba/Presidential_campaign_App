import React from "react";
import HomeHero from "./HomeHero";
import HomeBlueSection from "./HomeBlueSection";
import ShortNotes from "./ShortNotes";
import Panels from "./Panels";
import FooterImage from "./FooterImage";
import NupImage from "./NupImage";
import MapImage from "./MapImage";
import AboutImage from "./AboutImage";
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
        <Panels />
        <Divider orientation="left">Fotter Image</Divider>
        <FooterImage />
        <Divider orientation="left">NUP Image</Divider>
        <NupImage />
        <Divider orientation="left">About Image</Divider>
        <AboutImage />
        <Divider orientation="left">Map Image</Divider>
        <MapImage />
      </div>
    );
}
export default Home;