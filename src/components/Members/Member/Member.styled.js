import styled from 'styled-components/macro';
import { colors } from '../../../assets/styles/styles';
import { FlexBox } from '../../../shared-ui/Containers';

export const ListItem = styled(FlexBox)`
  border: 1px solid white;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  list-style: none;
  padding: 2rem;

  width: 100%;
  max-width: 27rem;
  min-width: 27rem;

  justify-content: flex-start;

  background-color: ${colors.primary};
  border: 0.76446px solid #072540;
  box-shadow: 0px 2px 20px rgba(61, 27, 43, 0.1);

  line-height: 1.4;

  :hover {
    transform: scale(1.04, 1.04);
  }
`;

export const ListItemProfileImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-width: 26rem;
  border-radius: 50%;
`;

export const BoxLabel = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 2rem;
  width: 100%;
`;

export const ListItemLabel = styled.span`
  font-weight: 600;
  font-size: 1.2rem;

  background-color: ${colors.primaryHighLight};
  border-radius: 0.3rem;

  padding: 0.3rem 0.6rem;
  margin: 0.6rem 1.2rem 0.6rem 0;
`;

export const ListItemName = styled.h2`
  width: 100%;
  margin: 1.5rem 0 0 0;
`;

export const ListItemText = styled.p`
  color: ${colors.primaryLighter};
  margin: 0.5rem 0 1.5rem 0;
`;

export const SocialNetworkLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.neutral};
  font-size: 3.5rem;
  margin: 1rem;

  :hover {
    color: ${colors.primaryLighter};
  }
`;
