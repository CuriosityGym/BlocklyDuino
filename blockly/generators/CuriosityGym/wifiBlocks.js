/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.CGRobot');

goog.require('Blockly.Arduino');




Blockly.Blocks['ConnectToWifi'] = {
  init: function() {	  
	this.appendDummyInput().appendField("Configure WIFI Device");
	this.appendValueInput('AP_NAME')
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField('Name');
	this.appendValueInput('AP_PASSWORD')
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField('Password');
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
};


Blockly.Blocks['InitDeviceParams'] = {
  init: function() {	  
	this.appendDummyInput().appendField('Initialise Device Parameters to')
	this.appendStatementInput('DO')
	this.setColour(120);
    

  }
};









