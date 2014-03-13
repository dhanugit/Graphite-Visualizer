var graphite_url = "http://10.52.130.32/";

var dashboards = [ {
	"name" : "Horton Stage", // Name of the DashBoard
	"refresh" : 5000, // Refresh Rate in ms
	// "description" : "This Contain Horton staging Stats",
	"metrics" : [ {
		"alias" : "All Connections",
		"target" : "aliasByNode(stag.horton.*.sys.ALL_CONN.*%2C5)",
		"interpolation" : "linear",
		"renderer" : "line",
			"max" : 10
	}, {
		"alias" : "TCP Connections",
		"targets" : "aliasByNode(stag.horton.*sc.sys.tcpConnCount%2C2)",
		"renderer" : "line",
		"interpolation" : "linear",
	}, {
		"alias" : "Load Average",
		"targets" : "aliasByNode(stag.horton.*.sys.systemLoadAvg%2C2)",
		"renderer" : "line",
		"interpolation" : "linear",
	}, ]
}, {
	"name" : "Horton Prod",
	"refresh" : 5000,
	"metrics" : [ {
		"alias" : "TCP Connections",
		"target" : "aliasByNode(Prod.horton.*.sys.tcpConnCount%2C2)",
		"interpolation" : "linear",
		"renderer" : "line"
	}, {
		"alias" : "Close Wait Connections",
		"targets" : "aliasByNode(Prod.horton.*.sys.closeWaitTcpConnCount%2C2)",
		"renderer" : "line",
		"interpolation" : "linear",
	}, {
		"alias" : "Load Average",
		"targets" : "aliasByNode(Prod.horton.*.sys.systemLoadAvg%2C2)",
		"renderer" : "line",
		"interpolation" : "linear",
	}, {
		"alias" : "Name Not Mention",
		"targets" : "aliasByNode(Prod.horton.*.sys.freememAvg%2C2)",
		"renderer" : "line",
		"interpolation" : "linear",
	}, ]
}, 
{
	"name" : "Horton Prodection source Ip Load",
	"refresh" : 5000,
	"metrics" : [ {
		"alias" : "Connection Load Based On Source IP",
		"target" : "aliasByNode(Prod.horton.*.sys.ALL_CONN.*%2C5)",
		"interpolation" : "linear",
		"renderer" : "line"
	},  ]
},];

var scheme = [ '#423d4f', '#4a6860', '#848f39', '#a2b73c', '#ddcb53',
		'#c5a32f', '#7d5836', '#963b20', '#7c2626', ].reverse();

function relative_period() {
	return (typeof period == 'undefined') ? 1 : parseInt(period / 7) + 1;
}
function entire_period() {
	return (typeof period == 'undefined') ? 1 : period;
}
function at_least_a_day() {
	return entire_period() >= 1440 ? entire_period() : 1440;
}

function stroke(color) {
	return color.brighter().brighter()
}
function format_pct(n) {
	return d3.format(",f")(n) + "%"
}
