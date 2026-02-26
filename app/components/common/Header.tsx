import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="body-container px-4">
      <Topbar />
      <div className="flex justify-between">
        <div>logo</div>
      </div>
    </header>
  );
}
