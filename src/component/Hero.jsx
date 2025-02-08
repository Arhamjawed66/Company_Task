import { Button, Avatar, AvatarGroup } from "@mui/material";
import RelativePositioning from "./HeroImg";

function Hero() {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4"
        style={{
          maxWidth: "1000px", 
        }}
      >
        {/* Left Section */}
        <div className="flex flex-col mb-60 md:w-1/2 lg:pr-24 md:pr-16 md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-[35px] font-bold text-white mb-10">
            WE ARE LOOKING FOR
            <br className="hidden lg:inline-block" />
            PROFITABLE TRADER
          </h1>
          <p className="mb-6 leading-relaxed font-semibold text-white">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <Button variant="contained" color="primary" sx={{ borderRadius: "100px" }}>
              Learn More
            </Button>
            <Button variant="outlined" sx={{ borderRadius: "100px", color: "white" }}>
              Free Trial
            </Button>
          </div>

          {/* Avatar Group & Counter */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src="/avatar_img/img1.jpg" />
              <Avatar alt="Travis Howard" src="/avatar_img/img2.jpg" />
              <Avatar alt="Cindy Baker" src="/avatar_img/img3.jpg" />
              <Avatar alt="Agnes Walker" src="/avatar_img/img1.jpg" />
              <Avatar alt="Trevor Henderson" src="/avatar_img/img2.jpg" />
            </AvatarGroup>
            <h1 className="text-lg sm:text-xl font-bold text-white text-center sm:text-left">
              15 MILLION+ <br />
              <span className="text-white font-semibold">be part growing</span>
            </h1>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <RelativePositioning />
        </div>
      </div>
    </section>
  );
}

export default Hero;
