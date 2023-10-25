import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";

export default function MemberCard(props) {
  return (
    <div className="card">
      <Avatar source={props.source} />
      <div className="titles">
        <h3>{props.name}</h3>
        <h4>{props.title}</h4>
      </div>
      <SecondaryButton />
    </div>
  );
}
