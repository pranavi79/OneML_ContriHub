import React, { createRef } from "react";
import { Link } from "react-router-dom";
import { Sidenav, Nav, Icon, Dropdown, Content } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Header from "../../../../components/layout/Header";
import JupyterNotebook from "../../../../utils/JupyterViewer";

class ObjectClassificationFront extends React.Component {
 
  scrollToObjectClassification = createRef();
  scrollToGradientDescent = createRef();

  functionA = () => {
    this.scrollToObjectClassification.current.scrollIntoView({
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
                    Object Classification
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
                      style={{ textDecoration: "inherit", color: "inherit" }}
                      to="/objectClassification/Playground"
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
            <div ref={this.scrollToObjectClassification}>
              <Content>
                {/* <JupyterNotebook ipynb={this.linearRegression} /> */}
                <p style={{margin: "0 auto",textAlign: "center"}}>Only PlayGround is working ...</p>
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

export default ObjectClassificationFront;
