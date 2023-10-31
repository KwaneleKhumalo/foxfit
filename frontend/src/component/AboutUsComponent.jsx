import AboutHeaderContent from "./AboutHeaderContent"
import Header from "./Header"
import { Row, Col } from "react-bootstrap"
import WebFooter from "./WebFooter"


const AboutUsComponent = () => {
  return (
    <>
      <Header content={<AboutHeaderContent />} />
      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={6} className="mx-auto my-auto text-center">
          <h2 style={styles.heading1} className="col-md-6 mx-auto ">
            About Us
          </h2>
          <p style={styles.p} className="col-md-8 mx-auto text-start mb-5 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
          <p style={styles.p} className="col-md-8 mx-auto text-start mb-5 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit pariatur deserunt repellat impedit reiciendis illo excepturi ad rerum, nesciunt non ipsam eum mollitia sint? Minus accusantium quam eligendi blanditiis!
          </p>
        </Col>
        <Col md={6} className="text-center p-5">
          <img style={styles.image} className="shadow shadow-lg rounded rounded-5" src="https://thumbnails-photos.amazon.com/v1/thumbnail/7xVKM2CPQyGfzANXvmggdw?viewBox=1578%2C995&ownerId=A1YK1TL6G91V5W&groupShareToken=YPVeoTYSQheTmZeu0LLFXg.BVhgUwyb_OGZCc5J_YPURb" alt="2 people on stationery bikes in the gym" />
        </Col>
      </Row>
      <Row className="border py-5 bg-dark text-light ">
        <Col md={3} className="mx-auto my-auto text-center">
          <h2>7</h2>
          <p>Years of Experience</p>
        </Col>
        <Col md={3} className="text-center p-5">
          <h2>24</h2>
          <p>Workout Programs</p>
        </Col>
        <Col md={3} className="text-center p-5">
          <h2>140</h2>
          <p>Personal Trainers</p>
        </Col>
        <Col md={3} className="text-center p-5">
          <h2>12000+</h2>
          <p>Happy Members</p>
        </Col>
      </Row>
      <Row className="border py-5 bg-dark-subtle text-dark ">
        <Col md={12} className="mx-auto mb-5 my-auto text-center">
          <h2 style={styles.heading1} className="col-md-5 mx-auto ">
            Our Accomplishments!
          </h2>
          <p style={styles.p} className="col-md-6 mx-auto mb-5 text-secondary-emphasis">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi impedit rerum, mollitia tempora enim exercitationem vitae nam quis repellat laborum!
          </p>
        </Col>
        <Row className="p-5 text-center mx-auto">
          <Col md={3} className="shadow mb-5 shadow-lg p-0 rounded rounded-2  mx-auto text-light bg-dark">
            <h4 className="mb-3 text-center bg-danger w-25 ms-auto text-light">2019</h4>
            <h3>National Workouts Awards</h3>
            <p className="mb-3 p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dicta error suscipit blanditiis veniam, aperiam odit. Recusandae modi distinctio aperiam quod totam officiis? Sint perspiciatis provident fugit doloremque, non sequi?</p>
          </Col>

          <Col md={3} className="shadow mb-5 shadow-lg p-0 rounded rounded-2  mx-auto text-light bg-dark">
            <h4 className="mb-3 text-center bg-danger w-25 ms-auto text-light">2021</h4>
            <h3>Top 5 Effective Workout Programs</h3>
            <p className="mb-3 p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dicta error suscipit blanditiis veniam, aperiam odit. Recusandae modi distinctio aperiam quod totam officiis? Sint perspiciatis provident fugit doloremque, non sequi?</p>
          </Col>

          <Col md={3} className="shadow shadow-lg p-0 rounded rounded-2  mx-auto text-light bg-dark mb-5">
            <h4 className="mb-3 text-center bg-danger w-25 ms-auto text-light">2022</h4>
            <h3>Best Gym Of The Year</h3>
            <p className="mb-3 p-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe dicta error suscipit blanditiis veniam, aperiam odit. Recusandae modi distinctio aperiam quod totam officiis? Sint perspiciatis provident fugit doloremque, non sequi?</p>
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
  p: {
    fontSize: "20px"
  },
  image: {
    width: "100%"
  }
}



export default AboutUsComponent
