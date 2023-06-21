export default function About(props) {
  console.log(props.desc, "dwadwejkn");
  return (
    <div className="about">
      <h2>{props.desc.h2}</h2>
      <p>{props.desc.p}</p>
    </div>
  );
}
