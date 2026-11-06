import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col items-start justify-center px-4 py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-pink">404</p>
      <h1 className="mt-3 text-5xl text-navy">That page is not on this site</h1>
      <p className="mt-4 leading-7">The link may be old, or the sample page was removed.</p>
      <Link
        href="/"
        className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
      >
        Back home
      </Link>
    </div>
  );
}
