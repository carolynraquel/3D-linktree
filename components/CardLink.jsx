export default function CardLink({ link }) {
  return (
    <div onClick={} className="bg-white flex items-center mx-4 max-w-md w-full rounded-full p-4 shadow-lg shadow-violet-500 cursor-pointer">
        {link.icon}
        <p className="font-bold m-auto">{link.text}</p>
    </div>
  );
}