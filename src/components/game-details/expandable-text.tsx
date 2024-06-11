"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  if (!text) return null;

  const limit = 300;
  const summary = expanded ? text : text.substring(0, limit) + "...";

  return (
    <div>
      {clientRendered && (
        <>
          <p
            dangerouslySetInnerHTML={{ __html: summary }}
            className="mb-2 font-sans text-silverCloud leading-relaxed"
          />
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-cyan-600 hover:text-cyan-800"
          >
            {expanded ? "Read less" : "Show more"}
          </button>
        </>
      )}
    </div>
  );
};

export default ExpandableText;
