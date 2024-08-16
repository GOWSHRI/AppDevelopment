import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactWithMap = () => {
  const form = useRef();
  const [mapCenter, setMapCenter] = useState([11.0168, 76.9558]); // Coimbatore coordinates
  const [markerPosition, setMarkerPosition] = useState([11.0168, 76.9558]); // Coimbatore coordinates

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y62s9an",
        "template_vqxo0oe",
        form.current,
        "NMGkWDxmkB0KZae6f"
      )
      {/*.then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );*/}
  };

  return (
    <StyledContainer>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
      <StyledMapContainer>
        <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={markerPosition}>
            <Popup>
              We are here in Coimbatore!
            </Popup>
          </Marker>
        </MapContainer>
      </StyledMapContainer>
    </StyledContainer>
  );
};

export default ContactWithMap;

// Styled components
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
`;

const StyledContactForm = styled.div`
  width: 45%;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    textarea {
      height: 100px;
      resize: none;
    }

    input[type="submit"] {
      margin-top: 20px;
      cursor: pointer;
      background:#0000FF;
      color: white;
      border: none;
      padding: 10px;
    }
  }
`;

const StyledMapContainer = styled.div`
  width: 50%;
  height: 400px;
`;
