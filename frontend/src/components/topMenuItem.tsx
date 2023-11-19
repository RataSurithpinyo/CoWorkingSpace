import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <div className="w-36 text-center mt-4 mb-auto color underline decoration-green-500 text-black">
      <Link href={pageRef}>{title}</Link>
    </div>
  );
}
