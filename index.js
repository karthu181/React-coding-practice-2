const Button = (props) => {
  const { className, children } = props;

  return <button className={`button ${className}`}>{children}</button>;
};

const element = (
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-button">Like</Button>
        <Button className="comment-button">Comment</Button>
        <Button className="share-button">Share</Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
