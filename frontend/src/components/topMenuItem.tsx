import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className="w-28 text-center mt-4 mb-auto color underline decoration-sky-500 text-black">
      <Link href={pageRef}>{title}</Link>
    </div>
  );
}
