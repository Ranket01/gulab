import React from "react";

export default function Welcomeblog(props) {
  return (
    <div className={props.paraShow ? "maindivforblogsFull" : "maindivforblogs"}>
      <img
        src="https://animeshka.org/uploads/posts/2023-01/1674575665_animeshka-org-p-wallpaper-website-script-instagram-59.jpg"
        alt="blog "
        style={{ width: "100%" }}
      />
      <h1>Welcome to Gulabvadi Blog Section</h1>
      <p>
        Welcome to our blog section where we share articles about the beloved
        mango fruit and its plant, the mango tree. Mangoes are a tropical fruit
        that are enjoyed all over the world for their sweet and juicy flavor, as
        well as their numerous health benefits.
      </p>

      <p>
        Our blog features a wide range of topics related to mangoes and mango
        trees. From the best ways to grow and care for your own mango tree, to
        delicious recipes featuring this delicious fruit, we've got you covered.
      </p>

      <p>
        If you're interested in growing your own mango tree, we have articles
        that cover everything from choosing the right variety of mango tree for
        your location, to soil and watering requirements, to pest and disease
        management. We'll even share some tips and tricks for getting the most
        out of your mango tree, such as how to encourage fruiting and how to
        properly prune your tree.
      </p>

      <p>
        For those who simply love to eat mangoes, our blog has plenty of
        articles on that topic as well. We'll share our favorite mango recipes,
        from classic mango salsa to more unique dishes like mango curry. We'll
        also provide tips for selecting and storing mangoes, so that you can
        enjoy them at their peak flavor and freshness.
      </p>

      <p>
        Whether you're a seasoned mango enthusiast or just getting started, our
        blog is the perfect place to learn more about this delicious fruit and
        its plant. So take a look around, read some of our articles, and
        discover all the wonderful things that mangoes and mango trees have to
        offer.
      </p>
    </div>
  );
}
