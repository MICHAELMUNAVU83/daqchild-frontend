import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddMix from "./components/AddMix";
import AddEvents from "./components/AddEvents";
import AddMerch from "./components/AddMerch";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Mixes from "./pages/Mixes";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import AddColorsAndSizes from "./pages/AddColorsAndSizes";
import Error from "./pages/Error";
import Loader from "./pages/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [storedToken]);

  const mixes = [
    {
      id: 3,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1677434070/n4req8bmfj0xqntt4txs.m4a",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1677434030/tsomwbawkbrcewxkuka6.jpg",
      name: "NAIROBI TO JOZI VOL.2 2022 AMAPIANO BANGERS mixxed by DJ GIBBZ THADAQCHILD",
      likes: 7431,
      plays: 4895,
      genre: "Amapiano",
      downloads: 3052,
      created_at: "2023-03-20T15:25:37.255Z",
      updated_at: "2023-04-10T13:13:33.459Z",
    },
    {
      id: 2,
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
      id: 1,
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
      id: 7,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 9,
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
    {
      id: 8,
      audio_mp3:
        "https://res.cloudinary.com/dakiak4mc/video/upload/v1678950798/t6v7qtxk3a7yoxec1pon.mp3",
      poster:
        "https://res.cloudinary.com/dakiak4mc/image/upload/v1678950747/rcrlc7oe1zyamdn9qog9.jpg",
      name: "DANCEHALL MIX 2023",
      likes: 8779,
      plays: 5061,
      genre: "Reggae",
      downloads: 3045,
      created_at: "2023-03-20T15:25:37.277Z",
      updated_at: "2023-04-10T19:03:49.556Z",
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          {loading ? (
            <Route path="/" element={<Loader />} />
          ) : (
            <Route
              path="/"
              element={
                <Home
                  setStoredToken={setStoredToken}
                  storedToken={storedToken}
                />
              }
            />
          )}

          {storedToken && (
            <>
              <Route
                path="/add-mix"
                element={
                  <AddMix
                    setStoredToken={setStoredToken}
                    storedToken={storedToken}
                  />
                }
              />
              <Route
                path="/add-events"
                element={
                  <AddEvents
                    setStoredToken={setStoredToken}
                    storedToken={storedToken}
                  />
                }
              />
              <Route
                path="/add-merch"
                element={
                  <AddMerch
                    setStoredToken={setStoredToken}
                    storedToken={storedToken}
                  />
                }
              />
              <Route
                path="/dashboard"
                element={
                  <DashBoard
                    setStoredToken={setStoredToken}
                    storedToken={storedToken}
                  />
                }
              />
              <Route
                path="/add-colors-and-sizes/:id"
                element={
                  <AddColorsAndSizes
                    setStoredToken={setStoredToken}
                    storedToken={storedToken}
                  />
                }
              />
            </>
          )}
          <Route
            path="/products/:id"
            element={
              <Product
                setStoredToken={setStoredToken}
                storedToken={storedToken}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart setStoredToken={setStoredToken} storedToken={storedToken} />
            }
          />
          <Route
            path="/mixes"
            element={
              <Mixes
                setStoredToken={setStoredToken}
                storedToken={storedToken}
                mixes={mixes}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setStoredToken={setStoredToken} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
