import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { Sidenav, Nav, Icon, Dropdown, Content } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Header from "../../../components/layout/Header";
import JupyterNotebook from "../../../utils/JupyterViewer";


class ImageSegmentationFront extends React.Component {
  segmenentation = require("../../../utils/tutorial/Image Segmentation.ipynb");
  gradientDescent = require("../../../utils/tutorial/GradientDescent.ipynb");
  scrollToLinearRegression = createRef();
  scrollToGradientDescent = createRef();

  functionA = () => {
    this.scrollToLinearRegression.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  functionB = () => {
    this.scrollToGradientDescent.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "row",
            height: "100%",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div style={{ width: 250 }}>
            <Sidenav
              defaultOpenKeys={["3", "4"]}
              activeKey="1"
              appearance="inverse"
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                    Image Segmentation
                  </Nav.Item>
                  <Dropdown
                    eventKey="3"
                    title="Theory"
                    icon={<Icon icon="magic" />}
                  >
                    <Dropdown.Item eventKey="3-1" onSelect={this.functionA}>
                      Definition
                    </Dropdown.Item>

                    {/* <Dropdown.Item eventKey="3-2" onSelect={this.functionB}>
                      Gradient Descent
                    </Dropdown.Item> */}
                    <Dropdown.Item eventKey="3-3">Code</Dropdown.Item>
                    <Link
                      style={{ textDecoration: "none", color: "#0000" }}
                      to="/imageSegmentation/Playground"
                    >
                      <Dropdown.Item eventKey="3-4">PlayGround</Dropdown.Item>
                    </Link>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
          </div>
          <div
            style={{
              position: "fixed",
              height: "100%",
              width: "100%",
              overflowY: "scroll",
              top: "0",
              bottom: "0",
              marginTop: "60px",
              marginLeft: "100px",
            }}
          >
            <div ref={this.scrollToLinearRegression}>
              <Content>
                <JupyterNotebook title = "Image Segmentation" ipynb={this.segmenentation} />
              </Content>
            </div>
            {/* <div ref={this.scrollToGradientDescent}>
              <Content>
                <JupyterNotebook ipynb={this.gradientDescent} />
              </Content>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSegmentationFront;
