import Image from 'next/image';
import image from '@/assets/images/logo.jpg'; //use @ not '...' for relative file paths

export default function Avatar() {
    return <Image src={image} 
    alt="Brown-skinned woman with large natural afro holds fist in air. She is wearing a reflective black trench coat. Her eyes are closed and her face tilts up toward blush pink lights."
    className="w-24 h-24 rounded-full"
    />
}
