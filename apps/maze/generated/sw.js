// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="subtitle">mazingira ya programu ya kuona</span><span id="linkButton">Hifadhi na kiungo cha vishiku. </span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Endesha Programu</span><span id="resetProgram">Seti upya</span><span id="codeTooltip">Tazama mwandiko wa JavaScript inayotokana.</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">Kuna shida na amri.</span><span id="blocklyMessage">Blockly</span><span id="linkAlert">Sambaza vishiku vyako na kiungo hiki: \n\n%1</span><span id="hashError">Samahani, \'%1\' haiendani na faili yoyote ya Blockly.</span><span id="xmlError">Upakiaji wa faili yako iliyohifadhiwa haiwezekani.  Labda iliundwa na toleo tofauti ya Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<style type="text/css">#dialog {visibility: hidden; background-color: #fff; color: #000; border: 1px solid #000; position: absolute; border-radius: 8px; box-shadow: 5px 5px 5px #888; padding: 10px;}#dialogBorder {visibility: hidden; position: absolute; background-color: #fff; color: #000; border: 1px solid #000; border-radius: 8px; box-shadow: 5px 5px 5px #888;}#dialogShadow {visibility: hidden; position: absolute; top: 0; left: 0; height: 100%; width: 100%; background-color: #000; opacity: 0.3}.dialogAnimate {transition-property: width height left top opacity; transition-duration: 0.2s;}.dialogHiddenContent {visibility: hidden; position: absolute; top: 0; left: 0; z-index: -1;}</style><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button onclick="BlocklyApps.hideDialog(true)">Sawa</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof mazepage == 'undefined') { var mazepage = {}; }


mazepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="httpRequestError">Kuna shida na amri.</span><span id="linkAlert">Sambaza vishiku vyako na kiungo hiki: \n\n%1</span><span id="hashError">Samahani, \'%1\' haiendani na faili yoyote ya Blockly.</span><span id="xmlError">Upakiaji wa faili yako iliyohifadhiwa haiwezekani.  Labda iliundwa na toleo tofauti ya Blockly?</span><span id="moveForward">songa mbele</span><span id="turnLeft">geuka kushoto</span><span id="turnRight">geuka kulia</span><span id="doCode">fanya</span><span id="elseCode">vingenevyo</span><span id="pathAhead">kama kuna njia mbele</span><span id="pathLeft">kama kuna njia kusoto</span><span id="pathRight">kama kuna njia kulia</span><span id="repeatUntil">rudia mpaka</span><span id="moveForwardTooltip">Kusogeza Bw. Banzi mbele nafasi moja. </span><span id="turnTooltip">Kugeuza Bw. Banzi kushoto au kulia kwa digrii \\n90. </span><span id="ifTooltip">Iwapo mwelekeo uliobainishwa una njia, \\nkisha fanya matendo fulani. </span><span id="ifelseTooltip">Iwapo mwelekeo uliobainishwa una njia, \\nkisha fanya seti ya kwanza ya matendo. \\nVingenevyo, fanya seti ya pili ya matendo. </span><span id="whileTooltip">Rudia matendo yalioambatanishwa mpaka mwisho.</span><span id="capacity0">Unavyo bado vishiku vi0.</span><span id="capacity1">Unacho bado kishiku kimoja.</span><span id="capacity2">Unavyo bado vishiku vi%1.</span><span id="nextLevel">Hongera! Uko tayari kuendelea na sehemu ya %1?</span><span id="finalLevel">Hongera! Umetatua sehemu ya mwisho.</span></div>';
};


mazepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = mazepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Mzingile</span> &nbsp; ';
  for (var i191 = 1; i191 < 11; i191++) {
    output += ' ' + ((i191 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i191) + '</span>' : (i191 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i191) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i191) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i191) + '&skin=' + soy.$$escapeHtml(opt_ijData.skin) + '">' + soy.$$escapeHtml(i191) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select> &nbsp; <button id="pegmanButton" onmousedown="Maze.showPegmanMenu();"><img src="../../media/1x1.gif"><span>&#x25BE;</span></button></td></tr></table><div id="visualization"><div id="hintBubble"><div id="hint">';
  switch (opt_ijData.level) {
    case 1:
      output += 'Programu ni mlolongo wa vishiku. Panganya vishiku vichache vya \'songa mbele\' ili kunisaidia kufikia lengo.';
      break;
    case 2:
      output += 'Inabidi kutumia mlolongo gani ya hatua ili kufuata njia hii?';
      break;
    case 3:
      output += 'Kompyuta ina kumbukumbu ndogo. Fikia mwisho wa njia hii kwa kutumia vishiku viwili tu. Tumia \'rudia\' kusudi vishiku viende zaidi ya mara moja.';
      break;
    case 4:
      output += 'Fikia lengo kwa kutumia vishiku vitano tu.';
      break;
    case 5:
      output += 'Itabidi Bw. Banzi ageuke kushoto kama hawezi kwenda mbele.';
      break;
    case 6:
      output += 'Vishiku vya \'iwapo\' vitatenda kama masharti yake ni kweli tu. Jaribu kugeuka kushota kama kuna njia kwenda kushoto.';
      break;
    case 7:
      output += 'Mzingile huu unaonekana mgumu zaidi kuliko ule uliotangulia, lakini sio hivyo.';
      break;
    case 8:
      output += 'Unaweza kutumia zaidi ya kishiku kimoja ya \'iwapo\'.';
      break;
    case 9:
      output += 'Hifadhi na kiungo cha vishiku.';
      break;
    case 10:
      output += 'Je, unaweza kutatua mzingile mgumu huu? Jaribu kufuatia ukuta wa kushoto. Wanaprogramu wa juu tu!';
      break;
  }
  output += '</div></div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="450px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button class="notext" title="Tazama mwandiko wa JavaScript inayotokana." onclick="BlocklyApps.showCode(this);"><img src="../../media/1x1.gif" class="code icon21"></button><button class="notext" id="linkButton" title="Hifadhi na kiungo cha vishiku. " onclick="BlocklyStorage.link();"><img src="../../media/1x1.gif" class="link icon21"></button></td><td><button id="runButton" class="launch" onclick="Maze.runButtonClick();" title="Makes the character do what the blocks say."><img src="../../media/1x1.gif" class="run icon21"> Endesha Programu</button><button id="resetButton" class="launch" onclick="Maze.resetButtonClick();" style="display: none" title=Put the character back at the start of the maze.><img src="../../media/1x1.gif" class="stop icon21"> Seti upya</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + mazepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + apps.dialog(null, null, opt_ijData) + '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div><div id="dialogOneTopBlock" class="dialogHiddenContent"><div>Katika sehemu hii, itabidi upanganye vishiku vyote ndani ya eneo ya kazi nyeupe.</div><iframe id="iframeOneTopBlock" src=""></iframe>' + apps.ok(null, null, opt_ijData) + '</div>';
  return output;
};


mazepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><title name="DIR">turnLeft</title></block><block type="maze_turn"><title name="DIR">turnRight</title></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><title name="DIR">isPathLeft</title></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};


mazepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return mazepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
