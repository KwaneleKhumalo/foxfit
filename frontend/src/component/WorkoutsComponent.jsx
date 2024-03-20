import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WORKOUT } from "../utils/endpoints";
import { toast } from "react-toastify";
import { Col, Row, Table, Modal, Button } from "react-bootstrap";
import AuthNav from "./AuthNav";

const WorkoutsComponent = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = JSON.parse(sessionStorage.getItem("userInfo"));
  const [workoutPlans, setWorkoutPlans] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getUserProfile = async () => {
    if (!user) {
      navigate("/login");
      toast.warning("Please Login!");
    } else {
      try {
        setIsLoading(true);
        const response = await axios.get(WORKOUT, { withCredentials: true });
        if (response && response.data) {
          const { workouts } = response.data;
          setWorkoutPlans(workouts.length > 0 ? workouts : null);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching workout plans:", error);
      }
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <AuthNav />
      <Row>
        <Col sm="12">
          <h1 className="text-center pt-5">Workouts</h1>
        </Col>
        <Col sm="12" className="text-center">
          <Button variant="info" onClick={handleShow}>
            New Routine
          </Button>
        </Col>
      </Row>
      <Row className="p-4">
        {workoutPlans && workoutPlans.length > 0 ? (
          <Table striped bordered hover variant="dark" className="shadow-lg rounded" size="md" responsive="sm">
            <thead>
              <tr className="text-center">
                <th>Workout</th>
                <th>Description</th>
                <th># of Sets (optional)</th>
                <th>Repetitions (optional)</th>
                <th>Weights per set (lbs)</th>
              </tr>
            </thead>

            <tbody>
              {workoutPlans.map(plan => (
                <tr key={plan._id}>
                  <td className="text-center">{plan.name}</td>
                  <td className="text-center">{plan.description}</td>
                  <td className="text-center">{plan.sets} sets</td>
                  <td className="text-center">{plan.repetitions} reps</td>
                  <td className="text-center">{plan.weightPerSet} lbs</td>
                  {/* <td>{plan.name}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <h3 className="text-center mt-5">&#128564; Lazy day? Let's do something! &#128170;</h3>
        )}
      </Row>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h3>Form will go on here</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WorkoutsComponent;
