import Image from "next/image";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="mx-96">
        <Image
          src={"/dal.png"}
          height={300}
          width={300}
          alt={"Picture of employee"}
        />
        <h2>Lê Đức Anh</h2>
        <div>Chức vụ: Web Developer</div>
      </div>
    </>
  );
}
