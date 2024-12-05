import Avatar from "@/components/Avatar";

// load home function
export default function Home() {
  return (
    // bg gradient
    <div className="w-screen h-screen bg-gradient-to-br from-pink-400 to-green-300">
      <div className="flex justify-center items-center pt-4">
        <Avatar/>
      </div>

    {/* font size and color  */}
      <div className="text-center text-violet font-medium text-lg mt-2 pb-4"> 
        <h1>GoldGrrl</h1>
        <h2>Vocal Commander of Electric Mothership</h2>
      </div>

    </div>
   ); // end of return
} 

const links = [{link: "", text: "YouTube", icon: <Youtube />}];
// end of Home 
