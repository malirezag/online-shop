import CommentCard from "./CommentCard";
import Title from "./Title";

export default function HappyCustomers() {
  return (
    <div className="xl:my-10">
      <Title
        title="OUR HAPPY CUSTOMERS"
        className="leading-10 tracking-wide md:text-left text-5xl sm:text-4xl lg:text-5xl my-10 mx-5  "
      />
      <div className=" flex mx-auto md:mx-5 flex-wrap flex-col md:flex-row gap-6 sm:gap-8 mb-8 items-center  ">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
}
