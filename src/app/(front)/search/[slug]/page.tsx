
import SearchCards from "@/components/SearchCards/SearchCards";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  console.log(slug);

  return (
    <div>
      <SearchCards slug={slug} />
    </div>
  );
};

export default page;
