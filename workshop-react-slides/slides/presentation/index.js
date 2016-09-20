// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fit,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import Code-Highlighting stuff
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    logo: require("../assets/HACKATHON.png"),
    team1: require("../assets/team/1.jpg"),
    team2: require("../assets/team/2.jpg"),
    team3: require("../assets/team/3.jpg"),
    team4: require("../assets/team/4.jpg"),
    team5: require("../assets/team/5.jpg"),
    team6: require("../assets/team/6.jpg"),
    devPeople: require("../assets/made-for-developers.jpg"),
    hack1: {
        pic1: require("../assets/hack1-foodhacks/1.jpg"),
        pic2: require("../assets/hack1-foodhacks/2.jpg"),
        pic3: require("../assets/hack1-foodhacks/3.jpg"),
        pic4: require("../assets/hack1-foodhacks/4.jpg"),
        pic5: require("../assets/hack1-foodhacks/5.jpg"),
        pic6: require("../assets/hack1-foodhacks/6.jpg"),
        pic7: require("../assets/hack1-foodhacks/7.jpg"),
        pic8: require("../assets/hack1-foodhacks/8.jpg"),
    },
    hack2: {
        pic1: require("../assets/hack2-mediahackday/1.jpg"),
        pic2: require("../assets/hack2-mediahackday/2.jpg"),
        pic3: require("../assets/hack2-mediahackday/3.jpg"),
        pic4: require("../assets/hack2-mediahackday/4.jpg"),
        pic5: require("../assets/hack2-mediahackday/5.jpg"),
        pic6: require("../assets/hack2-mediahackday/6.jpg"),
    },
    hack3: {
        pic1: require("../assets/hack3-haxelthon2/1.jpg"),
        pic2: require("../assets/hack3-haxelthon2/2.jpg"),
        pic3: require("../assets/hack3-haxelthon2/3.jpg"),
        pic4: require("../assets/hack3-haxelthon2/4.jpg"),
        pic5: require("../assets/hack3-haxelthon2/5.jpg"),
        pic6: require("../assets/hack3-haxelthon2/6.jpg"),
        pic7: require("../assets/hack3-haxelthon2/7.jpg"),
        pic8: require("../assets/hack3-haxelthon2/8.jpg"),
        pic9: require("../assets/hack3-haxelthon2/9.jpg"),
        pic10: require("../assets/hack3-haxelthon2/10.jpg"),
        pic11: require("../assets/hack3-haxelthon2/11.jpg"),
        pic12: require("../assets/hack3-haxelthon2/12.jpg"),
        pic13: require("../assets/hack3-haxelthon2/13.jpg"),
        pic14: require("../assets/hack3-haxelthon2/14.jpg"),
        pic15: require("../assets/hack3-haxelthon2/15.jpg"),
        pic16: require("../assets/hack3-haxelthon2/16.jpg"),
        pic17: require("../assets/hack3-haxelthon2/17.jpg"),
    }
};

preloader(images);

const theme = createTheme({
    primary: "#000000",
    secondary: "#ffffff",
    tertiary: "#ff4081",
    ideasPink: "#FF21FC",
    ideasBlue: "#3F90FF",
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">

                    <Slide transition={["slide"]} bgImage={images.devPeople.replace("/", "")} bgDarken={0.75}>
                        <Image width="100%" src={images.logo.replace("/", "")}/>
                    </Slide>

                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="ideasPink">
                            AS Ideas Engineering
                        </Heading>
                        <br />
                        <br />
                        <Text textSize="0.9em" bold textColor="ideasBlue"><i className="fa fa-twitter" aria-hidden="true"></i> @as_ideas</Text>
                        <Text textSize="0.9em" bold textColor="ideasBlue"><i className="fa fa-link" aria-hidden="true"></i> asideas.de/slides/techbreakfast-hackathon-slides</Text>
                        <Text textSize="0.9em" bold textColor="ideasBlue"><i className="fa fa-github" aria-hidden="true"></i> github.com/as-ideas/techbreakfast-hackathon-slides</Text>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="ideasPink" bgDarken={0.75}>
                        <Layout>
                            <Fill>
                                <Image className="avatar" src={images.team1.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                            <Fill>
                                <Image className="avatar" src={images.team2.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                            <Fill>
                                <Image className="avatar" src={images.team3.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                        </Layout>
                        <Layout>
                            <Fill>
                                <Image className="avatar" src={images.team4.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                            <Fill>
                                <Image className="avatar" src={images.team5.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                            <Fill>
                                <Image className="avatar" src={images.team6.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide>
                        <Heading>What is a Hackathon?</Heading>
                        <Appear><Heading textColor="white">And why should I go there?</Heading></Appear>
                    </Slide>

                    <Slide bgColor="white" transition={["zoom", "fade"]}>
                        <Heading textColor="ideasBlue">How does it work?</Heading>
                        <Appear><Heading textColor="black">And what am I doing there?</Heading></Appear>
                    </Slide>

                    <Slide>
                        <Heading>What we did!</Heading>
                        <Appear><Heading textColor="white">And some photos.</Heading></Appear>
                    </Slide>

                    <Slide bgColor="ideasPink" transition={["zoom", "fade"]}>
                        <Heading textColor="black">{'food{hacks}'}</Heading>
                    </Slide>

                    <Slide bgImage={images.hack1.pic1.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic2.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic3.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic4.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic5.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic6.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic7.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack1.pic8.replace("/", "")}> </Slide>

                    <Slide bgColor="ideasPink" transition={["zoom", "fade"]}>
                        <Heading textColor="black">Media Hackday</Heading>
                    </Slide>

                    <Slide bgImage={images.hack2.pic1.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack2.pic2.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack2.pic3.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack2.pic4.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack2.pic5.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack2.pic6.replace("/", "")}> </Slide>

                    <Slide bgColor="ideasPink" transition={["zoom", "fade"]}>
                        <Heading textColor="black">Axel Springer Hackday</Heading>
                        <Heading textColor="white">Haxelthon2</Heading>
                    </Slide>

                    <Slide bgImage={images.hack3.pic1.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic2.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic3.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic4.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic5.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic6.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic7.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic8.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic9.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic10.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic11.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic12.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic13.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic14.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic15.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic16.replace("/", "")}> </Slide>
                    <Slide bgImage={images.hack3.pic17.replace("/", "")}> </Slide>

                    <Slide>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/_jnPj9mP62E" frameBorder="0" allowFullScreen></iframe>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
