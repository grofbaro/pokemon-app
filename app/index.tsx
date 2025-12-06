import React from "react";

import { Redirect } from "expo-router";

function Page(): React.ReactElement {
    return <Redirect href="/pokemons" />;
}

export default Page;
