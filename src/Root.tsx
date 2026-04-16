import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { SkillsComposition } from "./SkillsComposition";
import { MasterComposition } from "./MasterComposition";
import { LogoComposition } from "./LogoComposition";
import { IntroTemplateA } from "./IntroTemplateA";
import { IntroTemplateB } from "./IntroTemplateB";
import { IntroTemplateC } from "./IntroTemplateC";
import { IntroTemplateD } from "./IntroTemplateD";
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="Skills"
        component={SkillsComposition}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={600}
      />
      <Composition
        id="Master"
        component={MasterComposition}
        durationInFrames={390}
        fps={30}
        width={1280}
        height={600}
      />
      <Composition
        id="Logos"
        component={LogoComposition}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={600}
      />
      <Composition
        id="IntroTemplateA"
        component={IntroTemplateA}
        durationInFrames={150} // 5 seconds
        fps={30}
        width={1920} // Standard YouTube 1080p width
        height={1080} // Standard YouTube 1080p height
      />
      <Composition
        id="IntroTemplateB"
        component={IntroTemplateB}
        durationInFrames={318} // 6 sec intro + ~4.6 sec outroClip
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="IntroTemplateC"
        component={IntroTemplateC}
        durationInFrames={150} // 5 seconds
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="IntroTemplateD"
        component={IntroTemplateD}
        durationInFrames={150} // 5 seconds
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
