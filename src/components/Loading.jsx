import LoadingIcon from "../assets/loading.svg";
import "../styles/loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <img className="loading__icon" src={LoadingIcon} alt="Loading Icon" />
    </div>
  );
}
