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



//Added by Rupin 
Blockly.Blocks['BlynkAUTH'] = {
  init: function() {
	 
	  
	//this.appendDummyInput().appendField("Configure WIFI Device");
	this.appendValueInput('AUTH_CODE')
		.setAlign(Blockly.ALIGN_RIGHT)	
        .appendField('Set Blynk Auth Code to');
	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks['BlynkConnect'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Connect to Blynk");	
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks['BlynkRun'] = {
  init: function() {
	 
	  
	this.appendDummyInput().appendField("Run Blynk");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(160);

  }
}

Blockly.Blocks["BlynkConnected"]={
	init:function()
	{
		this.appendDummyInput()
			.appendField("Is Blynk Connected?")	
			//.appendField(new Blockly.FieldDropdown(sensorCount), 'sensorNumber');			
		this.setOutput(true, 'Boolean');
		this.setColour(120);
		
	}
};









