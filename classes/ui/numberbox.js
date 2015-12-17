/* Copyright 2015 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, 
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/


define.class(function(require,$ui$, view, textbox, label,button ){
	// Simple numberbox: a number with a plus and a minus button
	
	this.attributes = {
		value: {type: float, value: 0},
		minvalue: {type: float, value: undefined},
		maxvalue: {type: float, value: undefined},
		stepvalue: {type: float, value: 1},
		bordercolor: {motion:"easeout", duration:0.2, value: "gray", meta:"color" },
		draggingbordercolor: {type:vec4, value:vec4("yellow"), meta:"color"},
		focusbordercolor: {type:vec4, value:vec4("green"), meta:"color"},
		decimals: {type:int, value:0}, 
		// Font size in device-pixels.
		fontsize: {type: float, value: 14, meta:"fontsize" },		
	}
	
	this.neutralbordercolor = this.bordercolor;
	this.tabstop = 0;
	
	this.bg = 0;
	this.fgcolor="#101010";

	this.value = function(){
		var tn = this.findChild("thenumber");
		if (tn) {
			tn.text = this._value.toString();
			this.relayout();
		}
	}
	
	
	this.keydownUparrow = function(){this.checkandset(this.value + this.stepvalue);}
	this.keydownDownarrow =function(){this.checkandset(this.value - this.stepvalue);}
	this.keydownRightarrow = function(){this.checkandset(this.value + this.stepvalue*100);}
	this.keydownLeftarrow = function(){this.checkandset(this.value - this.stepvalue*100);}

	this.keydownUparrowShift = function(){this.checkandset(this.value + this.stepvalue*10);}
	this.keydownDownarrowShift =function(){this.checkandset(this.value - this.stepvalue*10);}
	this.keydownRightarrowShift =function(){this.checkandset(this.value + this.stepvalue*1000);}
	this.keydownLeftarrowShift =function(){this.checkandset(this.value - this.stepvalue*1000);}



	
	this.keydown = function(v){			
		console.log(v);
			this.screen.defaultKeyboardHandler(this, v);
	}
	
	this.focus = function(newfocus){
		if (this._focus){
			this.bordercolor = this.focusbordercolor;
		}
		else{
			this.bordercolor = this.neutralbordercolor;
		}
	}
	
	this.checkandset = function(newval){
		
		if (isNaN(newval)) newval = 0;		
		
		if (this.maxvalue!=undefined && newval > this.maxvalue) newval = this.maxvalue;
		if (this.minvalue!=undefined && newval < this.minvalue) newval = this.minvalue;		
		var expo = Math.pow(10, this.decimals);
		this.value = Math.round(newval * expo) / expo;
		nb = this.findChild("thenumber");
		if (nb) nb.value = this.value.toString();
	}

	this.upclick = function(){
		this.checkandset(this.value + this.stepvalue);
	}
	
	this.downclick = function(){
		this.checkandset(this.value - this.stepvalue);
	}
		
	this.updatevalue = function(p){
		var l = p.local;
		this.checkandset(this.basevalue - (Math.floor((this.lasty - l[1] )/10) -  Math.floor((this.lastx - l[0] )/2))*this.stepvalue);	
	}
	
	this.mouseleftdown = function(p){
		this.bordercolor = this.draggingbordercolor
		this.lasty = p.local[1];
		this.lastx = p.local[0];
		
		this.checkandset(this.value);
		this.basevalue = this.value;

		this.mousemove = function(p){			
			this.updatevalue(p);
		}.bind(this);
	}
	
	this.mouseleftup = function(p){
		if (this._focus) {
			this.bordercolor = this.focusbordercolor
		}
		else{
			this.bordercolor = this.neutralbordercolor
		}
		this.mousemove = function(){}
	}
	
	this.bgcolor = "#f0f0f0";
	this.padding =0;
	this.borderwidth = 0;
	this.bordercolor = "d0d0d0";
	this.borderradius = 0;			
	this.alignself = "flex-end" 
	this.justifycontent = "center";
	this.alignitems = "center";	
	this.borderwidth = 1;
		
	this.render = function(){
		return [
				button({icon:"minus", text:"" , fontsize: this.fontsize*(2/3), margin:1, padding:2, borderradius:0, click:function(){this.downclick()}.bind(this)})
				,label({name:"thenumber", align:"right", text:this._value.toString(), margin:2,flex:1, fontsize: this.fontsize, fgcolor:this.fgcolor, bg:0})
				,button({text:"", icon:"plus", fontsize: this.fontsize*(2/3), margin:1, padding:2, borderradius:0, click:function(){this.upclick()}.bind(this)})
				
		]
	}
})