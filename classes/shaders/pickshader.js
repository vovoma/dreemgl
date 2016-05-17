define.class('$base/shader', function(require){
	// baseclass shader with a pick entry point for UI picking

	var Canvas = require('$base/canvas').prototype

	this.noise = require('./shaderlib/noiselib')
	this.pal = require('./shaderlib/palettelib')
	this.shape = require('./shaderlib/shapelib')
	this.math = require('./shaderlib/mathlib')
	this.demo = require('./shaderlib/demolib')
	this.material = require('./shaderlib/materiallib')
	this.colorlib = require('./shaderlib/colorlib')

	this.Texture = require('$base/texture')

	this.view = {totalmatrix:mat4(), pickview:0.}
	this.state = {viewmatrix:mat4(), totalmatrix:mat4()}

	// baseic rect
	this.mesh = vec2.array()
	this.mesh.pushQuad(0,0,1,0,0,1,1,1)

	this.position = function(){
		var pos = vec3(mesh.x * 100, mesh.y * 100, 0)
		var res = vec4(pos, 1) * view.totalmatrix * state.viewmatrix
		return res
	}

	this.aligncontent = float.LEFTTOP
	this.alignwrap = float.WRAP

	this.color = function(){
		return vec4('red')
	}

	this.pickalpha = 0.5

	// the pick entry point
	this.pick = function(){
		var col = this.color()
		var total = view.pickview + canvasprops.pickdraw
		return vec4(floor(total/65536.)/255., mod(floor(total/256.),256.)/255., mod(total,256.)/255., col.a>pickalpha?1.:0.)
	}

	this.pixelentries = ['color','pick']

	this.margin = [0,0,0,0]
	this.padding = [0,0,0,0]

	this.canvasprops = {
		pickdraw:float,
	}
})