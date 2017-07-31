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
    kat: require("../assets/kat.png"),

    team2: require("../assets/team-sebastian.jpg"),
    reactlogo: require("../assets/react-logo.svg"),

    meme1: require("../assets/react_meme.jpg"),
    meme2: require("../assets/react_meme2.jpg"),
    meme3: require("../assets/react_meme3.jpg"),
    meme4: require("../assets/react_meme4.jpg"),
    meme5: require("../assets/meme5.jpg"),
    meme6: require("../assets/meme6.png"),
    meme7: require("../assets/meme7.jpg")
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
                    <Text textSize="0.9em" bold><i className="fa fa-envelope" aria-hidden="true"></i> sebastian.waschnick@asideas.de</Text>
                    <Text textSize="0.9em" bold><i className="fa fa-link" aria-hidden="true"></i> https://github.com/CanardSauvage/idealo-js-workshop</Text>
                </Slide>

                <Slide transition={["zoom", "fade"]} bgColor="primary">
                    <Heading caps fit>Axel Springer Ideas Engineering</Heading>
                    <Layout>
                        <Fill>
                            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                Sebastian Waschnick
                            </Heading>
                            <Image className="avatar" src={images.team2.replace("/", "")} margin="0px auto 40px" height="293px"/>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Heading color="white">Why learn JavaScript?</Heading>
                    <Appear>
                        <Heading size="4" textColor="primary">Try to build something today without JavaScript!</Heading>
                    </Appear>
                </Slide>


                <Slide transition={["slide"]} bgColor="black">
                    <Image src={images.meme1.replace("/", "")}/>
                </Slide>

                <Slide transition={["slide", "zoom"]} bgColor="tertiary">
                    <Heading textColor="primary">Schedule</Heading>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>Day 1: ES6</ListItem>
                                <ListItem>Day 2: TDD with JS</ListItem>
                                <ListItem>Day 3: Webpack & Setup</ListItem>
                                <ListItem>Day 4: React, Part 1</ListItem>
                                <ListItem>Day 5: React, Part 2</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading size={3} textColor="white">Object</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/01-object.example")}
                    />
                </Slide>


                <CodeSlide transition={[]}
                           lang="js"
                           className="codeslide"
                           code={require("raw-loader!./code/day01/02-typen.example")}
                           ranges={[
                               {loc: [0, 0], title: "Types"},
                               {loc: [0, 2], note: "string"},
                               {loc: [3, 5], note: "number"},
                               {loc: [6, 8], note: "number"},
                               {loc: [9, 11], note: "boolean"},
                               {loc: [12, 14], note: "function"},
                               {loc: [15, 16], note: "???"}
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

                <Slide>
                    <Heading size={3} textColor="white">Array</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/03-array.example")}
                    />
                </Slide>

                <Slide transition={["slide", "zoom"]} bgColor="tertiary">
                    <Heading textColor="primary">true und false</Heading>
                    <Appear>
                        <Heading size={4} textColor="secondary">these are false:</Heading>
                    </Appear>
                    <Appear>
                        <List>
                            <ListItem>false</ListItem>
                            <ListItem>null</ListItem>
                            <ListItem>undefined</ListItem>
                            <ListItem>'' (empty string)</ListItem>
                            <ListItem>0 (number zero)</ListItem>
                            <ListItem>NaN (number „Not a Number“)</ListItem>
                        </List>
                    </Appear>
                    <Appear>
                        <Heading>Everything else == true</Heading>
                    </Appear>
                </Slide>

                <Slide>
                    <Heading size={3} textColor="white">Functions</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/03-functions.example")}
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Heading textColor="primary">Scopes</Heading>
                    <Image src={images.meme6.replace("/", "")}/>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Heading textColor="primary">Don't do this</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/04-scope.example")}
                    />
                </Slide>

                <Slide transition={["slide"]} bgColor="white">
                    <Heading size={2} textColor="primary">Try this</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/04-scope2.example")}
                    />
                    <Heading size={6} textColor="black">Immediately-Invoked Function Expression (IIFE)</Heading>
                </Slide>

                <Slide>
                    <Heading textColor="white">Hoisting</Heading>
                    <Heading size={5} textColor="black">Time to get serious</Heading>
                </Slide>

                <Slide transition={["slide"]}>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/04-scope3.example")}
                    />
                </Slide>


                <Slide>
                    <Heading size={3} textColor="white">this</Heading>
                    <CodePane
                        lang="js"
                        source={require("raw-loader!./code/day01/04-scope4.example")}
                    />
                    <Appear>
                        <Heading size={4}>call / apply are your friends</Heading>
                    </Appear>
                </Slide>

                <Slide transition={["slide"]} bgColor="black">
                    <Heading textColor="primary">ES6</Heading>
                    <Image src={images.meme7.replace("/", "")}/>
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
            </Deck>
        );
    }
}
