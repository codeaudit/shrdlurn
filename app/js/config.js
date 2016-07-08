const configs = {};

if (process.env.NODE_ENV === "local") {
  configs.SEMPRE_URL = "http://localhost:8400";
} else {
  configs.SEMPRE_URL = "http://jonsson.stanford.edu:8401";
}


configs.loggerServer = "ws://hydrogen.samginn.com:4000/socket";
configs.loggerOn = false;

configs.debugMode = false;

configs.defaultSessionId = "deadbeef";

configs.emptyStruct = [];
configs.defaultStruct = [{ x: 0, y: 1, z: 0, color: "Red", names: ["s"] }];

configs.mainCanvas = "main_canvas";
configs.targetCanvas = "target_canvas";
configs.consoleElemId = "console";
configs.historyElemId = "command_history";
configs.statusElemId = "status";
configs.currentCmdElemId = "currentcmd";
configs.possStepsElemId = "possible_steps";
configs.maxStepsElemId = "max_steps";
configs.currStepsElemId = "curr_steps";
configs.reactionElemId = "reaction";
configs.defineElemId = "definetextarea";
configs.defineButton = "define_phrase_button";
configs.definePromptElemId = "show_define_status";
configs.randomElemId = "random";
configs.referenceElemId = "reference";

configs.elems = {
  helpMe: "helpme",
  keyboard: "keyboard_shortcuts",
  currSteps: "curr_steps",
  consoleGroup: "console_group",
  defineInterface: "define_interface",
  console: "console",
  defineConsole: "definetextarea",
  defineStatus: "define_status",
  defineHeader: "define_header",
  definePrompt: "define_prompt",
};

configs.buttons = {
  do: "dobutton",
  accept: "flyingaccept",
  prev: "prevbutton",
  next: "nextbutton",
  clear: "clearbutton",
  paraphrase: "paraphrase",
  define: "define_phrase_button",
  close_define: "close_define_interface",
  define_instead: "define_instead",
  skip: "skip_button",
  reset: "reset_all_progress",
  toggleDefine: "toggledefine",
  putBack: "putbackbutton",
  tryDefine: "try_define",
  rotateIcons: "rotate-icons",
};

configs.difficulty = 3;
configs.defaultSkips = 2;

// configs.targets = [
//   [7, "[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[0,0,0,0,0,2],[9,9,9,9,9,2],[9,9,9,9,9,2],[0,0,0,0,0,2,2,2,2,2,2],[],[],[],[],[9,9,9,9,9,2],[9,9,9,9,9,2],[9,9,9,9,9,2],[9,9,9,9,9,2,2,2,2,2,2],[],[],[],[],[9,9,9,9,9,2],[9,9,9,9,9,2],[9,9,9,9,9,2],[9,9,9,9,9,2,2,2,2,2,2],[],[],[],[],[0,0,0,0,0,2],[9,9,9,9,9,2],[9,9,9,9,9,2],[0,0,0,0,0,2,2,2,2,2,2],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]"],
//   [5, "[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[0,0],[9,0,0],[9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[2],[9],[9,9,2],[9,9,9],[9,9,9,2],[9,9,9],[9,9,9,2],[9,9,9],[2],[9],[9,9,2],[9,9,9],[9,9,9,2],[9,9,9],[9,9,9,2],[9,9,9],[0,0],[9,0,0],[9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[9,9,9,0,0],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]"],
//   [5, "[[],[],[],[],[],[],[],[],[],[],[],[0,0,0,2],[],[],[],[],[],[],[],[9,9,9,2,6],[],[],[],[],[],[],[],[9,9,9,2,6,6,10],[],[],[],[],[],[],[],[9,9,9,2,6],[],[],[],[],[],[],[],[0,0,0,2],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]"],
//   [3, "[[2],[],[],[4],[],[],[1],[],[2,2],[],[],[4,4],[],[],[1,1],[],[2,2,2],[],[],[4,4,4],[],[],[1,1,1],[],[2,2,2,2],[],[],[4,4,4,4],[],[],[1,1,1,1],[],[2,2,2,2],[],[],[4,4,4,4],[],[],[1,1,1,1],[],[2,2,2],[],[],[4,4,4],[],[],[1,1,1],[],[2,2],[],[],[4,4],[],[],[1,1],[],[2],[],[],[4],[],[],[1],[]]"],
//   [4, "[[3],[2],[0],[],[],[0],[2],[3],[2],[3],[2],[0],[0],[2],[3],[2],[0],[2],[3],[2],[2],[3],[2],[0],[],[0],[2],[3],[3],[2],[0],[],[],[0],[2],[3],[3],[2],[0],[],[0],[2],[3],[2],[2],[3],[2],[0],[2],[3],[2],[0],[0],[2],[3],[2],[3],[2],[0],[],[],[0],[2],[3]]"],
//   [5, "[[],[],[],[4,1,3,3,3,3,3,3,3],[],[],[],[],[],[],[],[2,2,0,3,3,3,3,3,3],[],[],[],[],[],[],[],[4,4,4,1,3,3,3,3,3],[],[],[],[],[],[],[],[2,2,2,2,0,3,3,3,3],[],[],[],[],[],[],[],[4,4,4,4,4,1,3,3,3],[],[],[],[],[],[],[],[2,2,2,2,2,2,0,3,3],[],[],[],[],[],[],[],[4,4,4,4,4,4,4,1,3],[],[],[],[],[],[],[],[2,2,2,2,2,2,2,2,0],[],[],[],[]]"],
//   [3, "[[0,0,0,0],[],[],[],[],[],[],[0,0,0,0],[1,1,1,1,4,4],[],[],[],[],[],[],[1,1,1,1,4,4],[0,0,0,0],[],[],[],[],[],[],[0,0,0,0],[],[],[],[],[],[],[],[],[],[],[],[],[0,0,0,0],[],[],[],[],[],[],[],[1,1,1,1,4,4],[],[],[],[],[],[],[],[0,0,0,0],[],[],[],[],[],[],[],[],[],[],[]]"],
//   [4, "[[],[],[],[1],[1],[],[],[],[4],[4],[4],[4,1],[4,1],[4],[4],[4],[4,2],[4,2],[4,2],[4,2,1],[4,2,1],[4,2],[4,2],[4,2],[4,2,0],[4,2,0],[4,2,0],[4,2,0,1],[4,2,0,1],[4,2,0],[4,2,0],[4,2,0],[4,2,0],[4,2,0],[4,2,0],[4,2,0,1],[4,2,0,1],[4,2,0],[4,2,0],[4,2,0],[4,2],[4,2],[4,2],[4,2,1],[4,2,1],[4,2],[4,2],[4,2],[4],[4],[4],[4,1],[4,1],[4],[4],[4],[],[],[],[1],[1],[],[],[]]"],
//   [4, "[[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2],[2],[2,0],[2,0,4],[2,0,4,3],[2,0,4,3],[2,0,4],[2,0],[2]]"],
//   [2, "[[0],[0],[0],[2,0],[2,2,0],[2,2,2,0],[2,2,2,2,0],[2,2,2,2,2,0],[],[],[],[2],[2,2],[2,2,2],[2,2,2,2],[2,2,2,2,2],[0],[0],[0],[2,0],[2,2,0],[2,2,2,0],[2,2,2,2,0],[2,2,2,2,2,0],[],[],[],[2],[2,2],[2,2,2],[2,2,2,2],[2,2,2,2,2],[0],[0],[0],[2,0],[2,2,0],[2,2,2,0],[2,2,2,2,0],[2,2,2,2,2,0],[],[],[],[2],[2,2],[2,2,2],[2,2,2,2],[2,2,2,2,2],[0],[0],[0],[2,0],[2,2,0],[2,2,2,0],[2,2,2,2,0],[2,2,2,2,2,0],[],[],[],[2],[2,2],[2,2,2],[2,2,2,2],[2,2,2,2,2]]"],
//   [2, "[[2,2,2],[],[],[],[2,2,2],[],[],[],[2,2,2,0],[],[],[],[2,2,2,0],[],[],[],[2,2,2],[],[],[],[2,2,2],[],[],[],[2,2,2,0],[],[],[],[2,2,2,0],[],[],[],[2,2,2],[],[],[],[2,2,2],[],[],[],[2,2,2,0],[],[],[],[2,2,2,0],[],[],[],[2,2,2],[],[],[],[2,2,2],[],[],[],[2,2,2,0],[],[],[],[2,2,2,0],[],[],[]]"],
//   [3, "[[4],[4],[4],[4],[4],[4],[4],[4],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[2],[0],[4],[4],[4],[4],[4],[4],[4],[4]]"],
//   [5, "[[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[],[],[],[],[],[],[],[],[1,1,1],[1,1,1,0],[1,1,1],[1,1,1,0],[1,1,1],[1,1,1,0],[1,1,1],[1,1,1,0],[],[],[],[],[],[],[],[],[4,4,4],[4,4,4,0],[4,4,4],[4,4,4,0],[4,4,4],[4,4,4,0],[4,4,4],[4,4,4,0],[],[],[],[],[],[],[],[],[3,3,3],[3,3,3,0],[3,3,3],[3,3,3,0],[3,3,3],[3,3,3,0],[3,3,3],[3,3,3,0],[],[],[],[],[],[],[],[]]"],
//   [5, "[[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[4,4,4],[1],[1],[1],[1],[1],[1],[1,3],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0],[2,2,2],[2,2,2,0]]"],
//   [4, "[[4],[4],[4],[4],[4],[4],[4],[4],[4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4],[4],[4,3],[4,3,2],[4,3,2],[4,3,2],[4,3,2],[4,3],[4],[4],[4,3],[4,3,2],[4,3,2,0],[4,3,2,0],[4,3,2],[4,3],[4],[4],[4,3],[4,3,2],[4,3,2,0],[4,3,2,0],[4,3,2],[4,3],[4],[4],[4,3],[4,3,2],[4,3,2],[4,3,2],[4,3,2],[4,3],[4],[4],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4],[4],[4],[4],[4],[4],[4],[4],[4]]"],
//    [4, "[[1,1],[1,1],[],[],[],[],[1,1],[1,1],[1,1],[1,1],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[1,1],[1,1],[],[],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[],[],[],[],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[],[],[],[],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[],[],[],[],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[],[],[1,1],[1,1],[2,2,4],[2,2,4,0],[2,2,4,0],[2,2,4],[1,1],[1,1],[1,1],[1,1],[],[],[],[],[1,1],[1,1]]"],
//   [2, "[[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[4],[4],[4],[4],[4],[4],[4],[4],[3],[3],[3],[3],[3],[3],[3],[3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]"],
//   [4, "[[2,2],[2,2],[],[],[],[],[1,1],[1,1],[2,2],[2,2],[],[],[],[],[1,1],[1,1],[],[],[2,2],[2,2],[1,1],[1,1],[],[],[],[],[2,2],[2,2],[1,1],[1,1],[],[],[],[],[1,1],[1,1],[2,2],[2,2],[],[],[],[],[1,1],[1,1],[2,2],[2,2],[],[],[1,1],[1,1],[],[],[],[],[2,2],[2,2],[1,1],[1,1],[],[],[],[],[2,2],[2,2]]"],
//     [4, "[[2],[2],[2],[2],[2],[2],[2],[2],[2],[3],[3],[3],[3],[3],[3],[2],[2],[3],[0],[0],[0],[0],[3],[2],[2],[3],[0],[4],[4],[0],[3],[2],[2],[3],[0],[4],[4],[0],[3],[2],[2],[3],[0],[0],[0],[0],[3],[2],[2],[3],[3],[3],[3],[3],[3],[2],[2],[2],[2],[2],[2],[2],[2],[2]]"],
//   [6, "[[0],[4],[],[],[],[],[],[],[3],[0,2],[4],[],[],[],[0,2],[],[],[3],[0],[4],[],[],[],[],[],[],[3],[0,2],[4],[],[],[],[],[],[],[3],[0],[4],[],[],[],[],[],[],[3],[0,2],[4],[],[],[0,2],[],[],[],[3],[0],[4],[],[],[],[],[],[],[3],[0]]"],
//   [6, "[[1,2],[1,2],[1,2],[1,2],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[0,2],[],[],[4,2],[4,2],[],[],[],[3,2],[3,2],[3,2],[4,2]]"],
//   [8, "[[1,1,1],[],[],[],[],[],[],[1,1,1],[],[2],[],[],[],[],[2],[],[],[],[2],[],[],[2],[],[],[],[],[],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[],[],[],[],[],[],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[],[],[],[],[],[2],[],[],[2],[],[],[],[2],[],[],[],[],[2],[],[1,1,1],[],[],[],[],[],[],[1,1,1]]"],
// ];
configs.targets = [
  [10, [{ x: 0, y: 0, z: 0, color: "Red" }]],
];

configs.store = sessionStorage;

/* http://www.colourlovers.com/palette/1473/Ocean_Five */
// configs.colorMap = {
//   Red: [204, 51, 63], /* Red */
//   Orange: [235, 104, 65], /* Orange */
//   Yellow: [237, 201, 81], /* Yellow */
//   Cyan: [0, 160, 176], /* Cyan */
//   Brown: [106, 74, 60], /* Brown */
// };

/* http://colrd.com/palette/23813/?download=css */
configs.colorMap = {
  Red: [209, 0, 0],
  Orange: [255, 102, 34],
  Yellow: [255, 218, 33],
  Green: [51, 221, 0],
  Blue: [17, 51, 204],
  Black: [10, 10, 10],
  White: [255, 255, 240],
  Pink: [255, 20, 147],
  Brown: [139, 69, 19]
};

export default configs;
