import Image from 'next/image';

export const MediaCard = ({
  title,
  image,
  onClick,
}: {
  title: string;
  image: string;
  onClick: () => void;
}) => {
  return (
    <div 
      onClick={onClick} 
      className="group relative cursor-pointer overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={450}
        className="object-cover"
        // placeholder="blur" // Use apenas se tiver uma imagem estática ou blurDataURL
        // blurDataURL="/placeholder.png"
      />
      
      {/* 2. O overlay só funciona se o pai tiver a classe "group" e "relative" */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
    </div>
  );
};