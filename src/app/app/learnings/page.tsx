import ProgramCard from "@/components/ui/learnings/ProgramCard";

export default function page() {
  return (
    <div className="mx-auto mt-8 max-w-[1280px]">
      <div className=" mt-8  mx-auto rounded-2xl p-4 bg-background w-[80%]">
        <h1 className="text-primary  text-3xl font-semibold tracking-wide">
          Programming Language
        </h1>
        <ProgramCard />
      </div>
    </div>
  );
}
