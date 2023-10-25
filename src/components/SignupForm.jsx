import PrimaryButton from "./PrimaryButton";

export default function SignupForm() {
  return (
    <form>
      <label htmlFor="emailInput">
        <input type="email" name="emailInput" id="emailInput" placeholder="Enter an email" />
      </label>
      <PrimaryButton tekst="Send Invite" />
    </form>
  );
}
