import { Row, Button, Col } from "react-bootstrap"
import { FaCheckCircle } from "react-icons/fa"
import Header from "./Header"
import { Link } from "react-router-dom"
import WebFooter from "./WebFooter"
import ProgramsHeaderContent from './ProgramsHeaderContent'

const ProgramsComponent = () => {
  return (
    <div>
      <Header content={<ProgramsHeaderContent />} />

      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={6} className="mx-auto my-auto text-lg-start text-center">
          <h2 style={styles.heading1} className="col-md-6 mx-auto col-12">
            Own Your Progress!
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta omnis eos illum earum, nesciunt minima nobis vero suscipit voluptas odit!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <Row>
            <Col md={6} className=" bg-danger shadow shadow-lg text-light rounded rounded-3 mb-3">
              <FaCheckCircle size={20} />

              <h4>Energetic Life</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
            <Col md={6} className="rounded shadow rounded-3 p-2 mb-3">
              <FaCheckCircle size={20} />

              <h4>Healthy Body</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="rounded shadow rounded-3">
              <FaCheckCircle size={20} />
              <h4>More Confidence</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
            <Col md={6} className="rounded shadow rounded-3">
              <FaCheckCircle size={20} />

              <h4>Self Empowerment</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam a perspiciatis alias, vitae numquam adipisci hic corporis, reiciendis ad corrupti est, omnis dolor animi?</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="border py-5 bg-dark text-light ">
        <Col md={6} className="mx-auto my-auto text-center text-md-start">
          <p className="text-success col-md-6 mx-auto">Personal Training</p>
          <h2 style={styles.heading1} className="col-md-6 mt-3 mb-4 mx-auto ">
            Let's get you to your new Routine!
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/WVM2FGNoSCmrPrg9fZyZBA?viewBox=1493%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=AyDeSSc_QAyr6Hp_VykAMQ.4uqsvYttDSc1mV1X1lWOW9" alt="Female Personal trainer training a male on push-ups" />
        </Col>
      </Row>
      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/7xVKM2CPQyGfzANXvmggdw?viewBox=1578%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=YPVeoTYSQheTmZeu0LLFXg.BVhgUwyb_OGZCc5J_YPURb" alt="2 people on stationery bikes in the gym" />
        </Col>
        <Col md={6} className="mx-auto my-auto text-center text-md-start">
          <p className="text-danger col-md-6 mx-auto">Small Groups Training</p>
          <h2 style={styles.heading1} className="col-md-6 mt-3 mb-4 mx-auto ">
            Make Your Circle Healthier Together
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
      </Row>
      <Row className="border py-5 bg-dark text-light ">
        <Col md={6} className="mx-auto my-auto text-center text-md-start">
          <p className="text-success col-md-6 mx-auto">Large Groups Training</p>
          <h2 style={styles.heading1} className="col-md-6 mt-3 mb-4 mx-auto ">
            Improve Motivation With More People
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/L42gI-5dROO-08ky1-ILsQ?viewBox=1493%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=wPa2fh7DTkehrE6VLeFT8g.GX2iHUH5t5CalrO7MsBQ4S" alt="Large Groups training" />
        </Col>
      </Row>
      <Row className="border p-5 bg-dark-subtle text-dark ">
        <Col md={9} className=" p-5 mx-auto rounded rounded-3 my-auto text-center bg-secondary text-light">
          <h2 style={styles.heading2} className="col-md-5 mx-auto ">
            Join Our Membership And Start Your Workout
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic?</p>
          <Link to={"/register"} className="btn btn-danger">
            Join Now
          </Link>
        </Col>
      </Row>
      <WebFooter />
    </div>
  )
}

const styles = {
  heading1: {
    fontSize: "3em"
  },
  heading2: {
    fontSize: "2em"
  },
  p: {
    fontSize: "20px"
  },
  image: {
    width: "100%"
  }
}

export default ProgramsComponent
