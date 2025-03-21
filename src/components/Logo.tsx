import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <span className="logo__text">
        devon<span className="logo__symbol">{`{`}</span>gaki
        <span className="logo__symbol">{`}`}</span>
      </span>
    </Link>
  );
}
