/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/dataworld4.png";

const imageAltText = "A male human posing in front of a data science themed background.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "I became an affiliate partner @ Proton 🎉",
    description:
      "Make the switch to Proton today, and experience the freedom and peace of mind that come with truly private internet access. Protect your data, reclaim your privacy, and join the movement for a better, safer online world.",
    url: "https://go.getproton.me/SHfq",
  },
  {
    title: "GitHub Repositories",
    description:
      "From Python mobile app foundations to data visualizations and more. I am determined to continue showing the results of my passion in the tech world to expressively communicate through activism, teaching, and advancement for all.",
    url: "https://github.com/Nichols-Tech?tab=repositories",
  },
  {
    title: "Coursera",
    description:
      "I've gathered over 19 certificates relating to Python, Data Privacy, Data Engineering, Data Analytics, Visualizations, Microsoft Azure, Blockchain, Finance and more. These are preludes to my certification goals in Azure.",
    url: "https://www.coursera.org/learner/joshua-samuel-nichols",
  },
  {
    title: "MBA in Data Science",
    description:
      "A lot of professionals in the tech space would say you don't need a degree to code or break into tech. While this is true, I'm obsessed with learning. So, I went for a Masters program to further my expertise in the field of Data + Business.",
    url: "hhttps://www.ssbm.ch/online-mba-in-data-science/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
