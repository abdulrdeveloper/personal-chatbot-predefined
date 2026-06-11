import Header from "./components/header/Header";
import MessageList from "./components/main/MessageList";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Header />
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/40">
          <MessageList />
        </div>
        <Footer />
      </div>
    </main>
  );
}
