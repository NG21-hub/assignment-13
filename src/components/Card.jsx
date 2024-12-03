const Card = (props) => {
    return (
      <div className="card">
        <h1 className="card-title">{props.BookName || props.name}</h1>
        <p>{props.description}</p>
        <div className="img-box">
          <img src={props.image} alt={props.BookName || props.name} />
        </div>
        <button
          className="btn"
          onClick={() =>
            props.onClick
              ? props.onClick(props.BookName || props.name)
              : console.log("No function provided")
          }
        >
          Click me
        </button>
      </div>
    );
  };
  
  export default Card;
  