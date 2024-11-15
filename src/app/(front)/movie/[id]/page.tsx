import React from "react";

import Details from "@/components/Details/Details";

type MovieProps = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: MovieProps) => {
  const id = (await params).id;

  return (
    <div className="flex justify-center">
      <Details id={id} type="movie" />
    </div>
  );
};

export default page;
