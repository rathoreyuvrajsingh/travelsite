import React from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

const RecipeCard = (props) => {
  // const navigate = useNavigate();

  // const pavbhaji_page = () => {
  //   // actual route you want to navigate to
  //   navigate('/pavbhaji ');
  // };

  return (
    <div>
      <div className="recipecard">
        <div className="image"><img src={props.imgsrc} alt="" /></div>
        <div className="title">{props.title}</div>
      </div>
      {/* <div className="cards">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgsrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        
        <button   className='button '>View Recipe</button>
      </Card.Body>
    </Card> */}
    </div>
  );
};

export default RecipeCard;
