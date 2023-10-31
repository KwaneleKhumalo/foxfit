import Header from "./Header"
import PriceHeaderContent from "./PriceHeaderContent"
import { Row, Col } from "react-bootstrap"
import {FaCheckCircle} from "react-icons/fa"
import WebFooter from "./WebFooter"



const PriceComponent = () => {
  return (
    <>
      <Header content={<PriceHeaderContent />} />
      <Row className="border py-5 bg-dark-subtle text-dark">
        <Col md={12} className="mx-aut0 my-auto text-center">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Monthly Pricing
          </h2>
        </Col>
        <Row className="p-5 text-center mx-auto">
          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-3  mx-auto text-light bg-dark mb-5">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">GOLD</h4>
            <h3 className="">One Month Personal Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-info mx-auto">
              $120
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Month{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>

          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-3  mx-auto text-light bg-dark mb-5">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">SILVER</h4>
            <h3 className="">2 weeks Personal Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-info mx-auto">
              $65
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Month{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>

          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-3  mx-auto text-light bg-dark mb-5">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">BRONZE</h4>
            <h3 className="">1 Week Group Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-info mx-auto">
              $45
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Month{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="border py-5 bg-dark text-light ">
        <Col md={12} className="mx-auto my-auto text-center">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Annual Pricing
          </h2>
        </Col>
        <Row className="p-5 text-center mx-auto mb-0">
          <Col md={3} className="shadow shadow-lg p-0 mb-5 rounded rounded-3  mx-auto text-black bg-dark-subtle">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">GOLD</h4>
            <h3 className="">One Month Personal Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-danger mx-auto">
              $1200
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Year{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>

          <Col md={3} className="shadow shadow-lg p-0 mb-5 rounded rounded-3  mx-auto text-black bg-dark-subtle">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">SILVER</h4>
            <h3 className="">2 weeks Personal Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-danger mx-auto">
              $650
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Year{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>

          <Col md={3} className="shadow shadow-lg p-0 mb-5 rounded rounded-3  mx-auto text-black bg-dark-subtle">
            <h4 className="mb-3 text-center bg-danger ms-auto text-light ">BRONZE</h4>
            <h3 className="">1 Week Group Training</h3>
            <h4 className="text-start mt-3 p-3 border-bottom border-danger col-md-11 text-danger mx-auto">
              $450
              <span className="text-secondary" style={styles.month}>
                {" "}
                / Year{" "}
              </span>
            </h4>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-3 p-3 text-start col-md-7 justify-content-between d-flex">
              <span className="text-danger">
                <FaCheckCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
      </Row>
      <WebFooter />
    </>
  )
}

const styles = {
  heading1: {
    fontSize: "3em"
  },
  heading2: {
    fontSize: "2em"
  },
  month: {
    fontSize: "16px"
  },
  image: {
    width: "100%"
  }
}


export default PriceComponent
