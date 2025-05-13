import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const SPACECATS = gql`
  query ListSpaceCats {
    spaceCats {
      name
      age
      missions {
        name
        description
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(SPACECATS);
  return <Layout grid>{JSON.stringify(data)} 21312 </Layout>;
};

export default Tracks;
