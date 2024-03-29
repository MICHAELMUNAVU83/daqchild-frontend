import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mixes from "../components/Mixes";
import Events from "../components/Events";
import Photos from "../components/Photos";

import NavBar from "../components/NavBar";
import AdminNavbar from "../components/AdminNavbar";


const Home = ({ setStoredToken, storedToken }) => {
  // const [mixes, setMixes] = useState([

  // ]);
  // const [events, setEvents] = useState({});
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/mixes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMixes(data);
  //     });
  // }, []);
  // useEffect(() => {
  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/events")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEvents(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);

  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/events")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setEvents(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://gibbz-tha-daqchild-api.herokuapp.com/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);
  const mixes = [
    {
      id: 1,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1691566817/e074-7f1b-4261-94b4-4b90061f6987_mwpcri.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1691566824/Screenshot_2023-08-09_at_10.39.37_uiptmm.png",
      name: "DJ GIBBZ THADAQCHILD feat MC JOSEE live club mix ''ALUTA'' Mo spice",
      likes: 9031,
      plays: 5432,
      genre: "All Genres",
      downloads: 6282,
      created_at: "2023-03-20T15:25:37.255Z",
      updated_at: "2023-04-10T13:13:33.459Z",
    },
    {
      id: 2,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1691558177/9f27-0abf-45b6-ada6-41ae5e90cc42_mtkhcq.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1691558393/Screenshot_2023-08-09_at_08.17.48_gksslb.png",
      name: "DAQCHILD AND MIDO LIVE",
      likes: 8931,
      plays: 4012,
      genre: "All Genres",
      downloads: 6282,
      created_at: "2023-03-20T15:25:37.255Z",
      updated_at: "2023-04-10T13:13:33.459Z",
    },

    {
      id: 3,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1691558177/9f27-0abf-45b6-ada6-41ae5e90cc42_mtkhcq.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677434030/tsomwbawkbrcewxkuka6.jpg",
      name: "NAIROBI TO JOZI VOL.2 2022 AMAPIANO BANGERS mixxed by DJ GIBBZ THADAQCHILD",
      likes: 7431,
      plays: 4895,
      genre: "All Genres",
      downloads: 3052,
      created_at: "2023-03-20T15:25:37.255Z",
      updated_at: "2023-04-10T13:13:33.459Z",
    },

    {
      id: 4,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677433441/lzcrwrnniyj8axb8qapo.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677433393/ion8j6inzua5nuodosrs.jpg",
      name: "The Lockdown Sessions Ft Gibbz Tha Daqchild Dj Babu Dubai",
      likes: 5320,
      plays: 4804,
      genre: "Hip Hop",
      downloads: 2775,
      created_at: "2023-03-20T15:25:37.252Z",
      updated_at: "2023-04-06T08:53:46.796Z",
    },
    {
      id: 5,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677432880/rgaxrulvnuzngznslufm.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677432825/ipqk229k45berfp1s5nq.jpg",
      name: "KOGT live at HIDEOUT DUBAI ",
      likes: 9031,
      plays: 4827,
      genre: "Afrobeat",
      downloads: 3816,
      created_at: "2023-03-20T15:25:37.247Z",
      updated_at: "2023-04-10T13:13:53.611Z",
    },
    {
      id: 6,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1678950590/lrxntgf5mxqdzqjeeg1i.mp3",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1678950420/ghlciais4ytokwdpj8dq.jpg",
      name: "LOCKDOWN SESSIONS 17TH FEB",
      likes: 8564,
      plays: 4254,
      genre: "All Genres",
      downloads: 2840,
      created_at: "2023-03-20T15:25:37.273Z",
      updated_at: "2023-04-10T11:02:03.463Z",
    },
    {
      id: 7,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677434668/hhyyufxmoavvqzis6q3w.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677434620/hxdjardu8eoksmnde8z7.jpg",
      name: "''IT IS WHAT IT IS'' DJ GIBBZ THADAQCHILD mix",
      likes: 9980,
      plays: 4639,
      genre: "Afrobeat",
      downloads: 2629,
      created_at: "2023-03-20T15:25:37.260Z",
      updated_at: "2023-04-10T11:02:19.052Z",
    },
    {
      id: 8,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677435367/n7wxyxbbq6bwbd3brrt6.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677435243/ppyrqcnhq4r0qhjnjyi1.jpg",
      name: "LOCKDOWN SESSION with Dj Gibbz thadaqchild x Dj Grauchi",
      likes: 7068,
      plays: 4912,
      genre: "All Genres",
      downloads: 1080,
      created_at: "2023-03-20T15:25:37.264Z",
      updated_at: "2023-04-10T13:19:33.466Z",
    },
    {
      id: 9,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677435797/czye9itoflesxcgldbmq.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677435765/pax26zdvoel4i6ddma31.jpg",
      name: "LOCKDOWN SESSION 5.0 THICK THIGHS ft KAYTHEDJ",
      likes: 8387,
      plays: 4054,
      genre: "Amapiano",
      downloads: 3756,
      created_at: "2023-03-20T15:25:37.268Z",
      updated_at: "2023-04-09T21:33:46.719Z",
    },
    {
      id: 10,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1680069563/f27hecsqfqi5cok5h6jv.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1680069513/yeb6gut3cstrgiueiuyl.jpg",
      name: "Trace Radio Africe Live Mix",
      likes: 8021,
      plays: 4658,
      genre: "All Genres",
      downloads: 3753,
      created_at: "2023-03-29T05:59:35.051Z",
      updated_at: "2023-04-10T19:03:27.777Z",
    },
  ];

  const events = [
    {
      id: 1,
      location: "Undeground Bar & Lounge",
      date: "2023-08-10T00:00:00.000",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1691558167/WhatsApp_Image_2023-08-09_at_7.55.04_AM_1_p2mynb.jpg",
    },
  ];

  return (
    <div>
      {storedToken ? (
        <AdminNavbar setStoredToken={setStoredToken} />
      ) : (
        <NavBar />
      )}
      <Hero />
      {events && <Events events={events} />}

      {mixes && <Mixes mixes={mixes} />}

      {/* {products && <Merch />} */}

      <Photos />

      <Footer />
    </div>
  );
};

export default Home;
