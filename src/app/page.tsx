import Login from "./components/Login/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Echo App</h1>
      <Login />
      {/* <Divider /> */}
      {/* <About /> */}
    </main>
  );
}
