/* Copyright 2015 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, 
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class('$system/base/node', function(require, $ui$, label){	

	this.attributes = {
		data:Config(flow:"out",type:Object, value:[]),
		query:Config(flow:"in", type:String, value:"")
	}
	
	this.onquery = function(){
		this.data = [{name:"res1"}, {name:"res2"}];
	}
	
	this.init = function(){
		console.log("rovi service initialized");
	}
})