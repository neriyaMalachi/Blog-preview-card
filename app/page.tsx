import Image from "next/image";
import avatar from "@/assets/images/illustration-article.svg";
import user from "@/assets/images/image-avatar.webp";
export default function Home() {
  return (
    <div className="body flex justify-center items-center h-screen">
      <div className="card w-96 h-10/12 p-4 rounded-2xl border-gray-950 border border-spacing-1 ">
        <div className="hader  ">
          <Image src={avatar} alt="Image" className="w-full h-52 rounded-xl " />
        </div>
        <div className="body mt-6">
          <button className="button rounded-md p-1 w-22 px-3">Learning</button>
          <p className="p mt-4 text-sm w-44">Published 21 Dec 2023</p>
          <h1 className="h1 mt-3 text-xl">HTML & CSS foundations</h1>
          <p className="text-md mt-4 w-12/12 text-slate-400">
            These languages are the backbone of every website, difining
            structure, content and presentation.
          </p>
        </div>
        <div className="futher flex items-center gap-3 mt-7 my-2">
          <Image src={user} alt="image" className="size-10" />
          <h2 className="h2">Greg Hooper</h2>
        </div>
      </div>
    </div>
  );
}
