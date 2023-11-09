import BlobBlue from "../assets/blob-blue.svg";
import BlobYellow from "../assets/blob-yellow.svg";
import "../styles/background-blobs.css";

export default function BackgroundBlobs() {
  return (
    <>
      <img className="blob-blue" src={BlobBlue} alt="Blue Blob" />
      <img className="blob-yellow" src={BlobYellow} alt="Yellow Blob" />
    </>
  );
}
