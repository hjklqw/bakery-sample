import { BiLeaf, BiHomeHeart } from "react-icons/bi";
import { CiWheat } from "react-icons/ci";
import { HiOutlineBan } from "react-icons/hi";

export const commitments: {
  name: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    name: "Organic",
    description:
      "All of our products use 100% certified organic, stone-milled flour.",
    icon: <BiLeaf />,
  },
  {
    name: "Local",
    description:
      "We partner directly with local farms to ensure the best quality and the freshest ingredients.",
    icon: <BiHomeHeart style={{ marginTop: "-0.5rem" }} />,
  },
  {
    name: "Gluten-free",
    description:
      "And so delicious that you won't be able to tell the difference!",
    icon: (
      <div>
        <HiOutlineBan
          style={{
            position: "absolute",
            top: "13%",
            left: "13%",
            strokeWidth: "1.3px",
            fontSize: "1.3em",
          }}
        />
        <CiWheat
          style={{
            fontSize: "1.5em",
            marginTop: "1.3rem",
            strokeWidth: "0.1px",
          }}
        />
      </div>
    ),
  },
];
