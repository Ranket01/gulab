import React, { useState } from "react";
import Navbar from "./Navbar";
import Crousal from "./Crousal";
import Footer from "./Footer";
import AdminLogin from "./adminLogin";
import { Route, Routes } from "react-router-dom";
import Agro from "./Agro";
import Inquiry from "./Inquiry";
import OrderNow from "./OrderNow";
import NavigationForBlog from "../Blogs/NavigationForBlog";
import BlogOne from "../Blogs/BlogOne";
import Blogtwo from "../Blogs/Blogtwo";
import Blogthree from "../Blogs/Blogthree";
import Blogfour from "../Blogs/Blogfour";
import Blogfive from "../Blogs/Blogfive";
import Blogsix from "../Blogs/Blogsix";
import Blogseven from "../Blogs/Blogseven";
import Blogeight from "../Blogs/Blogeight";
import Blognine from "../Blogs/Blognine";
import Blogten from "../Blogs/Blogten";
import Blogeleven from "../Blogs/Blogeleven";
import Blogtwelve from "../Blogs/Blogtwelve";
import Blogthirteen from "../Blogs/Blogthirteen";
import Blogfourteen from "../Blogs/Blogfourteen";
import Blogfifteen from "../Blogs/Blogfifteen";
import Blogsixteen from "../Blogs/Blogsixteen";
import Blogseventeen from "../Blogs/Blogseventeen";
import Blogeighteen from "../Blogs/Blogeighteen";
import Blognineteen from "../Blogs/Blognineteen";
import Blogtwenty from "../Blogs/Blogtwenty";
import Blogtwentyone from "../Blogs/Blogtwentyone";
import Blogtwentytwo from "../Blogs/Blogtwentytwo";
import Blogtwentythree from "../Blogs/Blogtwentythree";
import Blogtwentyfour from "../Blogs/Blogtwentyfour";
import Blogtwentyfive from "../Blogs/Blogtwentyfive";
import Blogtwentysix from "../Blogs/Blogtwentysix";
import Blogtwentyseven from "../Blogs/Blogtwentyseven";
import Blogtwentyeight from "../Blogs/Blogtwentyeight";
import Blogtwentynine from "../Blogs/Blogtwentynine";
import Welcomeblog from "../Blogs/Welcomeblog";



export default function HomePage() {
  const [paraShow, setparaShow] = useState(null);

  const togglestate = (value) => {
    if (value) {
      setparaShow(true);
    } else {
      setparaShow(false);
    }
    return value;
  };

  return (
    <>
      <Navbar />
      <Routes>
        
        
        <Route
          path="/blogs"
          element={
            <>
          <NavigationForBlog togglestate={togglestate} paraShow={paraShow}/>
          <Welcomeblog  paraShow={paraShow}/>
          </>
        }
        />


        <Route
          path="/blogs/blogone"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <BlogOne paraShow={paraShow} />
            </>
          }
        />



        <Route
          path="/blogs/blogtwo"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwo paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogthree"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogthree paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogfour"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogfour paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogfive"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogfive paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogsix"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogsix paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogseven"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogseven paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogeight"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogeight paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blognine"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blognine paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogten"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogten paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogeleven"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogeleven paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwelve"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwelve paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogthirteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogthirteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogfourteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogfourteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogfifteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogfifteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogsixteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogsixteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogseventeen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogseventeen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogeighteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogeighteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blognineteen"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blognineteen paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwenty"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwenty paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentyone"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentyone paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentytwo"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentytwo paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentythree"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentythree paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentyfour"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentyfour paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentyfive"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentyfive paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentysix"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentysix paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentyseven"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentyseven paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentyeight"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentyeight paraShow={paraShow} />
            </>
          }
        />
        <Route
          path="/blogs/blogtwentynine"
          element={
            <>
              <NavigationForBlog togglestate={togglestate} />{" "}
              <Blogtwentynine paraShow={paraShow} />
            </>
          }
        />
        <Route exact path="/inquiry" element={<Inquiry />} />
        <Route exact path="/agro" element={<Agro />} />
        <Route exact path="/mainfooterforcall" element={<Footer />} />
        <Route exact path="/adminLogin" element={<AdminLogin />} />
        <Route
          exact
          path="/"
          element={
            <>
              {" "}
              <Crousal /> <OrderNow /> <Footer />{" "}
            </>
          }
        />
      </Routes>
    </>
  );
}
