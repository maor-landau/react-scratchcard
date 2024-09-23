import { ScratchCard } from "next-scratchcard";

export function Test() {
  const handleComplete = () => {
    console.log("Scratch card completed!");
  };

  return (
    <ScratchCard finishPercent={30} brushSize={20} onComplete={handleComplete}>
      <img
        alt="hi"
        height={150}
        width={300}
        src="https://images.pexels.com/photos/14686115/pexels-photo-14686115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </ScratchCard>
  );
}
