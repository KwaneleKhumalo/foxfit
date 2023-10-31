import Header from "./Header"
import AuthNav from "./AuthNav"
import { Link, useNavigate } from "react-router-dom"
import { Row, Form, Button, Col, Dropdown } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import { SUBSCRIPTION_PLANS, USER_REGISTRATION } from "../utils/endpoints"
import { toast } from "react-toastify"
import { formValidation, formCompleted } from "../utils/authValidation"

const RegistrationForm = () => {

  // Stripe : pk_test_51NtGqJKiDsBxQFyoF69biL8eY1kVfyxjpsAFYwxTP4jd4UdUqSfDyRTYbxgbh5WvUzpYkgxNPwv5XwtZRMqIYQvQ00WPTHQaHq
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [plans, setPlans] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")

  
  const getSubscriptionPlans = async () => {
    try {
      const response = await axios.get(SUBSCRIPTION_PLANS)
      const { data } = response
      console.log(data);
      setPlans(data.subscriptionPlans)
    } catch (err) {
      console.log(err)
    }
  }

  const navigate = useNavigate()

  const clearForm = () => {
    setEmail("")
    setFirstName("")
    setLastName("")
    setPassword("")
    setConfirmPassword("")
  }

  const handleForm = async e => {
    e.preventDefault()

    if (!formValidation(email, firstName, lastName, password, confirmPassword, selectedPlan)) return

    try {
      const response = await axios.post(USER_REGISTRATION, { email, firstName, lastName, password, selectedPlan: selectedPlan }, { withCredentials: true })

      const { data } = response.data
      sessionStorage.setItem("userInfo", JSON.stringify(data))
      navigate("/profile")
      toast.success("Account Created Successfully!")
      clearForm()
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  useEffect(() => {
    getSubscriptionPlans()
  }, [])

  console.log(selectedPlan);

  return (
    <>
      <AuthNav />
      <h1 className="text-center mt-5">Sign-Up</h1>
      <Row className="px-5">
        <Col lg={5} xl={3} className="border-0 mx-auto p-4 mt-5 rounded rounded-lg shadow shadow-lg">
          <Form onSubmit={handleForm} autoComplete="off" noValidate>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="i.e. jdoe@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name: </Form.Label>
              <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" placeholder="LastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              <p className="text-secondary text-center">At least 8 characters, one symbol, one letter, one number</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Col>
                <select name="plans" id="plans" className="w-50 p-2 bg-secondary text-light rounded border-0" value={selectedPlan} onChange={e => setSelectedPlan(e.target.value)}>

                  <option value="">Select Your Plan</option>
                  
                  {plans.length > 0 ? (
                    plans.map(plan => (
                        <option key={plan._id} value={plan.subscriptionType}>
                        {plan.subscriptionType}
                      </option>
                    ))
                  ) : (
                    <option>No plans available</option>
                  )}
                </select>
              </Col>
            </Form.Group>

            <Button type="submit" variant="success" disabled={!formCompleted(email, firstName, lastName, password, confirmPassword, selectedPlan)}>
              Register
            </Button>
            <Row>
              <Col className="mt-3">
                Have an Account?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </Col>
              <Col sm={12} className="text-center text-secondary mt-5">
                <img className="mb-2" style={{ width: "20px" }} src="https://thumbnails-photos.amazon.com/v1/thumbnail/pbkD9hbSS1qwcLMsiRihkQ?ownerId=A1YK1TL6G91V5W&viewBox=654%2C700&groupShareToken=aqnuI1FhRcCGvnCKl8yytw.0Vlhzte8dtHMfwxWn9UNbk" alt="DigitalCircle Logo" />
                <p>
                  Powered by:&nbsp;
                  <span>
                    <Link className="text-primary" to={"https://www.digitalcircle.biz/"} style={{ textDecoration: "none" }}>
                      Digital Circle
                    </Link>
                  </span>
                </p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default RegistrationForm