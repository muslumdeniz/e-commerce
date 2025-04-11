import { Register } from "@/components/module/register";

export default function Home() {
  return (
    <section className="section-lg">
      <div className="container">
        <div className="row">
          <div className="col-span-4 col-start-5">
            <Register />
          </div>
        </div>
      </div>
    </section>
  );
}
