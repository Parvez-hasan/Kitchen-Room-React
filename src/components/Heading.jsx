import { ChefHat } from "lucide-react";

const Heading = ({ title, children }) => {
  return (
   <div className="mt-4">
    <h2
      className={`bg-[url(/title-bg.png)] flex justify-center items-center gap-1 text-2xl md:text-4xl font-bold text-center bg-no-repeat pb-20 pt-10 bg-center`}
      style={{ backgroundSize: "100% 100%" }}>
      <ChefHat size={40} />
      {title} {children}
    </h2>
   </div>
  );
};

export default Heading;