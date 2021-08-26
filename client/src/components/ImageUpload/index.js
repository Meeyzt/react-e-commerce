import React, { useState } from "react";
import { Input } from "semantic-ui-react";

function Index() {
  const [images, setImages] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImages(e.target.files[0]);
    }
  };
  return <Input onChange={(e) => handleChange(e)} type="file" />;
}

export default Index;
