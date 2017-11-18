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

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


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
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            React
                        </Heading>
                        <Heading size={1} fit caps>
                            JavaScript best practices, re-defined
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
                                    Andreas
                                </Heading>
                                <Image className="avatar" src={images.team1.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                            <Fill>
                                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                                    Sebastian
                                </Heading>
                                <Image className="avatar" src={images.team2.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide>
                        <Heading>Should I Use React?</Heading>
                        <Appear><Heading textColor="black">Short answer: yes.</Heading></Appear>
                        <br />
                        <Appear><Heading size={2} fit textColor="white">Long answer: unfortunately, yes, for most things.</Heading></Appear>
                    </Slide>

                    <Slide>
                        <Image src={images.reactlogo.replace("/", "")} width="300px"/>
                        <Heading size={1} fit caps lineHeight={1} textColor="black">
                            React.js
                        </Heading>
                    </Slide>

                    <Slide>
                        <Heading>Is it another case of</Heading>
                        <br/>
                        <Appear><Heading size={1} caps fit textColor="secondary">My MVC is better than your MVC</Heading></Appear>
                        <Appear><Heading size={1} caps fit textColor="tertiary">My MVVM is better than your MVC</Heading></Appear>
                        <Appear><Heading size={1} caps fit textColor="secondary">My MVC is better than your MVVM</Heading></Appear>
                        <br/>
                        <Appear><Heading>?</Heading></Appear>
                    </Slide>

                    <Slide>
                        <Heading>React hast no...</Heading>
                        <Layout >
                            <Appear>
                                <Fill>
                                    <Heading size={5} caps textColor="secondary">... controller</Heading>
                                    <Heading size={5} caps textColor="secondary">... directives</Heading>
                                    <Heading size={5} caps textColor="secondary">... templates</Heading>
                                    <Heading size={5} caps textColor="secondary">... global event listeners</Heading>
                                    <Heading size={5} caps textColor="secondary">... models</Heading>
                                    <Heading size={5} caps textColor="secondary">... view models</Heading>
                                </Fill>
                            </Appear>

                        </Layout>
                        <Appear><Heading>Just Components</Heading></Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <BlockQuote>
                            <Quote>Angular is the best implementation of the wrong idea</Quote>
                        </BlockQuote>
                        <Appear>
                            <BlockQuote>
                                <Quote>React is the first implementation of the right idea</Quote>
                            </BlockQuote>
                        </Appear>
                        <Appear>
                            <Text textColor="white">React challenges established best practices in traditional MV* frameworks</Text>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading textColor="white">Build components, not templates</Heading>
                        <br />
                        <Appear><Text>UI description and UI logic are tightly coupled</Text></Appear>
                        <Appear><Text>... and can be colocated</Text></Appear>
                        <Appear><Text>Full power of JavaScript to express UI</Text></Appear>
                        <Appear><Text>No magical data binding</Text></Appear>
                        <Appear><Text>No model dirty checking</Text></Appear>
                    </Slide>

                    <Slide bgColor="black">
                        <BlockQuote >
                            <Quote>jQuery makes imperative DOM manipulation easy</Quote>
                        </BlockQuote>
                        <Appear>
                            <BlockQuote>
                                <Quote>React makes DOM manipulation unnecessary</Quote>
                            </BlockQuote>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Heading fit textColor="white">Virtual DOM</Heading>
                        <Appear><Heading caps fit textColor="primary">Re-render everything on every update</Heading></Appear>
                        <Appear><Heading caps fit textColor="white">Just like the 90's Full-Page refresh!</Heading></Appear>
                        <List textColor="white">
                            <Appear><ListItem>Create lightweight description of component UI</ListItem></Appear>
                            <Appear><ListItem>Diff it with the old one</ListItem></Appear>
                            <Appear><ListItem>Compute minimal set of changes to apply to the DOM</ListItem></Appear>
                            <Appear><ListItem>Batch execute all updates</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading fit>Rendering</Heading>
                        <br />
                        <Text textColor="black">
                            <pre className="pre-with-graphic">┌──────┐          ┌───────┐           ┌───────────┐         ┌───────┐</pre>
                            <pre className="pre-with-graphic">│state │ rerender │virtual│  diff to  │collect DOM│         │Browser│</pre>
                            <pre className="pre-with-graphic">│change│────UI───>│  DOM  │─previous─>│ mutations │─update─>│  DOM  │</pre>
                            <pre className="pre-with-graphic">└──────┘          └───────┘           └───────────┘         └───────┘</pre>
                        </Text>
                        <br />
                        <Appear><Heading size={2} caps fit textColor="secondary">Inspired by DOOM3</Heading></Appear>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="black">
                        <Image src={images.meme2.replace("/", "")}/>
                    </Slide>

                    <CodeSlide transition={[]}
                               style="max-width:90%"
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/hello_world.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Hello World"},
                                   {loc: [3, 5], note: "Import React"},
                                   {loc: [8, 9], note: "Mounting point"},
                                   {loc: [11, 15], note: "Rendering"},
                                   {loc: [9, 10], note: "wait..."},
                                   {loc: [5, 6], note: "JSX?"}
                               ]}/>

                    <Slide>
                        <Heading>JSX is not a template language</Heading>
                        <Appear><Heading textColor="black">JSX is simply an alternate JavaScript syntax</Heading></Appear>
                    </Slide>

                    <CodeSlide transition={[]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/minimal_code.example")}
                               ranges={[
                                   {loc: [0, 0], title: "JSX"},
                                   {loc: [1, 5], note: "JSX"},
                                   {loc: [7, 11], note: "JS"},
                                   {loc: [13, 16]},
                                   {loc: [17, 25]}
                               ]}/>

                    <Slide>
                        <Heading>React + ES2015 = <i className="fa fa-heart" aria-hidden="true"></i></Heading>
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

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/polyfill.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Polyfill to the rescue"},
                                   {loc: [0, 1], note: "the easy way..."},
                                   {loc: [2, 8], note: "... or do it yourself!"}
                               ]}/>

                    <Slide>
                        <Image src={images.meme4.replace("/", "")} width="40vw"/>
                        <Heading>Meet Babel</Heading>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <Heading textColor="white">Do you know Gulp or Grunt?</Heading>
                        <br />
                        <Appear><Heading textColor="black" fit caps>And do you really like it?</Heading></Appear>
                    </Slide>


                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/webpack.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Webpack Example"},
                                   {loc: [0, 1], note: "import webpack (it needs to be defined)"},
                                   {loc: [3, 4], note: "the entry point"},
                                   {loc: [4, 8], note: "the ouput path"},
                                   {loc: [10, 13], note: "loaders"},
                               ]}/>

                    <Slide transition={["slide"]} bgColor="black">
                        <Heading size={2} textColor="white">React, Components, ES2015, JSX, Babel, Webpack, ...</Heading>
                        <br />
                        <Appear><Image src={images.meme3.replace("/", "")}/></Appear>
                    </Slide>

                    <Slide transition={["spin"]}>
                        <Heading size={2} textColor="white" fit caps>Properties</Heading>
                        <Heading size={5} textColor="black" fit caps>Properties passed by the parent to the child are available in 'this.props' in the child</Heading>
                        <Heading size={5} textColor="black" fit caps>Properties are immutable</Heading>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Heading size={2} textColor="white" fit caps>State</Heading>
                        <Heading size={5} textColor="black" fit caps>State change causes rerendering</Heading>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="black">
                        <Heading caps fit textColor="white">React native or Electron</Heading>
                        <Image src={images.meme1.replace("/", "")}/>
                        <Heading caps fit textColor="primary">You are already using it on your MAC</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
                        <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
                        <Heading size={2} caps fit textColor="primary" textFont="primary">
                            Wait what?
                        </Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="black">
                        <Appear><Heading caps fit textColor="primary">Components, not templates</Heading></Appear>
                        <Appear><Heading caps fit textColor="white">Re-render, don't mutate</Heading></Appear>
                        <Appear><Heading caps fit textColor="primary">Virtual DOM = easy & fast</Heading></Appear>
                    </Slide>

                    <Slide transition={["spin", "slide"]} bgColor="tertiary">
                        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                            Time for Hello World!
                        </Heading>
                    </Slide>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/01.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Modules"},
                                   {loc: [0, 7], note: "my-modules.js"},
                                   {loc: [8, 15], note: "use-module.js"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/02.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Classes"},
                                   {loc: [0, 5], note: "a base class"},
                                   {loc: [6, 14], note: "a sub class"},
                                   {loc: [15, 17], note: "the new new"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/03.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Scoped Variables"},
                                   {loc: [1, 2], note: "'let' it be"},
                                   {loc: [3, 7], note: "a scope"},
                                   {loc: [8, 10], note: "tell me the truth"},
                                   {loc: [12, 13], note: "what now?"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/04.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Arrow Functions"},
                                   {loc: [0, 1], note: "define a new object"},
                                   {loc: [4, 7], note: "Arrow Head"},
                                   {loc: [9, 10], note: "does this really work?"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/05.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Template Strings"},
                                   {loc: [2, 5], note: "Note the backtick --> `"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/06.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Default values"},
                                   {loc: [0, 3], note: "define a function"},
                                   {loc: [4, 7], note: "call it"}
                               ]}/>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/es6/07.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Spread Operator"},
                                   {loc: [0, 3], note: "define your values"},
                                   {loc: [3, 6], note: "define a function"},
                                   {loc: [6, 7], note: "call it"}
                               ]}/>

                    <Slide transition={["spin", "slide"]} bgColor="primary">
                        <Heading caps fit textColor="secondary">Component Lifecycle</Heading>
                        <List>
                            <ListItem>componentWillMount()</ListItem>
                            <ListItem>componentDidMount()</ListItem>
                            <ListItem>componentWillReceiveProps()</ListItem>
                            <ListItem>shouldComponentUpdate()</ListItem>
                            <ListItem>componentWillUpdate()</ListItem>
                            <ListItem>componentDidUpdate()</ListItem>
                            <ListItem>componentWillUnmount()</ListItem>
                        </List>
                    </Slide>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/wrapping_another_lib.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Wrapping another lib"},
                                   {loc: [0, 2], note: "import the lib"},
                                   {loc: [4, 9], note: "lifecyle method"},
                                   {loc: [5, 8], note: "the native call"},
                                   {loc: [10, 13], note: "the native call"},
                                   {loc: [15, 16], note: "mounting"}
                               ]}/>


                    <Slide transition={["slide"]} bgColor="black">
                        <Appear><Heading caps fit textColor="white">Event Handlers = Component Communication</Heading></Appear>
                        <Appear><Heading caps fit textColor="primary">This is how the data goes upwards</Heading></Appear>
                        <Appear><Heading caps fit textColor="white">Note: Only if you are building small to medium applications React on it's own might be enough.</Heading></Appear>
                    </Slide>

                    <CodeSlide transition={["slide"]}
                               lang="js"
                               className="codeslide"
                               code={require("raw!./code/event_handlers.example")}
                               ranges={[
                                   {loc: [0, 0], title: "Event handlers"},
                                   {loc: [0, 12], note: "parent"},
                                   {loc: [13, 27], note: "button"},
                                   {loc: [1, 4], note: "define the callback method"},
                                   {loc: [7, 8], note: "give it to the button as property"},
                                   {loc: [22, 25], note: "define the onclick event"},
                                   {loc: [16, 19], note: "mount it to the button"},
                               ]}/>

                    <Slide transition={["slide"]}>
                        <Heading textColor="white">Flux</Heading>
                        <br />
                        <Appear><Text>Architecture for data flow</Text></Appear>
                        <Appear><Text>One direction flow</Text></Appear>
                    </Slide>

                    <Slide transition={["spin", "slide"]} bgColor="tertiary">
                        <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                            Show me some real code!
                        </Heading>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
