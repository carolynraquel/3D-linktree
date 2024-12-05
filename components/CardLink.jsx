export default function CardLink({ link }) {
  return (
    <div className="bg-white flex items-center">
        {link.icon}
        <p>{link.text}</p>
    </div>
  );
}