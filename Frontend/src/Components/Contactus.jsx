import { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const SuccessAlert = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  animation: ${fadeIn} 0.5s ease-in-out, ${fadeOut} 0.5s ease-in-out 2s forwards;
`;

const ValidationError = styled.div`
  background-color: #ff8080;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

const CloseButton = styled.span`
  color: white;
  float: right;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.message) {
      setShowErrorAlert(true);
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:3000/api/submitForm", formData);
      
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      });
      
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseAlert = () => {
    setShowSuccessAlert(false);
    setShowErrorAlert(false);
  };

  useEffect(() => {
    let timeout;
    if (showSuccessAlert || showErrorAlert) {
      timeout = setTimeout(() => {
        setShowSuccessAlert(false);
        setShowErrorAlert(false);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showSuccessAlert, showErrorAlert]);

  return (
    <>
      <Form>
        <b>
          <center>
            <h5>Any Inquiry Contact Us</h5>
          </center>
        </b>
        <br />
        <Label className="required">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <Label className="required">Phone Number</Label>
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <Label className="required">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <Label className="required">Message</Label>
        <Textarea
          rows={3}
          name="message"
          placeholder="Enter your query"
          value={formData.message}
          onChange={handleInputChange}
        />

        <center>
          <Button className="btn" onClick={(e) => handleSubmit(e)}>
            {loading ? (
              <center><Spinner /></center>
            ) : (
              "Submit"
            )}
          </Button>
        </center>
      </Form>

      {showSuccessAlert && (
        <SuccessAlert>
          <p>Form submitted successfully!</p>
          <CloseButton onClick={handleCloseAlert}></CloseButton>
        </SuccessAlert>
      )}

      {showErrorAlert && (
        <ValidationError>
          <p>Please fill in all required fields.</p>
          <CloseButton onClick={handleCloseAlert}></CloseButton>
        </ValidationError>
      )}
    </>
  );
};

const Form = styled.form`
  min-width: 500px;
  min-height: 720px;
  margin: 0 auto;
  padding: 40px;
  background-color: white;
  backdrop-filter: blur(9px);
  box-shadow: 0 0 7px 7px #00000030;
  border-radius: 10px;
  
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  &.required::after {
    content: " *";
    color: red;
  }
`;

const Input = styled.input`
  background: #ffd3d3 none repeat scroll 0 0;
  border: 1px solid #f9f9f9;
  width: 100%;
  padding: 12px 16px;
  border-radius: 4px;
  ::placeholder {
    color: black;
  }
`;

const Textarea = styled.textarea`
  background: #ffd3d3 none repeat scroll 0 0;
  border: 1px solid #ffb3b2;
  width: 100%;
  height: 120px;
  padding: 12px 16px;
  border-radius: 4px;
  ::placeholder {
    color: black;
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${rotate} 1s linear infinite;
`;

const Button = styled.button`
  background: #932432 none repeat scroll 0 0;
  color: #fff;
  display: inline-block;
  font-weight: 600;
  padding: 6px 0;
  text-transform: capitalize;
  width: 150px;
  margin-top: 20px;
  font-size: 16px;

  :hover {
    background-color: #932440;
    color: black;
  }
`;

export default ContactForm;
