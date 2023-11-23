export default function checkEmailValidity(email: string) {
  return email.match(/^\S+@\S+\.\S+$/);
}
