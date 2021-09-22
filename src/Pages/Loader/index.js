import React from 'react';
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <main>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </main>
  );
};

// adding the oidc user in the props
export default Loading;
