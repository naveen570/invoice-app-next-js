import { Loader as LoaderIcon } from "lucide-react";
export const Loader = () => {
  return (
    <section className="flex flex-col gap-2 items-center">
      <span className="animate-spin">
        <LoaderIcon />
      </span>
      <p>Fetching Data...</p>
    </section>
  );
};
