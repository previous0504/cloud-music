import React from "react";
import { renderRoutes } from "react-router-config";

function Rank({ route }) {
  return (
    <div>
      Recommend
      {renderRoutes(route.routes)}
    </div>
  );
}
export default Rank;
