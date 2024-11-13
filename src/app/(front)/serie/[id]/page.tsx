import React from "react";

import Details from "@/components/Details/Details";

type SerieProps = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: SerieProps) => {
  const id = (await params).id;

  return (
    <div className='flex justify-center'>
      <Details id={id} type={"tv"} />
    </div>
  );
};

export default page;
