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


Blockly.Arduino.stepperMotor = function()
{	Blockly.Arduino.definitions_['include_stepper'] = '#include <AccelStepper.h>';
	Blockly.Arduino.definitions_['include_motor'] = '#include <AFMotor.h>';
	var stepinputSpeed= Blockly.Arduino.valueToCode(this, 'stepmotorSpeed', Blockly.Arduino.ORDER_ATOMIC)||255;
	var stepchosenMotor= this.getFieldValue('stepmotorChoice')
	var stepchosenDirection= this.getFieldValue('stepdirection')
	var stepcode="stepper"+stepchosenMotor+".runSpeed();\n"
	Blockly.Arduino.definitions_['AFmotorobject' + stepchosenMotor] = "AF_Stepper motor"+stepchosenMotor+"(4096,"+stepchosenMotor+" );\n";
	Blockly.Arduino.setups_['stepspeed' + stepchosenMotor]="stepper"+stepchosenMotor+".setSpeed("+stepinputSpeed+");"
	Blockly.Arduino.definitions_['Forward' + stepchosenMotor] = "void FORWARD"+stepchosenMotor+"() { \n motor"+stepchosenMotor+".onestep(FORWARD, SINGLE);\n }\n";
	Blockly.Arduino.definitions_['Backward' + stepchosenMotor] = "void BACKWARD"+stepchosenMotor+"() { \n motor"+stepchosenMotor+".onestep(BACKWARD, SINGLE);\n }\n";
	Blockly.Arduino.definitions_['Accelstepper' + stepchosenMotor + stepchosenDirection] = "AccelStepper stepper"+stepchosenMotor+"("+stepchosenDirection+""+stepchosenMotor+","+stepchosenDirection+""+stepchosenMotor+");";
	return stepcode;
}