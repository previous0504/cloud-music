import React from "react";
import { renderRoutes } from "react-router-config";

function Singers({route}) {
  return <div>
      singers
      {renderRoutes(route.routes)}
  </div>;
}
export default Singers;
