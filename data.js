
import {c2} from "../img/c2.png"
import Ice1 from '../img/i1.png'
import Fruit1 from '../img/f1.png'
import Sea2 from '../img/fi2.png'
import Meat1 from '../img/s6.png'
// import Chick from '../img/c3.png'
import chick1 from '../img/m5.png'
import chick2 from '../img/s4.png'
import chick3 from '../img/r3.png'
import chick4 from '../img/m2.png'

export const food=[
    {
        title: "Pizza",
        start: "2024-08-15",
        imageUrl: "pizza.jpg",
        price: "$12",
        quantity: 0,
      },
      {
        title: "Burger",
        start: "2024-08-16",
        imageUrl: "burger.jpg",
        price: "$10",
        quantity: 0,
      },
      {
        title:"Fries",
        start: "2024-08-12",
        imageUrl: "fries.png",
        price: "$5",
        quantity:0
      }
]

export const heroData = [
  {id:1, name: 'Icecreame', description:"Chocolate & Vanilla", price:'$ 5.25', imageSrc: Ice1},
  {id:2, name: 'Berries', description:"Fresh Strawberries", price:'$ 4.50', imageSrc: Fruit1},
  {id:3, name: 'Seafood & Fish', description:"Fresh shells", price:'$ 9.40', imageSrc: Sea2},
  {id:4, name: 'Meat', description:"Beef salad", price:'$ 8.20', imageSrc: Meat1},
  // {id:5, name: 'Salads', description:"Chicken salad", price:'$ 18.75', imageSrc: Meat1},
]



// export const image=[{
//   id:1,
//   image1:"c2"},
// {
//   id:2,
//   image: "c3"
// }]


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

