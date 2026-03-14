export default function Trailer({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src="https://www.youtube.com/embed/fq2JiTh2Cdc"
      title="ҮХЭЛТЭЙ НҮҮР ТУЛСАН НЭГЭН ҮХЛИЙН ТАЛААР ЮУ ЯРИВ??(Urtuu 4 podcast S2 EP10)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}
