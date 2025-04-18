import Title from "./Title";

export default function ClothCategory() {
  return (
    <div className="mx-5 rounded-3xl bg-zinc-200 flex flex-col justify-center items-center gap-5 pb-5 mt-6">
      <Title title="BROWSE BY DRESS STYLE" className="mx-10 mb-4 mt-9" />
      <button>
        <img src="/images/style (1).png" alt="" />
      </button>
      <button>
        <img src="/images/style (2).png" alt="" />
      </button>
      <button>
        <img src="/images/style (3).png" alt="" />
      </button>
      <button>
        <img src="/images/style (4).png" alt="" />
      </button>
    </div>
  );
}
