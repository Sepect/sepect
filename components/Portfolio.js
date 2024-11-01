"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Makole id",
    type: "img",
    src: "assets/img/projects/my/makole 2.jpg",
    img: "assets/img/projects/my/makole.jpg",
    project: "Android and IOS",
    client: "JNE",
    langages: "Laravel, React native",
    previewLink: "Makole.id",
  },
  {
    id: 2,
    title: "Makole id",
    type: "img",
    src: "assets/img/projects/my/makole.jpg",
    img: "assets/img/projects/my/webmakole.jpg",
    project: "Website",
    client: "JNE",
    langages: "Laravel",
    previewLink: "Makole.id",
  },
  {
    id: 3,
    title: "Sulawesi Express",
    type: "img",
    src: "assets/img/projects/my/sulex 1.jpg",
    img: "assets/img/projects/my/sulex.jpg",
    project: "Android",
    client: "Sulawesi Express",
    langages: "Laravel, React Native",
    previewLink: "sulex.id",
  },
  {
    id: 4,
    title: "Merabu Magelang",
    type: "img",
    src: "assets/img/projects/my/merabu.png",
    img: "assets/img/projects/my/merabu.png",
    project: "Android",
    client: "DIPStrategy",
    langages: "React Native",
    previewLink: "",
  },
  {
    id: 5,
    title: "DBS Indonesia",
    type: "img",
    src: "assets/img/projects/my/dbs.png",
    img: "assets/img/projects/my/dbs.png",
    project: "Android",
    client: "DIPStrategy",
    langages: "ReactJS, Angular",
    previewLink: "",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
