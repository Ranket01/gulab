import React, { useState } from "react";
import "./NavigationForBlog.css";
import { Link } from "react-router-dom";
import './BlogOne.css'

export default function NavigationForBlog(props) {
  const { togglestate } = props;
  const [mobileToggle, setMobileToggle] = useState(false);

  const [classMenu, setClassMenu] = useState("navbar-containerForBlog");
  const [subClassMenu, setSubClassMenu] = useState("nav-itemOfBlog");

  const toggleMenuHandler = () => {
    setMobileToggle(!mobileToggle);
    if (mobileToggle) {
      setClassMenu("navbar-containerForBlogNone");
      setSubClassMenu("nav-itemOfBlogNone");
    } else {
      setClassMenu("navbar-containerForBlog");
      setSubClassMenu("nav-itemOfBlog");
    }
    togglestate(mobileToggle);
  };

  return (
    <>
      <button id="togglebuttonForMenu" onClick={toggleMenuHandler}>
        Menu
      </button>
      <div className={classMenu}>
        <Link to="/blogs/blogone" className={subClassMenu}>
          The History and Origin of Mango Farming: A Deep Dive
        </Link>
        <Link to="/blogs/blogtwo" className={subClassMenu}>
          How to Start Your Own Mango Farm: A Comprehensive Guide
        </Link>
        <Link to="/blogs/blogthree" className={subClassMenu}>
          The Benefits of Mango: Why You Should Add It to Your Diet
        </Link>
        <Link to="/blogs/blogfour" className={subClassMenu}>
          10 Delicious Mango Recipes to Try Today
        </Link>

        <Link to="/blogs/blogfive" className={subClassMenu}>
          Mango Varieties: A Guide to the Different Types of Mangoes
        </Link>

        <Link to="/blogs/blogsix" className={subClassMenu}>
          The Top Mango Producing Countries in the World
        </Link>

        <Link to="/blogs/blogseven" className={subClassMenu}>
          Mango Pests and Diseases: How to Identify and Control Them
        </Link>

        <Link to="/blogs/blogeight" className={subClassMenu}>
          From Farm to Table: The Journey of a Mango
        </Link>

        <Link to="/blogs/blognine" className={subClassMenu}>
          The Role of Mango in Traditional Medicine and Folklore
        </Link>

        <Link to="/blogs/blogten" className={subClassMenu}>
          Mango Sustainability: The Importance of Agroforestry
        </Link>

        <Link to="/blogs/blogeleven" className={subClassMenu}>
          The Mango Industry: Trends, Challenges, and Opportunities
        </Link>

        <Link to="/blogs/blogtwelve" className={subClassMenu}>
          Mango Harvesting: Tips and Tricks for Maximizing Yield
        </Link>

        <Link to="/blogs/blogthirteen" className={subClassMenu}>
          Mango Nutrition: What You Need to Know
        </Link>

        <Link to="/blogs/blogfourteen" className={subClassMenu}>
          Mango Export: A Look at the Global Market
        </Link>

        <Link to="/blogs/blogfifteen" className={subClassMenu}>
          The Art of Mango Processing and Preservation
        </Link>

        <Link to="/blogs/blogsixteen" className={subClassMenu}>
          The Future of Mango Cultivation: Innovations and Technologies
        </Link>

        <Link to="/blogs/blogseventeen" className={subClassMenu}>
          How Mango Cultivation Impacts the Environment and Climate
        </Link>

        <Link to="/blogs/blogeighteen" className={subClassMenu}>
          Mango Folklore and Legends from Around the World
        </Link>

        <Link to="/blogs/blognineteen" className={subClassMenu}>
          The Cultural Significance of Mango: Celebrations and Festivals
        </Link>

        <Link to="/blogs/blogtwenty" className={subClassMenu}>
          Mango and Health: Studies on the Antioxidant Properties
        </Link>

        <Link to="/blogs/blogtwentyone" className={subClassMenu}>
          The Mango Trade: Challenges and Opportunities for Smallholder Farmers
        </Link>

        <Link to="/blogs/blogtwentytwo" className={subClassMenu}>
          The Mango Flowering and Fruiting Process: What You Need to Know
        </Link>

        <Link to="/blogs/blogtwentythree" className={subClassMenu}>
          The Mango Supply Chain: Challenges and Opportunities for
          Sustainability
        </Link>

        <Link to="/blogs/blogtwentyfour" className={subClassMenu}>
          Mango Agribusiness: Opportunities for Investment and Growth
        </Link>

        <Link to="/blogs/blogtwentyfive" className={subClassMenu}>
          The Role of Women in Mango Farming and Cultivation
        </Link>

        <Link to="/blogs/blogtwentysix" className={subClassMenu}>
          The Importance of Mango Research and Development
        </Link>

        <Link to="/blogs/blogtwentyseven" className={subClassMenu}>
          Mango and Biodiversity: A Look at the Ecosystem Services
        </Link>

        <Link to="/blogs/blogtwentyeight" className={subClassMenu}>
          The Mango Marketing Mix: Strategies for Success
        </Link>

        <Link to="/blogs/blogtwentynine" className={subClassMenu}>
          The Journey of a Mango Seed: From Planting to Harvesting.{" "}
        </Link>
      </div>

      
    </>
  );
}
