import Carousel from "@/components/Carousel/Carousel";
import Heading from "@/components/Heading/Heading";
import Navbar from "@/components/Navbar/Navbar";
import NavigationArrows from "@/components/NavigationArrows/NavigationArrows";
import Image from "next/image";
import Head from "next/head";

export default function about() {
  const deptList = [
    "Applied & Natural Sciences",
    "Business & Media",
    "Computing & IT",
    "Engineerin",
    "Health Sciences",
    "Trades & Apprenticeships",
  ];
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="parent-about">
        <Navbar />
        <div className="parent-content-about">
          <Heading title="About Us" />
          <div className="padding-cont">
            <div className="about-content-container">
              <p>
                We are proud to deliver an education that goes beyond textbooks
                and classrooms.
              </p>
              <p>
                Our students gain the technical skills, real-world experience,
                and problem-solving ability <br /> needed to embrace complexity
                and lead innocation in a rapidly changing workforce.
              </p>
              <p>
                Through close collaboration with industry, our network of alumni
                and partners continue to <br /> achieve global success.
              </p>
            </div>
            <div className="about-subhead">
              <h2>Information Sessions</h2>
              <p>
                Information Sessions are a simple way to figure out the next
                step along your career path. <br /> Learn more about the
                programs that interest you.
              </p>
            </div>
            <div className="about-subhead">
              <h3>Big Info</h3>
              <p>
                Big Info is the largest program expo and information session at
                BCIT. It's your chance to find <br /> out about all our
                programs-from business, computing, and health to engineering,
                trades,
                <br /> and applied sciences.
              </p>
              <p>
                If you missed our fall event the next Big Info is scheduled to
                return on February 15, 2023.
              </p>
            </div>
            <div className="about-subhead">
              <h2>Campus Tours</h2>
              <p>
                Tours run weekdays September to May, on our Burnaby campus. See
                BCIT in person and get a <br /> taste of campus life.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="dept-container">
          <Heading title="DEPARTMENTS" />
          <div className="list-arrows-cont">
            <div className="list-cont">
              <ul>
                {deptList.map((dept, i) => {
                  return <li key={i}>{dept}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <NavigationArrows />
      </div>
    </>
  );
}
