import CommentCard from "./CommentCard";
import Title from "./Title";

export default function HappyCustomers() {
  return (
    <div className="mx-5 mt-15 ">
      <div>
        <Title
          title="OUR HAPPY CUSTOMERS"
          className="leading-10 tracking-wide text-left text-5xl"
        />
      </div>
      <CommentCard />
    </div>
  );
}
