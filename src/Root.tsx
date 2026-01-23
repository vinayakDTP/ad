import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { SkillsComposition } from "./SkillsComposition";
import { MasterComposition } from "./MasterComposition";
import { LogoComposition } from "./LogoComposition";

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
        durationInFrames={240}
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
    </>
  );
};
