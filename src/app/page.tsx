import FramePlayer from "@/components/FramePlayer";

const frames = [
  "https://images.unsplash.com/photo-1710244182004-1c708b3f146d",
  "https://plus.unsplash.com/premium_photo-1709560426498-7b55e257f365",
  "https://images.unsplash.com/photo-1710831784631-081f71298244",
  "https://plus.unsplash.com/premium_photo-1692878409447-d25979c0a886",
  "https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9",
];

const FPS = 0.5;

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-2">
      <h1>Teste InHire - Front-end</h1>
      <h1 className="text-3xl font-bold mb-4">Italo Alves de Lima</h1>
      <FramePlayer className="w-52 h-96" frames={frames} fps={FPS} />
    </main>
  );
}
