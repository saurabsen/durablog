import Header from "./components/Header";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Header />
      <Posts />
    </main>
  );
}
