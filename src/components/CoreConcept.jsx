// 3. Props are passed to the component as an argument
// Example: function CoreConcepts(props) {}
// Object destructuring is used to extract the values from the props object
export default function CoreConcepts({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }