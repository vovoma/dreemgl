/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
 Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
 You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and limitations under the License.*/

//Pure JS based composition
define.class(function($server$, composition, $ui$, screen, cadgrid, view, label){

	define.class(this, "selectorrect", view, function(){
		this.name = 'selectorrect'
		this.bordercolorfn = function(pos){
			var check = (int(mod(0.05 * (gl_FragCoord.x + gl_FragCoord.y + time * 40.),2.)) == 1)? 1.0: 0.0
			return vec4(check * vec3(0.8), 1)
		}
		this.bordercolor = vec4(1, 1, 1, 0.4)
		this.borderwidth = 5
		this.bgcolor = vec4(1, 1, 1, 0.07)
		this.borderradius = 2
		this.position = "absolute"
		this.visible = false
	})

	this.render = function(){ return [
		screen({name:'default', clearcolor:vec4('black')},
			cadgrid({
					flex:1,
					justifycontent:"center",
					alignitems:"center",
					pointermove:function(event){
						var select = this.find('selectorrect');
						select.visible = true;
						select.pos = vec2(event.min[0], event.min[1]);
						select.size = vec2(event.max[0] - event.min[0], event.max[1] - event.min[1])
					},
					pointerend:function(event){
						var rect = vec4(event.min[0], event.min[1], event.max[0] - event.min[0], event.max[1] - event.min[1])
						var select = this.find('selectorrect');
						var selection = this.screen.childrenInRect(rect, [select]);

						for (var i=0;i< selection.length;i++) {
							var selected = selection[i];
							selected.bordercolor = "green";
						}

						select.visible = false
					}
				},
				label({text:"Drag\naround\nme!", borderwidth:3, bordercolor:"transparent", fontsize:80, fgcolor:"red"}),
				this.selectorrect()
			)
		)
	]}
})
