import React from "react";
import { Card } from "./components/Card/Card";
import { Card4 } from "./components/Card4/Card4";
import { Card5 } from "./components/Card5/Card5";
import { Card6 } from "./components/Card6/Card6";
import { DivWrapper } from "./components/DivWrapper/DivWrapper";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { PropertyCardWrapper } from "./components/PropertyCardWrapper/PropertyCardWrapper";
import "./style.css";

export const App = () => {
  return (
    <div className="web-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="group" alt="Group" src="group-2.png" />
          <img className="frame" alt="Frame" src="Frame 1686553947.png" />
          <img className="vector" alt="Vector" src="image.svg" />
          <div className="layout">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-7">
                  <img className="ellipse" alt="Ellipse" src="Ellipse 731.svg" />
                  <img className="img" alt="Ellipse" src="Ellipse 731.svg" />
                </div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-11">KATANA</div>
                <div className="text-wrapper-12">Series</div>
              </div>
              <img className="mask-group" alt="Mask group" src="Mask group.png" />
              <div className="frame-3">
                <div className="text-wrapper-13">Explore the suspension tech</div>
                <div className="text-wrapper-14">Katana Series</div>
              </div>
              <img className="r" alt="R" src="r6 2.png" />
              <div className="frame-wrapper">
                <div className="frame-4">
                  <img className="frame-5" alt="Frame" src="Frame.svg" />
                  <div className="text-wrapper-15">Download Boucher</div>
                </div>
              </div>
            </div>
            <div className="logo-placement">
              <img className="logo" alt="Logo" src="Logo.svg" />
              <img className="line" alt="Line" src="Line 1.svg" />
              <p className="guhan-industrial-and">
                Guhan Industrial and manufacturing
                <br />
                Solution pvt ltd
              </p>
            </div>
            <MenuButton className="menu-button-instance" />
          </div>
          <div className="group-2">
            <div className="overlap-3">
              <img className="group-3" alt="Group" src="Group.png" />
              <img className="group-4" alt="Group" src="image.png" />
            </div>
          </div>
          <img className="rectangle" alt="Rectangle" />
          <img className="vector-2" alt="Vector" src="Vector 59.svg" />
          <img className="frame-6" alt="Frame" src="Frame 1686553882.svg" />
          <div className="frame-7">
            <div className="text-wrapper-16">INTRODUCING KATANA SERIES</div>
            <div className="text-wrapper-17">Katana Series Performance</div>
          </div>
          <div className="text-wrapper-18">KATANA SJ150 OVERVIEW</div>
          <div className="frame-8">
            <div className="overlap-4">
              <div className="text-wrapper-19">SJ150</div>
              <img className="front-view" alt="Front view" src="front view 1.png" />
            </div>
          </div>
          <div className="frame-9">
            <div className="frame-10">
              <Card className="card-instance" property1="card-1" />
              <PropertyCardWrapper className="card-instance" property1="card-1" />
              <DivWrapper className="card-instance" property1="card-1" />
            </div>
            <div className="frame-11">
              <Card4 className="card-instance" property1="card-1" />
              <Card5 className="card-instance" property1="card-1" />
              <Card6 className="card-instance" property1="card-1" />
            </div>
          </div>
          <img className="vector-3" alt="Vector" src="Vector 60.svg" />
          <div className="text-wrapper-20">KATANA SERIES SPECIFICATION</div>
          <div className="parameters">Parameters &amp; Processing</div>
          <p className="p">
            The equipment has a bed size of 500 x 750 mm and a cutting area of the same dimensions. It features a kerf
            ranging from 0.35 to 1.6 mm. The nozzle is made of tungsten carbide and comes in diameters ranging from 0.3
            mm to 1.6 mm. It uses water at a rate of 4 liters per minute and has a cather tank capacity of 250 liters.
            The abrasive used is GARNET 80 MESH, with an abrasive flow rate of 50 to 250 grams per minute. The gantry
            has a linear speed of 1200 mm per minute and a position accuracy of +/- 0.3 mm per minute. Additionally, it
            includes a high-pressure pump with a rating of 150 bar and 10 HP.
          </p>
          <div className="frame-12">
            <div className="overlap-5">
              <div className="ellipse-2" />
              <img className="r-2" alt="R" src="R1 1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
