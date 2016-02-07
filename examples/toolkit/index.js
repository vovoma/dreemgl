define.class("$server/composition",function(require, $ui$, icon, label, view, screen, cadgrid, $widgets$, toolkit) {

	this.render = function() {
		return [
			screen(
				{flexdirection:"row"},
				cadgrid({
						name:"grid",
						flex:3,
						overflow:"scroll",
						bgcolor:"#4e4e4e",
						gridsize:8,
						majorevery:5,
						majorline:vec4(0.34117648005485535,0.34117648005485535,0.34117648005485535,1),
						minorline:vec4(0.2823529541492462,0.2823529541492462,0.2823529541492462,1),
						alignitems:'center',
						alignself:'stretch',
						flexdirection:'column',
						justifycontent:'center',
						anchor:vec3(0,0,0),
						toolmove:false
					},
					view({height:366, width:399, bgcolor:vec4(0,0.501960813999176,0.03174766153097153,1), position:'absolute', x:144.7498779296875, y:69.99996948242188},view({height:167, width:180, bgcolor:vec4(0.9339837431907654,0.8454103469848633,0.06254260987043381,1), position:'absolute', x:164.75009155273438, y:102.99996948242188, borderwidth:vec4(1,0,0,0)}),label({fontsize:30, bgcolor:'transparent', fgcolor:'lightgreen', text:'Howdy!', position:'absolute', x:26.999862670898438, y:117.00004577636719, width:NaN, height:NaN})),
					view({height:360, width:365, bgcolor:vec4(0.4404359459877014,0.7965562343597412,0.8361037373542786,1), position:'absolute', x:761.0000610351562, y:53.999969482421875},view({height:60, width:60, bgcolor:vec4(0,0.17658153176307678,0.501960813999176,1), position:'absolute', x:110.00006103515625, y:40.99998474121094}),view({height:132, width:148, bgcolor:vec4(1,0.7453832626342773,1,1), position:'absolute', x:31, y:130.00010681152344, pos:vec3(31,130,0), size:vec3(149,132,NaN), dropshadowradius:20}),icon({fgcolor:vec4(0.970705509185791,0.9806346297264099,0.9984665513038635,1), icon:'flask', position:'absolute', x:215.9998779296875, y:84, fontsize:58}))
				),
				toolkit()

			)
		]
	}
}
)
