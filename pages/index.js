import Link from "../components/Link";

export default function HomePage({ lightsOnSum }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnSum} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
