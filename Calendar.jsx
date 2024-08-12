import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  LinearProgress,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/system";
import c2 from "../img/c2.png";
import c3 from "../img/c3.png";
import c6 from "../img/c6.png"


const CalendarContainer = styled("div")({
  padding: "28px",
  Top:"20%",
  marginTop:"10px",
  width: "50%",
  height: "50%",
  marginLeft:"10px",
  background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  borderRadius: "15px",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.3)",
  },
});

const StyledEvent = styled("div")({
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([
    {
      title: "Pizza",
      start: "2024-08-15",
      imageUrl: c2,
      price: "$12",
      quantity: 0,
    },
    {
      title: "Burger",
      start: "2024-08-16",
      imageUrl: c3,
      price: "$10",
      quantity: 0,
    },
    {
      title: "Fries",
      start: "2024-08-12",
      imageUrl: c6,
      price: "$5",
      quantity: 0,
    },
  ]);

  const handleClose = () => setOpen(false);

  
const handleShow = (info) => {
  setSelectedEvent(info.event);
  setFoodDetails({
    title: info.event.title,
    imageUrl: info.event.extendedProps.imageUrl,
    price: info.event.extendedProps.price,
    quantity: info.event.extendedProps.quantity,
  });
  setOpen(true);
};

const handleOrder = () => {
  setEvents(
    events.map(function(item){
     {
      if(item.title===selectedEvent.title){
        return {...item, quantity:item.quantity+1}
      }
     else{
      return item;      
     }
     }
    }
    )
  );
  setFoodDetails((prevDetails) => ({
    ...prevDetails,
    quantity: prevDetails.quantity + 1,
  }));
  handleClose();
};

const handleDelete = () => {
  if (foodDetails.quantity > 0) {
    setEvents(
      events.map(function(item){
        if (item.title === selectedEvent.title) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );

    setFoodDetails(function(item){
    return  {...item,
      quantity:item.quantity - 1,
  }});
  }
};

  const progressBarColor =
    foodDetails.quantity > 15
      ? "green"
      : foodDetails.quantity > 10
      ? "orange"
      : "blue";

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleShow}
        eventContent={(eventInfo) => (
          <StyledEvent>{eventInfo.event.title}</StyledEvent>
        )}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Zoom}
        keepMounted
        style={{width:"30%",
          height: "50%",
          marginLeft:"30%",
          top:"15%"
        }}
      >
        <DialogTitle>{foodDetails.title}</DialogTitle>
        <DialogContent>
          <img
            src={foodDetails.imageUrl}
            alt={foodDetails.title}
            style={{ width: "50%", height: "10%" }}
          />
          <Typography variant="h6" style={{fontSize:"20px"}}>Price: {foodDetails.price}</Typography>
          <Typography variant="subtitle1">
            Quantity Ordered: {foodDetails.quantity}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(foodDetails.quantity / 15) * 100}
            style={{
              marginTop: 16,
              backgroundColor: "#e0e0e0",
              height: 10,
              borderRadius: 5,
            }}
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: progressBarColor,
                transition: "background-color 0.3s, width 0.3s",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleOrder}>
            Order Now
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </CalendarContainer>
  );
};

export default Calendar;
