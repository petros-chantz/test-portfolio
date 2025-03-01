import React from "react";
import Cv from "../../images/IconComponents/Cv";
import Email from "../../images/IconComponents/Email";
import Github from "../../images/IconComponents/Github";
import LinkedIn from "../../images/IconComponents/LinkedIn";
import { Container } from "../Container";
import IconBoxLink from "../IconBoxLink";
import { dark, light } from "./../../helpers/themes";

export default function InfoLinks(props) {
  return (
    <>
      {props.colorTheme ? (
        <Container columns="repeat(4,1fr)" gap="40px">
          <IconBoxLink
            iconLinkAddress="mailto: petros.chantz@gmail.com"
            iconComponent={<Email color={light.color.link} />}
            title="email"
          />
          <IconBoxLink
            iconLinkAddress="https://www.dropbox.com/s/lw4y364zbkekua7/Petros_Chantzopoulos_CV.pdf?dl=0"
            iconComponent={<Cv color={light.color.link} />}
            title="cv"
          />
          <IconBoxLink
            iconLinkAddress="https://www.linkedin.com/in/petroschantz/"
            iconComponent={<LinkedIn color={light.color.link} />}
            title="linkedIn"
          />
          <IconBoxLink
            iconLinkAddress="https://github.com/petros-chantz"
            iconComponent={<Github color={light.color.link} />}
            title="github"
          />
        </Container>
      ) : (
        <Container columns="repeat(4,1fr)" gap="40px">
          <IconBoxLink
            iconLinkAddress="mailto: petros.chantz@gmail.com"
            iconComponent={<Email color={dark.color.link} />}
            title="email"
          />
          <IconBoxLink
            iconLinkAddress="https://www.dropbox.com/s/lw4y364zbkekua7/Petros_Chantzopoulos_CV.pdf?dl=0"
            iconComponent={<Cv color={dark.color.link} />}
            title="cv"
          />
          <IconBoxLink
            iconLinkAddress="https://www.linkedin.com/in/petroschantz/"
            iconComponent={<LinkedIn color={dark.color.link} />}
            title="linkedIn"
          />
          <IconBoxLink
            iconLinkAddress="https://github.com/petros-chantz"
            iconComponent={<Github color={dark.color.link} />}
            title="github"
          />
        </Container>
      )}
    </>
  );
}
