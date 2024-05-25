import clsx from "clsx";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => (
  <div
    className={clsx(
      "w-6 h-4 flex items-center justify-center rounded-sm bg-opacity-10",
      score > 75 ? "bg-gamersGlory" : "bg-midScoreMustard"
    )}
  >
    <p
      className={clsx(
        "text-xs leading-none",
        score > 75 ? "text-gamersGlory" : "text-midScoreMustard"
      )}
    >
      {score}
    </p>
  </div>
);

export default CriticScore;
