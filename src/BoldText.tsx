import React from "react";

export const BoldText = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) =>
      segment.startsWith("**") && segment.endsWith("**") ? (
        <strong key={index}>{segment.slice(2, -2)}</strong>
      ) : (
        <React.Fragment key={index}>{segment}</React.Fragment>
      ),
    )}
  </>
);
