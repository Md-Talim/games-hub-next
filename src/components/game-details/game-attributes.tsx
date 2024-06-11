import React from "react";
import Game from "@/types/Game";
import CriticScore from "@/components/games-grid/game-card/critic-score";

interface Props {
  game: Game;
}

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode;
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <div className="my-5">
      <dt className="text-lg text-mountainMist font-semibold">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2 max-w-5xl mx-auto gap-4">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <p key={platform.id} className="font-medium text-battleshipGray">
            {platform.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <p key={publisher.id} className="font-medium text-battleshipGray">
            {publisher.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id} className="font-medium text-battleshipGray">
            {genre.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metacritic">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
    </div>
  );
};

export default GameAttributes;
