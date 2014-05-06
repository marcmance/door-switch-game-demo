var demoLevel = {
	"1-1" : {
		roomId: "1-1",
		y: 1,
		x: 1,
		doors: {
			"bottom" : {
				direction: "bottom",
				type: "horizontal",
				locked: true,
				doorType: "C",
				doorId: "1-1-3"
			}
		}
	},
	"1-2" : {
		roomId: "1-2",
		y: 1,
		x: 2,
		doors: {
			"bottom" : {
				direction: "bottom",
				type: "horizontal",
				locked: false,
				doorType: "unlocked",
				doorId: "1-2-3"
			},
			"right" : {
				direction: "right",
				type: "vertical",
				locked: true,
				doorType: "A",
				doorId: "1-2-2"
			}
		}
	},
	"1-3" : {
		roomId: "1-3",
		y: 1,
		x: 3,
		doors: {
			"top" : {
				direction: "top",
				type: "horizontal",
				locked: false,
				doorType: "end",
				doorId: "END"
			},
			"left" : {
				direction: "left",
				type: "vertical",
				locked: true,
				doorType: "A",
				doorId: "1-2-2"
			},
		}
	},
	"2-1" : {
		roomId: "2-1",
		y: 2,
		x: 1,
		doors: {
			"top" : {
				direction: "top",
				type: "horizontal",
				locked: true,
				doorType: "C",
				doorId: "1-1-3"
			},
			"right" : {
				direction: "right",
				type: "vertical",
				locked: true,
				doorType: "E",
				doorId: "2-1-2"
			},
			"bottom" : {
				direction: "bottom",
				type: "horizontal",
				locked: false,
				doorType: "unlocked",
				doorId: "2-1-3"
			}
		}
	},
	"2-2" : {
		roomId: "2-2",
		y: 2,
		x: 2,
		doors: {
			"top" : {
				direction: "top",
				type: "horizontal",
				locked: false,
				doorType: "unlocked",
				doorId: "1-2-3"
			},
			"left" : {
				direction: "right",
				type: "vertical",
				locked: true,
				doorType: "E",
				doorId: "2-1-2"
			},
			"right" : {
				direction: "right",
				type: "vertical",
				locked: false,
				doorType: "A",
				doorId: "2-2-2"
			},
			"bottom" : {
				direction: "bottom",
				type: "horizontal",
				locked: false,
				doorType: "E",
				doorId: "2-2-3"
			}
		}
	},
	"2-3" : {
		roomId: "2-3",
		y: 2,
		x: 3,
		doors: {
			"left" : {
				direction: "left",
				type: "vertical",
				locked: false,
				doorType: "A",
				doorId: "2-2-2"
			},
			"bottom" : {
				direction: "bottom",
				type: "horizontal",
				locked: true,
				doorType: "B",
				doorId: "2-3-3"
			}
		}
	},
	"3-1" : {
		roomId: "2-1",
		y: 3,
		x: 1,
		doors: {
			"right" : {
				direction: "right",
				type: "vertical",
				locked: false,
				doorType: "D",
				doorId: "3-1-2"
			},
			"top" : {
				direction: "bottom",
				type: "horizontal",
				locked: true,
				doorType: "unlocked",
				doorId: "2-1-3"
			}
		}
	},
	"3-2" : {
		roomId: "3-2",
		y: 3,
		x: 2,
		doors: {
			"left" : {
				direction: "right",
				type: "vertical",
				locked: false,
				doorType: "D",
				doorId: "3-1-2"
			},
			"right" : {
				direction: "right",
				type: "vertical",
				locked: true,
				doorType: "D",
				doorId: "3-2-2"
			},
			"top" : {
				direction: "bottom",
				type: "horizontal",
				locked: false,
				doorType: "E",
				doorId: "2-2-3"
			}
		}
	},
	"3-3" : {
		roomId: "3-3",
		y: 3,
		x: 3,
		doors: {
			"left" : {
				direction: "left",
				type: "vertical",
				locked: true,
				doorType: "D",
				doorId: "3-2-2"
			},
			"top" : {
				direction: "bottom",
				type: "horizontal",
				locked: true,
				doorType: "B",
				doorId: "2-3-3"
			}
		}
	}
}