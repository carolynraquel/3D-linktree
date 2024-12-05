import Image from 'next/image';

export default function Avatar() {
    return <Image src='../assets/images/logo.jpg' alt="Brown-skinned woman with large natural afro holds fist in air. She is wearing a reflective black trench coat. Her eyes are closed and her face tilts up toward blush pink lights." 
    width={100} 
    height={100}
    className="w-24 h-24 rounded-full"
    />
}
