import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");
  const [bible, setBible] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    const fetchBible = async () => {
      const result = await axios.get("https://bible-api.com/john 3:16");
      console.log(result);
      setBible(result.data.text);
    };
    void fetchDog();
    void fetchBible();
  }, []);

  return (
    <>
      <img src={dogUrl} alt="" />
      <p>{bible}</p>
    </>
  );
}
