import { Login } from "@/components/module/login";

export default function Home() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="row">
          <div className="col-span-4 col-start-5">
            <Login />
          </div>
        </div>
      </div>
    </section>
  );
}
