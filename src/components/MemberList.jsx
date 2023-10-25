import MemberCard from "./MemberCard";

export default function MemberList() {
  return (
    <ul className="memberList">
      <h2>Team members previously added to projects</h2>
      <MemberCard source="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="Lindsay Walton" title="Front-end Developer" />
      <MemberCard
        source="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        name="
Courtney Henry"
        title="Designer"
      />
      <MemberCard source="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" name="Tom Cook" title="Director of Product" />
    </ul>
  );
}
