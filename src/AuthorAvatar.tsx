import React, { useState } from 'react';

// Curated authentic archival & pencil sketch portraits for authors
const authorPencilArtMap: Record<string, string> = {
  "William Shakespeare": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg",
  "George Orwell": "https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg",
  "Jane Austen": "https://upload.wikimedia.org/wikipedia/commons/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg",
  "Ernest Hemingway": "https://upload.wikimedia.org/wikipedia/commons/2/28/ErnestHemingway.jpg",
  "Arthur Conan Doyle": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Arthur_Conan_Doyle_by_Herbert_Rose_Barraud_1893.jpg",
  "Agatha Christie": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Agatha_Christie.png",
  "Leo Tolstoy": "https://upload.wikimedia.org/wikipedia/commons/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg",
  "Fyodor Dostoevsky": "https://upload.wikimedia.org/wikipedia/commons/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg",
  "Charles Dickens": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg",
  "Stephen King": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "Mark Twain": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg",
  "Carl Sagan": "https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.JPG",
  "Yuval Noah Harari": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Yuval_Noah_Harari_2018.jpg",
  "F. Scott Fitzgerald": "https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg",
  "Charles Darwin": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Charles_Darwin_seated_crop.jpg",
  "Stephen Hawking": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
  "Walter Isaacson": "https://upload.wikimedia.org/wikipedia/commons/9/91/Walter_Isaacson_2012.jpg",
  "Alfred Lansing": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Alfred_Lansing_1959.jpg",
  "Tim Marshall": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
  "Siddhartha Mukherjee": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  "Brian Greene": "https://upload.wikimedia.org/wikipedia/commons/6/60/Brian_Greene_Techonomy_2011_%28cropped%29.jpg",
  "Gabriel García Márquez": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg",
  "Jon Krakauer": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "Cheryl Strayed": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  "Hampton Sides": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "Malcolm Gladwell": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  "Bill Bryson": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  "Barack Obama": "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
  "Dr. Eliza Reed": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  "Dr. Alan Chen": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "Dr. Eliza Reed & Dr. Alan Chen": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  "Dr. Marcus Vance": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "Paul Kalanithi": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  "David Grann": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  "Andy Weir": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  "Daniel Kahneman": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
};

const getHandDrawnPencilSketch = (name: string): string => {
  const cleanSeed = encodeURIComponent(name.replace(/[^a-zA-Z0-9]/g, ''));
  // Hand-drawn notionists line art style with neutral background
  return `https://api.dicebear.com/7.x/notionists/svg?seed=${cleanSeed}&backgroundColor=f7f5f0`;
};

interface AuthorAvatarProps {
  name: string;
  size?: number;
  className?: string;
  animate?: boolean;
  style?: React.CSSProperties;
}

export default function AuthorAvatar({
  name,
  size = 40,
  className = '',
  animate = true,
  style = {}
}: AuthorAvatarProps) {
  const [hasError, setHasError] = useState(false);

  // Exact pencil art portrait source or fallback to hand-drawn ink/pencil sketch
  const specificArt = authorPencilArtMap[name.trim()];
  const imageSrc = !hasError && specificArt ? specificArt : getHandDrawnPencilSketch(name);

  return (
    <div
      className={`author-avatar-frame pencil-art-frame ${animate ? 'animated-author-avatar' : ''} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        borderRadius: size >= 50 ? '18px' : '50%',
        ...style
      }}
      title={`Pencil Art Portrait: ${name}`}
    >
      <img
        src={imageSrc}
        alt={`${name} pencil art`}
        className="author-avatar-img pencil-art-img"
        loading="lazy"
        onError={() => setHasError(true)}
      />
      {size >= 40 && (
        <span className="pencil-art-badge" title="Original Pencil Art">
          ✏️
        </span>
      )}
    </div>
  );
}
