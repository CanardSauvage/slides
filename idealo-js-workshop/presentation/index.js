// Import React
import React from "react";
// Import Spectacle Core tags
import {Appear, BlockQuote, Cite, CodePane, Deck, Heading, ListItem, List, Quote, Slide, Text, Fill, Layout, Image} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";
// Import Code-Highlighting stuff
import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");


const images = {
    city: require("../assets/city.jpg"),
    kat: require("../assets/kat.png"),
    logo: require("../assets/formidable-logo.svg"),
    markdown: require("../assets/markdown.png"),

    team1: require("../assets/team-andreas.jpg"),
    team2: require("../assets/team-sebastian.jpg"),
    reactlogo: require("../assets/react-logo.svg"),

    meme1: require("../assets/react_meme.jpg"),
    meme2: require("../assets/react_meme2.jpg"),
    meme3: require("../assets/react_meme3.jpg"),
    meme4: require("../assets/react_meme4.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#ff4081"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                <Slide transition={["zoom"]} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="black">
                        idealo JS-Workshop
                    </Heading>
                    <Heading size={1} fit caps>
                        mit Waschi
                    </Heading>
                    <br />
                    <br />
                    <Text textSize="0.9em" bold><i className="fa fa-twitter" aria-hidden="true"></i> @as_ideas</Text>
                    <Text textSize="0.9em" bold><i className="fa fa-link" aria-hidden="true"></i> asideas.de/slides/workshop-react-slides</Text>
                    <Text textSize="0.9em" bold><i className="fa fa-github" aria-hidden="true"></i> github.com/CanardSauvage/slides</Text>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading caps fit>Axel Springer Ideas Engineering</Heading>
                    <Layout>
                        <Fill>
                            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                Sebastian
                            </Heading>
                            <Image className="avatar" src={images.team2.replace("/", "")} margin="0px auto 40px" height="293px"/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Image src={images.meme2.replace("/", "")}/>
                </Slide>

                <Slide>
                    <Heading>ES6 = <i className="fa fa-heart" aria-hidden="true"></i></Heading>
                    <Layout >
                        <Fill>
                            <List>
                                <ListItem>Modules</ListItem>
                                <ListItem>Classes</ListItem>
                                <ListItem>Scoped Variables</ListItem>
                                <ListItem>Arrow Functions</ListItem>
                                <ListItem>Template Strings</ListItem>
                                <ListItem>Spread Operator</ListItem>
                                <ListItem>Destructuring</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List>
                                <ListItem>Default Values</ListItem>
                                <ListItem>Rest Parameters</ListItem>
                                <ListItem>for-of Iterator</ListItem>
                                <ListItem>Symbols</ListItem>
                                <ListItem>Promises</ListItem>
                                <ListItem>...</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                    <Appear><Heading>IE?</Heading></Appear>
                </Slide>

                <Slide>
                    <Heading size={3} textColor="white">Object</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/01.example")}
                    />
                </Slide>

                <CodeSlide transition={[]}
                           lang="js"
                           className="codeslide"
                           code={require("raw-loader!./code/day01/01.example")}
                           ranges={[
                               {loc: [0, 0], title: "JSX"},
                               {loc: [1, 5], note: "JSX"},
                               {loc: [7, 11], note: "JS"},
                               {loc: [13, 16]},
                               {loc: [17, 25]}
                           ]}/>


                <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                    <Heading size={3} textColor="white">null und undefined</Heading>

                    <BlockQuote>
                        <Quote textSize="48">
                            You might consider undefined to represent system-level, unexpected, or error-like absense of value
                            <br/>
                            and
                            <br/>
                            null to represent program-level, normal, or expected absence of value.
                        </Quote>
                        <Cite>David Flanagan – „JavaScript: The Definitive Guide“</Cite>
                    </BlockQuote>
                </Slide>
            </Deck>
        );
    }
}
