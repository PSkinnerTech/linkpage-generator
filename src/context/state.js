import { createContext, useState } from "react";
import axios from "axios";

export const StateContext = createContext();

const data = [
  {
    image: "/templates/template-1.jpg",
  },
  {
    image: "/templates/template-2.jpg",
  },
  {
    image: "/templates/template-3.jpg",
  },
  {
    image: "/templates/template-4.jpg",
  },
  {
    image: "/templates/template-5.jpg",
  },
  {
    image: "/templates/template-6.jpg",
  },
  {
    image: "/templates/template-7.jpg",
  },
  {
    image: "/templates/template-8.jpg",
  },
  {
    image: "/templates/template-9.jpg",
  },
  {
    image: "/templates/template-10.jpg",
  },
];

export default function State({ children }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState("");
  const [profileImage, setProfileImage] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageData, setImageData] = useState(null);
  const [templates] = useState(data);
  const [value, setValue] = useState(0);

  const { image } = templates[value];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: link,
      };
      setLinks([newItem, ...links]);
      setLink("");
    } else {
      alert("Input cannot be empty");
    }
  };

  const handleDelete = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const uploadProfileImage = () => {
    const formData = new FormData();
    formData.append("file", selectedImages);
    formData.append("upload_preset", "smsymq5y");

    const postProfileImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/sankara/image/upload",
          formData
        );
        setImageData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    postProfileImage();
  };

  const context = {
    name,
    setName,
    bio,
    setBio,
    links,
    link,
    setLinks,
    setLink,
    handleSubmit,
    handleDelete,
    uploadProfileImage,
    profileImage,
    setProfileImage,
    selectedImages,
    setSelectedImages,
    imageData,
    image,
    templates,
    value,
    setValue,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
