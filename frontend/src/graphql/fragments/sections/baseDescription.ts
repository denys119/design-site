import { gql } from 'graphql-tag';

export const BaseDescription = gql`
  fragment BaseDescription on ComponentPageBaseDescription {
    title
    description
  }
`;
